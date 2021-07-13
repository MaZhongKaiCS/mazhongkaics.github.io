---
title: Git-rebase 和标签管理
date: 2021-02-17
categories: 
    - git笔记
tags:
    - git
---

##  rebase

rebase操作的特点：把分叉的提交历史“整理”成一条直线，看上去更直观。缺点是本地的分叉提交已经被修改过了。

- rebase操作可以把本地未push的分叉提交历史整理成直线；
- rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。



## 标签管理

- 命令git tag <tagname>用于新建一个标签，默认为HEAD，也可以指定一个commit id；

git log --pretty=oneline --abbrev-commit用来查找commit ID 

- 命令git tag -a <tagname> -m "blablabla..."可以指定标签信息；
- 命令git tag可以查看所有标签。
- 注意：标签总是和某个commit挂钩。如果这个commit既出现在master分支，又出现在dev分支，那么在这两个分支上都可以看到这个标签。

操作标签

- 命令git push origin <tagname>可以推送一个本地标签；
- 命令git push origin --tags可以推送全部未推送过的本地标签；
- 命令git tag -d <tagname>可以删除一个本地标签；
- 命令git push origin :refs/tags/<tagname>可以删除一个远程标签。
