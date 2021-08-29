module.exports = {
    base: '/',
    title: '万隆的笔记',
    description: '小小码农',
    head: [
        ['link', {rel: 'icon', href: `/favicon.png`}]
    ],
    themeConfig: {
        logo: '/favicon.png',
        nav: require('./nav/zh'),
        lastUpdated: '上次更新',
        sidebar: {
            '/notes-guide/': getNotesGuideSidebar('博文索引','程序员内功','技术栈','其他'),
            '/change-logs/': getLogsSidebar("Changelog"),
            '/java-base/': getJavaBaseSidebar("Java-基础篇（上）"),
            '/java-vm/': getJVMSidebar("Java虚拟机"),
            '/git/': getGitSidebar("Git"),
            '/git-issue/': getGitIssueSidebar("Git-Issue"),
            '/microservices/': getMicroservicesSidebar("微服务简介"),
            '/linux/': getLinuxSidebar("Linux"),
            '/linux-ubuntu/': getLinuxUbuntuSidebar("Ubuntu"),
            '/design-patterns-base/': getDesignPatternsSidebar("23种设计模式"),
            '/design-patterns-advanced/': getDesignPatternsAdvancedSidebar("设计模式-进阶"),
            '/python-base/': getPythonBaseSidebar("Python基础"),
            '/thought/': getThoughtBaseSidebar("思想"),   
            '/spring/': getSpringSidebar("Spring"),
            '/springboot/': getSpringBootSidebar("SpringBoot"),
            '/springcloud-netflix/': getSpringCloudNetflixSidebar("快速开始", "服务注册与发现", "服务熔断", "服务网关"),
            '/mybaits/': getMyBaitsSidebar("MyBaits"),
            '/junit/': getJUnitSidebar("JUnit"),
            '/log4j/': getLog4jSidebar("Log4j"),
            '/maven/': getMavenSidebar("Maven"),
            '/java-utils/': getJavaUtilsSidebar("JavaUtils"),
            '/java-mysql/': getMySQLSidebar("MySql"),
            '/bootstrap/': getBootstrapSidebar("Bootstrap"),
            '/js-component/': getJavaScriptSidebar("JavaScript"),
            '/algorithm/': getAlgorithmSidebar("算法"),
            '/docker/': getDockerSidebar("Docker", "Docker Compose"),
            '/java-interview/': getJavaInterview("Java笔试面试相关")
        },
        nextLinks: true,
        prevLinks: false
    },
    plugins: [
      'latex' // or 'vuepress-plugin-latex'
    ]
}

/** 首页指引 */
function getNotesGuideSidebar (groupA,groupB,groupC,groupD) {
    return [
        {
          title: groupA,
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ''
          ]
        },
        {
            title: groupB,
            collapsable: false,
            sidebarDepth: 1,
            children: [
              '/notes-guide/datastru-algs/',
              '/notes-guide/design-patterns/'
            ]
        },
        {
            title: groupC,
            collapsable: false,
            sidebarDepth: 1,
            children: [
              '/notes-guide/java/',
              '/notes-guide/git/',
              '/notes-guide/python/',
              '/js-component/',
              '/notes-guide/linux/',
              '/bootstrap/',
              '/notes-guide/microservices/',
              '/docker/'
            ]
        },
        {
            title: groupD,
            collapsable: false,
            sidebarDepth: 1,
            children: [
              '/notes-guide/temp/'
            ]
        }
        
      ]
}

/** 博客日志 */
function getLogsSidebar (groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 1,
            children: [
            '2019',
            '2020',
            '2021'
            ]
        },
    ]
}

/** java基础 */
function getJavaBaseSidebar (groupA) {
    return [
        {
          title: groupA,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '1-helloworld',
            ['2-kws-ident-notes','关键字、标识符、注释'],
            ['3-constant-hexconv','常量和进制的运算'],
            ['4-variable-typetran','变量和类型转换'],
            ['5-type-oper-details','类型运算细节']
          ]
        }
      ]
}

/** JVM */
function getJVMSidebar (groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 3,
        children: [
          ['JDK-JRE-JVM','JDK-JRE-JVM三者关系']
        ]
      }
    ]
}

/** git */
function getGitSidebar (groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['code-version-control','代码版本控制'],
          ['git-introduciton-install','Git简介和安装'],
          ['git-configure-ssh','Git配置SSH'],
          ['tortoiseGit-configure-ssh','TortoiseGit配置SSH'],
          ['git-workFlow','Git-WorkFlow'],
          ['git-command','Git命令'],
          ['git-proxy','Git配置代理']
        ]
      }
    ]
}

/** git-issue */
function getGitIssueSidebar (groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['git-issue-001', 'sourcetree - error: insufficient permission for adding an object to repository database'],
          ['git-issue-002', 'fatal: could not read Username for "https://git.dev.tencent.com" 解决方法']
        ]
      }
    ]
}

/** 微服务简介 */
function getMicroservicesSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['micrservice-introduction','微服务简介'],
        ['micrservice-CAP-BASE','CAP定理和BASE理论'],
        ['micrservice-high-concurrency','如何应对高并发'],
        ['micrservice-framework-practices','微服务的实践'],
        ['micrservice-framework-introduction','微服务架构简介'],
        ['micrservice-framework-design','微服务架构设计模式'],
        ['micrservice-note','微服务概念简记']
      ]
    }
  ]
}

/** Linux */
function getLinuxSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ['linux-introduction','Linux简介'],
        ['linux-terminal','Linux远程控制'],
        ['linux-dir-management','Linux目录管理及指令'],
        ['linux-archive','Linux压缩命令'],
        ['linux-system','Linux系统管理'],
        ['linux-editor','Linux编辑器'],
        ['linux-user-group','Linux用户和组管理'],
        ['linux-file-manage','Linux文件权限管理'],
        ['linux-software-src','Linux软件包管理'],
        ['linux-install-jdk','Linux安装JDK'],
        ['linux-install-tomcat','Linux安装Tomcat'],
        ['linux-install-mysql','Linux安装MySQL'],
        ['linux-LVM','Linux LVM磁盘扩容']
      ]
    }
  ]
}

/** Ubuntu */
function getLinuxUbuntuSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ['ubuntu-static-ip','Ubuntu设置静态IP'],
        ['ubuntu-dns', 'Ubuntu 20.x DNS设置']
      ]
    }
  ]
}

/** 设计模式-基础 */
function getDesignPatternsSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 1,
      children: [
        ['1_dp-monitor','监听模式'],
        ['2_dp-state','状态模式'],
        ['3_dp-intermediary','中介模式'],
        ['4_dp-decorative','装饰模式'],
        ['5_dp-singleton','单例模式'],
        ['6_dp-clone','原型模式'],
        ['7_dp-duty','职责模式'],
        ['8_dp-proxy','代理模式'],
        ['9_dp-facade','外观模式'],
        ['10_dp-iterator','迭代器模式'],
        ['11_dp-composite','组合模式'],
        ['12_dp-builder','构建模式'],
        ['13_dp-adapter','适配模式'],
        ['14_dp-strategy','策略模式'],
        ['15_dp-factory','工厂模式'],
        ['16_dp-command','命令模式'],
        ['17_dp-memento','备忘模式'],
        ['18_dp-flyweight','享元模式'],
        ['19_dp-visitor','访问模式'],
        ['20_dp-template','模板模式'],
        ['21_dp-bridge','桥接模式'],
        ['22_dp-interpreter','解释模式']
      ]
    }
  ]
}

/** 设计模式-进阶 */
function getDesignPatternsAdvancedSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['1_dp-filter','过滤模式'],
        ['2_dp-objectpool','对象池技术'],
        ['3_dp-callback','回调机制'],
        ['4_dp-mvc','MVC模式'],
        ['6_dp-principles','七大设计原则'],
        ['8_dp-others-principles','更简单实用的设计原则'],
        ['5_dp-think4patterns','关于设计模式的理解'],
        ['7_dp-think4principles','关于设计原则的理解'],
        ['9_dp-think4refactor','关于项目重构的思考']
      ]
    }
  ]
}


/** python基础 */
function getPythonBaseSidebar (groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 3,
        children: [
          ['py-introduction','Python简介'],
          ['py-base-grammar','Python基础语法'],
          ['py-decorator','Python中的装饰器'],
          ['py-new-init-call','Python中new、init和call的用法'],
          ['py-type-isinstance','Python的内置函数type和isinstance'],
          ['py-metaclass','Python中metaclass的原理'],
          ['py-iterator','Python中的迭代器']
        ]
      }
    ]
}

/** 思考 */
function getThoughtBaseSidebar(groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['metaphysics-buddhism','程序员的玄学与佛学']
        ]
      }
    ]
}

/** Spring */
function getSpringSidebar(groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['1_Spring-Introduction','Spring简介'],
          ['2_Spring-IoC','Spring与IoC'],
          ['3_Hello-Spring','Hello-Spring'],
          ['4_Spring-combine-Web','Spring-Web'],
          ['5_SpringMVC-Introduction','SpringMVC简介'],
          ['6_three-tier-architecture-MVC','三层架构与MVC'],
          ['7_Spring-combine-SpringMVC','Spring整合SpringMVC'],
          ['8_Hello-Controller','Hello-Controller控制器'],
          ['9_SpringMVC-Interceptor','SpringMVC拦截器的使用'],
          ['10_SpringMVC-FromLib','SpringMVC表单标签库'],
          ['11_SpringMVC-Annotations','SpringMVC的一些注解'],
          ['12_Spring-Transaction','Spring Transaction'],
          ['13_Spring-Validation','Spring Validation']
        ]
      }
    ]
}

/** SpringBoot */
function getSpringBootSidebar(groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 3,
        children: [
          ['springboot-introduction','Spring Boot 简介'],
          ['hello-springboot','Hello Spring Boot'],
          ['springboot-common-config','Spring Boot 常用配置'],
          ['yaml','YAML 配置文件语言'],
          ['why-not-JSON','为什么说 JSON 不适合做配置文件？'],
          ['springboot-thymeleaf','Spring Boot 整合 Thymeleaf'],
          ['thymeleaf-common-grammar','Thymeleaf 常用语法'],
          ['thymeleaf-common-expression','Thymeleaf 表达式语法'],
          ['thymeleaf-built-in-objects','Thymeleaf 内置对象'],
          ['springboot-druid','Spring Boot 整合 Druid'],
          ['springboot-hikari','Spring Boot 整合 HikariCP'],
          ['springboot-tk-mybatis','Spring Boot 整合 tk.mybatis & PageHelper'],
          ['mybaits-generate','MyBatis Maven 插件生成代码']
        ]
      }
    ]
}

/** SpringCloudNetflix */
function getSpringCloudNetflixSidebar(groupA, groupB, groupC, groupD) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 3,
        children: [
          ['','Spring Cloud Netflix'],
          ['dependency-management','Hello Spring Cloud Netflix']
        ]
      },
      {
        title: groupB,
        collapsable: false,
        sidebarDepth: 3,
        children: [
          ['spring-cloud-eureka','服务注册与发现'],
          ['spring-cloud-service-provider','服务提供者'],
          ['spring-cloud-service-consumer-ribbon','服务消费者-Ribbon'],
          ['spring-cloud-service-consumer-feign','服务消费者-Feign']
        ]
      },
      {
        title: groupC,
        collapsable: false,
        sidebarDepth: 3,
        children: [
          ['service-avalanche','服务雪崩效应'],
          ['spring-cloud-hystrix','熔断器-Netflix Hystrix'],
          ['spring-cloud-hystrix-principle','Netflix Hystrix工作原理'],
          ['spring-cloud-hystrix-dashboard','熔断器仪表盘-Hystrix Dashboard'],
          ['spring-cloud-hystrix-turbine','熔断器聚合仪表盘-Netflix Turbine'],
          ['spring-cloud-hystrix-other-desc','Hystrix 其他相关说明']
        ]
      },
      {
        title: groupD,
        collapsable: false,
        sidebarDepth: 3,
        children: [
          ['spring-cloud-hystrix-zuul','路由网关-Netflix Zuul'],
          ['spring-cloud-hystrix-zuul-fallback','路由网关失败回调'],
          ['spring-cloud-hystrix-zuul-filter','路由网关服务过滤']
        ]
      }
    ]
}

/** MyBaits */
function getMyBaitsSidebar(groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['1_MyBatis-Introduction','MyBaits简介'],
          ['1_Spring-combine-MyBatis','Spring整合MyBaits'],
          ['2_Hello-MyBaits','Hello-MyBaits'],
          ['3_MyBatis-CRUD','MyBatis-CRUD'],
          ['4_MyBatis-Dynamic-SQL','MyBatis动态SQL'],
          ['5_Druid-Introduction','Druid简介'],
          ['6_Spring-conbine-Druid','Spring整合Druid']
        ]
      }
    ]
}

/** JUnit */
function getJUnitSidebar(groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['1_JUnit-Introduction','JUnit简介'],
          ['2_TDD-Test-Introduction.md','TDD和测试简介'],
          ['3_JUnit-Annotations-Assert','JUnit注解和断言']
        ]
      }
    ]
}

/** Log4j */
function getLog4jSidebar(groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['1_Log4j-Introduction','Log4j简介'],
          ['2_Log4j-Config-File','Log4j日志配置文件'],
          ['3_Log4j-Output-Control-File','Log4j日志输出控制文件']
        ]
      }
    ]
}

/** Maven */
function getMavenSidebar(groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['1_Maven-Introduction-Install','Maven 简介和安装'],
          ['2_Maven-Repository','Maven中央仓库'],
          ['3_Maven-Dependent-Mechanism','Maven依赖机制'],
          ['4_Fix_Maven_Unautomatically-Download','解决Maven无法自动下载依赖的问题'],
          ['5_Maven-POM','Maven POM'],
          ['6_Hello-Maven','Hello-Maven'],
          ['7_Maven-Plugin,','Maven插件'],
          ['8_Maven-Snapshot','Maven快照'],
          ['9_Maven-Common-Commands','Maven常用命令'],
          ['10_Maven-Modular-Dev','Maven模块化开发']
        ]
      }
    ]
}

/** JavaUtils */
function getJavaUtilsSidebar(groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['CommonsEmail','CommonsEmail'],
        ['CookieUtils','CookieUtils'],
        ['HttpClientUtils','HttpClientUtils'],
        ['JacksonUtils','JacksonUtils'],
        ['Kaptcha','Kaptcha'],
        ['RegexpUtils','RegexpUtils']
      ]
    }
  ]
}

/** MySQL */
function getMySQLSidebar(groupA){
  return[
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['MySQL-version','MySQL的版本']
      ]
    }
  ]
}

/** Bootstrap */
function getBootstrapSidebar(groupA){
  return[
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['1_Bootstrap-Introduction','Bootstrap简介'],
        ['2_Bootstrap-Install','Bootstrap安装'],
        ['3_Bootstrap-Form','Bootstrap表格'],
        ['4_Bootstrap-Media-Search','Bootstrap媒体查询'],
        ['5_Bootstra-Grid','Bootstrap栅格系统'],
        ['6_Bootstrap-Font-Icon','Bootstrap字体图标']
      ]
    }
  ]
}

/** JavaScript */
function getJavaScriptSidebar(groupA){
  return[
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['jQuery-Datatables','jQuery Datatables'],
        ['jQuery-iCheck','jQuery iCheck'],
        ['jQuery-zTree','jQuery zTree'],
        ['jQuery-TreeTable','jQuery TreeTable'],
        ['jQuery-Validation','jQuery Validation'],
        ['Dropzone','Dropzone'],
        ['wangEditor','wangEditor'],
        ['DataTime','DataTime']
      ]
    }
  ]
}

/** AlgorithmSidebar */
function getAlgorithmSidebar(groupA){
  return[
    { 
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['algs_base','算法基本知识'],
        ['time_complexity','时间复杂度拓展'],
        ['algs_data-structure','基础数据结构'],
        ['algs_sort','排序算法']
      ]
    }
  ]
}

/** Docker */
function getDockerSidebar(groupA, groupB){
  return[
    { 
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['1-docker-introduction','Docker简介'],
        ['2-docker-framework','Docker架构'],
        ['3-docker-image-container','Docker镜像和容器'],
        ['4-docker-registry','Docker仓库'],
        ['5-docker-install4Ubuntu','Ubuntu安装Docker'],
        ['6-docker-accelerator','Docker镜像加速器'],
        ['7-docker-image-operation','Docker镜像基本操作'],
        ['8-docker-container-operation','Docker容器基本操作'],
        ['9-docker-repository','Docker仓库'],
        ['12-docker-data-volume', 'Docker 数据卷'],
        ['13-docker-common-command', 'Docker常用命令'],
        ['13-docker-deploy-tomcat', 'Docker 部署 Tomcat'],
        ['14-docker-deploy-mysql', 'Docker 部署 MySQL'],
        ['10-docker-dockerfile','Dockerfile 定制镜像'],
        ['11-docker-dockerfile-command','Dockerfile 指令'],
        ['12-docker-machine','Docker Machine']
      ]
    },
    { 
      title: groupB,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['1-docker-compose-introduction','Docker Compose简介'],
        ['2-docker-compose-use','Docker Compose的使用'],
        ['3-docker-compose-command','Docker Compose命令'],
        ['4-docker-compose-template','Docker Compose模板文件'],
        ['4-docker-compose-common-comand','Docker Compose常用命令'],
        ['5-docker-compose-tomcat','Docker Compose部署Tomcat'],
        ['6-docker-compose-mysql','Docker Compose部署MySQL'],
        ['7-docker-compose-gitlab','Docker Compose部署GitLab'],
        ['8-docker-compose-nexus','Docker Compose部署Nexus'],
        ['9-docker-compose-harbor','Docker Compose部署Harbor'],
        ['10-docker-compose-network','Docker Compose网络设置']
      ]
    }
  ]
}

/** Interview */
function getJavaInterview(groupA){
  return[
    { 
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['interview_class_loader','类加载器'],
        ['interview_arr_copy','Java复制数组的四种方法']
      ]
    }
  ]
}