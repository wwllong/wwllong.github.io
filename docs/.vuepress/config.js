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
            '/notes-guide/': getnotesGuideSidebar('博文索引','程序员内功','技术栈','其他'),
            '/change-logs/': getLogsSidebar("Changelog"),
            '/java-base/': getJavaBaseSidebar("Java-基础篇（上）"),
            '/git/': getGitSidebar("Git"),
            '/microservices/': getMicroservicesSidebar("微服务简介"),
            '/linux/': getLinuxSidebar("Linux")
        }
    }                      
}

function getnotesGuideSidebar (groupA,groupB,groupC,groupD) {
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
              '/notes-guide/datastru-algs/'
            ]
        },
        {
            title: groupC,
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/notes-guide/java/',
              '/notes-guide/git/',
              '/notes-guide/microservices/'
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

