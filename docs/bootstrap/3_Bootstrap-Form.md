# Bootstrap表格

Bootstrap提供了一个清晰的表格布局。

基本表格标签有：

|标签|描述|
|:---|---|
|`<table>`|表格基础样式|
|`<thead>`|表格标题行（`<tr>`)容器元素，用来标识表格列|
|`<tbody>`|表格主体，表格行的容器元素|
|`<tr>`|一组出现在单行的表格单元格（`<tr>`或`<th>`）的容器元素|
|`<td>`|默认的表格单元|
|`<th>`|特殊的表格单元，用来标识列或行，但是必须被包含于`<thead>`|
|`<caption>`|关于表格存储内容的描述或总结|

## &lt;table&gt;的样式

|类|描述|
|:---|---|
|.table|为`<table>`添加基本样式（只有横向分割线）|
|.table-striped|为`<tbody>`内添加斑马线形式的条纹（IE8不支持）|
|.table-bordered|为表格的所有单元格添加边框|
|.table-hover|在`<tbody>`内任一行启用鼠标悬停状态|
|.table-condensed|让表格更加紧凑|

## &lt;tr&gt;、&lt;th&gt;、&lt;td&gt;的样式

|类|描述|
|:---|---|
|.active|将悬停的颜色应用在行或单元格上|
|.success|表示成功的操作|
|.info|表示信息变化的操作|
|.warning|表示一个警告的操作|
|.danger|表示一个危险的操作|

## 基本的表格布局

``` html
<table class="table table-hover table-striped table-bordered table-condensed">
    <caption>基本的表格布局</caption>
    <thead>
        <tr>
            <th>名称</th>
            <th>城市</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tanmay</td>
            <td>Bangalore</td>
        </tr>
        <tr>
            <td>Sachin</td>
            <td>Mumbai</td>
        </tr>
    </tbody>
</table>
```
