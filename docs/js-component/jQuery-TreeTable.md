# jQuery TreeTable

treeTable 是跨浏览器、性能很高的 jQuery 的树表组件，它使用非常简单，只需要引用 jQuery 库和一个 js 文件，接口也很简单。

优点：

兼容主流浏览器：支持 IE6 和 IE6+, Firefox, chrome, Opera, Safari  
接口简洁：在普通表格的基础上增加父子关系的自定义标签就可以  
组件性能高：内部实现了只绑定了 table 的事件、使用了 css sprite 合并图片等  
提供两种风格：通过参数来设置风格

## 页面引用
``` html

<link rel="stylesheet" href="/static/assets/plugins/treeTable/themes/vsStyle/treeTable.min.css" />

<script src="/static/assets/plugins/treeTable/jquery.treeTable.min.js"></script>
```

## 接口

### 配置参数
* theme: string 主题，有两个选项：default、vsStyle. 默认:default
* expandLevel: int 树表的展开层次. 默认:1
* column: int 可控制列的序号. 默认:0，即第一列
* onSelect: function 拥有 controller 自定义属性的元素的点击事件，return false 则中止展开
* beforeExpand: 展开子节点前触发的事件

### 属性说明
* id: string 行的 id
* pId: string 父行的 id
* controller: bool 指定某一个元素是否可以控制行的展开
* hasChild: bool 指定某一个 tr 元素是否有孩子（动态加载需用到）
* isFirstOne: bool 指定某一个 tr 元素是否是第一个孩子（自动生成属性，只读）
* isLastOne: bool 指定某一个 tr 元素是否是最后一个孩子（自动生成属性，只读）
* prevId: string 前一个兄弟节点的 id（自动生成属性，只读）
* depth: string 当前行的深度（自动生成属性，只读）

## 使用方法
``` javascript
$(function () {
    $("#treeTable").treeTable({
        expandLevel: 2,
        column: 1
    });
});
```

## HTML 结构代码
``` html
<table id="treeTable1" style="width:100%">
    <tr>
        <td style="width:200px;">标题</td>
        <td>内容</td>
    </tr>
    <tr id="1">
        <td><span controller="true">1</span></td>
        <td>内容</td></tr>
    <tr id="2" pId="1">
        <td><span controller="true">2</span></td>
        <td>内容</td></tr>
    <tr id="3" pId="2">
        <td>3</td>
        <td>内容</td>
    </tr>
    <tr id="4" pId="2">
        <td>4</td>
        <td>内容</td>
    </tr>
    <tr id="5" pId="4">
        <td>4.1</td>
        <td>内容</td>
    </tr>
    <tr id="6" pId="1" hasChild="true">
        <td>5</td>
        <td>注意这个节点是动态加载的</td>
    </tr>
    <tr id="7">
        <td>8</td>
        <td>内容</td>
    </tr>
</table>
```

## 注意事项

这里的 HTML 结构是经过排序的，每行数据必须紧跟其子类目的数据项，结构类似于：
```
类目 1
    类目 1-1
    类目 1-2
    ...
类目 2
    类目 2-1
类目 3
类目 4
```

所以 服务端返回的数据注意进行排序。

## js封装
``` javascript
// treeTable 初始化默认配置
let treeTableOpts = {
    theme : "vsStyle",
    expandLevel : 2,
    column : 0
};


/**
* treeTable初始化
*/
let handlerInitTreeTable = function (tableId, opts) {
    opts = $.extend(treeTableOpts,opts);
    $("#"+tableId).treeTable(opts);
};
```