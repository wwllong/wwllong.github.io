module.exports = {
    base: '/',
    title: '温万龙的博客',
    description: '前期追深度，否则会华而不实，后期追广度，否则会坐井观天',
    head: [
        ['link', {rel: 'icon', href: `/favicon.png`}]
    ],
    themeConfig: {
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
        }
    }                      
}

function getNotesGuideSidebar (groupA,groupB,groupC,groupD) {
    return [
        {
          title: groupA,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ''
          ]
        },
        {
            title: groupB,
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/notes-guide/datastru-algs/',
              '/notes-guide/design-patterns/'
            ]
        },
        {
            title: groupC,
            collapsable: false,
            sidebarDepth: 2,
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
            sidebarDepth: 2,
            children: [
              '/notes-guide/temp/'
            ]
        }
        
      ]
}

function getLogsSidebar (groupA) {
    return [
        {
            title: groupA,
            collapsable: false,
            sidebarDepth: 2,
            children: [
            '2019',
            '2020'
            ]
        },
    ]
}

function getJavaBaseSidebar (groupA) {
    return [
        {
          title: groupA,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            'helloworld',
            '关键字、标识符、注释'
          ]
        }
      ]
}

function getGitSidebar (groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 3,
        children: [
          '代码版本控制',
          'Git简介和安装',
          'Git配置SSH',
          'TortoiseGit配置SSH',
          'Git WorkFlow'
        ]
      }
    ]
}


function getMicroservicesSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 3,
      children: [
        '微服务简介',
        'CAP定理和BASE理论',
        '如何应对高并发'
      ]
    }
  ]
}

function getLinuxSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 3,
      children: [
        'Linux简介'
      ]
    }
  ]
}

function getDesignPatternsSidebar(groupA){
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 3,
      children: [
        '1_监听模式',
        '2_状态模式',
        '3_中介模式',
        '4_装饰模式',
        '5_单例模式'
      ]
    }
  ]
}

function getPythonBaseSidebar (groupA) {
  return [
      {
        title: groupA,
        collapsable: false,
        sidebarDepth: 2,
        children: [
          'Python简介',
          'Python基础语法',
          'Python中的装饰器',
          'Python中new、init和call的用法'
        ]
      }
    ]
}


