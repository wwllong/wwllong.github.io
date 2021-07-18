# Docker Compose部署GitLab

## 概述

GitLab 是利用 Ruby on Rails 一个开源的版本管理系统，实现一个自托管的 Git 项目仓库，可通过 Web 界面进行访问公开的或者私人项目。它拥有与 Github 类似的功能，能够浏览源代码，管理缺陷和注释。可以管理团队对仓库的访问，它非常易于浏览提交过的版本并提供一个文件历史库。团队成员可以利用内置的简单聊天程序 (Wall) 进行交流。它还提供一个代码片段收集功能可以轻松实现代码复用，便于日后有需要的时候进行查找。

## 基于Docker安装GitLab

注意，安装GitLab[官方建议是至少4G内存](https://docs.gitlab.com/ee/install/requirements.html#memory)，之前我尝试部署到云的时候，直接把我云实例可怜的2G给干爆。即使在尝试GitLab优化也无法降低内存消耗，访问GitLab页面的时候一直在504，最后只能将其部署在一个本地虚拟机上。

我们使用 Docker 来安装和运行 GitLab 中文版，由于新版本问题较多，这里我们使用目前相对稳定的 10.5 版本，`docker-compose.yml` 配置如下：

``` shell
version: '3'
services:
    web:
      image: 'twang2218/gitlab-ce-zh:10.5'
      restart: always
      hostname: '192.168.99.101'
      environment:
        TZ: 'Asia/Shanghai'
        GITLAB_OMNIBUS_CONFIG: |
          external_url 'http://192.168.99.101:8080'
          gitlab_rails['gitlab_shell_ssh_port'] = 2222
          unicorn['port'] = 8888
          nginx['listen_port'] = 8080
      ports:
        - '8080:8080'
        - '8443:443'
        - '2222:22'
      volumes:
        - /usr/local/docker/gitlab/config:/etc/gitlab
        - /usr/local/docker/gitlab/data:/var/opt/gitlab
        - /usr/local/docker/gitlab/logs:/var/log/gitlab

```

配置说明：

1. hostname，换成域名或者宿主机的ip地址。
2. GITLAB_OMNIBUS_CONFIG，是GitLab的一些配置，关于暴露的端口、nginx监听的端口。

启动（如果服务器配置较低，启动需要较长时间）：

``` shell
docker@docker-saas:/usr/local/docker/gitlab/config$ docker-compose up -d                                                                                                                                                                   
Creating network "gitlab_default" with the default driver
Creating gitlab_web_1 ... done
```

## 安装后工作

- 访问地址：http://192.168.99.101:8080/，并设置管理员（root）初始密码，建议：字母 + 数字 组合，并且 大于等于 8 位

![docker_gitlab](./imgs/docker_gitlab.png)

- 使用root用户登录，管理GitLab。

![docker_gitlab](./imgs/docker_gitlab_1.png)

## GitLab的内存优化

经过我的实践，采用默认的配置下，初次部署GitLab大概需要2G左右的内存。可参考[【Git学习】解决GitLab内存消耗大的问题](https://blog.csdn.net/ouyang_peng/article/details/84066417)进行一些修改优化，主要是修改 `/etc/gitlab/gitlab.rb`里面的配置，由上可知，我们已经挂载了数据卷到`/usr/local/docker/gitlab/config`,我们只要该目录下的`gitlab.rb`即可：

1. 减少进程数

   根据服务器使用情况，给Unicorn['worker_process']设置一个合适的值。官方建议是CPU核心数加1，可以提高服务器响应速度。

   简单来说就是，如果这个配置的值小，当使用GitLab的人数到达一定量可能会卡。官方默认是安装CPU核心数加1，最小值为2。我这里是测试用的，当然设置为2。附：[官方文档](https://docs.gitlab.com/ee/install/requirements.html)

   ``` shell
   docker@docker-saas:/usr/local/docker/gitlab/config$ sudo vi gitlab.rb 
   # unicorn['worker_timeout'] = 60       
   ###! Minimum worker_processes is 2 at this moment                       
   ###! See https://gitlab.com/gitlab-org/gitlab-ce/issues/18771
   unicorn['worker_processes'] = 2   
   ```

2. 进程内存配置。最小默认400MB，最大 650MB，可适当改小。

   ``` shell
   unicorn['worker_memory_limit_min'] = "200 * 1 << 20"                                                              
   unicorn['worker_memory_limit_max'] = "350 * 1 << 20"

3. 减少数据库缓存，默认256，可适当改小。

   ``` shell
   postgresql['shared_buffers'] = "256MB"   
   ```

4. 减少数据库并发数，默认8，可适当改小。

   ``` shell
   postgresql['max_worker_processes'] = 8 
   ```

5. 减少sidekiq并发数，默认25，可适当改小。

   ``` shell
   sidekiq['concurrency'] = 16
   ```

   


## 参考

- [【Git学习】解决GitLab内存消耗大的问题](https://blog.csdn.net/ouyang_peng/article/details/84066417)