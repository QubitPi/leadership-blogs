---
title: Reading Notes - The Mythical Man-Month
published: 2025-01-07
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

implementation in software development is very tractable, making programmer over-optimistic about the implementation
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

The maximum number of men depends upon the number of _independent_ subtasks. From these 2 quantities on can derive
schedules using fewer men and more months. One simply cannot get workable schedules using more men and fewer months.

But Too Few Man Is Too Slow for Really Big System
-------------------------------------------------

The author, in the last chapter, suggests that one wants the system to be built by as few minds as possible. Yet for
large systems one wants a way to bring considerable manpower to bear, so that the product can make a timely appearance
before the technology becomes obsolete. There is a trade-off here. How can these two needs be reconciled?

To be continued...
