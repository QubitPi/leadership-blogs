---
title: Houston, We Have a Problem - Java is on 26 Now!
published: 2025-07-27
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
- [Java Version Almanac](https://javaalmanac.io/)
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
actions are logged to the 'java.io.serialization' logger, if enabled_".

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

serialize(allowed, AllowedClass.class);    
serialize(restricted, RestrictedClass.class);
```

#### Programmatic Filter (ObjectInputFilter API)

This example shows how to set a filter directly on an `ObjectInputStream` using the `ObjectInputFilter` interface.

```java {"Programmatically configure filtering":15-20} ins="serialize(allowed, AllowedClass.class);" del="serialize(restricted, RestrictedClass.class);"
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

(To be continued...)