module.exports = {
    base: '/',
    title: 'Jack Wen Blog',
    description: 'Jack Wen Blog',
    head: [
        ['link', {rel: 'icon', href: `/favicon.png`}]
    ],
    themeConfig: {
        nav: require('./nav/zh'),
        lastUpdated: '上次更新',
        sidebar: {
            '/notes/': getNotesSidebar('博文索引','程序员内功','技术栈博文'),
            '/change-logs/': getLogsSidebar("Changelog")
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
            '2019-03'
            ]
        },
    ]
}

