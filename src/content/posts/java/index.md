---
title: Houston, We Have a Problem - Java is on 26 Now!
published: 2025-07-28
description: |
  Holy... I'm still at 17. My tech portfolio has been obsolete. Let's put up a blog that shares the updates and new
  features since JDK 9 forward.
image: cover.png
tags: [Technology]
category: English
draft: false
---

:::tip[Java Resources]

- [Java Generics FAQs](http://www.angelikalanger.com/GenericsFAQ/JavaGenericsFAQ.html)
- [Defensive Copy](http://www.javapractices.com/topic/TopicAction.do?Id=15)
- [VisualVM](https://visualvm.github.io/)
- [jConsole](https://openjdk.java.net/tools/svc/jconsole/)
- [Java Decompiler](http://java-decompiler.github.io/)
- [Querydsl](http://querydsl.com/)
- Diagnostic Tools

  - [The jps Utility](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/tooldescr015.html)
  - [The jstat Utility](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/tooldescr017.html)
  - [The jinfo Utility](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/tooldescr013.html)
  - [The jmap Utility](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/tooldescr014.html)
  - [The jhat Utility](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/tooldescr012.html)
  - [The jstack Utility](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/tooldescr016.html)

:::

Sources for Learning New Features among JDK Release
----------------------------------------------------

The best sources to learn about new features in each major release of Java JDK are the official Oracle documentation and
resources directly from the Java team.

- [JDK Release Notes](https://www.oracle.com/java/technologies/javase/jdk-relnotes-index.html): Oracle publishes
  detailed release notes for each JDK version, outlining all changes, including new features, enhancements, API changes,
  and deprecated or removed elements. These are the most complete and accurate source of information.
- [Java Version Almanac](https://javaalmanac.io/): This independent resource provides a comprehensive comparison of Java
  versions and lists of changes, including added or removed methods and APIs.
- [inside.java](https://inside.java/): This Oracle portal offers news, views, podcasts, and newscasts directly from the
  Java Team at Oracle, often providing deeper dives into new features and their implications.

JDK 9
-----

### Serialization Filter Configuration

:::tip[[JDK 9 Release Notes](https://www.oracle.com/java/technologies/javase/9-relnotes.html#JDK-8155760)]

"_Serialization Filtering introduces a new mechanism which allows incoming streams of object-serialization data to be
filtered in order to improve both security and robustness. Every ObjectInputStream applies a filter, if configured, to
the stream contents during deserialization. Filters are set using either a system property or a configured security
property. The value of the "jdk.serialFilter" patterns are described in
[JEP 290 Serialization Filtering](http://openjdk.java.net/jeps/290) and in `<JRE>/lib/security/java.security`. Filter
actions are logged to the 'java.io.serialization' logger, if enabled._"

:::

JEP 290 introduced serialization filtering to Java, allowing control over which classes can be deserialized from an
`ObjectInputStream`. As an example, suppose we have 2 serializable classes: __AllowedClass__ and __RestrictedClass__:

```java title="AllowedClass.java"
package com.example.allowed;

import java.io.Serial;
import java.io.Serializable;

public class AllowedClass implements Serializable {
    @Serial private static final long serialVersionUID = 1L;
    public String message;

    public AllowedClass(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "AllowedClass: " + message;
    }
}
```

```java title=RestrictedClass.java
package com.example.restricted;

import java.io.Serial;
import java.io.Serializable;

public class RestrictedClass implements Serializable {
    @Serial private static final long serialVersionUID = 1L;
    public String secret;

    public RestrictedClass(String secret) {
        this.secret = secret;
    }

    @Override
    public String toString() {
        return "RestrictedClass: " + secret;
    }
}
```

To make sure `AllowedClass` can be deserialized while `RestrictedClass` cannot, we can use either
[pattern-based filters defined via system properties](#pattern-based-filter-system-property-example) or security
properties, or [programmatically using the `ObjectInputFilter` API](#programmatic-filter-objectinputfilter-api).

#### Pattern-Based Filter (System Property Example)

This example demonstrates how to set a global filter using the `jdk.serialFilter` system property to allow only classes
within `com.example.allowed` and reject all others.

If the JDK system property has been set with `-Djdk.serialFilter="com.example.allowed.*;!*"`, the following runtime
should execute successfully without error for `AllowedClass` and throw exception for `RestrictedClass`:

```java ins="serialize(allowed, AllowedClass.class);" del="serialize(restricted, RestrictedClass.class);"
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public static void serialize(Serializable obj, Class<? extends Serializable> clazz) {
    try (ByteArrayOutputStream bos = new ByteArrayOutputStream(); ObjectOutputStream oos = new ObjectOutputStream(bos)) {
        oos.writeObject(obj);

        try (ByteArrayInputStream bis = new ByteArrayInputStream(bos.toByteArray());
             ObjectInputStream ois = new ObjectInputStream(bis)) {
            Serializable result = clazz.cast(ois.readObject());
        }
    } catch (IOException | ClassNotFoundException exception) {
        throw new IllegalStateException(exception);
    }
}

AllowedClass allowed = new AllowedClass("Hello Allowed!");
RestrictedClass restricted = new RestrictedClass("Secret Data!");

serialize(allowed, AllowedClass.class);       // ✅
serialize(restricted, RestrictedClass.class); // ❌ runtime error
```

#### Programmatic Filter (ObjectInputFilter API)

This example shows how to set a filter directly on an `ObjectInputStream` using the `ObjectInputFilter` interface.

```java {"Programmatically configure filtering":15-21} ins="serialize(allowed, AllowedClass.class);" del="serialize(restricted, RestrictedClass.class);"
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.ObjectInputFilter;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

public static void serialize(Serializable obj, Class<? extends Serializable> clazz) {
    try (ByteArrayOutputStream bos = new ByteArrayOutputStream(); ObjectOutputStream oos = new ObjectOutputStream(bos)) {
        oos.writeObject(obj);

        try (ByteArrayInputStream bis = new ByteArrayInputStream(bos.toByteArray());
             ObjectInputStream ois = new ObjectInputStream(bis)) {

            ois.setObjectInputFilter(info -> {
                if (info.serialClass() != null && info.serialClass().getName().startsWith("com.example.allowed")) {
                    return ObjectInputFilter.Status.ALLOWED;
                }
                return ObjectInputFilter.Status.REJECTED;
            });

            Serializable result = clazz.cast(ois.readObject());
        }
    } catch (IOException | ClassNotFoundException exception) {
        throw new IllegalStateException(exception);
    }
}

AllowedClass allowed = new AllowedClass("Hello Allowed!");
RestrictedClass restricted = new RestrictedClass("Secret Data!");

serialize(allowed, AllowedClass.class);       // ✅
serialize(restricted, RestrictedClass.class); // ❌ runtime error
```

In this example, the `setObjectInputFilter` method is used on the `ObjectInputStream` to apply a lambda expression as
the filter. This filter explicitly allows classes starting with `com.example.allowed` and rejects all others.

### Compact Strings

:::tip[[JDK 9 Release Notes](https://www.oracle.com/java/technologies/javase/9-relnotes.html#JDK-8054307)]

"_In JDK 9 the internal character storage of the `java.lang.String`, `StringBuilder` and `StringBuffer` classes has been
changed from a UTF-16 char array to a byte array plus a one-byte encoding-flag field. The new storage representation
stores/encodes the characters either as ISO-8859-1/Latin-1 (one byte per character), or as UTF-16 (two bytes per
character), based upon the contents of the string. The newly added encoding flag field indicates which encoding is used.
This feature reduces, by 50%, the amount of space required for String objects to store the characters if the String
object only contains single-byte/ latin-1 characters._"

:::

Before compact strings, Java's `String` class stored characters in a `char[]` array, where each `char` is 2 bytes
(UTF-16 encoding). This meant that even strings containing only ASCII characters (which could be represented by 1 byte)
would still consume 2 bytes per character.

With [JEP 254](https://openjdk.org/jeps/254), the `String` implementation was changed to use either the old storage
mechanism or a `byte[]` array plus an encoding flag. If the string contains only Latin-1 characters (characters with
code points from 0 to 255, fitting within 1 byte), it will be stored as a `byte[]` array, effectively using 1 byte per
character. If it contains characters outside of Latin-1 (requiring more than 1 byte), it will revert to the
2-byte-per-character UTF-16 representation.

The compact string optimization is transparent to the developer. We continue to use the `String` class as before. The
JVM automatically decides the most memory-efficient internal representation based on the characters present in the
string. This significantly reduces the memory footprint of applications that deal extensively with ASCII or Latin-1
based strings, which is a very common scenario.

### Ability to Limit the Capacity of Buffers That Can Be Held in the Temporary Buffer Cache

:::tip[[JDK 9 Release Notes](https://www.oracle.com/java/technologies/javase/9-relnotes.html#JDK-8156802)]

"_The system property `jdk.nio.maxCachedBufferSize` has been introduced in JDK 9 to limit the memory used by the
"temporary buffer cache". The temporary buffer cache is a per-thread cache of direct memory used by the NIO
implementation to support applications that do I/O with buffers backed by arrays in the java heap. The value of the
property is the maximum capacity of a direct buffer that can be cached. If the property is not set then no limit is put
on the size of buffers that are cached. Applications with certain patterns of I/O usage may benefit from using this
property. In particular if an application does I/O with large multi-megabyte buffers at startup but therefore does I/O
with small buffers may see a benefit to using this property. Applications that do I/O using direct buffers will not see
any benefit to using this system property._"

:::

#### Java NIO

Understanding __Java NIO__ (__New Input/Output__) is crucial for building high-performance, scalable applications,
especially those dealing with network communication or large file operations. Introduced in Java 1.4, NIO provides an
alternative and often more efficient way to handle I/O compared to the traditional `java.io` package. In particular

- __Non-blocking IO__: Java NIO enables us to do non-blocking IO. For instance, a thread can ask a channel to read data
  into a buffer. While the channel reads data into the buffer, the thread can do something else. Once data is read into
  the buffer, the thread can then continue processing it. The same is true for writing data to channels.
- __Channels and Buffers__: In the standard IO API we work with byte streams and character streams. In NIO we work with
  channels and buffers. Data is always read from a channel into a buffer, or written from a buffer to a channel.
- __Selectors__: Java NIO contains the concept of "selectors". A __selector__ is an object that can monitor multiple
  channels for events (like: connection opened, data arrived etc.). Thus, a single thread can monitor multiple channels
  for data.

(To be continued...)