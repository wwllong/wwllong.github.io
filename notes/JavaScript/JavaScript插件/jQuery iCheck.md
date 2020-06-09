# jQuery iCheck

表单复选框、单选框控件美化插件，主要作用为：

渲染并美化当前页面的复选框或单选框
响应复选框或单选框的点击事件

## 页面引用

``` html
<!-- iCheck for checkboxes and radio inputs -->
<link rel="stylesheet" href="/static/assets/plugins/iCheck/all.css">

<!-- iCheck 1.0.1 -->
<script src="/static/assets/plugins/iCheck/icheck.min.js"></script>
```

## 激活 iCheck

默认情况下 iCheck 是不生效的，需要使用 JS 代码激活，此过程可以指定 iCheck 的皮肤，案例代码如下：

CSS 部分
``` html
<input type="checkbox" class="minimal" />
```

JS 部分
``` javascript
// 激活 iCheck
$('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
    checkboxClass: 'icheckbox_minimal-blue',
    radioClass   : 'iradio_minimal-blue'
});
```

## 回调事件

iCheck 提供了大量回调事件，都可以用来监听 change 事件

|事件名称|	使用时机|
|:-----:|:-------:|
|ifClicked	|用户点击了自定义的输入框或与其相关联的 label|
|ifChanged	|输入框的 checked 或 disabled 状态改变了|
|ifChecked	|输入框的状态变为 checked|
|ifUnchecked	|checked 状态被移除|
|ifDisabled	|输入框状态变为 disabled|
|ifEnabled	|disabled 状态被移除|
|ifCreated	|输入框被应用了 iCheck 样式|
|ifDestroyed	|iCheck 样式被移除|

使用 on() 方法绑定事件：
``` javascript
$('input').on('ifChecked', function(event){
  alert(event.type + ' callback');
});
```
## 方法

下面这些方法可以用来通过编程方式改变输入框状态（可以使用任何选择器）：
``` javascript
$('input').iCheck('check'); //将输入框的状态设置为 checked
$('input').iCheck('uncheck'); //移除 checked 状态
$('input').iCheck('toggle');
$('input').iCheck('disable');//将输入框的状态设置为 disabled
$('input').iCheck('enable');//移除 disabled 状态
$('input').iCheck('update');
$('input').iCheck('destroy');//移除 iCheck 样式
```

## 案例代码

### 全选-联动版
``` javascript
let _checkboxAll = $('input[type="checkbox"].minimal.checkbox-all');
let _checkbox = $("tbody").find("[type='checkbox']").not("[disabled]");

_checkboxAll.on("ifClicked", function (e) {
    console.log(e.target.checked);
    // 当前状态已选中，点击后应取消选中
    if (e.target.checked) {
        _checkbox.iCheck("uncheck");
    }
    // 当前状态未选中，点击后应全选
    else {
        _checkbox.iCheck("check");
    }
});

_checkbox.on("ifClicked",function(e){
    // 当前状态已选中，点击后为 未选中
    if (e.target.checked) {
        // 全选box 应该为未选中
        if(_checkboxAll.is(":checked")){
            _checkboxAll.iCheck("uncheck");
        }
    }
    // 当前状态未选中，点击后为 选中
    else {
        // 当仅剩下当前按钮为未选中时，全选box应为选中
        let uncheck = 0;
        // 统计未选中的box
        _checkbox.each(function () {
            if (!$(this).is(":checked")) {
                ++uncheck;
            }
        });
        if(uncheck===1){
            _checkboxAll.iCheck("check");
        }
    }
});
```

## 判断是否选中
``` javascript
_checkbox.each(function () {
    // 判断是否选中
   var delFlag = $(this).is(":checked");
   if (delFlag) {
       _idArray.push($(this).attr("id"));
   }
});
```