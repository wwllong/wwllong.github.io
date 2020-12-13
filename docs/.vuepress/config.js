module.exports = {
    base: '/',
    title: '温万龙的博客',
    description: '前期追深度，否则会华而不实，后期追广度，否则会坐井观天',
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
            '/git/': getGitSidebar("Git"),
            '/microservices/': getMicroservicesSidebar("微服务简介"),
            '/linux/': getLinuxSidebar("Linux"),
            '/design-patterns/': getDesignPatternsSidebar("设计模式"),
            '/python-base/': getPythonBaseSidebar("Python基础")
        },
        nextLinks: true,
        prevLinks: false
    }
    // ,
    // markdown: {
    //   extendMarkdown: md => {
    //     md.use(require("markdown-it-disable-url-encode"));
    //   }
    // }                
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
              '/notes-guide/microservices/',
              '/notes-guide/linux/',
              '/notes-guide/python/'
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
            '2020'
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
            'helloworld',
            ['keywords-identifiers','关键字和标识符']
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
          'git-workFlow'
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
      sidebarDepth: 1,
      children: [
        ['micrservice-introduction','微服务简介'],
        ['micrservice-CAP-BASE','CAP定理和BASE理论'],
        ['micrservice-high-concurrency','如何应对高并发']
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
        ['linux-introduction','Linux简介']
      ]
    }
  ]
}

/** 设计模式 */
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
        ['15_dp-factory','工厂模式']
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
        sidebarDepth: 2,
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


