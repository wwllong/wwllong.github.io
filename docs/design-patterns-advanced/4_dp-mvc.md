# MVC模式

## 什么是MVC模式

MVC模式是软件工程中的一种软件架构模式，把软件系统分为三个基本部分：模型（Model）、视图（View）和控制器（Controller）。模型负责数据的持久化，也就是存储；视图负责数据的输入和显示，直接和用户交互的一层，如大家看到的网站的页面内容、在表单上输入的数据；控制器负责具体的业务逻辑，根据用户的请求内容操作相应的模型和视图。



## MVC模式的核心思想

MVC模式到目前为止没有一个标准的定义，但它的应用却广泛到让每一个程序员都耳熟能详。不同的框架、不同的组织对MVC模式的理解都不太一样，“什么是标准的MVC模式”便成了众多程序员茶余饭后的一个话题。但有一点是公认的：MVC模式将程序分成了三层，即模型层（Model）、视图层（View）和控制层（Controller）。软件的分层是为了更好地对软件进行**解耦**，不同的层可以独立开发，既方便团队的分工合作，也增强了程序的可维护性。



## 从生活中领悟MVC模式

生活中很多人都喜欢摄影，但并不是所有人都知道相机的构成和工作流程。一部完整的（单反）相机主要由两部分组成：机身和镜头。机身通常会附带一个显示器，此外你还需要一张SD卡，当然电源也是必需的。因此相机的功能性部件有四个：镜头、机身、SD卡、显示器。它们各司其职，构成相机的完整功能。镜头用于采集图像，机身负责控制快门、光圈和感光度（拍摄的模式和功能）,SD卡用来存储图像，显示器用来查看图像、视频。用相机拍摄照片的整个工作流程大致是这样的：（1）根据拍摄的场景和模特，通过机身的各个控制按钮调整好各项设置（快门、光圈和感光度、测光等）。（2）进行构图和对焦（突出关键目标）。（3）按下快门进行拍照，拍照的原理是通过镜头采集图像，光线通过镜头进入电子感应器，电子感应器接收光线并处理，转换成数字信号后记录到SD卡中。

（4）打开显示器查看拍摄的图像，观看拍摄的效果。我们用程序来模拟一下用相机拍摄照片的整个工作流程。

``` python
# MVC模式 - 迎新大会,展示才能
class Employee:
    """公司员工"""

    def __init__(self, name):
        self.__name = name

    def doPerformance(self, skill):
        print(self.__name + "的表演:", end="")
        skill()


def sing():
    """唱歌"""
    print("唱一首歌")


def dling():
    """拉Ukulele"""
    print("拉一曲Ukulele")


def joke():
    """说段子"""
    print("说一搞笑段子")


def performMagicTricks():
    """表演魔术"""
    print("神秘魔术")


def skateboarding():
    """玩滑板"""
    print("酷炫滑板")


def testSkill():
    helen = Employee("Helen")
    helen.doPerformance(sing)
    frank = Employee("Frank")
    frank.doPerformance(dling)
    jacky = Employee("Jacky")
    jacky.doPerformance(joke)
    chork = Employee("Chork")
    chork.doPerformance(performMagicTricks)
    Kerry = Employee("Kerry")
    Kerry.doPerformance(skateboarding)


if __name__ == '__main__':
    testSkill()
"""
Helen的表演:唱一首歌
Frank的表演:拉一曲Ukulele
Jacky的表演:说一搞笑段子
Chork的表演:神秘魔术
Kerry的表演:酷炫滑板
"""
```

在示例中，doPerformance（）就是一个高阶函数（包含函数），为每一个表演者定义的方法（如sing（）、dling（）、joke（））就是回调函数。



## MVC模式技术的框架模型

把函数作为参数传入另一个函数的MVC模式是函数式编程的核心思想，MVC模式的实现方式非常简单，我们可以基于这一思想逐步抽象出一个简单可用的框架模型，主要有两种实现方式：

### 面向过程的实现方式

对于支持函数式编程的语言，MVC模式的实现非常简单：

``` python
# MVC模式 - 框架模式，面向过程的实现方式
def callback(*args, **kwargs):
    """回调函数"""
    # todo 函数体的实现


def otherFun(fun, *args, **kwargs):
    """高阶函数，也叫包含函数"""
    # todo 函数体的实现
    fun()
    
# 调用方式
otherFun(callable)
```

### 面向对象的是实现方式

我们已知回调函数属于函数式编程，也就是面向过程编程。在面向对象编程中，如何实现这种机制呢？特别是那些不支持函数作为参数来传递的语言（如Java，可以使用接口-匿名类实现的方式实现）。那么解决方案就是[策略模式](/design-patterns-base/14_dp-strategy.html)。策略模式通过定义一系列算法，将每个算法都封装起来，使它们之间可以相互替换。其代码框架如下：

``` python
# MVC模式 - 框架模式，面向对象的实现方式
from abc import ABCMeta, abstractmethod
# 引入ABCMeta和abstractmethod来定义抽象类和抽象方法


class Strategy(metaclass=ABCMeta):
    """算法的抽象类"""

    @abstractmethod
    def algorithm(self, *args, **kwargs):
        """定义算法"""
        pass


class StrategyA(Strategy):
    """策略A"""

    def algorithm(self, *args, **kwargs):
        print("算法A的实现...")


class StrategyB(Strategy):
    """策略B"""

    def algorithm(self, *args, **kwargs):
        print("算法B的实现...")


class Context:
    """上下文环境类"""

    def interface(self, strategy, *args, **kwargs):
        """交互接口"""
        print("回调执行前的操作")
        strategy.algorithm()
        print("回调执行后的操作")


# 调用方式
context = Context()
context.interface(StrategyA())
context.interface(StrategyB())
```

示例-迎新大会,展示才能，基于策略模式的实现方式：

```python
# MVC模式 - 迎新大会,展示才能。基于策略模式实现
from abc import ABCMeta, abstractmethod
# 引入ABCMeta和abstractmethod来定义抽象类和抽象方法


class Skill(metaclass=ABCMeta):
    """技能的抽象类"""

    @abstractmethod
    def performance(self):
        """技能表演"""
        pass


class NewEmployee:
    """公司新员工"""

    def __init__(self, name):
        self.__name = name

    def doPerformance(self, skill):
        print(self.__name + "的表演:", end="")
        skill.performance()


class Sing(Skill):
    """唱歌"""
    def performance(self):
        print("唱一首歌")


class Joke(Skill):
    """说段子"""
    def performance(self):
        print("说一搞笑段子")


class Dling(Skill):
    """拉Ukulele"""
    def performance(self):
        print("拉一曲Ukulele")


class PerformMagicTricks(Skill):
    """表演魔术"""
    def performance(self):
        print("神秘魔术")


class Skateboarding(Skill):
    """玩滑板"""
    def performance(self):
        print("酷炫滑板")


def testStrategySkill():
    helen = NewEmployee("Helen")
    helen.doPerformance(Sing())
    frank = NewEmployee("Frank")
    frank.doPerformance(Dling())
    jacky = NewEmployee("Jacky")
    jacky.doPerformance(Joke())
    chork = NewEmployee("Chork")
    chork.doPerformance(PerformMagicTricks())
    Kerry = NewEmployee("Kerry")
    Kerry.doPerformance(Skateboarding())

if __name__ == '__main__':
    testStrategySkill()

"""
Helen的表演:唱一首歌
Frank的表演:拉一曲Ukulele
Jacky的表演:说一搞笑段子
Chork的表演:神秘魔术
Kerry的表演:酷炫滑板
"""
```

值得注意的是[策略模式](/design-patterns-base/14_dp-strategy.html#类图和实现)中Context和Strategy是一种聚合关系，即Context中存有Strategy的对象；而这里的NewEmployee和Skill是一种依赖关系，NewEmployee不存Skill的对象。因为设计模式不是一成不变的，而是可以根据实现情况灵活变通的。如果你愿意，依然可以写成聚合关系，但代码将不会这么优雅。



### 模型设计要点

在设计回调的时候要注意以下几点：

1. 在支持函数式编程的语言中，可以使用回调函数实现。作为参数传递的函数称为回调函数，接收回调函数（参数）的函数称为高阶函数或包含函数。
2. 在只支持面向对象编程的语言中，可以使用策略模式来实现MVC模式。

### 优缺点

优点：

1. 避免重复代码。
2. 增强代码的可维护性。
3. 有更多定制的功能。

缺点：

1. 可能出现“回调地狱”的问题，即多重的回调函数调用。如回调函数A被高阶函数B调用，同时B本身又是一个回调函数，被函数C调用。我们应尽量避免这种多重调用的情况，否则代码的可读性很差，程序将很难维护。



## 实战应用

需求：基于回调的方式，实现需求：求一个整数数组（如[2,3,6,9,12,15,18]）中所有的偶数并且大于10的数。

```python
# MVC模式应用-假设有这样一个需求：求一个整数数组（如[2,3,6,9,12,15,18]）中所有的偶数并且大于10的数。
def isEvenNumber(num):
    return num % 2 == 0

def isGreaterThanTen(num):
    return num > 10

def getResultNumbers(fun, elements):
    newList = []
    for item in elements:
        if (fun(item)):
            newList.append(item)
    return newList

def testCallback():
    elements = [2, 3, 6, 9, 12, 15, 18]
    list1 = getResultNumbers(isEvenNumber, elements)
    list2 = getResultNumbers(isGreaterThanTen, elements)
    print("所有的偶数：", list1)
    print("大于10的数：", list2)


if __name__ == '__main__':
    testCallback()

"""
所有的偶数： [2, 6, 12, 18]
大于10的数： [12, 15, 18]
"""
```

当然，在实际项目中也可以使用Python内置的filter函数和lambda表达式：

```python
def testFilter():
    elements = [2, 3, 6, 9, 12, 15, 18]
    list1 = list(filter(lambda x: x % 2 == 0, elements))
    list2 = list(filter(lambda x: x > 10, elements))
    print("所有的偶数：", list1)
    print("大于10的数：", list2)
```



## 回调在异步中的应用

程序的执行方式有两种，一种叫同步执行，一种叫异步执行。

- 同步执行：只有前一个任务执行完毕，才能执行后一个任务；

  > 下班了，你叫同事一起去看电影，你同事说：我还有工作没做完，等我做完再去。你就一直在那等……一直到他完成了工作，才一起去看电影。

- 异步执行：前一个任务还没有执行完毕，就可以执行后一个任务（前一个任务执行完成后会收到一个通知）。

  > 下班了，你叫同事一起去看电影，你同事说：等我一会，还有点工作没完成，做完了我会告诉你，你先忙点别的。然后你就去看书或玩手机了……他完成了工作喊你一声，你俩就一起去看电影了。

前面讲的回调的应用都是基于同步执行的方式，而**回调更多的是应用在异步执行中**。回调函数在异步调用中应用得非常广泛，特别是前端的JS代码中，所有的执行结果都是通过回调函数的方式来通知的。异步执行的实现方式有两种：一种是通过多线程的方式（一个任务开一个新的线程），另一种是通过多任务的方式（如JS的异步就是通过基于任务队列的事件循环来实现的）。

**异步调用经常用在一些比较耗时的任务上，如I/O操作、网络请求等**。如下载功能就是一项非常耗时的操作（特别是大文件的下载），假设我们有多个文件需要下载。如果是同步的方式，只能等第一个文件下载完后才能下载第二个文件，而且这期间不能进行任何其他的操作。但如果是异步的方式，就可以同时下载多个文件。异步的方式下载，我们只要点一下第一个要下载的文件，再点一下第二个要下载的文件，就可以去干别的事了。我们还可以定义一个下载进度的回调函数，实时显示下载的进度；还可以定义一个下载完成的回调函数，文件下载完成后及时通知我们。

用代码模拟实现异步下载文件：

```python
# MVC模式 在异步中的应用 - 下载文件
import requests
# 引入Http请求模块
from threading import Thread
# 引入线程模块


class DownloadThread (Thread):
    """下载文件的线程"""

    # 每次写文件的缓冲大小
    CHUNK_SIZE = 1024 * 512

    def __init__(self, fileName, url, savePath, callBackProgress, callBackFinished):
        super().__init__()
        self.__fileName = fileName
        self.__url = url
        self.__savePath = savePath
        self.__callbackProgress = callBackProgress
        self.__callBackFinished = callBackFinished

    def run(self):
        readSize = 0
        r = requests.get(self.__url, stream=True)
        totalSize = int(r.headers.get('Content-Length'))
        print("[下载%s] 文件大小:%d" % (self.__fileName, totalSize))
        with open(self.__savePath, "wb") as file:
            for chunk in r.iter_content(chunk_size = self.CHUNK_SIZE):
                if chunk:
                    file.write(chunk)
                    readSize += self.CHUNK_SIZE
                    self.__callbackProgress(self.__fileName, readSize, totalSize)
        self.__callBackFinished(self.__fileName)


def testDownload():
    def downloadProgress(fileName, readSize, totalSize):
        """定义下载进度的回调函数"""
        percent = (readSize / totalSize) * 100
        print("[下载%s] 下载进度:%.2f%%" % (fileName, percent))

    def downloadFinished(fileName):
        """定义下载完成后的回调函数"""
        print("[下载%s] 文件下载完成！" % fileName)

    print("开始下载TestForDownload1.pdf......")
    downloadUrl1 = "http://pe9hg91q8.bkt.clouddn.com/TestForDownload1.pdf"
    download1 = DownloadThread("TestForDownload1", downloadUrl1, "./download/TestForDownload1.pdf", downloadProgress,
                               downloadFinished)
    download1.start()
    print("开始下载TestForDownload2.zip......")
    downloadUrl2 = "http://pe9hg91q8.bkt.clouddn.com/TestForDownload2.zip"
    download2 = DownloadThread("TestForDownload2", downloadUrl2, "./download/TestForDownload2.zip", downloadProgress,
                               downloadFinished)
    download2.start()
    print("执行其它的任务......")


if __name__ == '__main__':
    testDownload()
```

注：

1. Python默认没有requests模块，需要先安装requests模块，pip的安装命令。

   我基于python 3.x 实验：

   ```python
   # 使用配置国内镜像源
   pip install requests  -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
   # 可能需要升级pip
   python -m pip install --upgrade pip -i https://pypi.douban.com/simple
   # 安装request
   pip3 install requests 
   ```

   > 参见：
   >
   > https://blog.csdn.net/weixin_43495813/article/details/108055787
   >
   > https://www.cnblogs.com/karrya/p/10873075.html

   

2. 根据实际情况，设置下载路径。




## 应用场景

1. 在第三方库和框架中。
2. 异步执行（例如读文件、发送HTTP请求）。
3. 在需要更多通用功能的地方，更好地实现抽象（可处理各种类型的函数）。


> 摘自： 罗伟富. 《人人都懂设计模式：从生活中领悟设计模式：Python实现》. 电子工业出版社
