---
title: Machine Learning
published: 2025-06-05
description: |
  Machine Learning is to me is the transcendentalization of my combined passion toward Software Engineering and Data
  Analytics. While Artificial Intelligence (AI) is a broad field encompassing the creation of machines that can perform
  tasks that typically require human intelligence, Machine Learning (ML) is a specific subset of AI focused on enabling
  machines to learn from data. Given that distinction, this posts is NOT about AI, but Machine Learning in general.
image: cover.png
tags: [Technology]
category: English
draft: false
---

Approximation Theory
--------------------

The purpose of studying Approximation Theory is to better understand the
[Universal Approximation Theorem](https://en.wikipedia.org/wiki/Universal_approximation_theorem), which defines the
limits (or unbounded potential) of AI and Machine Learning on what Neural Networks can learn to solve real-life
problems. Approximation Theory is the foundation of Machine Learning and its usefulness is brought to life by the
advancement of contemporary computing power. For example, Approximation Theory says an approximated function exists by
Math theorem but does not indicate how to reach that approximation. Artificial Neural Network, trained by Big Data,
reaches that optimal function. Approximation theory is the proof of why AI or Machine Learning works.

:::tip[K-Armed Bandit Problem: Reinforcement Learning as an Example of Approximation]

Consider the following learning problem. We are faced repeatedly with a choice among $k$ different options, or actions.
After each choice we receive a numerical reward chosen from a stationary probability distribution that depends on the
action we selected. Our objective is to maximize the expected total reward over some time period, for example, over
1000 action selections, or _time steps_. This is the original form of the _$k$-armed bandit problem_

Mathematically, each of the $k$ actions has an expected or mean reward given that one action is selected; let us call
this the _value_ of that action. We denote the action selected on time step $t$ as $A_t$ and the corresponding reward as
$R_t$, The value of an arbitrary action $a$, denoted $q_*(a)$, is the expected reward given that $a$ is selected:

$$

q_*(a) = \mathbb{E}[R_t|A_t = a]

$$

If we know the value of each action, then it would be trivial to solve the _$k$-armed bandit problem_: we would always
select the action with the highest value. We do not know, however, the action values with certainly in reality, although
we may have estimates. We denote the estimated value of action $a$ at time step $t$ as $Q_t(a)$. We would like $Q_t(a)$
to be close to q_*(a).

If we maintain estimates of the action values, then at any time step there is at least one action whose estimated value
is greatest. We call these the _greedy_ actions. When we select one of these actions, we say that we are _exploiting_
our current knowledge of the values of the actions. If instead we select one of the non-greedy actions, then we say we
are _exploring_, because this enables us to improve our estimate of the non-greedy action's value. Exploitation is the
right thing to do to maximize the expected reward on the one step, but exploration may produce the greater total reward
in the long run.

Given that exploring and exploiting is not possible in any single action, systematic methods are used to balance the
exploration and exploitation. This is the basic idea behind reinforcement learning.

:::

Defining Machine Learning
-------------------------

__Machine Learning__ addresses the question of how to build computer programs that improve their performance at some
task through experience.

:::tip[Definition of Learning]

A computer program is said to __learn__ from experience $E$ with respect to some class of tasks $T$ and performance
measure $P$, it its performance at tasks in $T$, as measured by $P$, improves with experience $E$.

:::

The problem of [inducing general functions from specific training examples](#approximation-theory) is central to
learning. 

:::tip[Machine Learning v.s. Data Mining]

Machine Learning and Data Mining often employ the same methods and overlap significantly, but while machine learning
focuses on prediction, based on _known_ properties learned from the training data, data mining focuses on the discovery
of (previously) _unknown_ properties in the data (this is the analysis step of knowledge discovery in databases)

:::
