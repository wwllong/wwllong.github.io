# jQuery Datatables

DataTables 是一款 jQuery 表格插件。它是一个高度灵活的工具，可以将任何HTML表格添加高级的交互功能。

* [中文网站](http://datatables.club/)
* [实例索引](http://datatables.club/example/)
* [参考手册](http://datatables.club/manual/)
* [帮助文档](http://datatables.club/reference/)

## 页面引用

``` html
<!-- DataTables -->
<link rel="stylesheet" href="/static/assets/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">

<!-- DataTables -->
<script src="/static/assets/bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="/static/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
```

使用，启用 0 配置模式
``` javascript
$('#dataTable').DataTable();
```

## 分页查询案例

### 服务端

#MyBatis 映射文件关键代码
DataTables 分页需要提供查询数据的总笔数，以下为查询总笔数的关键代码：
``` xml
<select id="count" resultType="java.lang.Integer">
  SELECT COUNT(*) FROM tb_user
</select>
```

这里我们使用 MySQL 作为数据库，由于需要传入分页参数，这里我们还使用了 Map 作为查询参数类型，以下为 MySQL 分页查询的关键代码：
（MySQL单表的数据量尽量不要超过1000w条数据）

``` xml
<select id="page" resultType="TbUser" parameterType="java.util.Map">
    SELECT
    <include refid="tbUserColumns" />
    FROM
    tb_user AS a LIMIT #{page}, #{pageSize}
</select>
```

## 定义数据访问接口
``` java
/**
 * 分页查询
 * @param params
 * @return
 */
List<TbUser> page(Map<String, Object> params);

/**
 * 查询笔数
 * @return
 */
int count();
```

## 定义通用的分页展示对象

创建一个名为 PageInfo 的分页数据展示对象，代码如下：

``` java
package com.wenwl.my.shop.commons.dto;

import com.wenwl.my.shop.commons.persistence.BaseEntity;

import java.util.List;

/**
 * @author wenwl
 * @className PageInfo
 * @dsecription 分页数据传输对象
 * @data 2020/2/16
 * @vserion 1.0.0
 */
public class PageInfo<T extends BaseEntity> {

    private int draw;
    private int recordsTotal;
    private int recordsFiltered;
    private List<T> data;
    private String error;

    public int getDraw() {
        return draw;
    }

    public void setDraw(int draw) {
        this.draw = draw;
    }

    public int getRecordsTotal() {
        return recordsTotal;
    }

    public void setRecordsTotal(int recordsTotal) {
        this.recordsTotal = recordsTotal;
    }

    public int getRecordsFiltered() {
        return recordsFiltered;
    }

    public void setRecordsFiltered(int recordsFiltered) {
        this.recordsFiltered = recordsFiltered;
    }

    public List<T> getData() {
        return data;
    }

    public void setData(List<T> data) {
        this.data = data;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}

```

## 业务逻辑层关键代码
``` java
@Override
public PageInfo<TbUser> page(Map<String, Object> params) {
    PageInfo<TbUser> pageInfo = new PageInfo<>();

    int count = tbUserDao.count();
    List<TbUser> tbUsers = tbUserDao.page(params);

    pageInfo.setRecordsTotal(count);
    pageInfo.setRecordsFiltered(count);
    pageInfo.setData(tbUsers);

    return pageInfo;
}
```

## 控制器层关键代码
``` java
@ResponseBody
@GetMapping(value = "page")
public PageInfo<TbUser> page(HttpServletRequest req){
    String drawStr = req.getParameter("draw");
    String startStr = req.getParameter("start");
    String lengthStr = req.getParameter("length");

    int draw = drawStr == null ? 0 : Integer.parseInt(drawStr);
    int start = startStr == null ? 0 : Integer.parseInt(startStr);
    int length = lengthStr == null ? 0 : Integer.parseInt(lengthStr);

    HashMap<String, Object> params = new HashMap<>();
    params.put("page",start);
    params.put("pageSize",length);
    PageInfo<TbUser> pageInfo = userService.page(params);
    pageInfo.setDraw(draw);
    return pageInfo;
}
```

## 客户端

使用 DataTables 分页功能，需要开启一些列的相关配置，分页的数据结果是由 Ajax 请求获取并解析 JSON 格式数据自动封装进表格的，代码如下：

``` javascript
$('#dataTable').DataTable({
    //是否自适应宽度,禁止这个选项可以实现最优的性能
    "autoWidth": true,
    //是否显示表格左下角的信息
    "info": true,
    //是否允许用户改变表格每页显示的记录数
    "lengthChange": false,
    //是否允许开启排序
    "ordering": false,
    //是否开启本地分页
    "paging": true,
    //是否显示处理状态(排序的时候，数据很多耗费时间长的话，也会显示这个)
    "processing": true,
    // 是否允许 DataTables 开启本地搜索
    "searching": false,
    // 控制 DataTables 的延迟渲染，可以提高初始化的速度
    "deferRender": true,
    // 是否开启服务器模式
    "serverSide": true,
    "ajax": {
        "url": "/user/page"
    },
    // 分页按钮显示选项
    "pagingType": "full_numbers",
    // 设置列的数据源
    "columns": [
        {
            "data": function (row, type, val, meta) {
                return '<input id="' + row.id + '" type="checkbox" class="minimal" />';
            }
        },
        {"data": "id"},
        {"data": "username"},
        {"data": "phone"},
        {"data": "email"},
        {
                "data": function (row, type, val, meta) {
                    return moment(row.updated).format("YYYY-MM-DD HH:mm:ss");
                    }
        },
        {
            "data": function (row, type, val, meta) {
                var detailURL = "/user/detail?id="+row.id;
                var deleteURL = "/user/delete";
                return '<button type="button" class="btn btn-sm btn-default" onclick="App.showDetail(\''+detailURL+'\')"><i class="fa fa-search"></i> 查看</button>&nbsp;&nbsp;' +
                    '<a href="/user/form?id='+row.id+'" type="button" class="btn btn-sm btn-primary"><i class="fa fa-edit"></i> 编辑</a>&nbsp;&nbsp;' +
                    '<button  type="button" class="btn btn-sm btn-danger" onclick="App.deleteSingle(\'' + deleteURL + '\', \'' + row.id + '\')"><i class="fa fa-trash-o"></i> 删除</button >';

            }
        }
    ],
    // 表格重绘的回调函数
    "drawCallback": function (settings) {
        App.init();
    },
    // 国际化
    "language": {
        "sProcessing": "处理中...",
        "sLengthMenu": "显示 _MENU_ 项结果",
        "sZeroRecords": "没有匹配结果",
        "sInfo": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
        "sInfoEmpty": "显示第 0 至 0 项结果，共 0 项",
        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
        "sInfoPostFix": "",
        "sSearch": "搜索:",
        "sUrl": "",
        "sEmptyTable": "表中数据为空",
        "sLoadingRecords": "载入中...",
        "sInfoThousands": ",",
        "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页"
        },
        "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
        }
    }
});
``` 

## 参考

* [配置选项](http://datatables.club/reference/option/)
* [服务器处理](http://datatables.club/manual/server-side.html)
* [设置列的数据源](https://datatables.net/reference/option/columns.data)
* [国际化](http://datatables.club/manual/i18n.html)
* [日期格式化工具](http://momentjs.cn/)
* [多条件查询](http://datatables.club/reference/option/ajax.data.html)