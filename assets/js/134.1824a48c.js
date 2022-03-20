(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{773:function(t,a,e){"use strict";e.r(a);var s=e(58),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"docker-仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-仓库"}},[t._v("#")]),t._v(" Docker 仓库")]),t._v(" "),e("p",[t._v("仓库（"),e("code",[t._v("Repository")]),t._v("）是集中存放镜像的地方。")]),t._v(" "),e("p",[t._v("一个容易混淆的概念是注册服务器（"),e("code",[t._v("Registry")]),t._v("）。"),e("strong",[t._v("实际上注册服务器是管理仓库的具体服务器，每个服务器上可以有多个仓库，而每个仓库下面有多个镜像")]),t._v("。从这方面来说，仓库可以被认为是一个具体的项目或目录。例如对于仓库地址 "),e("code",[t._v("dl.dockerpool.com/ubuntu")]),t._v(" 来说，"),e("code",[t._v("dl.dockerpool.com")]),t._v(" 是注册服务器地址，"),e("code",[t._v("ubuntu")]),t._v(" 是仓库名。但大部分时候，并不需要严格区分这两者的概念。")]),t._v(" "),e("h2",{attrs:{id:"docker-hub"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-hub"}},[t._v("#")]),t._v(" Docker Hub")]),t._v(" "),e("p",[t._v("目前 Docker 官方维护了一个公共仓库 "),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),e("OutboundLink")],1),t._v("，其中已经包括了数量超过 15,000 的镜像。大部分需求都可以通过在 Docker Hub 中直接下载镜像来实现。")]),t._v(" "),e("h3",{attrs:{id:"注册-登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册-登录"}},[t._v("#")]),t._v(" 注册&登录")]),t._v(" "),e("p",[t._v("你可以在  "),e("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),e("OutboundLink")],1),t._v("，免费注册一个 Docker 账号。")]),t._v(" "),e("p",[t._v("通过执行 "),e("code",[t._v("docker login")]),t._v(" 命令交互式的输入用户名及密码来完成在命令行界面登录 Docker Hub。以及通过 "),e("code",[t._v("docker logout")]),t._v(" 退出登录。")]),t._v(" "),e("h3",{attrs:{id:"拉取镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[t._v("#")]),t._v(" 拉取镜像")]),t._v(" "),e("p",[t._v("你可以通过 "),e("code",[t._v("docker search")]),t._v(" 命令来查找官方仓库中的镜像，并利用 "),e("code",[t._v("docker pull")]),t._v(" 命令来将它下载到本地。")]),t._v(" "),e("p",[t._v("例如以 "),e("code",[t._v("tomcat")]),t._v(" 为关键词进行搜索：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("wenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" search tomcat\nNAME                          DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED\ntomcat                        Apache Tomcat is an "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" implementati…   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3035")]),t._v("                "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                \ntomee                         Apache TomEE is an all-Apache Java EE certif…   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("87")]),t._v("                  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                \ndordoka/tomcat                Ubuntu "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("14.04")]),t._v(", Oracle JDK "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" and Tomcat "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" base…   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("57")]),t._v("                                      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nbitnami/tomcat                Bitnami Tomcat Docker Image                     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),t._v("                                      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("OK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n")])])]),e("p",[t._v("可以看到返回了很多包含关键字的镜像，每一行的列分别表示镜像名字、描述、收藏数、是否官方创建、是否自动创建。")]),t._v(" "),e("p",[t._v("根据是否是官方提供，可将镜像资源分为两类：")]),t._v(" "),e("ul",[e("li",[t._v("一种是类似 "),e("code",[t._v("tomcat")]),t._v(" 这样的镜像，被称为基础镜像或根镜像。这些基础镜像由 Docker 公司创建、验证、支持、提供。这样的镜像往往使用单个单词作为名字。")]),t._v(" "),e("li",[t._v("还有一种类型，比如 "),e("code",[t._v("dordoka/tomcat")]),t._v(" 镜像，它是由 Docker 的用户创建并维护的，往往带有用户名称前缀。可以通过前缀 "),e("code",[t._v("username/")]),t._v(" 来指定使用某个用户提供的镜像，比如 dordoka 用户。")])]),t._v(" "),e("p",[t._v("在查找的时候通过 "),e("code",[t._v("--filter=stars=N")]),t._v(" 参数可以指定仅显示收藏数量为 "),e("code",[t._v("N")]),t._v(" 以上的镜像")]),t._v(" "),e("p",[t._v("更多基础镜像操作见"),e("a",{attrs:{href:"http://localhost:8080/docker/7-docker-image-operation.html#%E6%A6%82%E8%BF%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker 镜像基本操作"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"推送镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推送镜像"}},[t._v("#")]),t._v(" 推送镜像")]),t._v(" "),e("p",[t._v("在登录后，用户可以通过 "),e("code",[t._v("docker push")]),t._v(" 命令来将自己的镜像推送到 Docker Hub。")]),t._v(" "),e("p",[t._v("例如：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("wenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" tag tomcat wenwl/tomcat\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nwenwl/tomcat        latest              c43a65faae57        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" days ago         667MB\ntomcat              latest              c43a65faae57        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" days ago         667MB\n\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" push wenwl/tomcat\nThe push refers to repository "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("docker.io/wenwl/tomcat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ndaf63ef0ddbb: Mounted from library/tomcat \n3307ffa538c1: Mounted from library/tomcat \n8f8b5acac684: Mounted from library/tomcat \n15786a1cf1cb: Mounted from library/tomcat \n6f770cdc9ebf: Mounted from library/tomcat \n3fc095fab4a2: Mounted from library/tomcat \n685934357c89: Mounted from library/tomcat \nccb9b68523fd: Mounted from library/tomcat \n00bcea93703b: Mounted from library/tomcat \n688e187d6c79: Mounted from library/tomcat \nlatest: digest: sha256:e82ade60f21a967a4e4769c0955a83db9a2fc271bcb881a8456e99d710159f9e size: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2421")]),t._v("\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" search wenwl\n\n")])])]),e("h3",{attrs:{id:"自动创建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动创建"}},[t._v("#")]),t._v(" 自动创建")]),t._v(" "),e("p",[t._v("自动创建（Automated Builds）功能对于需要经常升级镜像内程序来说，十分方便。")]),t._v(" "),e("p",[t._v("有时候，用户创建了镜像，安装了某个软件，如果软件发布新版本则需要手动更新镜像。而自动创建允许用户通过 Docker Hub 指定跟踪一个目标网站（目前支持 "),e("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),e("OutboundLink")],1),t._v(" 或 "),e("a",{attrs:{href:"https://bitbucket.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BitBucket"),e("OutboundLink")],1),t._v("）上的项目，一旦项目发生新的提交或者创建新的标签（tag），Docker Hub 会自动构建镜像并推送到 Docker Hub 中。")]),t._v(" "),e("p",[t._v("要配置自动创建，包括如下的步骤：")]),t._v(" "),e("ul",[e("li",[t._v("创建用户并登录 Docker Hub，以及目标网站；")]),t._v(" "),e("li",[t._v("在目标网站中连接帐户到 Docker Hub；")]),t._v(" "),e("li",[t._v("在 Docker Hub 中 "),e("a",{attrs:{href:"https://registry.hub.docker.com/builds/add/",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置一个自动创建"),e("OutboundLink")],1),t._v("；")]),t._v(" "),e("li",[t._v("选取一个目标网站中的项目（需要含 "),e("code",[t._v("Dockerfile")]),t._v("）和分支；")]),t._v(" "),e("li",[t._v("指定 "),e("code",[t._v("Dockerfile")]),t._v(" 的位置，并提交创建。")])]),t._v(" "),e("p",[t._v("之后，可以在 Docker Hub 的 "),e("a",{attrs:{href:"https://registry.hub.docker.com/builds/",target:"_blank",rel:"noopener noreferrer"}},[t._v("自动创建页面"),e("OutboundLink")],1),t._v(" 中跟踪每次创建的状态。")]),t._v(" "),e("h2",{attrs:{id:"docker-私有仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-私有仓库"}},[t._v("#")]),t._v(" Docker 私有仓库")]),t._v(" "),e("p",[t._v("有时候使用 Docker Hub 这样的公共仓库可能不方便，用户可以创建一个本地仓库供私人使用。本节介绍如何使用本地仓库。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.docker.com/registry/",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("docker-registry")]),e("OutboundLink")],1),t._v(" 是官方提供的工具，可以用于构建私有的镜像仓库。本文内容基于 "),e("a",{attrs:{href:"https://github.com/docker/distribution",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("docker-registry")]),e("OutboundLink")],1),t._v(" v2.x 版本。（生产中可能会用别的开源仓库管理系统-比如：Harbor）")]),t._v(" "),e("h3",{attrs:{id:"安装运行-docker-registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装运行-docker-registry"}},[t._v("#")]),t._v(" 安装运行 docker-registry")]),t._v(" "),e("p",[t._v("我们可以通过获取官方的 "),e("code",[t._v("registry")]),t._v(" 镜像来启动私有仓库。默认情况下，仓库会被创建在容器的 "),e("code",[t._v("/var/lib/registry")]),t._v(" 目录下。你可以通过 "),e("code",[t._v("-v")]),t._v(" 参数来将镜像文件存放在本地的指定路径。例如下面的例子将上传的镜像放到本地的 "),e("code",[t._v("/opt/data/registry")]),t._v(" 目录。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装运行容器")]),t._v("\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v(":5000 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v /opt/data/registry:/var/lib/registry "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    registry\n")])])]),e("h3",{attrs:{id:"在私有仓库上传、下载镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在私有仓库上传、下载镜像"}},[t._v("#")]),t._v(" 在私有仓库上传、下载镜像")]),t._v(" "),e("p",[t._v("创建好私有仓库之后，就可以使用 "),e("code",[t._v("docker tag")]),t._v(" 来标记一个镜像，然后推送它到仓库。")]),t._v(" "),e("p",[t._v("例如私有仓库地址为 "),e("code",[t._v("127.0.0.1:5000")]),t._v("，将 最新版本的 tomcat 再上传到私人仓库中为例：")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标记镜像")]),t._v("\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" tag tomcat:latest "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5000/tomcat:latest\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" images\nREPOSITORY              TAG                 IMAGE ID            CREATED             SIZE\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5000/tomcat   latest              c43a65faae57        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" days ago         667MB\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传标记的镜像到私库")]),t._v("\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" push "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5000/tomcat:latest\nThe push refers to repository "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5000/tomcat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ndaf63ef0ddbb: Pushed \n3307ffa538c1: Pushed \n8f8b5acac684: Pushed \n15786a1cf1cb: Pushed \n6f770cdc9ebf: Pushed \n3fc095fab4a2: Pushed \n685934357c89: Pushed \nccb9b68523fd: Pushed \n00bcea93703b: Pushed \n688e187d6c79: Pushed \nlatest: digest: sha256:e82ade60f21a967a4e4769c0955a83db9a2fc271bcb881a8456e99d710159f9e size: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2421")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看仓库中的镜像")]),t._v("\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5000/v2/_catalog\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"repositories"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tomcat"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除已有镜像")]),t._v("\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" rmi "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5000/tomcat:latest \nUntagged: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5000/tomcat:latest\nUntagged: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5000/tomcat@sha256:e82ade60f21a967a4e4769c0955a83db9a2fc271bcb881a8456e99d710159f9e\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从私有仓库下载镜像")]),t._v("\nwenwl@ubuntu:~$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5000/tomcat:latest\nlatest: Pulling from tomcat\nDigest: sha256:e82ade60f21a967a4e4769c0955a83db9a2fc271bcb881a8456e99d710159f9e\nStatus: Downloaded newer image "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5000/tomcat:latest\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:5000/tomcat:latest\n")])])]),e("h3",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),e("p",[t._v("如果你不想使用 "),e("code",[t._v("127.0.0.1:5000")]),t._v(" 作为仓库地址，比如想让本网段的其他主机也能把镜像推送到私有仓库。例如 "),e("code",[t._v("192.168.199.100:5000")]),t._v(" 这样的内网地址作为私有仓库地址，这时你会发现无法成功推送镜像。")]),t._v(" "),e("p",[t._v("这是因为 Docker 默认不允许非 "),e("code",[t._v("HTTPS")]),t._v(" 方式推送镜像。我们可以通过 Docker 的配置选项来取消这个限制，或者查看下一节配置能够通过 "),e("code",[t._v("HTTPS")]),t._v(" 访问的私有仓库。")]),t._v(" "),e("h4",{attrs:{id:"ubuntu-14-04-debian-7-wheezy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-14-04-debian-7-wheezy"}},[t._v("#")]),t._v(" Ubuntu 14.04, Debian 7 Wheezy")]),t._v(" "),e("p",[t._v("对于使用 "),e("code",[t._v("upstart")]),t._v(" 的系统而言，编辑 "),e("code",[t._v("/etc/default/docker")]),t._v(" 文件，在其中的 "),e("code",[t._v("DOCKER_OPTS")]),t._v(" 中增加如下内容：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_OPTS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--registry-mirror=https://registry.docker-cn.com --insecure-registries=192.168.199.100:5000"')]),t._v("\n")])])]),e("p",[t._v("重新启动服务：")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" restart\n")])])]),e("h4",{attrs:{id:"ubuntu-16-04-debian-8-centos-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-16-04-debian-8-centos-7"}},[t._v("#")]),t._v(" Ubuntu 16.04+, Debian 8+, centos 7")]),t._v(" "),e("p",[t._v("对于使用 "),e("code",[t._v("systemd")]),t._v(" 的系统，请在 "),e("code",[t._v("/etc/docker/daemon.json")]),t._v(" 中写入如下内容（如果文件不存在请新建该文件）")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"registry-mirrors"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://registry.docker-cn.com"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"insecure-registries"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.199.100:5000"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),e("p",[t._v("该文件必须符合 "),e("code",[t._v("json")]),t._v(" 规范，否则 Docker 将不能启动。")])]),t._v(" "),e("p",[t._v("对于 Docker for Windows 、 Docker for Mac 在设置中编辑 "),e("code",[t._v("daemon.json")]),t._v(" 增加和上面一样的字符串即可。")])])}),[],!1,null,null,null);a.default=r.exports}}]);