

# Docker 部署Tomcat

## 查找Tomcat 镜像

```text
wenwl@lubuntu:/usr/local/docker/tomcat$ docker search tomcat
NAME                          DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
tomcat                        Apache Tomcat is an open source implementati…   3063      [OK]       
tomee                         Apache TomEE is an all-Apache Java EE certif…   90        [OK]       
dordoka/tomcat                Ubuntu 14.04, Oracle JDK 8 and Tomcat 8 base…   57                   [OK]
kubeguide/tomcat-app          Tomcat image for Chapter 1                      30                   
consol/tomcat-7.0             Tomcat 7.0.57, 8080, "admin/admin"              18                   [OK]
cloudesire/tomcat             Tomcat server, 6/7/8                            15                   [OK]
aallam/tomcat-mysql           Debian, Oracle JDK, Tomcat & MySQL              13                   [OK]
arm32v7/tomcat                Apache Tomcat is an open source implementati…   11                   
rightctrl/tomcat              CentOS , Oracle Java, tomcat application ssl…   6                    [OK]
maluuba/tomcat7-java8         Tomcat7 with java8.                             6                    
unidata/tomcat-docker         Security-hardened Tomcat Docker container.      5                    [OK]
amd64/tomcat                  Apache Tomcat is an open source implementati…   3                    
arm64v8/tomcat                Apache Tomcat is an open source implementati…   3                    
jelastic/tomcat               An image of the Tomcat Java application serv…   2                    
fabric8/tomcat-8              Fabric8 Tomcat 8 Image                          2                    [OK]
oobsri/tomcat8                Testing CI Jobs with different names.           2                    
cfje/tomcat-resource          Tomcat Concourse Resource                       2                    
chenyufeng/tomcat-centos      tomcat基于centos6的镜像                              1                    [OK]
camptocamp/tomcat-logback     Docker image for tomcat with logback integra…   1                    [OK]
picoded/tomcat7               tomcat7 with jre8 and MANAGER_USER / MANAGER…   1                    [OK]
99taxis/tomcat7               Tomcat7                                         1                    [OK]
ppc64le/tomcat                Apache Tomcat is an open source implementati…   1                    
softwareplant/tomcat          Tomcat images for jira-cloud testing            0                    [OK]
secoresearch/tomcat-varnish   Tomcat and Varnish 5.0                          0                    [OK]
s390x/tomcat                  Apache Tomcat is an open source implementati…   0                                        0
```

## 拉取镜像

这里我们拉取官方的镜像

```text
docker pull tomcat
```

等待下载完成后，我们就可以在本地镜像列表里查到 REPOSITORY 为 tomcat 的镜像。

``` shell
wenwl@lubuntu:/usr/local/docker/tomcat$ docker image ls
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
tomcat        latest    36ef696ea43d   4 days ago     667MB
hello-world   latest    d1165f221234   4 months ago   13.3kB

```



## 运行容器

```shell
wenwl@lubuntu:/usr/local/docker/tomcat$ docker run --name tomcat -p 8081:8080 -v $PWD/root:/usr/local/tomcat/webapps/ROOT -d tomcat
```

命令说明：

- -p 8081:8080：将容器的8080端口映射到主机的8081端口
- -v $PWD/root:/usr/local/tomcat/webapps/ROOT：将主机中当前目录下的root挂载到容器的/usr/local/tomcat/webapps/ROOT

查看容器启动情况

```text
wenwl@lubuntu:/usr/local/docker/tomcat$ docker ps
CONTAINER ID   IMAGE     COMMAND             CREATED         STATUS         PORTS                                       NAMES
af02e7598a70   tomcat    "catalina.sh run"   2 minutes ago   Up 2 minutes   0.0.0.0:8081->8080/tcp, :::8081->8080/tcp   tomcat

```

在浏览器输入正确的地址就可以访问tomcat。例如我的tomcat地址为：http://192.168.0.104:8081/

