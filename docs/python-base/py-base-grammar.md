# Python基础语法

## 数据类型
Python是一种`动态语言`，`定义变量时不需在前面加类型说明，而且不同类型之间可以方便得相互转换`。

五个标准数据类型：  
1. Number（数字）：int、float、complex（复数）（Python3 已经去除long类型，与int类型合并）
2. String（字符串）
3. List（列表）
4. Tuple（数组）
5. Dictionary（字典）  

其中List、Tuple、Dictionary为容器数据类型。  
`注意：每个变量在使用前都必须赋值，变量赋值以后才会被创建。`

``` Python
age = 18 # int
weight = 62.51 # float
name = "Tony" # string
print("age", age) # age：18
print("weight", weight) # weight：62.51
print("name", name) # name：Tony

# 变量的类型可以直接改变
age = name
print("age", age) # age：Tony

a = b = c = 5 # a、b、c三个变量指向相同的内存空间，具有相同值
print("a:", a, "b:", b, "c:" , c) # a：5 b：5 c：5
print("id(a):", id(a), "id(b):", id(b),"id(c):", id(c),) # id(a): 145777240 id(b): 145777240 id(c): 145777240
```

## 常用容器
(1) List  
List是Python中使用最频繁的数据类型，用"[]"标识。List可以完成大多数集合类的数据结构实现，类似Java的ArrayList和C++中的Vector。此外一个List中可以同时包含不同类型的数据，支持字符、数字、字符串，甚至可以包含List（即嵌套）

常用：
- List中的值的切割可以用到变量`[头下标:尾下标]`，这样就可以截取相应区间的列表。`从左到右默认以0开始，从右到左边索引默认从-1开始，下标为空时，表示取到头或尾。`
- 加号(+)是列表连接运算符，星号(*)是重复操作。

``` Python
list = ['Thomson', 78 , 12.58, 'Sunny', 180.2]
tinylist = [123, 'Tony']
print("list:", list)
# list:['Thomson', 78 , 12.58, 'Sunny', 180.2]
print("list[0]:", list[0])
# list[0]:Thomson
print("list[1:3]:", list[1:3])
# list[1:3]:[78 , 12.58]
print("list[2:]:",list[2:])
# list[2:]: [12.58, 'Sunny', 180.2]
print("tinylist * 2:",tinylist * 2) # 输出tinylist两遍
# tinylist * 2: [123, 'Tony', 123, 'Tony']
print("list + tinylist:",list + tinylist) # 打印组合的列表
# list + tinylist:  ['Thomson', 78 , 12.58, 'Sunny', 180.2, 123, 'Tony']
list[1] = 100
print("设置list[1]:", list )
# 设置list[1]:[100, 78 , 12.58, 'Sunny', 180.2]
list.append("added data")
print("list添加元素:", list )
# list添加元素:[100, 78 , 12.58, 'Sunny', 180.2,'added data' ]
```
(2) Tuple  
Tuple(元组)是另一种容器数据类型，用`"()"`标识，内部元素用`逗号`隔开。注意，元组不能二次赋值，相当于只读的，用法与List类似。相当于Java中的final数组和C++中的const数组。

```Python
tuple = ('Thomson', 78 , 12.58, 'Sunny', 180.2)
tinytuple = (123, 'Tony')
print("tuple:", tuple)
# tuple:('Thomson', 78 , 12.58, 'Sunny', 180.2)
print("tinytuple:", tinytuple)
# tinytuple:(123, 'Tony')
print("tuple[0]:", tuple[0])
# tuple[0]:Thomson
print("tuple[1:3]:", tuple[1:3])
# tuple[1:3]:(78 , 12.58)
print("tuple[2:]:",tuple[2:])
# tuple[2:]: (12.58, 'Sunny', 180.2)
print("tinytuple * 2:",tinytuple * 2) # tinytuple
# tinytuple * 2: (123, 'Tony', 123, 'Tony')
print("tuple + tinytuple:",tuple + tinytuple) # 打印组合的元表
# tuple + tinytuple:  ('Thomson', 78 , 12.58, 'Sunny', 180.2, 123, 'Tony')
tuple[1] = 100
# 不能修改元祖内的元素
```
(3) Dictionary 
Dictionary是Python中除了列表外最灵活的内置数据类型。字典使用`“{}”`标识，由索引（key）和对应的值（value）组成。相当于Java和C++中的Map。

和List的区别：List是有序的对象集合，字典是无序的对象集合。两者之间的区别在于：字典中的元素通过键存取，而不通过索引存取。

``` Python
dict = {}
dict['one'] = "This is one"
dict[2] = "This is two"
tinydict = {'name' : 'Tony', 'age': 24, 'height': 177}

print("tinydict:", tinydict)
# tinydict: {'name' : 'Tony', 'age': 24, 'height': 177}
print("tinydict.keys():", tinydict.keys()) 
# 注意此处的输出，输出所有键
# tinydict.keys(): dict_keys(['name', 'age', 'height'])
print("tinydict.values():", tinydict.keys()) 
# 注意此处的输出，输出所有值
# tinydict.values(): dict_values(['Tony', 24, 177])
print("dict['one']:", dict['one'])
# dict['one']: "This is one"
print("dict[2]:", dict[2])
# dict[2]: This is two
```

## 类的定义
使用class语句来创建一个新类。class之后为类的名称并以冒号结尾。
``` Python
class ClassName:
    '类的帮助信息' # 类文档字符串
    class_suite # 类体
```

类的帮助信息可以通过ClassName._doc_查看，类体由类成员、方法、属性组成。

``` Python
class Test:
    "测试类"

    def _init_(self): # 初始化函数
        self.__ivalue = 5

    def getvalue(self):
        return self.__ivalue
```

1） 访问权限  
- _foo_: 定义的是特殊方法，一般是系统定义名字，类似_init().
- _foo: 以单下划线开头表示的是protected类型的变量，即保护类型只允许其本身与子类进行访问，不能用于 from module import*。
- __foo: 以双下划线开头时，表示的是私有类型（private）的变量，即只允许这个类本身进行访问。

2） 类的继承  

类的继承语法结构为： 
```
class 派生类名（基类名）：类体
```

Python继承的一些特点：
- 在继承中基类的初始化方法_init_()不会被自动调用，他需要在其派生类的构造中亲自专门调用。
- 在调用基类的方法时，需要使用super()前缀。
- Python总是首先查找对应类型的方法，不能在派生类中找到对应的方法时，它才开始到基类中逐个查找（先本类中查找调用的方法，找不到才去基类中找）。
  Python支持多重继承，在继承元祖中列出一个以上的类即可。

3） 基础重载方法

Python中内置了很多基础重载方法，可通过重写这些方法实现特殊的功能。
序号|方法|描述|简单的调用
---|:--:|:--:|---:
1 | _init_(self[,args...]) | 构造函数 | obj = className(args)
2 | _del_(self) | 析构方法，删除一个对象 | del obj
3 | _repr_(self) | 转化为供解释器读取的形式 | repr(obj) 
4 | _str_(slef) | 用于将值转化为适于人阅读的形式 | str(obj)
5 | _cmp_(self,x) |对象比较 | cmp(obj,x)


## 一个"栗子",对比Java
Java代码：
``` Java
class Person{
    public static int visited;
    private String name;
    protected int age;
    public float height;

    Person(String name, int age, float height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    public String getName(){
        return name;
    }

    public int getAge(){
        return age;
    }

    public void showInfo(){
        System.out.println("name:" + name);
        System.out.println("age:" + age);
        System.out.println("height:" + height);
        System.out.println("visited:" + visited);
        Person.visited++;
    }
}

class Teacher extends Person{

    private String title;

    Teacher(String name , int age, float height){
        super(name , age, height);
    }

    public String getTitle(){
        return title;
    }

    public void showInfo(){
        System.out.println("title:" + title);
        super.showInfo();
    }
}

public class Test{
    public static void main(String args[]){
        Person jack = new Person("jack", 22, 1.70f);
        jack.showInfo();
        System.out.println();
        Teacher tom = new Teacher("tom", 34 , 1.65f);
        tom.setTitle("博士");
        tom.showInfo();
    }
}
```
对应的Python代码：
``` Python
class Person:
    "人"
    visited = 0 
    def __init__(self, name, age, height):
        self.__name = name; # 私有成员，访问权限private
        self._age = age; # 保护成员，访问权限为protected
        self.height = height #公有成员，访问权限为public
    
    def getName(self):
        return self.__name
    
    def getAge(self):
        return self._age
    
    def showInfo(self):
        print("name:",self.__name)
        print("age:",self._age)
        print("height:",self.height)
        print("visited:",self.visited)
        Person.visited = Person.visited + 1

class Teacher(Person):
    "老师"

    def __int__(self, name, age, height):
        super().__init__(name, age, height)
        self.__title = None

    def getTitle(self):
        return self.__title
    
    def setTitle(self, title):
        self.__title = title
    
    def showInfo(self):
        print("title:", self.__title)
        super().showInfo()

def testPerson():
    "测试方法"
    jack = Person("Jack", 22, 1.70)
    jack.showInfo()
    print()

    tom = Teacher("tom", 34, 1.65)
    tom.setTitle("博士")
    tom.showInfo()

testPerson()

    
```

## 补充

在Python 2中，类（Class）的定义分为新式定义和老式定义两种。老式类在定义时不继承自object基类，默认继承type，而新式类在定义时显式地继承object类。在Python3中，没有新式类和老式类之分，它们都继承object类，因此可以不用显式地指定其基类。object基类中拥有的方法和属性可通用于所有的新式类。