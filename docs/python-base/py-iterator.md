# Python中的迭代器

在说Python的迭代器之前，不得不说说迭代模式。

迭代模式提供一种顺序访问容器对象中各个元素的方法，而又不需要暴露该对象的内部实现。迭代器（Iterator）是按照一定的顺序对一个或多个容器中的元素从前往后遍历的一种机制，如对数组的遍历就是一种迭代遍历。



## 可迭代对象和生成器

Python是一种简洁明了的语言，迭代器已经融入其语言本身的特性了，Python中的for循环本身就是一个迭代的过程，也是最简单易用的迭代方式。可以直接作用于for循环的数据类型有以下两种：

- 集合数据类型，如list、tuple、dict、set、str等。
- 生成器（Generator），包括（）语法定义的生成器和带yield的generator函数。

这些可以直接作用于for循环的对象统称为可迭代对象（Iterable）。

``` python
# 使用（）定义生成器
def gen():
    """0-9的平方数"""
    return (x * x for x in range(10))


# 使用yield定义generator函数
def fibonacci(maxNum):
    """斐波那契数列的生成器"""
    a = b = 1
    for i in range(maxNum):
        yield a
        a, b = b, a + b

if __name__ == "__main__":
    gen = gen()
    for i in gen:
        print(i, end="\t")
    print()

    fib = fibonacci(10)
    for n in fib:
        print(n, end="\t")
    print()
    
	# 内置容器的for循环
    arr = [x * x for x in range(10)]
    for e in arr:
        print(e, end="\t")
    print()
    
"""
0	1	4	9	16	25	36	49	64	81	
1	1	2	3	5	8	13	21	34	55	
0	1	4	9	16	25	36	49	64	81	
"""
```

关于yield的作用：https://www.jianshu.com/p/9dd355ab4e5d

生成器（Generator）不但可以作用于for循环，还可以被next()函数不断调用并返回下一个值，直到最后抛出StopIteration错误，表示无法继续返回下一个值。可以被next（）函数调用并不断返回下一个值的对象称为迭代器（Iterator）。

由此可见，***Iterator对象实际上是遵循了迭代器模式的设计思想***。



## Iterable和Iterator的区别

1. 可以使用isinstance()来判断一个对象是否为Iterable对象或Iterator对象（可迭代对象和迭代器对象）

``` python
from collections import Iterable, Iterator
# 引入 Iterable  和 Iterator

def testIsIterator():
    print("是否为Iterable对象：")
    print(isinstance([], Iterable))  # true
    print(isinstance({}, Iterable))  # true
    print(isinstance((1, 2, 3), Iterable))  # true
    print(isinstance([1, 2, 3], Iterable))  # true
    print(isinstance("string", Iterable))  # true
    print(isinstance(gen, Iterable))  # true
    print(isinstance(fibonacci(10), Iterable))  # true
    print("是否为Iterator对象：")
    print(isinstance([], Iterator))  # False
    print(isinstance({}, Iterator))  # False
    print(isinstance((1, 2, 3), Iterator))  # False
    print(isinstance([1, 2, 3], Iterator))  # False
    print(isinstance("string", Iterator))  # False
    print(isinstance(gen, Iterator))  # true
    print(isinstance(fibonacci(10), Iterator))  # true
    print(type((1, 2, 3)))  # <class 'tuple'>
    print(type(gen))  # <class 'generator'>
```


2. Iterator对象可以被next（）调用，直到最后抛出StopIteration错误。Iterable对象可以用iter（）转换为Iterator对象。

```python
def testNextItem():
    print("将Iterable对象转为Iterator对象：")
    l = [1, 2, 3]
    itrL = iter(l)
    print(next(itrL))
    print(next(itrL))
    print(next(itrL))

    print("next()函数遍历迭代器元素：")
    fib = fibonacci(4)
    print(next(fib))
    print(next(fib))
    print(next(fib))
    print(next(fib))
    print(next(fib))

"""
将Iterable对象转为Iterator对象：
1
2
3
next()函数遍历迭代器元素：
1
1
2
3
 line 57, in testNextItem print(next(fib))
StopIteration
"""
```

## 自定义类实现Iterable和Iterator

1. 要使自定义的类具有Iterable属性，需要实现\_\_iter\_\_方法。
2. 要使自定义的类具有Iterator属性，需要实现\_\_iter\_\_和\_\_next\_\_方法。

``` python
# 自定义类实现 Iterable 和 Iterator
from collections import Iterable, Iterator


class NumberSequence:
    """生成一个间隔为step的数字系列"""

    def __init__(self, init, step, max = 100):
        self.__data = init
        self.__step = step
        self.__max = max

    def __iter__(self):
        return self

    def __next__(self):
        if(self.__data < self.__max):
            tmp = self.__data
            self.__data += self.__step
            return tmp
        else:
            raise StopIteration


def testNumberSequence():
    numSeq = NumberSequence(0, 5, 20)
    print(isinstance(numSeq, Iterable))
    print(isinstance(numSeq, Iterator))
    for n in numSeq:
        print(n, end="\t")


if __name__ == "__main__":
    testNumberSequence()

"""
True
True
0	5	10	15	
"""
```



## 总结

- 生成器既是Iterable对象，也是Iterator对象。
- 列表（list）、字典（dict）、元组（tuple）、字符串是Iterable对象，却不是Iterator对象；集合（Set）既是Iterable对象，也是Iterator对象。
- Iterator对象可以被next()函数不断调用并返回下一个值，直到最后抛出StopIteration错误，表示无法继续返回下一个值。
- Iterable对象可以用iter（）转换为Iterator对象。
- Iterator对象也是Iterable类型，Iterator对象和Iterable对象都作用于for循环。

