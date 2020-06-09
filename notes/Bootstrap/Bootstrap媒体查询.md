# 媒体查询

Bootstrap的响应式适应实现的原理是调用了css3的新特性：媒体查询。

## @media 媒体查询的用法

媒体查询`能在不同的条件下使用不同的样式，使得页面在不同终端设备中达到不同的渲染效果`。

## 浏览器支持

| Chrome | IE | Firefox | Safari | Opera
| :----- | :- | :------ | :----- |:-----
| 21     | 9  |  3.5    |  4.0   | 9

媒体查询由 `媒体类型` 和 `媒体特性` 组成。

## 媒体类型

媒体类型在CSS3中是一个常见的属性，可以`通过媒体类型对不同设备指定不同样式。`

* ALL：所有设备
* Braille：盲人用点子法触觉回馈设备
* Embossed：盲人打印机
* Handheld：便携设备
* Print：打印用纸或打印预览视图
* Projection：各种投影设备
* Screen：电脑显示器
* Speech：语音或音频合成器
* Tv：电视机类型设备
* Tty：使用固定密度字母栅格的媒介，比如电传打字机和终端
  
`Screen、ALL、Print`是最为常见的三种媒体类型。

## 媒体特性

媒体查询中大部分接受`min/max`前缀，用来表达其逻辑关系，表示应用大于等于或小于等于某个值的情况。没有特殊说明都支持min/max。

* width：Length 渲染界面的宽度
* height：Length 渲染界面的高度
* color：整数、表示色彩的字节数
* color-index：整数，色彩表中的色彩数
* device-aspct-ratio：整数/整数，宽高比例
* device-height：Length 设备屏幕的输出高度
* device-width：Length 设备屏幕的输出宽度
* grid（不支持min/max前缀）：整数，是否基于栅格的设备
* monochrome：整数，单色帧缓冲器中每像素字节数
* resolution：分辨率（dpi/dpcm）分辨率
* scan（不支持min/max前缀）：Progressive interlaced，TV媒体类型的扫描方式
* orientation（不支持min/max前缀）：Portrait//landscape 横屏或竖屏。

常用的就是`max-width、max-height、min-width、min-height`。

## 媒体查询的用法

语法：`@media 媒体类型 and （媒体特性） {样式}`

## 最大宽度

`max-width`是媒体特性中常用的一个特性，意思是指媒体类型小于或等于指定宽度时，样式生效。

``` css
/**
当屏幕小于或等于480px时，页面中包含类样式.auto-display 的元素都会隐藏。
*/
@media screen and (max-width: 480px) {
    .auto-display {
        dispaly:none;
    }
}
```

## 最小宽度

`min-width`与`max-width`相反，意思是指媒体类型大于或等于指定宽度时，样式生效。

``` css
/**
当屏幕大于或等于900px时，页面中包含类样式.wrapper 的元素宽度为980px。
*/
@media screen and (min-width: 900px) {
    .wrapper {
        width: 980px;
    }
}
```

## 最近原则

CSS 样式的的显示优先级，遵循 `就近原则`。比如 style 属性的 优先级 就 高于 CSS的定义。有一种特例：在CSS定义中加上强制样式 `!@important` 可以强制使用CSS定义的样式。





