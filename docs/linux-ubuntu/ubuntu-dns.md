# Ubuntu 20.x DNS设置

## 概述

在使用Ubuntu 20.x 的系统的时候，突然出现 无法通过域名访问服务的现象。例如在使用Docker无法拉取镜像、curl 指令访问 不了服务等等。

经排查，是由于Ubuntu 20.x DNS 被自动覆盖成127.0.0.53导致的。

## 解决办法

1. 临时解决：修改`/etc/resolv.conf`文件或`/etc/systemd/resolved.conf`配置阿里DNS即可。

   ``` shell
   wenwl@ubuntu:~$ sudo vi /etc/resolv.config
   ```

   在文件里添加

   ``` shell
   nameserver 223.5.5.5
   #或
   nameserver 223.6.6.6
   ```

   修改完成后一般就可以，但是这种修复在重启后会被自动改回去。

2. 永久解决：

   1. 把systemd-resolved停掉并且禁用

      ```shell
      # 禁用服务
      wenwl@ubuntu:~$ sudo systemctl disable systemd-resolved.service
      # 停止服务
      wenwl@ubuntu:~$ sudo systemctl stop systemd-resolved
      ```

   2. 把NetworkManager的dns设置成default

      ``` shell
      # DNS设置成default
      wenwl@ubuntu:~$ sudo vi /etc/NetworkManager/NetworkManager.config
      # 在[main]部分中加入 dns=default
      # 删除符号链接/etc/resolv.conf
      wenwl@ubuntu:~$ rm /etc/resolv.conf
      ```

   3. 重启NetworkManager。

      ``` shell
      sudo service network-manager restart