---
title: Software is not about Making it Work, but Making it Right
published: 2024-06-12
image: cover.png
tags: [Technology]
category: English
draft: true
---

I have been told by one of my Yahoo! colleagues that I have an unusual way of designing and writing code. Over the last
7 years or so of my tech career, it's enabled me to have a lot of fun studying and applying rigorous principles of
software design.

Do you know why classes should be small, while most people are frustrated by giant class design piled up with hundreds
of lines of code?

Do you know why we should write tests before a single line of production code is written?

Do you know why the root cause of a failed software is always a tiny deviation of a code standard that is often easily
ignored by everybody?

By the end of this book, you'll know the answers to these and many other questions that have implications for your
professional life and for the way you look at Software Engineering.

My goal, by the end of this book, is to help you fundamentally rethink what makes a good software. I hope to lead you
there by presenting a wide range of proven practices that are in many cases quite powerful. Once you see how systematic
approaches are applied in implementing software, I think you will begin to learn how to avoid common pitfalls in this
area.

But before I tell you about those practical and useful industry standards on many aspects of Software Engineering, I
feel it is important that I tell you about the origins of my somewhat over-stricted view and therefore of this book.
Luckily, my introduction to this arena started with one of my Yahoo! colleague, Rick, who profoundly changed my outlook
on Software Development and largely determined my future philosophy on Software Design.

[Rick](https://github.com/cdeszaq) was a Senior Software Engineer at Yahoo!. During my very early career period,
however, I was at that time a recent graduate who just learned there was something called "code review" in this world
few months ago.

In addition to the fascinating persona Rick presented about himself, what struck me most about him was his attitude to
each details of the Software design and implementation. Many times, when I raised a question in front of him in office,
he always replied with what I believed during that time extremely insightful answers. I was always happy to stand on his
side.

But coming up with such thought match was not easy in the beginning.

On what would otherwise have been a normal weekday afternoon in the life of an 24-year-old Jiaqi, a little Slack message
started to worry him:

"Jiaqi, I just reviewed your
[PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).
Looks much better. I left some new comments for you to look at. Let me know if you have any questions."

Me: "(No way, Rick ![35](https://user-images.githubusercontent.com/16126939/177282165-99a4ff14-7ca1-4a43-a806-4a7b6b600fa4.gif) Again??? You gotta be kidding me o_O)"

I sent Rick a thank-you note via Slack and, then, jumped into that PR. No surprise, **30+** code review comments:

- "Missing a period at the end of sentence"
- "This line break is not necessary"
- "The Javadoc of this class is a bit ambiguous; you don't want to lose all details when you read your code again in 6
  months"
- "By design, this object should not be passed to the next business layer"
- ...

That was probably the 20th round of code review on a single PR (how many times did you ever get involved in a PR where
people rejected your PR 20+ times?). It's not a bad PR to be honest with you. Regular feature change in about 500 lines
of code. I think I did a good job on that.

...

Chris: "How's everything going, Jiaqi? Work done already?"

Me: "Well... almost, except Rick just shot me another 30 comments. It'll probably take 2 hours"

Chris: "😊 Don't worry"

Chris was my boss and he managed our team. He knew I was kinda green and needed more time to ramp up. But another 30
comments on 20th review is probably a little bit of shock to him. I wish I could tell Chris "I promise the code works
now already. I'm just trying to make Rick happy. You know, he is a perfectionism..."

Hoping to end this little miserable infinity in the next code review, I continued to working on Rick's comment until I
noticed one of his comments. It was more of like a "little-design-change & code-style" comment which didn't seem to
change any code logic. But as I implement his proposed change, I spotted a bug.

I sat back and thought about it for a while...

Look, this was simply a design change which doesn't imply any change of logic, let alone a bug fix. But Rick's better
design literally avoided a potentially serious bug that could annoy users in production environment.

"This is amazing!". It's like getting a job promotion simply by improving your daily dress code. A change of attitude
towards code design can make your code 100 times better!

All of a sudden, I changed my view on Rick's code review and I started to learn from his thoughts. When everyone was
reluctant to ask for his review, I grabbed every chance and ask him to do that for me every day. He was also happy to
teach me with those "endless" code review comments, but this did not diminish my enthusiasm. I was always able to learn
something from his review comments. At the end of the day, **I learned, from Rick, that Software Engineering is not
about "making it work". It's about "making it right"**. To make it right, I have to make it perfect and it is only
through this way I am approving to myself that I love what I am doing. When I love it, I will make it good!

My new understanding - that Software Engineering is a branch of science that requires rigorous thinking to justify its
applicability - lured me into the study of code review.

It is Rick who told me how perfectionism can shape your view and action in SWE and, also, the reason I put together
this post
