# Python中new、init和call的用法

## 概述

关于类创建对象的过程离不开new、init、call三个方法，以下是对三个方法的大概总结：

- \_\_new\_\_负责对象的创建，而\_\_init\_\_负责对象的初始化（正常创建对象的过程,会先后调用这两个方法）；
- \_\_new\_\_是一个类方法，而\_\_init\_\_和\_\_call\_\_是一个对象方法；
- \_\_call\_\_声明这个类的对象是可调用的（callable）。

```python
class ClassA:

    def __new__(cls):
        print("ClassA.__new__")
        return super().__new__(cls)

    def __init__(self):
        print("ClassA.__init__")

 if __name__ == "__main__":
    a = ClassA()
    a("arg1", "arg2")
 
''' 
ClassA.__new__
ClassA.__init__
ClassA.__call__args ('arg1', 'arg2')
'''
```

## \_\_new\_\_方法

\_\_new\_\_方法负责对象的创建，它是一个构造函数，需要返回一个实例。如果没有返回实例，创建的对象会被判定为`None`。

``` python
class ClassB:

    def __new__(cls):
        print("ClassB.__new__")
        # return super().__new__(cls)

    def __init__(self):
        print("ClassB.__init__")


if __name__ == "__main__":
    b = ClassB()
    print(b)

""" 
ClassB.__new__
None
"""
```

注意，当我们没有返回一个实例的时候，并不会调用\_\_init\_\_方法。

此外，返回它还可以返回一个其他的对象，但是在实际开发中要杜绝这种写法，因为当出现问题的时候跟踪就变得很困难。

```python
class ClassB:

    def __new__(cls):
        print("ClassB.__new__")
        return ClassA()
        # return super().__new__(cls)

    def __init__(self):
        print("ClassB.__init__")


if __name__ == "__main__":
    b = ClassB()
    print(type(b))
    
"""
ClassB.__new__
ClassA.__new__
ClassA.__init__
<class 'others.ClassA.ClassA'>
"""
```


## \_\_init\_\_方法

\_\_init\_\_是一个初始化函数，负责对\_\_new\_\_实例化的对象进行初始化，**即负责对象状态的更新和属性的设置**。因此它不允许有返回值（隐式返回`None`）。

```python
class ClassC:

    def __init__(self):
        print("ClassC.__init__")
        return 1.0


if __name__ == "__main__":
    c = ClassC()
    
"""
TypeError: __init__() should return None, not 'float'
"""
```

注意：\_\_init\_\_方法中除了定义的self参数，其他参数都必须与\_\_new\_\_方法中除cls参数外的参数保持一致或者等效，否则无法初始化对象。\_\_new\_\_方法返回的实例对象实际上被赋值给了\_\_init\_\_的self参数。

```python
class ClassC:

    def __new__(cls, *args, **kwargs):
        print("new", args, kwargs)
        self = super().__new__(cls)
        print(self)
        return self

    def __init__(self, *args, **kwargs):
        print("init", args, kwargs)
        print(self)

"""
new ('arg1', 'arg2') {'a': 1, 'b': 2}
<__main__.ClassC object at 0x000001885AC17880>
init ('arg1', 'arg2') {'a': 1, 'b': 2}
<__main__.ClassC object at 0x000001885AC17880>
"""
```



## 对象创建的过程

从上面可以看出，一个对象从创建到被调用的大致过程：

（1）\_\_new\_\_是我们通过类名进行实例化对象时自动调用的；

（2）\_\_init\_\_是在每一次实例化对象之后调用的；

（3）\_\_new\_\_方法创建一个实例之后返回这个实例对象，并将其传递给\_\_init\_\_方法的self参数。



## \_\_call\_\_方法

\_\_call\_\_的作用就是声明这个类的对象是可调用的（callable）。

那什么是可调用的（callable）？在Python中的类中一个内建函数callable。如果callable的对象参数显示为可调用，则返回True，否则返回False。如果返回True，则调用仍然可能失败；但如果为False，则调用对象永远不会成功。我们平时自定义的函数、内置函数和类都属于可调用对象，只要是可以把一对括号`（）`应用到某个对象身上时，都可称之为可调用对象。**callable为True的对象，我们就能像使用函数一样使用它。**

``` python
def funTest(name):
    print("This is test function, name", name)


if __name__ == "__main__":
    print(callable(filter))
    print(callable(max))
    print(callable(object))
    print(callable(funTest))
    var = "Test"
    print(callable(var))
    funTest("Python")

"""
True
True
True
True
False
This is test function, name Python
"""
```

即实现\_\_call\_\_方法之后，用callable调用这个类的对象时，结果为True。

``` python
class ClassE:
    pass


class ClassE2:

    def __call__(self, *args):
        print("This is __call__ function,args",args)


if __name__ == "__main__":
    e = ClassE()
    print(callable(e))
    e2 = ClassE2()
    print(callable(e2))
    e2("arg1","arg2")


"""
False
True
This is __call__ function,args ('arg1', 'arg2')
"""

```

e2 是 ClassE2的实例对象，同时还是可调用对象，因此就可以像调用函数一样调用它。

