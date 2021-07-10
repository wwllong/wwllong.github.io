# Docker Compose 部署 Tomcat


## 模版文件

参考模版文件如下，请大家根据自己实际情况，映射数据卷。

``` yaml
version: '3.1'
services:
  tomcat:
    restart: always
    image: tomcat
    container_name: tomcat
    ports:
      - 8080:8080
    volumes:
      - /usr/local/docker/tomcat/root:/usr/local/tomcat/webapps/ROOT
    environment:
      TZ: Asia/Shanghai
```



## 运行

使用docker-compose up -d 启动即可。

``` shell
wenwl@lubuntu:/usr/local/docker/tomcat$ docker-compose up -d
Creating network "tomcat_default" with the default driver
Creating tomcat ... done
```

