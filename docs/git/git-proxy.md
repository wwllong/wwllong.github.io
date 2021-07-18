# Git配置代理



## 设置全局代理

端口号，根据自己的实际情况去设置

``` shell
git config --global http.proxy "127.0.0.1:1080"
git config --global https.proxy "127.0.0.1:1080"
```

## 取消代理

``` shell
git config --global --unset http.proxy
git config --global --unset https.proxy
```

## 只对github.com设置代理

``` shell
git config --global http.https://github.com.proxy "127.0.0.1:1080"
```

## 取消github.com代理

``` shell
git config --global --unset http.https://github.com.proxy
```

## 修改配置文件办法

找到git的配置文件.gitconfig。这个文件一般在用户目录下。

``` shell
[http "https://github.com"]
  proxy = "127.0.0.1:1080"

# 为所有的配置socks5代理
[http]
  proxy = "127.0.0.1:1080"
```

