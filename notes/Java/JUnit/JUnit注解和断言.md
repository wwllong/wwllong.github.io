# JUnit注解和断言

## Junit注解

|注解|描述|
|:----|:--|
|@Test public void method() | 表示该公共方法可以作为一个测试用例。|
|@Before public void method() | 表示该方法必须在类中的每个测试之前执行，以便执行测试某些必要的先决条件。|
|@BeforeClass public static void method()| 附着在静态方法上，表示在类的所有测试前必须执行一次。通常使用在测试需要计算共享配置方法（如连接数据库）|
|@After public void method() | 表示该方法在每项测试后执行。（如执行每个测试后重置某些遍历、删除临时变量等 |
|@AfterC1ass public static void method() | 附着在静态方法上，表示在测试类所有的测试执行后执行，通常用来清理建立方法（如断开数据库）
|@Ignore public static void method() |  表示不执行该方法。通常用来暂时禁用特定的测试执行 |

## 断言

断言是编程属术语，表示为一些布尔表达式，程序员相信在程序中的某个特定点该表达式值为真，可以在任何时候启用和禁用。断言验证，因此可以在测试时启用断言而在部署时禁用断言。同样，程序投入运行后，最终用户再遇到问题时，可以重新启动断言。

JUnit提供了断言测试方法。`断言`是`我认为XX一定是xx样的。`,这种测试的预测，可以带来稳定的预期结果（True/False），以及创建更稳定、品质更好且不易出错的代码。当需要在一个值为`false`时中断当前操作的话，可以使用断言，单元测试必须使用断言。

## 常用断言方法

|断言|描述|
|:--|:--|
|void assertEquals([String message], expected value, actual value)|断言两个值相等。值可能是类型有int、short、long、byte、char、Object|
|void assertTrue([String message], boolean condition) |断言一个条件为真|
|void assertFalse([String message], boolean condition|断言一个条件为假|
|void assertNull([String message], java.lang.Object object)|断言一个对象为null|
|void assertNotNull([String message], java.lang.Object object)|断言一个对象不为null|
|void assertSame([String message], java.lang.Object expected, java.lang.Object actual)|断言两个对象引用相同|
|void assertNotSame([String message], java.lang.Object expected, java.lang.Object actual)|断言两个对象引用不同|
|void assertArrayEquals([String message], expectedArray, resultArray)|断言预期数组和结果数组相等。数组类型可能是int、short、long、byte、char、Object|
