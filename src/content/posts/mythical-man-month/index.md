---
title: Reading Notes - The Mythical Man-Month
published: 2025-01-07
updated: 2025-05-19
description: The art of managing a software dev team
image: cover.png
tags: [Technology]
category: English
draft: false
---

On Lack of Time
---------------

The reasons why timing is often the problem during software development are the following.

### Optimism

:::caution[All programmers are optimists]

All will go well, that each task will take only as long as it "ought" to take.

:::

This assumption, according to the author, is false, because given that creative activity contains 3 stages:

1. idea
2. implementation
3. interaction (between creation and users)

Implementation in software development is very tractable, making programmer over-optimistic about the implementation
difficulties, such as bugs. 

### Not Taking Communication Efforts into Account

In a partitioned work with no communications among distributed workers, such as wheat reaping and cotton picking, more
men power does mean faster overall work speed. In tasks that can be partitioned but which require communications among
workers of subtasks, however, the effort of communication must be added to the amount of work to be done.

Such communication mandates 2 parts:

1. Training: Each worker must be trained in the technology, the goals of the effort, the overall strategy, and the plan
   of work. 
2. Intercommunication: More workers means more intercommunication, i.e. depriving more task time of individual workers.
   When the amount of intercommunication, brought by more divisions, increases past a threshold, it backfires and
   lengthen the project time, instead of efficiently reducing it.

Given that, the man-day or man-month as a unit for measuring the size of a job is not appropriate, because it does not
take communication effort into account.

### Under-Estimating the Time Needed for Writing Automated Tests and Debugging

[Optimism](#optimism) falsely assumes there will be few bugs, resulting in much less scheduled time for testing.

:::tip[Scheduling Software Task]

- $\frac{1}{3}$ planning
- $\frac{1}{6}$ coding
- $\frac{1}{4}$ writing automated tests with debugging
- $\frac{1}{4}$ [interaction](#optimism), which entails potentially extra auto-tests and debugging

:::

The last part, interaction, if not done properly leads to horrible product user experience.

### Unjustified Estimation

Managers almost always ridiculize schedule completion for patron urgency. This is partially due to the lack of sounding
basis for estimation.

2 solutions for remedy:

1. Data-driven estimation: open productivity figures, bug-incidence figures, estimation rules, etc. Decision should be
   driven by data
2. Managers need to be able to defend their proposed estimate. It's about scientifically scheduling and professional
   conduct

### Adding Manpower to a Late Software Project Makes it Later

The maximum number of men depends upon the number of _independent_ subtasks. From these 2 quantities one can derive
schedules using fewer men and more months. One simply cannot get workable schedules using more men and fewer months.

### But Too Few Man Is Too Slow for Really Big System

The author, in the last chapter, suggests that one wants the system to be built by as few minds as possible. Yet for
large systems one wants a way to bring considerable manpower to bear, so that the product can make a timely appearance
before the technology becomes obsolete. There is a trade-off here. How can these two needs be reconciled?

#### Mill's Proposal

:::caution

While the trade-off problem above is always there, the solution presented in this section, given it's discussed
in 1970's where the world of computing is considered "ancient", has some limitations to the current date. This section
simply state the solution, for the record, followed by a discussion in the context of modern computing

:::

Each segment of a large job be tackled by a team, but that the team be organized like a surgical team:

- The surgeon: __chief programmer__ designs, writes, tests, and documents the code. Must be a great talent with 10 years
  worth of experiences
- The copilot: interface with other teams, knows all the code intimately, an "extra hand" to the surgeon
- The administrator: interfaces with the administrative machinery of the rest of the organization, such as money,
  people, space, etc.
- The editor: technical writer who enhances surgeon's documentation
- 2 secretaries: 1 for administrator and 1 for editor
- The program clerk: maintains tech records and files of the team. All computer inputs goes to the clerk, who then logs
  everything about the computing result
- The toolsmith: ensuring the health of the various tools used by team
- The tester
- The language lawyer: gives advice on how to write program in a certain language elegantly

All the roles, except for the surgeon, act as auxiliary personnel. We need to be little careful on this scheme of team
work. "The Mythical Man-Month" came out the year of 1970's. What we need to understand is the difference in how software
was developed _then_ v.s. _now_. Back in the day pretty much all coding was done on paper first, was then keypunched
onto punched cards, then was read in, compiled, linked, executed, results were obtained, and the process repeated. CPU
time was an expensive and limited resource and we didn't want to waste it. Ditto and likewise disk space, tape drive
time, and etc. all took resources. Wasting perfectly good CPU time on a compile which resulted in errors was a waste of
perfectly good CPU time. And this was in 1975. At the time that Fred Brooks was developing his ideas, which was the
mid-to-late 1960's CPU time was even more expensive, memory/disk/whatever was even more limited. The idea behind The
[Surgical Team](#mills-proposal) was to ensure that the One Super Great Rockstar Developer did not have to waste their
time on mundane tasks like desk-checking code, keypunching, submitting jobs, waiting around (sometimes for hours) for
results. Rockstar Dude Developer Man was to _write code_. Their legion of groupies/clerks/junior developers was supposed
to do the mundane stuff.

Conceptual Integrity in System Design
-------------------------------------

Using the metaphor of European cathedrals, the hard work of several generation of builders, the authors argues that the
__conceptual integrity__ is a continuous improvements by generations of designers over a system. 

### How is Conceptual Integrity Achieved?

The author stated that the conceptual integrity is possible by the following maneuvers: 

1. [Maximizing functions while minimizing complexities](#function-vs-complexity)
2. [Conceptual integrity from one or fiew minds, while its implementation is by many hands](#one-mind-vs-many-hands)

#### Function v.s. Complexity

There are programming system, different from a computer system, whose purpose is to make computer easier to use. In
modern days, this can be Spring framework for example. The ease of use is enhanced only if the time gained in functions
exceeds the time lost in learning, remembering, and searching manuals. For instance, learning how to write a Spring Boot
application took about 10 minutes which in turn avoided 10 hours of starting-from-scratch. This makes the webservice
development _easier_. 

Quantitatively, the ratio of functions gained to the conceptual complexity costed determines the system design
effectiveness. It should be noted that, therefore, neither function alone nor simplicity alone defines a good design. In
addition, _simplicity_ is not enough; it is the combination os _simplicity_ and _straightforwardness__ that reflects the
conceptual integrity.

#### One Mind v.s. Many Hands

Conceptual integrity requires that the design must proceed from __one__ mind, or from a very small number of agreeing
resonant minds. Scheduling pressures, however, dictate that system building needs __many__ hands. These two conflicting
agendas can be reconciled by 2 strategies:

1. Labor division between architecture and implementation (discussed below)
2. A new way of structuring implementation teams ([discussed above](#but-too-few-man-is-too-slow-for-really-big-system))

:::note[What is the architecture of a system?]

The complete and detailed specification of the user interface. Such as

- programming manual of a computer
- language manual of a compiler or control program

:::

A system architect is the user's agent. Their straight stakeholder is user, not salesman. Where architecture tells
_what_ happens, implementation tells _how_ it is made to happen.

Conceptual integrity of a system determines its ease of use. Good features and ideas that do not integrate with a
system's basic concepts are best left out. If there appear many such important but incompatible ideas, one scraps the
whole system and starts again on an integrated system with different basic concepts.

Since conceptual integrity of a system determines its ease of use and conceptual integrity also comes from one or few
minds, the job of creatively designing an architecture must sit in the hands of the few, i.e. the architects, and there
will be many more implementors who, on the contrary, also creatively implementing that architecture.

:::tip

Recall from the beginning that the total creative effort involves [three distinct phases](#optimism): architecture,
implementation, and realization. The 3 phases can execute in parallel in many ways and together speed up the entire
project.

:::
