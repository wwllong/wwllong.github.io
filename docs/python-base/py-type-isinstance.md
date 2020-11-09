## Python的内置函数 type() 和 isinstance() 

## type函数

type()主要有两个功能：

- 查看一个变量（对象）的类型，语法：

  ```python
  type(object)
  ```

  当调用type方法传入一个参数时，会返回这个对象的类型。这个时候type()通常与object.\_\_class\_\_功能相同。

- 创建一个类，语法：

  ```python
type(name, bases, dict)
  ```

  name：类的名称。

  bases：基类的元组。（Python中允许多继承）。
  
  dict：字典，类的属性，是一个dict字典类型。
  
  ```python
  if __name__ == "__main__":
    ClassVar = type("ClassVar", (object,), dict(name="type test"))
    a = ClassVar()
    print(type(a))
    print(a.name)
      
  """
<class '__main__.ClassVar'>
  type test
""" 
  ```
  
  通过type() 定义创建的类和通过 class Xxx ... 定义创建的类是一样的。这种可以很方便地**在运行期间动态创建类的特性**，体现了Python作为一种解释型动态语言与静态语言（如Java、C++）的最大区别。
  
  

## isinstance函数

isinstance()作用是判断一个对象是不是某个类型的实例。与type()有点类似。语法为：

```python
isinstance(object, classinfo)
```

object：实例对象

classinfo：期望的类型，可以是直接或间接类名、基本类型或者由它们组成的元组。对于基本类型来说classinfo可以是：

```
int, float, bool, complex, str, list, dict, set, tuple
```

如果object是classinfo的一个实例或classinfo子类的一个实例，则返回True，否则返回False

``` python
if __name__ == "__main__":
    b = 10
    print(isinstance(b, int))
    print(isinstance(b, str))
    print(isinstance(b, (int, str)))

"""
True
False
True
"""
```



## type函数和isinstance函数的区别

type()和isinstance()的区别：

- type() 不会认为子类是一种父类类型，不考虑继承关系。

- isinstance() 会认为子类是一种父类类型，考虑继承关系。

如果要判断两个类型是否相同推荐使用 isinstance()。此外，如果想要知道子类和父类之间的继承关系，可以使用另一个内置函数issubclass()或者object.\_\_bases\_\_。

