# Maven常用命令

## 清除项目
``` mvn
mvn clean
```

## 编译源代码
``` mvn
mvn compile
```

## 打包
``` mvn
mvn package
```

## 只打包不测试
``` mvn
mvn -dmaven.test.skip = true
```

## 安装到本地仓库
``` mvn
mvn install
```

## 源码打包
``` mvn
mvn source:jar
或
mvn source:jar-no-fork
```