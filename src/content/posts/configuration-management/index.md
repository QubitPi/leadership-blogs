---
title: CHEF v.s. Ansible
published: 2025-06-23
image: cover.png
tags: [Technology]
category: English
draft: false
---

In Business World
-----------------

__Chef generally utilizes a
[centralized](https://www.reddit.com/r/devops/comments/v6qowh/comment/ibiol0l/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)
management approach while Ansible operates primarily in a decentralized manner__:

- Chef (Centralized):

  - Chef requires a Chef Server which acts as a central repository for configurations (cookbooks, recipes, etc.). 
  - Chef Clients installed on managed nodes communicate with the Chef Server to pull configurations and apply them. 
  - This structure ensures consistent configurations across the infrastructure, with the Chef Server acting as the
    _single source of truth_

- Ansible (Decentralized):

  - Ansible uses a control node to push configurations or tasks directly to managed nodes using standard protocols like
    SSH or WinRM. 
  - It does not require installing agents on managed nodes. 
  - This decentralized approach allows for real-time updates and direct control over changes. 

:::note

Although

- Ansible can be used for centralized configurations by managing all configurations from a central control point.
- Chef offers a "Chef Solo" mode which is a decentralized, serverless mode, but it lacks the centralized data store and
  search capabilities of the Chef Server.

Chef's centralized pull-based model provides __more control__ and visibility over our infrastructure, making it a very
good choice for __2C__ business. Ansible's push-based non-centralized model offers __greater flexibility__ and
scalability, making it well-suited for large-scale, distributed environments like __2B__ business.

:::

For Personal Project
--------------------

However, for personal provisioning, simplicity takes over everything. [Bash and bats](https://bats.qubitpi.org/) might
just be more than enough. CHEF or Ansible could just be a waste of time and hours. Never switch to an over-kill
technologies unless there is a real business need to do so (if our personal project someday becomes large and popular).
"Would like to" on some new and cool technologies doesn't necessarily justify the extra work spent shoveling sand.\
Clarify our "whys" and the work will scope itself.[^1]

[^1]: https://www.reddit.com/r/devops/comments/1e1653m/comment/lcs4dkl/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
