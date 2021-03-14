# CommonsEmail

[Commons Email](http://commons.apache.org/proper/commons-email/download_email.cgi) 旨在提供发送邮件的API，它是建立在Java Mail之上的，目的是简化Java Mail的开发。

## 邮件相关协议

[POP3](https://baike.baidu.com/item/POP3/175122?fr=aladdin)： 全名为“Post Office Protocol - Version 3”，即“邮局协议版本3”。此协议是主要用于支持使用客户端远程管理在服务器上的电子邮件。是一种**邮件存储转发服务技术，将邮件从邮件服务器端送到个人终端机器上**。改进的POP3协议POP3邮件服务器大都可以“**只下载邮件，服务器端并不删除**”。可以理解为**收件服务,本地操作**。  

[IMAP](https://baike.baidu.com/item/imap)：全名为 “Internet Mail Access Protocol”，即“交互邮件访问协议”，是一个应用层协议，默认端口143。主要作用是邮件客户端可以通过这种协议从邮件服务器上获取邮件的信息，下载邮件等。IMAP协议运行在TCP/IP协议之上，它与POP3协议的主要区别是用户可以不用把所有的邮件全部下载，**可以通过客户端直接对服务器上的邮件进行操作**。 可以理解为**操作服务器的“收件服务”**。  

[SMTP](https://baike.baidu.com/item/SMTP)：全名为“Simple Mail Transfer Protocol”，即“简单邮件传输协议”，默认端口25。SMTP是**建立在FTP文件传输服务上的一种邮件服务，主要用于系统之间的邮件信息传递，并提供有关来信的通知**。

## 整合Spring

参考：[Commons Email - Examples](http://commons.apache.org/proper/commons-email/userguide.html)

### POM
``` xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-email</artifactId>
    <version>1.5</version>
</dependency>
```

### EmailUtils
``` java
package com.wenwl.my.shop.commons.utils;

import org.apache.commons.mail.Email;
import org.apache.commons.mail.EmailException;

public class EmailUtils {

    /**
     * 使用的时候注入SimpleEmail实例
     */
    private Email email;

    public void setEmail(Email email) {
        this.email = email;
    }

    /**
     * 发送简单文本
     * @param subject 主题
     * @param msg 内容
     * @param to 收件人
     * @throws EmailException
     */
    public void sendSimpleText(String subject, String msg, String... to) throws EmailException {
        email.setSubject(subject);
        email.setMsg(msg);
        email.addTo(to);
        email.send();
    }

}
```

### spring-context-email
``` xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
        http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <!-- 加载配置属性文件 -->
    <context:property-placeholder ignore-unresolvable="true" location="classpath:myshop.properties"/>

    <!-- 配置 Bean emailUtils 定义 -->
    <bean id="email" class="org.apache.commons.mail.SimpleEmail">
        <property name="hostName" value="${email.host.name}" />
        <property name="smtpPort" value="${email.smtp.port}" />
        <property name="authenticator">
            <bean class="org.apache.commons.mail.DefaultAuthenticator">
                <constructor-arg name="userName" value="${email.username}" />
                <constructor-arg name="password" value="${email.password}" />
            </bean>
        </property>
        <property name="SSLOnConnect" value="true" />
        <property name="from" value="${email.username}" />
    </bean>
    <bean id="emailUtils" class="com.wenwl.my.shop.commons.utils.EmailUtils">
        <property name="email" ref="email"/>
    </bean>
    
</beans>
```

### properties
``` properties
#============================#
#==== Email settings ========#
#============================#
email.host.name=smtp.163.com
email.smtp.port=465
email.username=xxx@163.com
email.password=xxx
```
