# fatal: could not read Username for 'https://git.dev.tencent.com' 解决方法



在使用Jenkins部署博客项目的时候，出现了 ：fatal: could not read Username for 'https://github.com': No such device or address 的提示：

![git-issue-002](./img/git-issue-002.png)



说明一下该Jenkins工程是在服务器上的本地仓库，通过https协议拉取项目代码，解决办法如下：

1. git remote add origin https://{username}:{password}@github.com/{username}/project.git

2. 直接修改 .git/config 隐藏文件，将 url 配置 修改为上诉格式即可。

   ![git-issue-002-1](./img/git-issue-002-1.png)

