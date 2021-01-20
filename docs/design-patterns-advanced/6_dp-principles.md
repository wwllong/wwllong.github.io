# 关于设计原则的思考

如果说设计模式是面向对象编程的编程思想，那么设计原则就是这些编程思想的指导总纲。SOLID原则是众多设计原则中威力最大、最广为人知的五大原则，除SOLID原则外，还有一些更为简单实用的原则。

## SOLID原则

SOLID是面向对象设计（OOD）的五大基本原则的首字母缩写组合，由俗称“鲍勃大叔”的RobertC.Martin在《敏捷软件开发：原则、模式与实践》一书中提出来。这些原则结合在一起能够指导程序员开发出易于维护和扩展的软件。这五大原则分别是：S—单一职责原则，O—开放封闭原则，L—里氏替换原则，I—接口隔离原则，D—依赖倒置原则。

### 单一职责原则（SRP）

单一职责原则（Single Responsibility Principle），简称SRP。

#### 核心思想

> A class should have only one reason to change.

一个类应该有且仅有一个原因引起它的变更。

例如：类T负责两个不同的职责（可以理解为功能）：职责P1，职责P2。当由于职责P1需求发生改变而需要修改类T时，可能会导致原本运行正常的职责P2功能发生故障，这就不符合单一职责原则。这时就应该将类T拆分成两个类T1、T2，使T1完成职责P1功能，T2完成职责P2功能。这样，当单独修改类T1或T2时，职责P2或P1都不会存在故障风险。

通俗来讲就是一个类只负责一项功能或一类相似的功能。当然这个“一”并不是绝对的，应该理解为一个类只负责尽可能独立的一项功能，尽可能少的职责。就好比一个人的精力、时间都是有限的，如果什么事情都做，那么什么事情都做不好；所以应该集中精力做一件事，才能把事情做好。

#### 案例分析

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

#### 优缺点

单一职责的优点：

1. 功能单一，职责清晰。
2. 增强可读性，方便维护。

单一职责的缺点：

1. 拆分得太详细，类的数量会急剧增加。
2. 职责的度量没有统一的标准，需要根据项目实现情况而定。



### 开放封闭原则（OCP）

开放封闭原则（Open Close Principle），简称OCP。

#### 核心思想

> Software entities（classes,modules,functions,etc.）should be open for extension, but closed for modification.

软件实体（如类、模块、函数等）应该对拓展开放，对修改封闭。

通俗来讲就是在一个软件产品的生命周期内，不可避免会有一些业务和需求的变化，我们在设计代码的时候应该尽可能地考虑这些变化。在增加一个功能时，应当尽可能地不去改动已有的代码；当修改一个模块时不应该影响到其他模块。

#### 案例分析

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



### 里氏替换原则（LSP）

里氏替换原则（Liskov Substitution Principle），简称LSP。

#### 核心思想

> Functions that use pointers to base classes must be able to use objects of derived classes without knowing it.

所有能引用基类的地方必须能透明地使用其子类的对象。

例如：一个类T有两个子类T1、T2，凡是能够使用T的对象的地方，就能使用T1的对象或T2的对象，这是因为子类拥有父类的所有属性和行为。

通俗来讲就是只要父类能出现的地方子类就能出现（可以用子类来替换它）。反之，子类能出现的地方父类不一定能出现（子类拥有父类的所有属性和行为，但子类拓展了更多的功能）。

#### 案例分析

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



### 接口隔离原则

接口隔离原则，即InterfaceSegregationPrinciple，简称ISP。1.核心思想Clientsshouldnotbeforcedtodependuponinterfacesthattheydon＇tuse.Insteadofonefatinterfacemanysmallinterfacesarepreferredbasedongroupsofmethods,eachoneservingonesubmodule.客户端不应该依赖它不需要的接口。用多个细粒度的接口来替代由多个方法组成的复杂接口，每一个接口服务于一个子模块。类A通过接口interface依赖类C，类B通过接口interface依赖类D，如果接口interface对于类A和类B来说不是最小接口，则类C和类D必须去实现它们不需要的方法。2.通俗来讲建立单一接口，不要建立庞大臃肿的接口，尽量细化接口，接口中的方法尽量少。也就是说，我们要为不同类别的类建立专用的接

接口，而不要试图建立一个很庞大的接口供所有依赖它的类调用。接口尽量小，但是要有限度。当发现一个接口过于臃肿时，就要对这个接口进行适当的拆分。但是如果接口过小，则会造成接口数量过多，使设计复杂化。所以接口大小一定要适度。3.案例分析我们知道在生物学分类中，从高到低有界、门（含亚门）、纲、目、科、属、种七个等级。脊椎动物就是脊索动物的一个亚门，是万千动物中数量最多、结构最复杂的一个门类。哺乳动物（也称兽类）、鸟类、鱼类是脊椎动物中最重要的三个子分类；哺乳动物大都生活于陆地，鱼类都生活在水里，而鸟类大都能飞行。但这些特性并不是绝对的，如蝙蝠是哺乳动物，但它却能飞行；鲸鱼也是哺乳动物，却生活在海中；天鹅是鸟类，能在天上飞，也能在水里游，还能在地上走。所以在前面的示例中，将动物根据活动场所分为水生动物、陆生动物和飞行动物是不够准确的，因为奔跑、游

游泳、飞翔只是动物的一种行为，而且有些动物可能同时具有多种行为，因此应该把它们抽象成接口。我们应该根据生理特征来分类，如哺乳类、鸟类、鱼类。哺乳类动物具有恒温、胎生、哺乳等生理特征；鸟类动物具有恒温、卵生、前肢成翅等生理特征；鱼类动物具有流线型体形、用鳃呼吸等生理特征。这里分别将奔跑、游泳、飞翔抽象成接口的操作就是对接口的一种细粒度拆分，可以提高程序设计的灵活性。代码的实现如下。源码示例26-10遵循接口隔离原则的设计

4.优点（1）提高程序设计的灵活性。将接口进行细分后，多个接口可自由发展，互不干扰。（2）提高内聚，减少对外交互。使接口用最少的方法去完成最多的事情。（3）为依赖接口的类定制服务。只暴露给调用的类需要的方法，不需要的方法则隐藏起来。

### 依赖倒置原则（DIP）

依赖倒置原则，即DependenceInversionPrinciple，简称DIP。1.核心思想Highlevelmodulesshouldnotdependonlowlevelmodules;bothshoulddependonabstractions.Abstractionsshouldnotdependondetails.Detailsshoulddependuponabstractions.

高层模块不应该依赖低层模块，二者都该依赖其抽象。抽象不应该依赖细节，细节应该依赖抽象。高层模块就是调用端，低层模块就是具体实现类。抽象就是指接口或抽象类，细节是指具体的实现类。也就是说，我们只依赖抽象编程。2.通俗来讲把具有相同特征或相似功能的类，抽象成接口或抽象类，让具体的实现类继承这个抽象类（或实现对应的接口）。抽象类（接口）负责定义统一的方法，实现类负责具体功能的实现。3.案例分析在源码示例26-6（遵循开放封闭原则的设计）中，我们把各种类型的动物抽象成一个抽象类Animal，并定义了统一的方法moving（），这也遵循了依赖倒置原则。我们的Zoo（动物园）类是一个高层模块，Zoo类中的displayActivity（）方法依赖的是动物
物的抽象类Animal和其定义的抽象方法moving（），这就是高层模块依赖抽象而不是依赖细节的表现。我们对这个案例进行一次更深层次的挖掘。我们知道民以食为天，动物更是如此，动物每天都要吃东西。一说到动物吃东西，你可能立刻就会想：狗喜欢吃肉，鱼喜欢吃草，鸟喜欢吃虫子！你在小学就会背了，哈哈！如果让你用程序来模拟一下动物吃东西的过程，你会怎么设计你的程序呢？你可能会不假思索地写出下面这样的代码。源码示例26-8动物吃东西

如果写出这样的代码，那就糟糕了！因为这样实现会有两个问题：（1）每一种动物，你都需要为其定义一个食物类，高度依赖于细节。（2）每一种动物只能吃一种东西（它最喜欢的食物），这与现实相违背。如：猫不仅喜欢吃老鼠，还喜欢吃鱼；不仅鱼喜欢吃草，牛也喜欢吃草。这个时候就应该遵循依赖倒置原则来进行设计：抽象出一个食物（Food）类，动物（Animal）应该依赖食物的抽象类Food，而不应该依赖具体的细节（具体的食物）。我们根据这一原则来设计一

一下代码，如源码示例26-9所示。源码示例26-9遵循依赖倒置原则的设计

在这个例子中，动物抽象出一个父类Animal，食物也抽象出一个抽象类Food。Animal抽象不依赖于细节（具体的食物类），具体的动物（如Dog）也不依赖于细节（具体的食物类）。就是说我们只依赖抽象编程。源码示例26-9的实现可用类图表示，如图26-1所示。

## 是否一定要遵循这些设计原则



## 更为实用的设计原则

