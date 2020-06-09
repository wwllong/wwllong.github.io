# Dropzone

Dropzone 是一个开源的 JavaScript 库，提供文件的异步上传功能，并支持拖拽上传功能

官方网站：https://www.dropzonejs.com/
GitHub：https://github.com/enyo/dropzone
Wiki：https://gitlab.com/meno/dropzone/-/wikis/home

## 页面引用

CSS 部分，其中 basic.min.css 提供了官网的炫酷上传效果
``` javascript
<link rel="stylesheet" href="/static/assets/plugins/dropzone/min/dropzone.min.css" />
<link rel="stylesheet" href="/static/assets/plugins/dropzone/min/basic.min.css" />

<script src="/static/assets/plugins/dropzone/min/dropzone.min.js"></script>
```

## 启用 Dropzone

只需要一个 div 元素，用 JavaScript 代码启用即可

### HTML 结构如下：
``` html
<div id="dropz" class="dropzone"></div>
```

JavaScript 启用代码如下：

``` javascript
// 方式一：通过Dropzone.options，dropzone为元素id
Dropzone.options.dropzone = {
    url: "/upload",
    dictDefaultMessage: '拖动文件至此或者点击上传', // 设置默认的提示语句
    paramName: "dropzoneFile", // 传到后台的参数名称
    init: function () {
        this.on("success", function (file, data) {
            // 上传成功触发的事件
        });
    }
};

// 方式二：jQuery，需要Dropzone的自动发现元素来配合使用
Dropzone.autoDiscover = false;

var myDropzone = new Dropzone("#dropzone", {
    url: "/upload",
    dictDefaultMessage: '拖动文件至此或者点击上传', // 设置默认的提示语句
    paramName: "dropzoneFile", // 传到后台的参数名称
    init: function () {
        this.on("success", function (file, data) {
            // 上传成功触发的事件
        });
    }
});



```

其中 url 是必须的值，指明文件上传提交到哪个页面。其他的值都是可选的，如果使用默认值的话可以省略。

## 配置 Dropzone

此插件的特色就在于非常灵活，提供了许多可选项、事件等。下面分类介绍常用的配置项。

### 功能选项
* url：最重要的参数，指明了文件提交到哪个页面
* method：默认为 post，如果需要，可以改为 put
* paramName：相当于 `<input>` 元素的 name 属性，默认为 file
* maxFilesize：最大文件大小，单位是 MB
* maxFiles：默认为 null，可以指定为一个数值，限制最多文件数量
* addRemoveLinks：默认 false。如果设为 true，则会给文件添加一个删除链接
* acceptedFiles：指明允许上传的文件类型，格式是逗号分隔的 MIME type 或者扩展名。例如：image/*, application/pdf, .* psd, .obj
* uploadMultiple：指明是否允许 Dropzone 一次提交多个文件。默认为 false。如果设为 true，则相当于 HTML 表单添加 * multiple 属性
* headers：如果设定，则会作为额外的 header 信息发送到服务器。例如：{"custom-header": "value"}
* init：一个函数，在 Dropzone 初始化的时候调用，可以用来添加自己的事件监听器
* forceFallback：Fallback 是一种机制，当浏览器不支持此插件时，提供一个备选方案。默认为 false。如果设为 true，则强制 * fallback
* fallback：一个函数，如果浏览器不支持此插件则调用

详见：官网的Configuration options

## 翻译选项
* dictDefaultMessage：没有任何文件被添加的时候的提示文* 本
* dictFallbackMessage：Fallback 情况下的提示文本
* dictInvalidInputType：文件类型被拒绝时的提示文本
* dictFileTooBig：文件大小过大时的提示文本
* dictCancelUpload：取消上传链接的文本
* dictCancelUploadConfirmation：取消上传确认信息的文* 本
* dictRemoveFile：移除文件链接的文本
* dictMaxFilesExceeded：超过最大文件数量的提示文本

## 常用事件

### 以下事件接收 file 为第一个参数
* addedfile：添加了一个文件时发生
* removedfile：一个文件被移除时发生。你可以监听这个事件并手动从服务器删除这个文件
* uploadprogress：上传时按一定间隔发生这个事件。第二个参数为一个整数，表示进度，从 0 到 100。第三个参数是一个整数，表示发送到服务器的字节数。当一个上传结束时，Dropzone 保证会把进度设为 100。注意：这个函数可能被以同一个进度调用多次
* success：文件成功上传之后发生，第二个参数为服务器响应
* complete：当文件上传成功或失败之后发生
* canceled：当文件在上传时被取消的时候发生
* maxfilesreached：当文件数量达到最大时发生
* maxfilesexceeded：当文件数量超过限制时发生

### 以下事件接收一个 file list 作为第一个参数（仅当 uploadMultiple 被设为 true 时才会发生）

* successmultiple
* completemultiple
* cancelmultiple

## 特殊事件

totaluploadprogress：第一个参数为总上传进度，第二个参数为总字节数，第三个参数为总上传字节数。

## 使用案例
``` javascript
var myDropzone = new Dropzone("#dropz", {
    url: "/upload", // 文件提交地址
    method: "post",  // 也可用put
    paramName: "dropzoneFile", // 默认为file
    maxFiles: 1,// 一次性上传的文件数量上限
    maxFilesize: 10, // 文件大小，单位：MB
    acceptedFiles: ".jpg,.gif,.png,.jpeg", // 上传的类型
    addRemoveLinks: true,
    parallelUploads: 1,// 一次上传的文件数量
    dictDefaultMessage: '拖动文件至此或者点击上传',
    dictMaxFilesExceeded: "您最多只能上传1个文件！",
    dictResponseError: '文件上传失败!',
    dictInvalidFileType: "文件类型只能是*.jpg,*.gif,*.png,*.jpeg。",
    dictFallbackMessage: "浏览器不受支持",
    dictFileTooBig: "文件过大上传文件最大支持!",
    dictCancelUpload: "取消",
    dictRemoveFile:"删除",
    init: function () {
        this.on("addedfile", function (file) {
            // 上传文件时触发的事件
        });
        this.on("success", function (file, data) {
            // 上传成功触发的事件
        });
        this.on("error", function (file, data) {
            // 上传失败触发的事件
        });
        this.on("removedfile", function (file) {
            // 删除文件时触发的方法
        });
    }
});
```

## 服务端支持

前端工作做完后，后台需要提供文件上传支持，我们使用 Spring MVC 来接收上传的文件

### POM
Spring MVC 上传文件需要 `commons-fileupload:commons-fileupload` 依赖支持，`pom.xml` 文件如下：
``` xml
<dependency>
    <groupId>commons-fileupload</groupId>
    <artifactId>commons-fileupload</artifactId>
    <version>1.3.2</version>
</dependency>
```

### 配置 spring-mvc.xml

需要 Spring 注入 multipartResolver 实例，spring-mvc.xml 增加如下配置：
``` xml
<!-- 上传文件拦截，设置最大上传文件大小 10M = 10*1024*1024(B) = 10485760 bytes -->
<bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
    <property name="maxUploadSize" value="10485760"/>
     <property name="defaultEncoding" value="utf-8"/>
</bean>
```

### 控制器关键代码

以下为控制器中接收文件的关键代码：
``` java

@Controller
public class FileUploadController {

    private final String UPLOAD_PATH = "/static/upload/";

    @ResponseBody
    @PostMapping("upload")
    public Map<String,Object> upload(MultipartFile dropzoneFile, HttpServletRequest request){
        HashMap<String, Object> result = new HashMap<>();
        // 获取上传文件的原始名称
        String fileName = dropzoneFile.getOriginalFilename();
        // 获取文件后缀
        String fileSuffix = fileName.substring(fileName.lastIndexOf("."));
        // 设置文件上传路径
        String filePath = request.getSession().getServletContext().getRealPath(UPLOAD_PATH);

        // 创建上传的文件夹
        File file = new File(filePath);
        if(!file.exists()){
            file.mkdir();
        }
        // 重新命名
        file = new File(filePath, UUID.randomUUID() + fileSuffix);

        try {
            // 写入文件
            dropzoneFile.transferTo(file);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 返回数据
        String url = String.format("%s://%s:%s%s%s",request.getScheme() ,request.getServerName(), request.getServerPort(),UPLOAD_PATH,file.getName());
        result.put("url",url);
        return result;
    }
}

```

## 封装Dropzone

``` javascript
 // dropzone 初始化默认配置
let dropzoneOpts = {
    url: "", // 文件提交地址
    method: "post",  // 也可用put
    paramName: "dropzoneFile", // 默认为file
    maxFiles: 1,// 一次性上传的文件数量上限
    maxFilesize: 10, // 文件大小，单位：MB
    acceptedFiles: ".jpg,.gif,.png,.jpeg", // 上传的类型
    addRemoveLinks: true,
    parallelUploads: 1,// 一次上传的文件数量
    dictDefaultMessage: '拖动文件至此或者点击上传',
    dictMaxFilesExceeded: "您最多只能上传1个文件！",
    dictResponseError: '文件上传失败!',
    dictInvalidFileType: "文件类型只能是*.jpg,*.gif,*.png,*.jpeg。",
    dictFallbackMessage: "浏览器不受支持",
    dictFileTooBig: "文件过大上传文件最大支持!",
    dictRemoveFile:"删除",
    dictCancelUpload: "取消"
};

/**
* dropzone初始化
*/
let handlerInitDropzone = function (opts) {
    Dropzone.autoDiscover = false;
    opts = $.extend(true,dropzoneOpts,opts);
    for(let i = 0,len = opts.ids.length; i < len; i++){
        new Dropzone(opts.ids[i], opts);
    }
};
```
