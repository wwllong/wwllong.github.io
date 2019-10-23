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
            '/notes/': getNotesSidebar('博文索引','程序员内功','技术栈博文'),
            '/change-logs/': getLogsSidebar("Changelog"),
            '/notes/java/': getNotesJavaBaseSidebar('基础','进阶','框架')
        }
    }                      
}

function getNotesSidebar (groupA,groupB,groupC) {
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
              '/notes/temp/'
            ]
        },
        {
            title: groupC,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/notes/temp/'
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
            '2019-03',
            '2019-09'
            ]
        },
    ]
}

function getNotesJavaBaseSidebar (groupA,groupB,groupC) {
    return [
        {
          title: groupA,
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/base/00_helloworld',
            '/base/01_关键字、标识符、注释'
          ]
        },
        {
            title: groupB,
            collapsable: false,
            sidebarDepth: 2,
            children: [
              '/notes/temp/'
            ]
        },
        {
            title: groupC,
            collapsable: false,
            sidebarDepth: 2,
            children: [
                '/notes/temp/'
            ]
        }
      ]
}

