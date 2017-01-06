## Exblog


之前用Express+mongodb写的一个博客系统，初始版本的源代码和设计稿没有做备份，以至全部遗失，只能从头再来。有较长一段时间纠结于如何找回，但最终还是未能如愿，所谓吃一堑长一智，这次教训也将时刻提醒自己。

话不多说，言归正传，该版本将会在之前版本的基础上继续增加相应的功能。之前版本(暂且称为version 1.0.0)已完成功能：

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

1、 # [checkbox:unchecked] 账号登录  、
2、 - [ ]文章发布(分类/关键词标签/普通编辑器)  
3、 - [ ]按时间/标签/分类归档  
4、 - [ ]账号信息管理  
5、 - [ ]VP统计  
6、 - [ ]文章评论/转载/点赞  
7、 - [ ]关键字搜索  


因此该库的版本将从version 2.0.0开始，使用的技术栈不变，将会采用新的设计，之后的变更都将在此版本上做迭代更新。新增功能(持续更新中)：

8、 - [ ]支持Markdown发布文章  
9、 - [ ]文章分享 
