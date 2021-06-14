# Docker Compose 的使用

## 两个重要概念

`Compose` 中有两个重要的概念：

- 服务 (`service`)：一个应用的容器，实际上可以包括若干运行相同镜像的容器实例。
- 项目 (`project`)：由一组关联的应用容器组成的一个完整业务单元，在 `docker-compose.yml` 文件中定义。

可见，一个项目可以由多个服务（容器）关联而成，`Compose` 面向项目进行管理。

## 场景举例

最常见的项目是 web 网站，该项目应该包含 web 应用和缓存。下面我们用 `Python` 来建立一个能够记录页面访问次数的 web 网站。

1. 新建文件夹，在该目录中编写 `app.py` 文件

```python
from flask import Flask
from redis import Redis

app = Flask(__name__)
redis = Redis(host='redis', port=6379)

@app.route('/')
def hello():
    count = redis.incr('hits')
    return 'Hello World! 该页面已被访问 {} 次。\n'.format(count)

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
```

2. 编写 `Dockerfile` 文件，内容为

```dockerfile
FROM python:3.6-alpine
ADD . /code
WORKDIR /code
RUN pip install redis flask
CMD ["python", "app.py"]
```

3. 编写 `docker-compose.yml` 文件，这个是 Compose 使用的主模板文件。

```yaml
version: '3'
services:

  web:
    build: .
    ports:
     - "5000:5000"
     
  redis:
    image: "redis:alpine"
```

4. 运行 compose 项目

```bash
wenwl@ubuntu:/usr/local/docker/py-web$ docker-compose up
Starting py-web_redis_1_108631571fa0 ... done
Starting py-web_web_1_91d20ee66296   ... done
Attaching to py-web_redis_1_108631571fa0, py-web_web_1_91d20ee66296
redis_1_108631571fa0 | 1:C 14 Jun 2021 17:14:09.600 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
...... # 篇幅有限省略
web_1_91d20ee66296 |  * Debugger is active!
web_1_91d20ee66296 |  * Debugger PIN: 688-411-012
```

此时访问本地 `5000` 端口，每次刷新页面，计数就会加 1。

## 参考

[使用docker-compose搭建flask和redis环境](https://blog.csdn.net/qq_41954384/article/details/100524436)