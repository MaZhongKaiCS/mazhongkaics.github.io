---
title: Git-备忘指南
date: 2021-02-21
categories: 
    - git笔记
tags:
    - git
---

https://mp.weixin.qq.com/s/dC8Vzpgj9Pst1IES-RslMA

git 常用命令：

- git 克隆远程分支仓库

**git clone -b** **分支名称 远程地址**

git 克隆远程仓库项目时，如果不指定分支，只会克隆默认分支的内容。

- 查看git 用户名和密码      config： 配置、布局、显示配置命令

**git config user.name**   

**git config user.email**

- 分支相关

**git branch（查看当前分支）** 

**git branch -a（查看所有的分支）**

**git checkout 分支名（切换对应分支）**会自动将代码更新为分支代码

**git branch 分支名** （创建一个分支）

**git branch -d** **分支名** （删除一个分支）

**git branch -D 分支名**（强制删除一个未合并的分支）

**git checkout -b 分支名[基于的分支名或 commit 值]** （切换分支并直接切换过去）

- 查看 git 历史

**history**

- 按照关键词搜索 git 历史

**history | grep push**

- 查看 commit 历史       summary ：总结

**git log** 

**git log --summary**

- 设置 git 账号

**git config --global user.name "MaZhongkaiCS"** 

**git config --global user.email "MAZhongkaiCS@gmail.com"**

查看用户名以及邮箱: **git config user.name "MaZhongkai"** 

**git config user.email "MAZhongkaiCS@gmail.com"**

- 查看git账号

**git config --global --list git config --local --list**

- 仅仅查看某一项的配置

**git config --local user.name**

- 回滚本次修改

**git reset HEAD static/lib/js/constantsUrl.js**

**git checkout -- 	static/lib/js/constantsUrl.js**

- 查看本次修改的代码

**git diff git diff HEAD git diff --staged**

- 提交后发现丢了几个文件没有提交

发现丢了修改记录，重新添加 **git add "\*.html"** 重新提交，最终只有一个提交 **git commit --amend**

- 缓存某种后缀的文件

**git add "\*.js"**

- 清除缓存区中的文件

**git reset octofamily/octodog.txt**

- 彻底删除某种后缀的文件

**git rm "\*.txt"**

- 合并分支到master

**git merge 分支名**

- add .之前取消提交某些文件

**git checkout -- <filename>**

- 藏代码到脏目录（适用于其他成员修改了相同分支代码，但又不想提交）

**git stash**

- 释放脏目录代码

**git stash pop**

- 释放指定脏目录代码

**git stash pop stash@{0}**

- 删除远程分支(此分支必须是非默认分支)

**git push origin --delete branchname**

- 已经commit，强制回退到旧版本

​       	**git log**//找到commit hash值 **git reset --hard hash值**

- 查看stash目录

**git stash list**

- 删除某一个stash

**git stash drop stash@{0}**

- 设置远程仓库地址

**git remote set-url origin git@foo.bar.com:baz/helloworld.git**

- 本地创建了新分支，但是orgin没有，push代码前

**git push --set-upstream origin preproduction**



![git1](./git1.jpeg)

![git2](./git2.png)
