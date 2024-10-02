---
title: Machine Learning
published: 2025-06-05
updated: 2025-06-10
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
to be close to $q_*(a)$.

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

A computer program is said to __learn__ from experience/data $E$ with respect to some class of tasks $T$ and performance
measure $P$, it its performance at tasks in $T$, as measured by $P$, improves with experience $E$.

:::

The problem of [inducing general functions from specific training examples](#approximation-theory) is central to
learning. 

:::tip[Machine Learning v.s. Data Mining]

Machine Learning and Data Mining often employ the same methods and overlap significantly, but while machine learning
focuses on prediction, based on _known_ properties learned from the training data, [data mining] focuses on the
discovery of (previously) _unknown_ properties in the data (this is the analysis step of knowledge discovery in
databases)

:::

There are so many different types of machine learning systems that it is useful to classify them in broad categories,
based on the following criteria:

- How they are supervised during training (supervised, unsupervised, semi-supervised, self-supervised, and others)
- Whether or not they can learn incrementally on the fly (online versus batch learning)
- Whether they work by simply comparing new data points to known data points, or instead by detecting patterns in the
  training data and building a predictive model, much like scientists do (instance-based versus model-based learning)

### Instance-Based v.s. Model-Based Learning

One more way to categorize machine learning systems is by how they _generalize_. Most machine learning tasks are about
making predictions. This means that given a number of training examples, the system needs to be able to make good
predictions for (generalize to) examples it has never seen before. Having a good performance measure on the training
data is good, but insufficient; the true goal is to perform well on new instances.

There are 2 main approaches to generalization:

1. [instance-based learning](#instance-based-learning), and
2. [model-based learning](#model-based-learning)

#### Instance-Based Learning

Possibly the most trivial form of learning is simply to learn by heart. A spam email detection would measure the
similarity between two emails. A (very basic) similarity measure between two emails could be to count the number of
words they have in common. The system would flag an email as spam if it has many words in common with a known spam
email.

This is called _instance-based learning_: the system learns the examples by heart, then generalizes to new cases by
using a similarity measure to compare them to the learned examples (or a subset of them). 

#### Model-Based Learning

Another way to generalize from a set of examples is to build a model of these examples and then use that model to make
_predictions_. This is called _model-based learning_ [![Google Colab badge]](https://colab.research.google.com/github/QubitPi/handson-ml3/blob/master/01_the_machine_learning_landscape.ipynb") 

Main Challenges of Machine Learning
-----------------------------------

### Insufficient Quantity of Training Data

It takes a lot of data for most machine learning algorithms to work properly. Even for very simple problems we typically
need thousands of examples, and for complex problems such as image or speech recognition we may need millions of
examples.

:::important[The Unreasonable Effectiveness of Data]

In a [famous paper](https://dl.acm.org/doi/10.3115/1073012.1073017) published in 2001, Microsoft researchers Michele
Banko and Eric Brill showed that very different machine learning algorithms, including fairly simple ones, performed
almost identically well on a complex problem of natural language disambiguation once they were given enough data

As the authors put it, "these results suggest that we may want to reconsider the trade-off between spending time and
money on algorithm development versus spending it on corpus development".

The idea that data matters more than algorithms for complex problems was further popularized by Peter Norvig et al. in a
paper titled
"[The Unreasonable Effectiveness of Data](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/35179.pdf)", 
published in 2009.

:::

### Nonrepresentative Training Data

This section comes with an accompanying Jupyter notebook [![badge][Google Colab badge]](https://colab.research.google.com/github/QubitPi/handson-ml3/blob/master/01_the_machine_learning_landscape.ipynb") In order to generalize well, it is crucial that our training data be representative of the new cases we want to
generalize to. This is true whether we use instance-based learning or model-based learning and is often harder than it
sounds: if the sample is too small, we will have __sampling noise__ (i.e., non-representative data as a result of
chance), but even very large samples can be non-representative if the sampling method is flawed. This is called
__sampling bias__.

### Overfitting the Training Data

Say we are visiting a foreign country and the taxi driver rips us off. We might be tempted to say that _all_ taxi
drivers in that country are thieves. Overgeneralizing is something that we humans do all too often, and unfortunately
machines can fall into the same trap if we are not careful. In machine learning this is called __overfitting__: it means
that the model performs well on the training data, but it does not generalize well. See an accompanying Jupyter notebook
example that illustrate such phenomenon and its possible solutions [![badge][Google Colab badge]](https://colab.research.google.com/github/QubitPi/handson-ml3/blob/master/01_the_machine_learning_landscape.ipynb")

### Underfitting the Training Data

Underfitting is the opposite of overfitting: it occurs when our model is too simple to learn the underlying structure of
the data. For example, a linear model of life satisfaction is prone to underfit; reality is just more complex than the
model, so its predictions are bound to be inaccurate, even on the training examples.

Here are the main options for fixing this problem:

- Select a more powerful model, with more parameters.
- Feed better features to the learning algorithm (__Feature Engineering__).
- Reduce the constraints on the model

Testing and Validating
----------------------

The only way to know how well a model will generalize to new cases is to actually try it out on new cases. One way to do
that is to split our data into two sets:

1. the training set, and
2. the test set

As these names imply, we train our model using the training set, and we test it using the test set. The error rate on
new cases is called the __generalization error__ (or out-of-sample error), and by evaluating the model on the test set,
we get an estimate of this error. This value tells us how well the model will perform on instances it has never seen
before. If the training error is low but the generalization error is high, it means that the model is overfitting the
training data for example.

:::tip

It is common to use 80% of the data for training and hold out 20% for testing. However, this depends on the size of the
dataset: if it contains 10 million instances, then holding out 1% means the test set will contain 100,000 instances,
probably more than enough to get a good estimate of the generalization error.

:::

Large Language Model (LLM)
--------------------------

### RAG & GraphRAG

#### What Is Retrieval-Augmented Generation (RAG)?

Engaging in a conversation with a company's AI assistant can be frustrating. Chatbots give themselves away by returning
generic responses that often don't answer the question. This is because Large language models (LLMs), like OpenAI's GPT
models, excel at general language tasks but have trouble answering specific questions for several reasons:

- LLMs have a broad knowledge base but often lack in-depth industry- or organization-specific context.
- LLMs may generate responses that are incorrect, known as hallucinations.
- LLMs lack explainability, as they can't verify, trace, or cite sources.
- An LLM's knowledge is based on static training data that doesn't update with real-time information.

This doesn't have to be the case. Imagine a different scenario: interacting with a chatbot that provides detailed,
precise responses. This chatbot sounds like a human with deep institutional knowledge about the company and its products
and policies. This chatbot is actually helpful. The second scenario is possible through a machine learning approach
called __Retrieval-Augmented Generation__ (__RAG__).

RAG is a technique that enhances Large Language Model (LLM) responses by retrieving source information from external
data stores to augment generated responses. These data stores, including databases, documents, or websites, may contain
domain-specific, proprietary data that enable the LLM to locate and summarize specific, contextual information beyond
the data the LLM was trained on.

RAG applications are becoming the industry standard for organizations that want smarter generative AI applications. With
RAG, we can reduce hallucination, provide explainability, draw upon the most recent data, and expand the range of what
our LLM can answer. As we improve the quality and specificity of its response, we also __create a better user
experience__.

#### How Does RAG Work?

At a high level, the RAG architecture involves 3 key processes:

1. __understanding queries__: the process begins when a user asks a question. The query goes through the LLM API to the
   RAG application, which analyzes it to understand the user's intent and determine what information to look for.
2. __retrieving information__: the application uses advanced algorithms to find the most relevant pieces of information
   in the company's database. These algorithms match vector embeddings based on semantic similarity to identify the
   information that can best answer the user's question.
3. __generating responses__: the application combines the retrieved information with the user's original prompt to
   create a more detailed and context-rich prompt. It then uses the new prompt to generate a response tailored to the
   organization's internal data.

![](./rag.png)

Before implementing an RAG application, it's important to clean up our data to make it easy for the RAG application to
quickly search and retrieve relevant information. This process is called __data indexing__.

Frameworks like [LangChain make it easy to build RAG applications](https://python.langchain.com/docs/tutorials/rag/) by
providing a unified interface to connect LLMs to external databases via APIs.
[Neo4j vector index](https://neo4j.com/blog/developer/langchain-library-full-support-neo4j-vector-index/) on the
LangChain library helps simplify the indexing process.

#### GraphRAG

Rather than using documents as a source to vectorize and retrieve from,
[Knowledge Graphs](https://learn-graphrag.qubitpi.org/) can be used. One can start with a set of documents,
books, or other bodies of text, and convert them to a knowledge graph using one of many methods, including language
models. Once the knowledge graph is created, subgraphs can be vectorized, stored in a vector database, and used for
retrieval as in plain RAG. The advantage here is that graphs has more recognizable structure than strings of text and
this structure can help retrieve more relevant facts for generation. This approach is called __GraphRAG__

[data mining]: https://github.com/QubitPi/data-mining

[Google Colab badge]: https://img.shields.io/badge/Open%20in%20Colab-968dd8?style=for-the-badge&logo=googlecolab&logoColor=white&labelColor=2e2e59
