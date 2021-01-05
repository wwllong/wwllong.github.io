#  访问模式

## 什么是访问模式

> Represent an operation to be performed on the elements of an object structure. Visitor lets you define a new operation without changing the classes of the elements on which it operates.
>

封装一些作用于某种数据结构中各元素的操作，它可以在不改变数据结构的前提下定义作用于这些元素的新的操作。



## 访问模式的设计思想

访问模式的核心思想是：**可以在不改变数据结构的前提下定义作用于这些元素的新操作**。**将数据结构和操作（或算法）进行解耦，而且能更方便地拓展新的操作**。



## 从生活中领悟简单访问模式

作者以不同读者看《从生活的角度解读设计模式》有不同的感悟，正所谓一千个读者一千哈姆雷特为例，向我们说明访问模式：

```python
# 访问模式 - 一千个读者一千哈姆雷特
from abc import ABCMeta, abstractmethod
# 引入ABCMeta和abstractmethod来定义抽象类和抽象方法


class DesignPatternBook:
    """《从生活的角度解读设计模式》一书"""

    def getName(self):
        return "《从生活的角度解读设计模式》"


class Reader(metaclass=ABCMeta):
    """访问者，也就是读者"""

    @abstractmethod
    def read(self, book):
        pass


class Engineer(Reader):
    """工程师"""

    def read(self, book):
        print("技术狗读%s一书后的感受：能抓住模式的核心思想，深入浅出，很有见地！" % book.getName())


class ProductManager(Reader):
    """产品经理"""

    def read(self, book):
        print("产品经理读%s一书后的感受：配图非常有趣，文章很有层次感！" % book.getName())


class OtherFriend(Reader):
    """IT圈外的朋友"""

    def read(self, book):
        print("IT圈外的朋友读%s一书后的感受：技术的内容一脸懵逼，但故事很精彩，像是看小说或是故事集！"
              % book.getName())


def testBook():
    book = DesignPatternBook()
    fans = [Engineer(), ProductManager(), OtherFriend()]
    for fan in fans:
        fan.read(book)


if __name__ == '__main__':
    testBook()

"""
技术狗读《从生活的角度解读设计模式》一书后的感受：能抓住模式的核心思想，深入浅出，很有见地！
产品经理读《从生活的角度解读设计模式》一书后的感受：配图非常有趣，文章很有层次感！
IT圈外的朋友读《从生活的角度解读设计模式》一书后的感受：技术的内容一脸懵逼，但故事很精彩，像是看小说或是故事集！
"""
```

在示例中，同样内容的一本书，不同类型的读者读到了不同的味道。这里读者和书是两类事物，虽有联系，却是比较弱的联系，因此我们将其分开处理。这种方式在程序中叫访问者模式，简称访问模式。在故事剧情中，读者就是访问者，书就是被访问的对象，阅读是访问的行为。



## 访问模式的框架模型

对示例代码进一步重构和优化，抽象出访问模式的框架：

### 类图和代码实现

![访问模式框架类](./imgs/visitor_mode_frame.png)

代码实现：

```python
# 访问模式 - 代码框架
from abc import ABCMeta, abstractmethod
# 引入ABCMeta和abstractmethod来定义抽象类和抽象方法


class DataNode(metaclass=ABCMeta):
    """数据结构类"""

    def accept(self, visitor):
        """接受访问者的访问"""
        visitor.visit(self)


class Visitor(metaclass=ABCMeta):
    """访问者"""

    @abstractmethod
    def visit(self, data):
        """对数据对象的访问操作"""
        pass


class ObjectStructure:
    """数据结构的管理类，也是数据对象的一个容器，可遍历容器内的所有元素"""

    def __init__(self):
        self.__datas = []

    def add(self, dataElement):
        self.__datas.append(dataElement)

    def action(self, visitor):
        """进行数据访问的操作"""
        for data in self.__datas:
            data.accept(visitor)

```

模式框架代码里Visitor的访问方法只有一个visit（），是因为Python不支持方法的重载。在一些静态语言（如Java、C++）中，应该有多个方法，针对每一个DataNode子类定义一个重载方法（如类图中的定义）。

DataNode：数据节点，可接受（accept）访问者的访问，如示例中的DesignPatternBook；DataNodeA和DataNodeB是它的具体实现类。

Visitor：访问者类，可访问（visit）具体的对象，如上面示例中的Reader。

ObjectStructure：数据结构的管理类，也是数据对象的一个容器，可遍历容器内的所有元素。



以下就是示例基于框架类图实现：

```python
# 访问模式 - 一千个读者一千哈姆雷特,基于框架实现
from visitor_frame import DataNode, Visitor, ObjectStructure


class DesignPatternBook(DataNode):
    """《从生活的角度解读设计模式》一书"""

    def getName(self):
        return "《从生活的角度解读设计模式》"


class Engineer(Visitor):
    """工程师"""

    def visit(self, book):
        print("技术狗读%s一书后的感受：能抓住模式的核心思想，深入浅出，很有见地！" % book.getName())


class ProductManager(Visitor):
    """产品经理"""

    def visit(self, book):
        print("产品经理读%s一书后的感受：配图非常有趣，文章很有层次感！" % book.getName())


class OtherFriend(Visitor):
    """IT圈外的朋友"""

    def visit(self, book):
        print("IT圈外的朋友读%s一书后的感受：技术的内容一脸懵逼，但故事很精彩，像是看小说或是故事集！"
              % book.getName())


def testVisitBook():
    book = DesignPatternBook()
    objMgr = ObjectStructure()
    objMgr.add(book)
    objMgr.action(Engineer())
    objMgr.action(ProductManager())
    objMgr.action(OtherFriend())


if __name__ == '__main__':
    testVisitBook()

"""
技术狗读《从生活的角度解读设计模式》一书后的感受：能抓住模式的核心思想，深入浅出，很有见地！
产品经理读《从生活的角度解读设计模式》一书后的感受：配图非常有趣，文章很有层次感！
IT圈外的朋友读《从生活的角度解读设计模式》一书后的感受：技术的内容一脸懵逼，但故事很精彩，像是看小说或是故事集！
"""
```



### 设计要点

访问模式中主要有三个角色，在设计访问模式时要找到并区分这些角色：

1. **访问者**（Visitor）：负责对数据节点进行访问和操作。
2. **数据节点**（DataNode）：即要被操作的数据对象。
3. **对象结构**（ObjectStructure）：数据结构的管理类，也是数据对象的一个容器，可遍历容器内的所有元素。



### 访问模式优缺点

优点：

1. 将数据和操作（算法）分离，降低了耦合度。将有关元素（数据）对象的访问行为集中到一个访问者对象中，而不是分散在一个个的元素类中，类的职责更加清晰。
2. 增加新的访问操作很方便。使用访问模式，增加新的访问操作就意味着增加一个新的具体访问者类，实现简单，无须修改源代码，符合“**开闭原则**”。
3. 让用户能够在不修改现有元素类层次结构的情况下，定义作用于该层次结构的操作。

缺点：

1. 增加新的数据类很困难。在访问模式中，每增加一个新的元素类都意味着要在抽象访问者角色中增加一个新的抽象操作，并在每一个具体访问者类中增加相应的具体操作，这违背了“开闭-原则”的要求。
2. 破坏数据对象的封装性。访问模式要求访问者对象能够访问并调用每一个元素的操作细节，这意味着元素对象有时候必须暴露一些自己的内部操作和内部状态，否则无法供访问者访问。



## 实战应用
假设宠物店中有N只猫和M只狗。我们要进行下面这3个操作：
（1）计算在这些宠物中雌猫、雄猫、雌狗、雄狗的数量。
（2）计算猫的平均体重和狗的平均体重。
（3）找出年龄最大的猫和狗。

这时候，如果要在猫和狗的对象上添加这些操作，将会增加非常多的方法而“污染”原有的对象，而且这些操作的拓展性也将非常差。这时访问模式是解决这个问题的最好方法，我们一起看一下具体的实现：

```python
# 访问模式应用 -- 猫和狗的问题
from visitor_frame import DataNode, Visitor, ObjectStructure


class Animal(DataNode):
    """动物类"""

    def __init__(self, name, isMale, age, weight):
        self.__name = name
        self.__isMale = isMale
        self.__age = age
        self.__weight = weight

    def getName(self):
        return self.__name

    def isMale(self):
        return self.__isMale

    def getAge(self):
        return self.__age

    def getWeight(self):
        return self.__weight


class Cat(Animal):
    """猫"""

    def __init__(self, name, isMale, age, weight):
        super().__init__(name, isMale, age, weight)

    def speak(self):
        print("miao~")


class Dog(Animal):
    """狗"""

    def __init__(self, name, isMale, age, weight):
        super().__init__(name, isMale, age, weight)

    def speak(self):
        print("wang~")


class GenderCounter(Visitor):
    """性别统计"""

    def __init__(self):
        self.__maleCat = 0
        self.__femaleCat = 0
        self.__maleDog = 0
        self.__femaleDog = 0

    def visit(self, data):
        if isinstance(data, Cat):
            if data.isMale():
                self.__maleCat += 1
            else:
                self.__femaleCat += 1
        elif isinstance(data, Dog):
            if data.isMale():
                self.__maleDog += 1
            else:
                self.__femaleDog += 1
        else:
            print("Not support this type")

    def getInfo(self):
        print("%d只雄猫，%d只雌猫，%d只雄狗，%d只雌狗。"
              % (self.__maleCat, self.__femaleCat, self.__maleDog, self.__femaleDog))


class WeightCounter(Visitor):
    """体重的统计"""

    def __init__(self):
        self.__catNum = 0
        self.__catWeight = 0
        self.__dogNum = 0
        self.__dogWeight = 0

    def visit(self, data):
        if isinstance(data, Cat):
            self.__catNum +=1
            self.__catWeight += data.getWeight()
        elif isinstance(data, Dog):
            self.__dogNum += 1
            self.__dogWeight += data.getWeight()
        else:
            print("Not support this type")

    def getInfo(self):
        print("猫的平均体重是：%0.2fkg， 狗的平均体重是：%0.2fkg" %
              ((self.__catWeight / self.__catNum),(self.__dogWeight / self.__dogNum)))


class AgeCounter(Visitor):
    """年龄统计"""

    def __init__(self):
        self.__catMaxAge = 0
        self.__dogMaxAge = 0

    def visit(self, data):
        if isinstance(data, Cat):
            if self.__catMaxAge < data.getAge():
                self.__catMaxAge = data.getAge()
        elif isinstance(data, Dog):
            if self.__dogMaxAge < data.getAge():
                self.__dogMaxAge = data.getAge()
        else:
            print("Not support this type")

    def getInfo(self):
        print("猫的最大年龄是：%s，狗的最大年龄是：%s" % (self.__catMaxAge, self.__dogMaxAge))


def testAnimal():
    animals = ObjectStructure()
    animals.add(Cat("Cat1", True, 1, 5))
    animals.add(Cat("Cat2", False, 0.5, 3))
    animals.add(Cat("Cat3", False, 1.2, 4.2))
    animals.add(Dog("Dog1", True, 0.5, 8))
    animals.add(Dog("Dog2", True, 3, 52))
    animals.add(Dog("Dog3", False, 1, 21))
    animals.add(Dog("Dog4", False, 2, 25))
    genderCounter = GenderCounter()
    animals.action(genderCounter)
    genderCounter.getInfo()
    print()

    weightCounter = WeightCounter()
    animals.action(weightCounter)
    weightCounter.getInfo()
    print()

    ageCounter = AgeCounter()
    animals.action(ageCounter)
    ageCounter.getInfo()


if __name__ == '__main__':
    testAnimal()

"""
1只雄猫，2只雌猫，2只雄狗，2只雌狗。

猫的平均体重是：4.07kg， 狗的平均体重是：26.50kg

猫的最大年龄是：1.2，狗的最大年龄是：3
"""
```



## 应用场景

1. 对象结构中包含的对象类型比较少，而且这些类需求比较固定，很少改变，但经常需要在此对象结构上定义新的操作。
2. 一个对象结构包含多个类型的对象，希望对这些对象实施一些依赖其具体类型的操作。在访问模式中针对每一种具体的类型都提供了一个访问操作，不同类型的对象可以有不同的访问操作。
3. 需要对一个对象结构中的对象进行很多不同的并且不相关的操作，需要避免让这些操作“污染”这些对象的类，也不希望在增加新操作时修改这些类。访问模式使得我们可以将相关的访问操作集中起来定义在访问者类中，对象结构可以被多个不同的访问者类所使用，将对象本身与对象的访问操作分离。

>  摘自： 罗伟富. 《人人都懂设计模式：从生活中领悟设计模式：Python实现》. 电子工业出版社