# Python中的装饰器

在Python中一切都是对象：一个实例是一个对象，一个函数也是一个对象，甚至类本身也是一个对象。在Python中，可以将一个函数作为参数传递给另一个函数，也可以将一个类作为参数传递给一个函数。

## Python中函数的特殊功能

在Python中，函数可以作为一个参数传递给另一个函数，也可以在函数中返回一个函数，还可以在函数内部再定义函数。这是Python和很多静态语言不同的地方，这一特性给它带来了很多新奇的功能。

```python
# Python 中的装饰器 - 修饰函数


def func(num):
    """定义内部函数并返回"""

    def firstInnerFunc():
        return "这是第一个内部函数"

    def secondInnerFunc():
        return "这是第二个内部函数"

    if num == 1:
        return firstInnerFunc
    else:
        return secondInnerFunc


if __name__ == "__main__":
    print(func(1))
    print(func(2))
    print(func(1)())
    print(func(2)())
    print()
    firstFunc = func(1)
    secondFunc = func(2)
    print(firstFunc)
    print(secondFunc)
    print(firstFunc())
    print(secondFunc())

'''
<function func.<locals>.firstInnerFunc at 0x0000018EE8332598>
<function func.<locals>.secondInnerFunc at 0x0000018EE8332620>
这是第一个内部函数
这是第二个内部函数

<function func.<locals>.firstInnerFunc at 0x0000018EE8332598>
<function func.<locals>.secondInnerFunc at 0x0000018EE83326A8>
这是第一个内部函数
这是第二个内部函数
'''
```

注意代码中，两种不同方式的调用代码是等同的的。



## 装饰器修饰函数

装饰器的作用：包装一个函数，并改变（拓展）它的行为。

我们以一个场景为例，看一下Python中装饰器是如何实现的。假设有这样一个需求：我们希望每一个函数在被调用之前和被调用之后，记录一条日志。

```python
# Python 中的装饰器 - 修饰函数,记录日志的装饰器

import logging
logging.basicConfig(level=logging.INFO)


def loggingDecorator(func):
    """记录日志的装饰器"""

    def wrapperLogging(*args, **kwargs):
        logging.info("开始执行 %s()... " % func.__name__)
        func(*args, **kwargs)
        logging.info("%s() 执行完成... " % func.__name__)
    return wrapperLogging


def showInfo(*args, **kwargs):
    """
    :param args: *args 表示把传进来的位置参数都装在元组 args 里面
    :param kwargs:  **kwargs 就是针对关键字参数和字典
    :return:
    """
    print("这是一个测试函数，参数: ", args, kwargs)


@loggingDecorator
def showSum(a, b):
    print("%d、%d 中的和是：%d" % (a, b, a + b))


if __name__ == "__main__":
    decoratedShowInfo = loggingDecorator(showInfo)
    decoratedShowInfo('arg1', 'arg2', kwarg1=1, kwarg2=2)
    
    showSum(777, 3)

'''
这是一个测试函数，参数:  ('arg1', 'arg2') {'kwarg1': 1, 'kwarg2': 2}
777、3 中的和是：780
INFO:root:开始执行 showInfo()... 
INFO:root:showInfo() 执行完成... 
INFO:root:开始执行 showSum()... 
INFO:root:showSum() 执行完成... 
'''
```

我们在loggingDecorator中定义了一个内部函数wrapperLogging，用于在传入的函数中执行前后记录日志，一般称这个函数为包装函数，并在最后返回这个函数。我们称loggingDecorator为装饰器，定义这个装饰器函数之后，就可以将其应用于所有希望记录日志的函数。

Python有更简单的方式，使用@decorator语法，让装饰器类型的代码调用更简洁一些。示例代码中`@loggingDecorator`表示用loggingDecorator装饰器来修饰showSum函数，在调用时，只需要写一行代码调用。

### python的 * 和 **

python中的 `*` 和 `**` 使用分两种情况：

1. 调用函数时使用 \* 和 \**
   假设有函数  def test(a, b, c)
   - test( \* args)：\* 的作用其实就是把序列 args 中的每个元素，当作位置参数传进去。比如上面这个代码，如果 args 等于 (1,2,3) ，那么这个代码就等价于 test(1, 2, 3) 。
   - test(\** kwargs)：\** 的作用则是把字典 kwargs 变成关键字参数传递。比如上面这个代码，如果 kwargs 等于 {‘a’:1,’b’:2,’c’:3} ，那这个代码就等价于 test(a=1,b=2,c=3) 。
2. 定义函数参数时使用\* 和 \**
   def test(\* args)：定义函数参数时 * 的含义又要有所不同，在这里 *args 表示把传进来的位置参数都装在元组 args 里面。比如说上面这个函数，调用 test(1, 2, 3) 的话， args 的值就是 (1, 2, 3) 。:
   def test(\** kwargs): 类似的，\** 就是针对关键字参数和字典的了。 调用 test(a=1,b=2,c=3) 的话， kwargs 的值就是 {‘a’:1,’b’:2,’c’:3} 了。

 

## 装饰器修饰类

```python
# Python 中的装饰器 - 修饰类


class ClassDecorator:
    """类装饰器，记录一个类被实例化的次数"""

    def __init__(self, func):
        self.__numOfCall = 0
        self.__func = func

    def __call__(self, *args, **kwargs):
        self.__numOfCall += 1
        obj = self.__func(*args, *kwargs)
        print("创建%s的第%d个实例：%s" % (self.__func.__name__, self.__numOfCall, id(obj)))
        return obj


@ClassDecorator
class MyClass:

    def __init__(self, name):
        self.__name = name

    def getName(self):
        return self.__name


if __name__ == "__main__":
    tony = MyClass("Tony")
    karry = MyClass("Karry")
    print(id(tony))
    print(id(karry))


''' 输出结果
创建MyClass的第1个实例：2170482902240
创建MyClass的第2个实例：2170482901848
2170482902240
2170482901848
'''

```

这里ClassDecorator是类装饰器，记录一个类被实例化的次数。其修饰一个类和修饰一个函数的用法是一样的，只需在定义类时@ClassDecorator即可。

## Python装饰器与装饰模 式的区别与联系

| 区别点     | Python装饰器                                                 | 装饰模式                   |
| ---------- | ------------------------------------------------------------ | -------------------------- |
| 设计思想   | 函数式编程思想，也就是面向过程式的思想                       | 面向对象的编程思想         |
| 修饰的对象 | 可以修饰一个函数，也可以修饰一个类                           | 修饰的是某个类中的指定方法 |
| 影响的范围 | 修斯一个函数时，对这个函数的所有调用都起效；修饰一个类时，对这个类所有实例都起效 | 只对修饰的这一个对象起效   |

 联系：设计思想相似，都是为了达到更好的扩展性，以及在不需要做太多代码变动的前提下，增加额外的功能。
