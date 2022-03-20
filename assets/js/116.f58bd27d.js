(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{752:function(s,e,t){"use strict";t.r(e);var a=t(58),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"dockerfile-指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-指令"}},[s._v("#")]),s._v(" Dockerfile 指令")]),s._v(" "),t("p",[s._v("我们已经介绍了"),t("code",[s._v("FROM")]),s._v("，"),t("code",[s._v("RUN")]),s._v("，还提及了 "),t("code",[s._v("COPY")]),s._v(", "),t("code",[s._v("ADD")]),s._v("，其实 Dockerfile 功能很强大，它提供了十多个指令。下面我们继续讲解其他的指令。")]),s._v(" "),t("h2",{attrs:{id:"copy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[s._v("#")]),s._v(" COPY")]),s._v(" "),t("p",[t("code",[s._v("COPY")]),s._v(" 指令将从构建上下文目录中 "),t("code",[s._v("<源路径>")]),s._v(" 的文件/目录复制到新的一层的镜像内的 "),t("code",[s._v("<目标路径>")]),s._v(" 位置。和 "),t("code",[s._v("RUN")]),s._v(" 指令一样，也有两种格式，一种类似于命令行，一种类似于函数调用。")]),s._v(" "),t("p",[s._v("格式：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("COPY <源路径>... <目标路径>")])]),s._v(" "),t("li",[t("code",[s._v('COPY ["<源路径1>",... "<目标路径>"]')])])]),s._v(" "),t("p",[s._v("比如：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" package.json /usr/src/app/")]),s._v("\n")])])]),t("p",[t("code",[s._v("<源路径>")]),s._v(" 可以是多个，甚至可以是通配符，其通配符规则要满足 Go 的 "),t("a",{attrs:{href:"https://golang.org/pkg/path/filepath/#Match",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("filepath.Match")]),t("OutboundLink")],1),s._v(" 规则，如：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" hom* /mydir/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" hom?.txt /mydir/")]),s._v("\n")])])]),t("p",[t("strong",[t("code",[s._v("<目标路径>")]),s._v(" 可以是容器内的绝对路径，也可以是相对于工作目录的相对路径（工作目录可以用 "),t("code",[s._v("WORKDIR")]),s._v(" 指令来指定）")]),s._v("。目标路径不需要事先创建，如果目录不存在会在复制文件前先行创建缺失目录。")]),s._v(" "),t("p",[s._v("此外，还需要注意一点，"),t("strong",[s._v("使用 "),t("code",[s._v("COPY")]),s._v(" 指令，源文件的各种元数据都会保留")]),s._v("。比如读、写、执行权限、文件变更时间等。这个特性对于镜像定制很有用。特别是构建相关文件都在使用 Git 进行管理的时候。")]),s._v(" "),t("h2",{attrs:{id:"add"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[s._v("#")]),s._v(" ADD")]),s._v(" "),t("p",[t("code",[s._v("ADD")]),s._v(" 指令和 "),t("code",[s._v("COPY")]),s._v(" 的格式和性质基本一致。但是在 "),t("code",[s._v("COPY")]),s._v(" 基础上增加了一些功能。")]),s._v(" "),t("p",[s._v("比如 "),t("code",[s._v("<源路径>")]),s._v(" 可以是一个 "),t("code",[s._v("URL")]),s._v("。这种情况下，Docker 引擎会试图去下载这个链接的文件放到 "),t("code",[s._v("<目标路径>")]),s._v(" 去。下载后的文件权限自动设置为 "),t("code",[s._v("600")]),s._v("，如果这并不是想要的权限，那么还需要增加额外的一层 "),t("code",[s._v("RUN")]),s._v(" 进行权限调整，另外，如果下载的是个压缩包，需要解压缩，也一样还需要额外的一层 "),t("code",[s._v("RUN")]),s._v(" 指令进行解压缩。所以不如直接使用 "),t("code",[s._v("RUN")]),s._v(" 指令，然后使用 "),t("code",[s._v("wget")]),s._v(" 或者 "),t("code",[s._v("curl")]),s._v(" 工具下载，处理权限、解压缩、然后清理无用文件更合理。因此，"),t("strong",[s._v("这个命令其实并不实用，而且不推荐使用")]),s._v("。")]),s._v(" "),t("p",[s._v("如果 "),t("code",[s._v("<源路径>")]),s._v(" 为一个 "),t("code",[s._v("tar")]),s._v(" 压缩文件的话。压缩格式为 "),t("code",[s._v("gzip")]),s._v(", "),t("code",[s._v("bzip2")]),s._v(" 以及 "),t("code",[s._v("xz")]),s._v(" 的情况下，"),t("code",[s._v("ADD")]),s._v(" 指令将会自动解压这个压缩文件到 "),t("code",[s._v("<目标路径>")]),s._v(" 去。")]),s._v(" "),t("p",[s._v("在某些情况下，这个自动解压缩的功能非常有用，比如官方镜像 "),t("code",[s._v("ubuntu")]),s._v(" 中：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" scratch")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" ubuntu-xenial-core-cloudimg-amd64-root.tar.gz /")]),s._v("\n...\n")])])]),t("p",[s._v("但在某些情况下，如果是希望复制个压缩文件进去，而不解压缩，这时就不可以使用 "),t("code",[s._v("ADD")]),s._v(" 命令了。")]),s._v(" "),t("p",[s._v("在 Docker 官方的"),t("a",{attrs:{href:"https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Dockerfile 最佳实践文档"),t("OutboundLink")],1),s._v("中要求，尽可能的使用 "),t("code",[s._v("COPY")]),s._v("，因为 "),t("code",[s._v("COPY")]),s._v(" 的语义很明确，就是复制文件而已，而 "),t("code",[s._v("ADD")]),s._v(" 则包含了更复杂的功能，其行为也不一定很清晰。"),t("strong",[s._v("最适合使用 "),t("code",[s._v("ADD")]),s._v(" 的场合，就是所提及的需要自动解压缩的场合")]),s._v("。")]),s._v(" "),t("p",[s._v("另外需要注意的是，"),t("code",[s._v("ADD")]),s._v(" 指令会令镜像构建缓存失效，从而可能会令镜像构建变得比较缓慢。因此在 "),t("code",[s._v("COPY")]),s._v(" 和 "),t("code",[s._v("ADD")]),s._v(" 指令中选择的时候，可以遵循这样的原则，"),t("strong",[s._v("所有的文件复制均使用 "),t("code",[s._v("COPY")]),s._v(" 指令，仅在需要自动解压缩的场合使用 "),t("code",[s._v("ADD")])]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"cmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd"}},[s._v("#")]),s._v(" CMD")]),s._v(" "),t("p",[s._v("Docker 不是虚拟机，容器就是进程。既然是进程，那么在启动容器的时候，需要指定所运行的程序及参数。"),t("strong",[t("code",[s._v("CMD")]),s._v(" 指令就是用于指定默认的容器主进程的启动命令")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("CMD")]),s._v(" 指令的格式和 "),t("code",[s._v("RUN")]),s._v(" 相似，主要是两种格式：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("shell")]),s._v(" 格式："),t("code",[s._v("CMD <命令>")])]),s._v(" "),t("li",[t("code",[s._v("exec")]),s._v(" 格式："),t("code",[s._v('CMD ["可执行文件", "参数1", "参数2"...]')])])]),s._v(" "),t("p",[s._v("还有一种在指定了 "),t("code",[s._v("ENTRYPOINT")]),s._v(" 指令后，用 "),t("code",[s._v("CMD")]),s._v(" 指定具体的参数：")]),s._v(" "),t("ul",[t("li",[s._v("参数列表格式："),t("code",[s._v('CMD ["参数1", "参数2"...]')]),s._v("。")])]),s._v(" "),t("p",[t("strong",[s._v("在运行时可以指定新的命令来替代镜像设置中的这个默认命令")]),s._v("，比如，"),t("code",[s._v("ubuntu")]),s._v(" 镜像默认的 "),t("code",[s._v("CMD")]),s._v(" 是 "),t("code",[s._v("/bin/bash")]),s._v("，如果我们直接 "),t("code",[s._v("docker run -it ubuntu")]),s._v(" 的话，会直接进入 "),t("code",[s._v("bash")]),s._v("。我们也可以在运行时指定运行别的命令，如 "),t("code",[s._v("docker run -it ubuntu cat /etc/os-release")]),s._v("。这就是用 "),t("code",[s._v("cat /etc/os-release")]),s._v(" 命令替换了默认的 "),t("code",[s._v("/bin/bash")]),s._v(" 命令了，输出了系统版本信息。")]),s._v(" "),t("p",[t("strong",[s._v("在指令格式上，一般推荐使用 "),t("code",[s._v("exec")]),s._v(" 格式，这类格式在解析时会被解析为 JSON 数组，因此一定要使用双引号 "),t("code",[s._v('"')]),s._v("，而不要使用单引号")]),s._v("。")]),s._v(" "),t("p",[s._v("如果使用 "),t("code",[s._v("shell")]),s._v(" 格式的话，实际的命令会被包装为 "),t("code",[s._v("sh -c")]),s._v(" 的参数的形式进行执行。比如：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")])]),s._v("\n")])])]),t("p",[s._v("在实际执行中，会将其变更为：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" [ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sh"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-c"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo $HOME"')]),s._v(" ]")]),s._v("\n")])])]),t("p",[s._v("这就是为什么我们可以使用环境变量的原因，因为这些环境变量会被 shell 进行解析处理。")]),s._v(" "),t("p",[t("strong",[s._v("提到 "),t("code",[s._v("CMD")]),s._v(" 就不得不提容器中应用在 前台执行 和 后台执行 的问题")]),s._v("。这是初学者常出现的一个混淆。")]),s._v(" "),t("p",[t("strong",[s._v("Docker 不是虚拟机，容器中的应用都应该以前台执行，而不是像虚拟机、物理机里面那样，用 upstart/systemd 去启动后台服务，容器内没有后台服务的概念")]),s._v("。")]),s._v(" "),t("p",[s._v("一些初学者将 "),t("code",[s._v("CMD")]),s._v(" 写为：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" service nginx start")]),s._v("\n")])])]),t("p",[s._v("然后发现容器执行后就立即退出了。甚至在容器内去使用 "),t("code",[s._v("systemctl")]),s._v(" 命令结果却发现根本执行不了。这就是因为没有搞明白前台、后台的概念，没有区分容器和虚拟机的差异，依旧在以传统虚拟机的角度去理解容器。"),t("strong",[s._v("对于容器而言，其启动程序就是容器应用进程，容器就是为了主进程而存在的，主进程退出，容器就失去了存在的意义，从而退出，其它辅助进程不是它需要关心的东西")]),s._v("。")]),s._v(" "),t("p",[s._v("上述指令使用 "),t("code",[s._v("service nginx start")]),s._v(" 命令，则是希望 upstart 来以后台守护进程形式启动 "),t("code",[s._v("nginx")]),s._v(" 服务。而刚才说了 "),t("code",[s._v("CMD service nginx start")]),s._v(" 会被理解为 "),t("code",[s._v('CMD [ "sh", "-c", "service nginx start"]')]),s._v("，因此主进程实际上是 "),t("code",[s._v("sh")]),s._v("。那么当 "),t("code",[s._v("service nginx start")]),s._v(" 命令结束后，"),t("code",[s._v("sh")]),s._v(" 也就结束了，"),t("code",[s._v("sh")]),s._v(" 作为主进程退出了，自然就会令容器退出。")]),s._v(" "),t("p",[s._v("正确的做法是直接执行 "),t("code",[s._v("nginx")]),s._v(" 可执行文件，并且要求以前台形式运行。比如：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" ["),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nginx"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-g"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daemon off;"')]),s._v("]")]),s._v("\n")])])]),t("h2",{attrs:{id:"entrypoint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[s._v("#")]),s._v(" ENTRYPOINT")]),s._v(" "),t("p",[t("code",[s._v("ENTRYPOINT")]),s._v(" 的格式和 "),t("code",[s._v("RUN")]),s._v(" 指令格式一样，分为 "),t("code",[s._v("exec")]),s._v(" 格式和 "),t("code",[s._v("shell")]),s._v(" 格式。")]),s._v(" "),t("p",[t("code",[s._v("ENTRYPOINT")]),s._v(" 的目的和 "),t("code",[s._v("CMD")]),s._v(" 一样，都是"),t("strong",[s._v("在指定容器启动程序及参数")]),s._v("。"),t("code",[s._v("ENTRYPOINT")]),s._v(" 在运行时也可以替代，不过比 "),t("code",[s._v("CMD")]),s._v(" 要略显繁琐，需要通过 "),t("code",[s._v("docker run")]),s._v(" 的参数 "),t("code",[s._v("--entrypoint")]),s._v(" 来指定。")]),s._v(" "),t("p",[s._v("当指定了 "),t("code",[s._v("ENTRYPOINT")]),s._v(" 后，"),t("code",[s._v("CMD")]),s._v(" 的含义就发生了改变，不再是直接的运行其命令，而是将 "),t("code",[s._v("CMD")]),s._v(" 的内容作为参数传给 "),t("code",[s._v("ENTRYPOINT")]),s._v(" 指令，换句话说实际执行时，将变为：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ENTRYPOINT"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<CMD>"')]),s._v("\n")])])]),t("p",[s._v("那么有了 "),t("code",[s._v("CMD")]),s._v(" 后，为什么还要有 "),t("code",[s._v("ENTRYPOINT")]),s._v(" 呢？这种 "),t("code",[s._v('<ENTRYPOINT> "<CMD>"')]),s._v(" 有什么好处么？让我们来看几个场景。")]),s._v(" "),t("h3",{attrs:{id:"场景一-让镜像变成像命令一样使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景一-让镜像变成像命令一样使用"}},[s._v("#")]),s._v(" 场景一：让镜像变成像命令一样使用")]),s._v(" "),t("p",[s._v("假设我们需要一个得知自己当前公网 IP 的镜像，那么可以先用 "),t("code",[s._v("CMD")]),s._v(" 来实现：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ubuntu:16.04")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && apt-get install -y curl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && rm -rf /var/lib/apt/lists/*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" [ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"curl"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-s"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://icanhazip.com/"')]),s._v("] ")]),s._v("\n")])])]),t("p",[s._v("假如我们使用 "),t("code",[s._v("docker build -t myip .")]),s._v(" 来构建镜像的话，如果我们需要查询当前公网 IP，只需要执行：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run myip\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("119.130")]),s._v(".70.128\n")])])]),t("p",[s._v("嗯，这么看起来好像可以直接把镜像当做命令使用了，不过命令总有参数，如果我们希望加参数呢？比如从上面的 "),t("code",[s._v("CMD")]),s._v(" 中可以看到实质的命令是 "),t("code",[s._v("curl")]),s._v("，那么如果我们希望显示 HTTP 头信息，就需要加上 "),t("code",[s._v("-i")]),s._v(" 参数。那么我们可以直接加 "),t("code",[s._v("-i")]),s._v(" 参数给 "),t("code",[s._v("docker run myip")]),s._v(" 么？")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run myip -i\ndocker: Error response from daemon: invalid header field value "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"oci runtime error: container_linux.go:247: starting container process caused '),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("exec: "),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v("-i"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\\\"}},[s._v("\\\\")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),s._v(": executable file not found in "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),t("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[s._v('\\"')]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),t("p",[s._v("我们可以看到可执行文件找不到的报错，"),t("code",[s._v("executable file not found")]),s._v("。之前我们说过，"),t("strong",[s._v("跟在镜像名后面的是 "),t("code",[s._v("command")]),s._v("，运行时会替换 "),t("code",[s._v("CMD")]),s._v(" 的默认值")]),s._v("。因此这里的 "),t("code",[s._v("-i")]),s._v(" 替换了原来的 "),t("code",[s._v("CMD")]),s._v("，而不是添加在原来的 "),t("code",[s._v("curl -s http://ip.cn")]),s._v(" 后面。而 "),t("code",[s._v("-i")]),s._v(" 根本不是命令，所以自然找不到。")]),s._v(" "),t("p",[s._v("那么如果我们希望加入 "),t("code",[s._v("-i")]),s._v(" 这参数，我们就必须重新完整的输入这个命令：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run myip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s http://icanhazip.com/ -i\n")])])]),t("p",[s._v("这显然不是很好的解决方案，而使用 "),t("code",[s._v("ENTRYPOINT")]),s._v(" 就可以解决这个问题。现在我们重新用 "),t("code",[s._v("ENTRYPOINT")]),s._v(" 来实现这个镜像：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ubuntu:16.04")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" apt-get update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && apt-get install -y curl "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n    && rm -rf /var/lib/apt/lists/*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" [ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"curl"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-s"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://icanhazip.com/"')]),s._v("] ")]),s._v("\n")])])]),t("p",[s._v("这次我们再来尝试直接使用 "),t("code",[s._v("docker run myip -i")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run myip\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("119.130")]),s._v(".70.128\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run myip -i\nHTTP/1.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" OK\nDate: Mon, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" Jun "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":06:15 GMT\nContent-Type: text/plain\nContent-Length: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("\nConnection: keep-alive\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET\ncf-request-id: 0aab9585b500000fb78a83e000000001\nSet-Cookie: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("__cf_bm")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("861597ca26a100a7239a381b103181b4bc536563-1623665175-1800-ATFWZnTGegE5K0Roxx9XXRxrwQgJ9UJtFCGtpQv4P+1zTMitLe+5wXGEgOnrZizJdSstd1lmRDQuUE/HAwIB3u4"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("path")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("expires")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Mon, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v("-Jun-21 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":36:15 GMT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("domain")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".icanhazip.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" HttpOnly"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SameSite")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("None\nServer: cloudflare\nCF-RAY: 65f2beb5eb130fb7-SJC\nalt-svc: h3-27"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":443"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ma")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v(", h3-28"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":443"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ma")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v(", h3-29"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":443"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ma")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("h3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('":443"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ma")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("119.130")]),s._v(".70.128\n")])])]),t("p",[s._v("可以看到，这次成功了。这是因为当存在 "),t("code",[s._v("ENTRYPOINT")]),s._v(" 后，"),t("code",[s._v("CMD")]),s._v(" 的内容将会作为参数传给 "),t("code",[s._v("ENTRYPOINT")]),s._v("，而这里 "),t("code",[s._v("-i")]),s._v(" 就是新的 "),t("code",[s._v("CMD")]),s._v("，因此会作为参数传给 "),t("code",[s._v("curl")]),s._v("，从而达到了我们预期的效果。")]),s._v(" "),t("h3",{attrs:{id:"场景二-应用运行前的准备工作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#场景二-应用运行前的准备工作"}},[s._v("#")]),s._v(" 场景二：应用运行前的准备工作")]),s._v(" "),t("p",[s._v("启动容器就是启动主进程，但有些时候，启动主进程前，需要一些准备工作。")]),s._v(" "),t("p",[s._v("比如 "),t("code",[s._v("mysql")]),s._v(" 类的数据库，可能需要一些数据库配置、初始化的工作，这些工作要在最终的 mysql 服务器运行之前解决。此外，可能希望避免使用 "),t("code",[s._v("root")]),s._v(" 用户去启动服务，从而提高安全性，而在启动服务前还需要以 "),t("code",[s._v("root")]),s._v(" 身份执行一些必要的准备工作，最后切换到服务用户身份启动服务。或者除了服务外，其它命令依旧可以使用 "),t("code",[s._v("root")]),s._v(" 身份执行，方便调试等。")]),s._v(" "),t("p",[s._v("这些准备工作是和容器 "),t("code",[s._v("CMD")]),s._v(" 无关的，都需要事先进行一个预处理的工作。这种情况下，可以写一个脚本，然后放入 "),t("code",[s._v("ENTRYPOINT")]),s._v(" 中去执行，而这个脚本会将接到的参数（也就是 "),t("code",[s._v("<CMD>")]),s._v("）作为命令，在脚本最后执行。比如官方镜像 "),t("code",[s._v("redis")]),s._v(" 中就是这么做的：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" alpine:3.4")]),s._v("\n...\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" addgroup -S redis && adduser -S -G redis redis")]),s._v("\n...\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENTRYPOINT")]),s._v(" ["),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-entrypoint.sh"')]),s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 6379")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" [ "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redis-server"')]),s._v(" ]")]),s._v("\n")])])]),t("p",[s._v("可以看到其中为了 redis 服务创建了 redis 用户，并在最后指定了 "),t("code",[s._v("ENTRYPOINT")]),s._v(" 为 "),t("code",[s._v("docker-entrypoint.sh")]),s._v(" 脚本。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# allow the container to be started with `--user`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redis-server'")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R redis "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" su-exec redis "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$@")]),s._v('"')]),s._v("\n")])])]),t("p",[s._v("该脚本的内容就是根据 "),t("code",[s._v("CMD")]),s._v(" 的内容来判断，如果是 "),t("code",[s._v("redis-server")]),s._v(" 的话，则切换到 "),t("code",[s._v("redis")]),s._v(" 用户身份启动服务器，否则依旧使用 "),t("code",[s._v("root")]),s._v(" 身份执行。比如：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it redis "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gid")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("groups")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h2",{attrs:{id:"env"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[s._v("#")]),s._v(" ENV")]),s._v(" "),t("p",[s._v("这个指令很简单，就是"),t("strong",[s._v("设置环境变量")]),s._v("而已，无论是后面的其它指令，如 "),t("code",[s._v("RUN")]),s._v("，还是运行时的应用，都可以直接使用这里定义的环境变量。")]),s._v(" "),t("p",[s._v("格式有两种：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("ENV <key> <value>")])]),s._v(" "),t("li",[t("code",[s._v("ENV <key1>=<value1> <key2>=<value2>...")])])]),s._v(" "),t("p",[s._v("例如：")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('ENV VERSION=1.0 DEBUG=on \\\n    NAME="Happy Feet"\n')])])]),t("p",[s._v("这个例子中演示了如何换行，以及对含有空格的值用双引号括起来的办法，这和 Shell 下的行为是一致的。")]),s._v(" "),t("p",[s._v("定义了环境变量，那么在后续的指令中，就可以使用这个环境变量。比如在官方 "),t("code",[s._v("node")]),s._v(" 镜像 "),t("code",[s._v("Dockerfile")]),s._v(" 中，就有类似这样的代码：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" NODE_VERSION 7.2.0")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" curl -SLO "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n  && curl -SLO "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n  && gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n  && grep "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('" node-v$NODE_VERSION-linux-x64.tar.xz\\$"')]),s._v(" SHASUMS256.txt | sha256sum -c - "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n  && tar -xJf "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-v$NODE_VERSION-linux-x64.tar.xz"')]),s._v(" -C /usr/local --strip-components=1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n  && rm "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-v$NODE_VERSION-linux-x64.tar.xz"')]),s._v(" SHASUMS256.txt.asc SHASUMS256.txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n  && ln -s /usr/local/bin/node /usr/local/bin/nodejs")]),s._v("\n")])])]),t("p",[s._v("在这里先定义了环境变量 "),t("code",[s._v("NODE_VERSION")]),s._v("，其后的 "),t("code",[s._v("RUN")]),s._v(" 这层里，多次使用 "),t("code",[s._v("$NODE_VERSION")]),s._v(" 来进行操作定制。可以看到，将来升级镜像构建版本的时候，只需要更新 "),t("code",[s._v("7.2.0")]),s._v(" 即可，"),t("code",[s._v("Dockerfile")]),s._v(" 构建维护变得更轻松了。")]),s._v(" "),t("p",[s._v("下列指令可以支持环境变量展开： "),t("code",[s._v("ADD")]),s._v("、"),t("code",[s._v("COPY")]),s._v("、"),t("code",[s._v("ENV")]),s._v("、"),t("code",[s._v("EXPOSE")]),s._v("、"),t("code",[s._v("LABEL")]),s._v("、"),t("code",[s._v("USER")]),s._v("、"),t("code",[s._v("WORKDIR")]),s._v("、"),t("code",[s._v("VOLUME")]),s._v("、"),t("code",[s._v("STOPSIGNAL")]),s._v("、"),t("code",[s._v("ONBUILD")]),s._v("。")]),s._v(" "),t("p",[s._v("可以从这个指令列表里感觉到，环境变量可以使用的地方很多，很强大。通过环境变量，我们可以让一份 "),t("code",[s._v("Dockerfile")]),s._v(" 制作更多的镜像，只需使用不同的环境变量即可。")]),s._v(" "),t("h2",{attrs:{id:"volume"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#volume"}},[s._v("#")]),s._v(" VOLUME")]),s._v(" "),t("p",[s._v("之前我们说过，"),t("strong",[s._v("容器运行时应该尽量保持容器存储层不发生写操作，对于数据库类需要保存动态数据的应用，其数据库文件应该保存于卷(volume)中")]),s._v("，后面的章节我们会进一步介绍 Docker 卷的概念。为了防止运行时用户忘记将动态文件所保存目录挂载为卷，在 "),t("code",[s._v("Dockerfile")]),s._v(" 中，"),t("strong",[s._v("我们可以事先指定某些目录挂载为匿名卷，这样在运行时如果用户不指定挂载，其应用也可以正常运行，不会向容器存储层写入大量数据")]),s._v("。")]),s._v(" "),t("p",[s._v("格式为：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v('VOLUME ["<路径1>", "<路径2>"...]')])]),s._v(" "),t("li",[t("code",[s._v("VOLUME <路径>")])])]),s._v(" "),t("p",[s._v("例如：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" /data")]),s._v("\n")])])]),t("p",[s._v("这里的 "),t("code",[s._v("/data")]),s._v(" 目录就会在运行时自动挂载为匿名卷，任何向 "),t("code",[s._v("/data")]),s._v(" 中写入的信息都不会记录进容器存储层，从而保证了容器存储层的无状态化。当然，运行时可以覆盖这个挂载设置。比如：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -v mydata:/data xxxx\n")])])]),t("p",[s._v("在这行命令中，就使用了 "),t("code",[s._v("mydata")]),s._v(" 这个命名卷挂载到了 "),t("code",[s._v("/data")]),s._v(" 这个位置，替代了 "),t("code",[s._v("Dockerfile")]),s._v(" 中定义的匿名卷的挂载配置。")]),s._v(" "),t("h2",{attrs:{id:"expose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expose"}},[s._v("#")]),s._v(" EXPOSE")]),s._v(" "),t("p",[s._v("格式为 "),t("code",[s._v("EXPOSE <端口1> [<端口2>...]")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("EXPOSE")]),s._v(" "),t("strong",[s._v("指令是声明运行时容器提供服务端口，这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务")]),s._v("。在 Dockerfile 中写入这样的声明有两个好处：")]),s._v(" "),t("ul",[t("li",[s._v("一个是帮助镜像使用者理解这个镜像服务的守护端口，以方便配置映射；")]),s._v(" "),t("li",[s._v("另一个用处则是在运行时使用随机端口映射时，也就是 "),t("code",[s._v("docker run -P")]),s._v(" 时，会自动随机映射 "),t("code",[s._v("EXPOSE")]),s._v(" 的端口。")])]),s._v(" "),t("p",[s._v("此外，在早期 Docker 版本中还有一个特殊的用处。以前所有容器都运行于默认桥接网络中，因此所有容器互相之间都可以直接访问，这样存在一定的安全性问题。于是有了一个 Docker 引擎参数 "),t("code",[s._v("--icc=false")]),s._v("，当指定该参数后，容器间将默认无法互访，除非互相间使用了 "),t("code",[s._v("--links")]),s._v(" 参数的容器才可以互通，并且只有镜像中 "),t("code",[s._v("EXPOSE")]),s._v(" 所声明的端口才可以被访问。"),t("strong",[s._v("这个 "),t("code",[s._v("--icc=false")]),s._v(" 的用法，在引入了 "),t("code",[s._v("docker network")]),s._v(" 后已经基本不用了，通过自定义网络可以很轻松的实现容器间的互联与隔离")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("要将 "),t("code",[s._v("EXPOSE")]),s._v(" 和在运行时使用 "),t("code",[s._v("-p <宿主端口>:<容器端口>")]),s._v(" 区分开来")]),s._v("。"),t("code",[s._v("-p")]),s._v("，是映射宿主端口和容器端口，换句话说，就是将容器的对应端口服务公开给外界访问，而 "),t("code",[s._v("EXPOSE")]),s._v(" 仅仅是声明容器打算使用什么端口而已，并不会自动在宿主进行端口映射。")]),s._v(" "),t("h2",{attrs:{id:"workdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workdir"}},[s._v("#")]),s._v(" WORKDIR")]),s._v(" "),t("p",[s._v("使用 "),t("code",[s._v("WORKDIR")]),s._v(" 指令可以"),t("strong",[s._v("来指定工作目录（或者称为当前目录）")]),s._v("，以后各层的当前目录就被改为指定的目录，如该目录不存在，"),t("code",[s._v("WORKDIR")]),s._v(" 会帮你建立目录。")]),s._v(" "),t("p",[s._v("格式为 "),t("code",[s._v("WORKDIR <工作目录路径>")]),s._v("。")]),s._v(" "),t("p",[s._v("之前提到一些初学者常犯的错误是把 "),t("code",[s._v("Dockerfile")]),s._v(" 等同于 Shell 脚本来书写，这种错误的理解还可能会导致出现下面这样的错误：")]),s._v(" "),t("div",{staticClass:"language-docker extra-class"},[t("pre",{pre:!0,attrs:{class:"language-docker"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" cd /app")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" > world.txt")]),s._v("\n")])])]),t("p",[s._v("如果将这个 "),t("code",[s._v("Dockerfile")]),s._v(" 进行构建镜像运行后，会发现找不到 "),t("code",[s._v("/app/world.txt")]),s._v(" 文件，或者其内容不是 "),t("code",[s._v("hello")]),s._v("。原因其实很简单，在 Shell 中，连续两行是同一个进程执行环境，因此前一个命令修改的内存状态，会直接影响后一个命令；而在 "),t("code",[s._v("Dockerfile")]),s._v(" 中，这两行 "),t("code",[s._v("RUN")]),s._v(" 命令的执行环境根本不同，是两个完全不同的容器。这就是对 "),t("code",[s._v("Dockerfile")]),s._v(" 构建分层存储的概念不了解所导致的错误。")]),s._v(" "),t("p",[s._v("之前说过"),t("strong",[s._v("每一个 "),t("code",[s._v("RUN")]),s._v(" 都是启动一个容器、执行命令、然后提交存储层文件变更")]),s._v("。第一层 "),t("code",[s._v("RUN cd /app")]),s._v(" 的执行仅仅是当前进程的工作目录变更，一个内存上的变化而已，其结果不会造成任何文件变更。而到第二层的时候，启动的是一个全新的容器，跟第一层的容器更完全没关系，自然不可能继承前一层构建过程中的内存变化。")]),s._v(" "),t("p",[s._v("因此如果需要改变以后各层的工作目录的位置，那么应该使用 "),t("code",[s._v("WORKDIR")]),s._v(" 指令。")]),s._v(" "),t("h2",{attrs:{id:"参考文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[s._v("#")]),s._v(" 参考文档")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.docker.com/engine/reference/builder/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Dockerfie 官方文档"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Dockerfile 最佳实践文档"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/docker-library/docs",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 官方镜像 Dockerfile"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);