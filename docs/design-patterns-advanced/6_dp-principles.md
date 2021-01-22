# 七大设计原则

如果说设计模式是面向对象编程的编程思想，那么设计原则就是这些编程思想的指导总纲。SOLID原则是众多设计原则中威力最大、最广为人知的五大原则，随着时间的推移，五大原则也得到了补充，现在在面向对象设计中有七大设计原则。

## 概述

在程序设计领域起初有5大设计原则， SOLID（单一职责原则、 开放封闭原则、里氏替换原则、接口隔离原则以及依赖倒置原则的首字母缩略字）是由罗伯特·C·马丁（Robert·C·Martin）在《敏捷软件开发：原则、模式与实践》提出的，指代了面向对象编程和设计的五个基本原则。当这些原则被一起应用时，它们使得一个程序员开发一个易维护和易扩展的系统变得更加可能。这些原则能指导编程者对源码进行重构和“异味清扫"，从而使得软件清晰可读以及提高可扩展性。SOLID被典型的应用在测试驱动开发上，并且是敏捷开发以及自适应软件开发的基本原则的重要组成部分。

到现在最熟知的设计模式主要有23种，而这23种设计模式又遵循了7大原则（口诀：开口合里最单依，有的书中只提到了6大原则），7设计原则在5大原则上增加了组合/聚合原则、最少知识原则。设计模式和设计原则两者都包含了面向对象的精髓：封装、继承、多态。

```
- 开：面向扩展开，面向修改关闭
- 口：接口隔离原则
- 合：合成/聚合复用原则
- 里：里氏替换原则
- 最：迪米特法则，又叫最少知识原则
- 单：单一职责原则
- 依：依赖倒置原则
```



## 单一职责原则（SRP）

单一职责原则（Single Responsibility Principle），简称SRP。

### 核心思想

> A class should have only one reason to change.

一个类应该有且仅有一个原因引起它的变更。

例如：类T负责两个不同的职责（可以理解为功能）：职责P1，职责P2。当由于职责P1需求发生改变而需要修改类T时，可能会导致原本运行正常的职责P2功能发生故障，这就不符合单一职责原则。这时就应该将类T拆分成两个类T1、T2，使T1完成职责P1功能，T2完成职责P2功能。这样，当单独修改类T1或T2时，职责P2或P1都不会存在故障风险。

通俗来讲就是一个类只负责一项功能或一类相似的功能。当然这个“一”并不是绝对的，应该理解为一个类只负责尽可能独立的一项功能，尽可能少的职责。就好比一个人的精力、时间都是有限的，如果什么事情都做，那么什么事情都做不好；所以应该集中精力做一件事，才能把事情做好。

代表模式：迭代器模式

### 案例分析

   众所周知，动物都能运动，我们用跑来表示运动。产品经理告诉你，我们的动物只有陆生的哺乳动物，那么我们定义一个动物的类。

   ```python
   class Animal:
       """动物"""
   
       def __init__(self, name):
           self.__name = name
   
       def running(self):
           print(self.__name + "在跑...")
   
   
   Animal("猫").running()
   Animal("狗").running()
   ```

   这样定义完全没有问题，一个类只负责一项功能。但过了两天，产品经理告诉你，我们的动物不只有陆生动物，还有水生动物（如鱼类），水生动物在水里游。这个时候只能好好改代码了！我们可能会有三种写法。

   方法一：

   ```python
   class Animal:
       """动物"""
   
       def __init__(self, name, type):
           self.__name = name
           self.__type = type
   
       def running(self):
           if(self.__type == "水生"):
               print(self.__name + "在水里游...")
           else:
               print(self.__name + "在陆上跑...")
   
   
   Animal("狗", "陆生").running()
   Animal("鱼", "水生").running()
   ```

   这种写法，改起来相对快速，但在代码的方法级别就违背了单一职责原则，因为影响running这个功能的因素有两个，一个是陆地的因素，另一个是水质的因素。如果哪一天要区分是在池塘里游还是在海里游，就又得修改running方法（增加if...else...判断），这种修改对陆地上跑的动物来说，存在极大的隐患。可能哪一天程序突然出现bug，就会出现“骆驼在海里游”。

   方法二：

   ```python
   class Animal:
       """动物"""
   
       def __init__(self, name):
           self.__name = name
   
       def running(self):
           print(self.__name + "在陆上跑...")
   
       def swimming(self):
           print(self.__name + "在水里游...")
   
   
   Animal("狗").running()
   Animal("鱼").swimming()
   ```

   这种写法在代码的方法级别上是符合单一职责原则的，一个方法负责一项功能，因水质修改swimming方法不会影响陆生动物的running方法。但在类的级别上它是不符合单一职责原则的，因为它同时可以干两件事情：跑和游。而且这种写法给用户增加了麻烦，调用方需要时刻明白哪种动物是会跑的，哪种动物是会游泳的；不然就很可能会出现“狗调用了swimming方法，鱼调用了running方法”的窘境。

   方法三：

   ```python
   class TerrestrialAnimal():
       """陆生生物"""
   
       def __init__(self, name):
           self.__name = name
   
       def running(self):
           print(self.__name + "在陆上跑...")
   
   
   class AquaticAnimal():
       """水生生物"""
   
       def __init__(self, name):
           self.__name = name
   
       def swimming(self):
           print(self.__name + "在水里游...")
   
   
   TerrestrialAnimal("狗").running()
   AquaticAnimal("鱼").swimming()
   ```

   这种写法就符合单一职责原则。此时影响动物移动的因素有两个：一个是陆地的因素，另一个是水质的因素；动物对应两个职责：一个是跑，另一个是游。所以我们将动物根据不同的职责拆分成陆生生物（TerrestrialAnimal）和水生生物（AquaticAnimal）。

### 优缺点

单一职责的优点：

1. 功能单一，职责清晰。
2. 增强可读性，方便维护。

单一职责的缺点：

1. 拆分得太详细，类的数量会急剧增加。
2. 职责的度量没有统一的标准，需要根据项目实现情况而定。



## 开放封闭原则（OCP）

开放封闭原则（Open Close Principle），简称OCP。

### 核心思想

> Software entities（classes,modules,functions,etc.）should be open for extension, but closed for modification.

软件实体（如类、模块、函数等）应该对拓展开放，对修改封闭。

通俗来讲就是在一个软件产品的生命周期内，不可避免会有一些业务和需求的变化，我们在设计代码的时候应该尽可能地考虑这些变化。在增加一个功能时，应当尽可能地不去改动已有的代码；当修改一个模块时不应该影响到其他模块。

代表模式：装饰者模式

### 案例分析

我们还是以上面的动物为例，假设有这样一个场景：动物园里有很多种动物，游客希望观察每一种动物是怎样活动的。

基于上面代码，我们可能会写出如下这样的调用方式来观察动物的活动情况：

```python
class Zoo:
    """动物园"""

    def __init__(self):
        self.__animals =[
            TerrestrialAnimal("狗"),
            AquaticAnimal("鱼")
        ]

    def displayActivity(self):
        for animal in self.__animals:
            if isinstance(animal, TerrestrialAnimal):
                animal.running()
            else:
                animal.swimming()

zoo = Zoo()
zoo.displayActivity()
'''
狗在陆上跑...
鱼在水里游...
'''
```

这种写法目前是没有问题的，但如果要再加一个类型的动物（如鸟类，鸟是会飞的），这个时候就又得修改displayActivity（）方法，再增加一个if...else...判断。这显然不符合 开放封闭原则 ，因为每增加一个类别就要修改displayActivity（）法，我们要将修改关闭，这时我们就要重新设计代码，以遵循开放封闭原则的设计：

```python
from abc import ABCMeta, abstractmethod


class Animal(metaclass=ABCMeta):
    """动物"""

    def __init__(self, name):
        self._name = name

    @abstractmethod
    def moving(self):
        pass


class TerrestrialAnimal(Animal):
    """陆生生物"""

    def __init__(self, name):
        super().__init__(name)

    def moving(self):
        print(self._name + "在陆上跑...")


class AquaticAnimal(Animal):
    """水生生物"""

    def __init__(self, name):
        super().__init__(name)

    def moving(self):
        print(self._name + "在水里游...")


class BirdAnimal(Animal):
    """鸟类动物"""

    def __init__(self, name):
        super().__init__(name)

    def moving(self):
        print(self._name + "在天空飞...")


class Zoo:
    """动物园"""

    def __init__(self):
        self.__animals =[]

    def addAnimal(self, animal):
        self.__animals.append(animal)

    def displayActivity(self):
        print("观察每一种动物的活动方式：")
        for animal in self.__animals:
            animal.moving()


def testZoo():
    zoo = Zoo()
    zoo.addAnimal(TerrestrialAnimal("狗"))
    zoo.addAnimal(AquaticAnimal("鱼"))
    zoo.addAnimal(BirdAnimal("鸟"))
    zoo.displayActivity()



testZoo()

'''
观察每一种动物的活动方式：
狗在陆上跑...
鱼在水里游...
鸟在天空飞...
'''
```

重新设计后的代码，将各种类型的动物抽象出了一个基类—动物类（Animal）；同时把游（swimming）和飞（flying）的动作也抽象成了移动（moving）。这样我们每增加一种类型的动物，只要增加一个Animal的子类即可，其他代码几乎可以不用动；要修改一种类型动物的行为，只要修改对应的类即可，其他的类不受影响。这才是符合面向对象原则的设计。



## 里氏替换原则（LSP）

里氏替换原则（Liskov Substitution Principle），简称LSP。

### 核心思想

> Functions that use pointers to base classes must be able to use objects of derived classes without knowing it.

所有能引用基类的地方必须能透明地使用其子类的对象。

例如：一个类T有两个子类T1、T2，凡是能够使用T的对象的地方，就能使用T1的对象或T2的对象，这是因为子类拥有父类的所有属性和行为。

通俗来讲就是只要父类能出现的地方子类就能出现（可以用子类来替换它）。反之，子类能出现的地方父类不一定能出现（子类拥有父类的所有属性和行为，但子类拓展了更多的功能）。

### 案例分析

还是以动物为例，陆地上的动物都能在地上跑，但猴子除了能在陆地上跑还会爬树。因此我们可以为猴子单独定义一个类Monkey，并在Zoo类中增加一个观察指定动物的爬树行为的方法。

```python
class Monkey(TerrestrialAnimal):
    """猴子"""

    def __init__(self, name):
        super().__init__(name)

    def climbing(self):
        print(self._name + "在爬树，动作灵活轻盈...")

# 修改Zoo类，增加climbing方法：
class Zoo:
    """动物园"""

    def __init__(self):
        self.__animals =[]

    def addAnimal(self, animal):
        self.__animals.append(animal)

    def displayActivity(self):
        print("观察每一种动物的活动方式：")
        for animal in self.__animals:
            animal.moving()

    def monkeyClimbing(self, monkey):
        monkey.climbing()
        
        
def testZoo():
    zoo = Zoo()
    zoo.addAnimal(TerrestrialAnimal("狗"))
    zoo.addAnimal(AquaticAnimal("鱼"))
    zoo.addAnimal(BirdAnimal("鸟"))
    monkey = Monkey("猴子")
    zoo.addAnimal(monkey)
    zoo.displayActivity()
    print()
    print("观察猴子的爬树行为：")
    zoo.monkeyClimbing(monkey)


testZoo()
"""
观察每一种动物的活动方式：
狗在陆上跑...
鱼在水里游...
鸟在天空飞...
猴子在陆上跑...

观察猴子的爬树行为：
猴子在爬树，动作灵活轻盈...
"""
```

这里Zoo的addAnimal方法接受Animal类的对象，所以Animal子类的对象都能传入。但Zoo的monkeyClimbing方法只接受Monkey类的对象，当传入TerrestrialAnimal的对象时，程序将报错。这说明子类能出现的地方，父类不一定能出现。



## 接口隔离原则（ISP)

接口隔离原则（Interface Segregation Principle），简称ISP。

### 核心思想

> Clients should not be forced to depend upon interfaces that they don＇t use. Instead of one fat interface many small interfaces are preferred based on groups of methods, each one serving one submodule.

不应该强迫客户端依赖它们不使用的接口。与其使用一个胖接口（由多个方法组成的复杂接口），还不如使用许多基于方法组的小接口（多个细粒度的接口），每个方法组（每个接口）服务于一个子模块。

例如：类A通过接口interface依赖(使用)类C，类B通过接口interface依赖(使用)类D，如果接口interface对于类A和类B来说不是最小接口，则类C和类D必须去实现它们不需要的方法。（ps：这里初看，可能会有些拗口，可以见[这里](https://blog.csdn.net/qq_49529322/article/details/112726998)的例子。)

通俗来讲就是建立单一接口，不要建立庞大臃肿的接口，尽量细化接口，接口中的方法尽量少。也就是说，我们要为不同类别的类建立专用的接口，而不要试图建立一个很庞大的接口供所有依赖它的类调用。

接口尽量小，但是要有限度。当发现一个接口过于臃肿时，就要对这个接口进行适当的拆分。但是如果接口过小，则会造成接口数量过多，使设计复杂化。所以接口大小一定要适度。

### 案例分析

我们知道在生物学分类中，从高到低有界、门（含亚门）、纲、目、科、属、种七个等级。脊椎动物就是脊索动物的一个亚门，是万千动物中数量最多、结构最复杂的一个门类。哺乳动物（也称兽类）、鸟类、鱼类是脊椎动物中最重要的三个子分类；哺乳动物大都生活于陆地，鱼类都生活在水里，而鸟类大都能飞行。但这些特性并不是绝对的，如蝙蝠是哺乳动物，但它却能飞行；鲸鱼也是哺乳动物，却生活在海中；天鹅是鸟类，能在天上飞，也能在水里游，还能在地上走。所以在前面的示例中，将动物根据活动场所分为水生动物、陆生动物和飞行动物是不够准确的，因为奔跑、游泳、飞翔只是动物的一种行为，而且有些动物可能同时具有多种行为，因此应该把它们(动物行为）抽象成接口。

我们应该根据生理特征来分类，如哺乳类、鸟类、鱼类。哺乳类动物具有恒温、胎生、哺乳等生理特征；鸟类动物具有恒温、卵生、前肢成翅等生理特征；鱼类动物具有流线型体形、用鳃呼吸等生理特征。这里分别将奔跑、游泳、飞翔抽象成接口的操作就是对接口的一种细粒度拆分，可以提高程序设计的灵活性。代码的实现如下：

```python
# 接口隔离原则，Interface Segregation Principle
from abc import ABCMeta, abstractmethod


class Animal(metaclass=ABCMeta):
    """(脊椎)动物"""

    def __init__(self, name):
        self._name = name

    def getName(self):
        return self._name

    @abstractmethod
    def feature(self):
        pass

    @abstractmethod
    def moving(self):
        pass


class IRunnable(metaclass=ABCMeta):
    """奔跑的接口"""

    @abstractmethod
    def running(self):
        pass


class IFlyable(metaclass=ABCMeta):
    """飞行的接口"""

    @abstractmethod
    def flying(self):
        pass


class INatatory(metaclass=ABCMeta):
    """游泳的接口"""

    @abstractmethod
    def swimming(self):
        pass


class MammalAnimal(Animal, IRunnable):
    """哺乳动物"""

    def __init__(self, name):
        super().__init__(name)

    def feature(self):
        print(self._name + "的生理特征：恒温，胎生，哺乳。")

    def running(self):
        print("在陆上跑...")

    def moving(self):
        print(self._name + "的活动方式：", end="")
        self.running()


class BirdAnimal(Animal, IFlyable):
    """鸟类动物"""

    def __init__(self, name):
        super().__init__(name)

    def feature(self):
        print(self._name + "的生理特征：恒温，卵生，前肢成翅。")

    def flying(self):
        print("在天空飞...")

    def moving(self):
        print(self._name + "的活动方式：", end="")
        self.flying()


class FishAnimal(Animal, INatatory):
    """鱼类动物"""

    def __init__(self, name):
        super().__init__(name)

    def feature(self):
        print(self._name + "的生理特征：流线型体形，用鳃呼吸。")

    def swimming(self):
        print("在水里游...")

    def moving(self):
        print(self._name + "的活动方式：", end="")
        self.swimming()


class Bat(MammalAnimal, IFlyable):
    """蝙蝠"""

    def __init__(self, name):
        super().__init__(name)

    def running(self):
        print("行走功能已经退化。")

    def flying(self):
        print("在天空飞...", end="")

    def moving(self):
        print(self._name + "的活动方式：", end="")
        self.flying()
        self.running()


class Swan(BirdAnimal, IRunnable, INatatory):
    """天鹅"""

    def __init__(self, name):
        super().__init__(name)

    def running(self):
        print("在陆上跑...", end="")

    def swimming(self):
        print("在水里游...", end="")

    def moving(self):
        print(self._name + "的活动方式：", end="")
        self.running()
        self.swimming()
        self.flying()


class CrucianCarp(FishAnimal):
    """鲫鱼"""

    def __init__(self, name):
        super().__init__(name)


def testAnimal():
    bat = Bat("蝙蝠")
    bat.feature()
    bat.moving()
    swan = Swan("天鹅")
    swan.feature()
    swan.moving()
    crucianCarp = CrucianCarp("鲫鱼")
    crucianCarp.feature()
    crucianCarp.moving()


testAnimal()

"""
蝙蝠的生理特征：恒温，胎生，哺乳。
蝙蝠的活动方式：在天空飞...行走功能已经退化。
天鹅的生理特征：恒温，卵生，前肢成翅。
天鹅的活动方式：在陆上跑...在水里游...在天空飞...
鲫鱼的生理特征：流线型体形，用鳃呼吸。
鲫鱼的活动方式：在水里游...
"""
```

### 优缺点

优点：

1. 提高程序设计的灵活性。将接口进行细分后，多个接口可自由发展，互不干扰。
2. 提高内聚，减少对外交互。使接口用最少的方法去完成最多的事情。
3. 为依赖接口的类定制服务。只暴露给调用的类需要的方法，不需要的方法则隐藏起来。

缺点：

1. 对接口进行拆分的时候，如果接口过小，则会造成接口数量过多，使设计复杂化。



## 依赖倒置原则（DIP）

依赖倒置原则（Dependence Inversion Principle），简称DIP。

### 核心思想

> High level modules should not depend on low level modules; both should depend on abstractions. Abstractions should not depend on details. Details should depend upon abstractions.

高层模块不应该依赖低层模块，二者都该依赖其抽象。抽象不应该依赖细节，细节应该依赖抽象。高层模块就是调用端，低层模块就是具体实现类。抽象就是指接口或抽象类，细节是指具体的实现类。也就是说，我们 *只依赖抽象编程* 。

通俗来讲就是把具有相同特征或相似功能的类，抽象成接口或抽象类，让具体的实现类继承这个抽象类或实现对应的接口。抽象类（接口）负责定义统一的方法，实现类负责具体功能的实现。

代表模式：工厂模式

### 案例分析

在介绍遵循开放封闭原则（OCP）的示例代码中，我们把各种类型的动物抽象成一个抽象类Animal，并定义了统一的方法moving（），这也遵循了依赖倒置原则。同时Zoo类是一个高层模块，Zoo类中的displayActivity（）方法依赖的是动物抽象类Animal和其定义的抽象方法moving（），这就是高层模块依赖抽象而不是依赖细节的表现。

我们对这个案例进行一次更深层次的挖掘。我们知道民以食为天，动物更是如此。一说到动物吃东西，你可能立刻就会想：狗喜欢吃肉，鱼喜欢吃草，鸟喜欢吃虫子！如果让你用程序来模拟一下动物吃东西的过程，你会怎么设计你的程序呢？你可能会不假思索地写出下面这样的代码：

```python
class Dog:

    def eat(self, meat):
        pass

class Fish:

    def eat(self, grass):
        pass
 
```

如果写出这样的代码，那就糟糕了！因为这样实现会有两个问题：

1. 每一种动物，你都需要为其定义一个食物类，高度依赖于细节。
2. 每一种动物只能吃一种最喜欢的食物，这与现实相违背。如：猫不仅喜欢吃老鼠，还喜欢吃鱼；不仅鱼喜欢吃草，牛也喜欢吃草。

这个时候就应该遵循依赖倒置原则来进行设计：抽象出一个食物的抽象类（Food），动物类（Animal）应该依赖食物的抽象类（Food），而不应该依赖具体的细节（具体的食物）。我们根据这一原则来设计一下代码：

```python
# 依赖倒置原则，Dependence Inversion Principle
from abc import ABCMeta, abstractmethod


class Animal(metaclass=ABCMeta):
    """动物"""

    def __init__(self, name):
        self._name = name

    def eat(self, food):
        if(self.checkFood(food)):
            print(self._name + "进食" + food.getName())
        else:
            print(self._name + "不吃" + food.getName())

    @abstractmethod
    def checkFood(self, food):
        """检查哪种食物能吃"""
        pass


class Dog(Animal):
    """狗"""

    def __init__(self):
        super().__init__("狗")

    def checkFood(self, food):
        return food.category() == "肉类"


class Swallow(Animal):
    """燕子"""

    def __init__(self):
        super().__init__("燕子")

    def checkFood(self, food):
        return food.category() == "昆虫"


class Food(metaclass=ABCMeta):
    """食物"""

    def __init__(self, name):
        self._name = name

    def getName(self):
        return self._name

    @abstractmethod
    def category(self):
        """食物类别"""
        pass

    @abstractmethod
    def nutrient(self):
        """营养成分"""
        pass


class Meat(Food):
    """肉"""

    def __init__(self):
        super().__init__("肉")

    def category(self):
        return "肉类"

    def nutrient(self):
        return "蛋白质、脂肪"


class Worm(Food):
    """虫子"""

    def __init__(self):
        super().__init__("虫子")

    def category(self):
        return "昆虫"

    def nutrient(self):
        return "蛋白质含、微量元素"


def testFood():
    dog = Dog()
    swallow = Swallow()
    meat = Meat()
    worm = Worm()
    dog.eat(meat)
    dog.eat(worm)
    swallow.eat(meat)
    swallow.eat(worm)


testFood()

'''
狗进食肉
狗不吃虫子
燕子不吃肉
燕子进食虫子
'''
```

在这个例子中，动物被抽象出一个父类Animal，食物也抽象出一个抽象类Food。Animal不依赖于细节（具体的食物类），具体的动物（如Dog、Swallow）也不依赖于细节（具体的食物类）。就是说我们只依赖抽象编程。

### 扩展

依赖关系的传递一般有三种方式：

1. 接口传递；
2. 构造方法传递；
3. setter方法传递。



## 迪米特法则/最少知识原则（TLKP）

迪米特法则（Law of Demeter），又叫最少知识原则（The Least Knowledge Principle）。

### 核心思想

> Each unit should have only limited knowledge about other units: only units "closely" related to the current unit.Only talk to your immediate friends, don't talk to strangers.

每一个逻辑单元应该对其他逻辑单元有最少的了解：也就是说只亲近当前的对象。只和直接（亲近）的朋友说话，不和陌生人说话。用一句话来说：只与直接的朋友通信( Only talk to your immediate friends）。

> 什么是直接朋友？每个对象都会和其他对象有耦合关系（依赖、关联、组合、聚合等等），只要两个对象之间有耦合关系，那么我们就说这两个对象之间是朋友关系。其中我们称出现在成员变量、方法参数、方法返回值中的类为直接的朋友，而出现在局部变量中的类不是直接朋友，也就是说，陌生的类最好不要以局部变量的形式出现在类的内部，一个对象的“直接朋友”包括它本身（this)、它持有的成员对象、入参对象、它所创建的对象（非局部）。
>
> 例如：A类有属性B b 或 某个方法为 fun(B b) 或 某方法返回类型是 B，那么 B 就是 A 的直接朋友；同样是A类有方法为D fun(B b)，该方法用到一个 C c = new C(),也就是说C以局部变量的方式出现，那么C就是陌生的类，不是直接朋友。
>

通俗来说就是一个类对自己依赖类知道的越少越好，对于被依赖的类不管多么复杂，都尽量将逻辑封装在类的内部，对外提供public方法。

核心思想：迪米特法则的核心观念就是类间解耦，也就降低类之间的耦合，只有类处于弱耦合状态，类的复用率才会提高。所谓降低类间耦合，实际上就是尽量减少对象之间的交互，如果两个对象之间不必彼此直接通信，那么这两个对象就不应当发生任何直接的相互作用，如果其中的一个对象需要调用另一个对象的某一个方法的话，可以通过第三者转发这个调用。简言之，就是通过引入一个合理的第三者来降低现有对象之间的耦合度。但是这样会引发一个问题，有可能产生大量的中间类或者跳转类，导致系统的复杂性提高，可维护性降低。

### 案例分析

假设类A中有类B的对象，类B中有类C的对象，调用方有一个类A的对象a，这时如果要访问C对象的属性，不要采用类似下面的写法：

```python
a.getB().getC().getProperties()
```

而应该是：

```
a.getCProperties()
```

至于getCProperties怎么实现是类A要负责的事情，因为调用方应该只和直接的对象a进行交互，不访问不了解的类C的对象。

代表模式：外观模式、中介者模式



## 合成/聚合复用原则（CARP）

合成/聚合复用原则（Composite/Aggregate Reuse Principle，CARP），一般也叫合成复用原则(Composite Reuse Principle, CRP)。

### 核心思想

> Use composition/aggregation instead of inheritance for reuse purposes.

尽量使用合成/聚合，而不是通过继承达到复用的目的。

例如：A类和B类，B类可能仅仅想要使用A类的两个方法，如果通过继承的方式实现，首先耦合性很高，其次这种继承没必要，甚至会带来别的麻烦。所以尽量使用合成或者聚合的方式。

通俗来说就是在一个新的对象里面使用一些已有的对象，使之成为新对象的一部分；新的对象通过向内部持有的这些对象的委派达到复用已有功能的目的，而不是通过继承来获得已有的功能。

### 聚合(Aggregate)的概念

聚合表示一种弱的"拥有"关系，一般表现为松散的整体和部分的关系，其实，所谓整体和部分也可以是完全不相关的。例如A对象持有B对象（通常是私有变量，通过setter传递），B对象并不是A对象的一部分，也就是B对象的生命周期是B对象自身管理，和A对象不相关。

代表模式：策略模式

### 合成(Composite)的概念

合成表示一种强的"拥有"关系，一般表现为严格的整体和部分的关系，部分和整体的生命周期是一样的。例如，B直接实例化在A对象里面，当A对象创建的时候，就已经有一个实例化的对象B，可以直接调用B的方法。



## 总结

[关于设计原则的理解](/design-patterns-advanced/7_dp-think4principles.html)

参考：

> 罗伟富. 《人人都懂设计模式：从生活中领悟设计模式：Python实现》. 电子工业出版社
>
> [设计模式的7大原则（设计模式6大设计原则增强版）](https://blog.csdn.net/belvine/article/details/104689175/)
>
> [设计模式是五大或六大还是七大原则？](https://blog.csdn.net/cadenzasolo/article/details/50565204)
>
> [七大设计原则](https://www.jianshu.com/p/3a0e9fba3a41)

