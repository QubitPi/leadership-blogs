---
title: Houston, We Have a Problem - Java is on 26 Now!
published: 2025-07-27
description: Holy...I'm still at 17. Let's put up a blog to keep my knowledge up-to-date.
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

_Serialization Filtering introduces a new mechanism which allows incoming streams of object-serialization data to be
filtered in order to improve both security and robustness. Every ObjectInputStream applies a filter, if configured, to
the stream contents during deserialization. Filters are set using either a system property or a configured security
property. The value of the "jdk.serialFilter" patterns are described in
[JEP 290 Serialization Filtering](http://openjdk.java.net/jeps/290) and in `<JRE>/lib/security/java.security`. Filter
actions are logged to the 'java.io.serialization' logger, if enabled.

:::

JEP 290 introduced serialization filtering to Java, allowing control over which classes can be deserialized from an
`ObjectInputStream`. This can be achieved through pattern-based filters defined via system properties or security
properties, or programmatically using the `ObjectInputFilter` API.

#### Pattern-Based Filter (System Property Example)

This example demonstrates how to set a global filter using the `jdk.serialFilter` system property to allow only classes
within `com.example.allowed` and reject all others.

```java title="AllowedClass.java"
package com.example.allowed;
import java.io.Serializable;

public class AllowedClass implements Serializable {
    private static final long serialVersionUID = 1L;
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

(To be continued...)