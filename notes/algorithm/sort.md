# 排序算法

## 数组交换方法的写法
``` java
public static void swap(int[] arr, int i, int j){
    int tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

public static void   swap(int[] arr, int i, int j){
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
}
```

## 冒泡排序

思想：相邻比较，一轮冒泡得到最大/小的数，多次冒泡直到有序。

`时间复杂度：O（N^2） , 额外空间复杂度：O（1）`

``` java
public static void bubbleSort(int[] arr){
    if (arr == null || arr.length < 2 ){
        return ;
    }
    for (int end = arr.length - 1; end > 0; end--){
        for (int i = 0; i < end; i++){
            if (arr[i] > arr[i+1]){
                swap(arr, i, i+1);
            }
        }
    }
}
```

## 选择排序
 思想：每次循环找到最小/最大的数的索引，根据索引交换位置。也就是每次选择出最小/最大的数，进行排序。

 `时间复杂度：O（N^2） ，额外空间复杂度：O（1）` 

``` java
public static void selectSort(int[] arr){
    if (arr == null || arr.length < 2 ){
        return ;
    }
    for (int i = 0; i < arr.length - 1; i++){
        int minIndex = i;
        for (int j = i + 1; j < arr.length ; j++){
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        swap(arr , i, minIndex); 
    }
}
```

以上两种排序算法，基本不用，这两种排序算法与数据状况无关。

## 插入排序
思想：从索引为1的数开始插入排序，待排序的数与之前暂时有序的数列进行插入，从尾部依次依次对比插入操作操作，直到无法更改插入的位置。(整理扑克牌)

时间复杂度：
- 最好情况：数据有序的情况下：O（N）  
- 最差情况：数据逆序的情况下：O（N^2）  
- 平均情况：
一般以最差的数据情况为指标，即O（N^2）

``` java
public static void insertSort(int[] arr){
    if (arr == null || arr.length < 2 ){
        return ;
    }
    for (int i  = 1; i < arr.length - 1; i++){
        for (int j = i -1 ; j >= 0 && arr[j] > arr[j+1] ; j--){
           swap(arr , j, j + 1);
        }
    }
}
```

## 归并排序
思想：数组左侧部分排好序，右侧排好序，整体利用外排的方式进行排序。

时间复杂度：master公式：T（N）= 2T（n/2）+ O（N）>>> log(2,2) = 1 = 1 >>> O（N^logN）

## 快速排序（经典）
思想：

注意：避开数据状况，有两个常规的做法：
1.随机，2.哈希

长期期望时间复杂度：O（N*logN），额外空间复杂度为O（logN）。

代码简洁，说明常数项系数小。所以归并排序比不上快速排序。

在工程上，经典快速排序是不存在的，因为递归函数会被改写成非递归的形式，准备一个递归函数是代价是非常大的，同时通常系统的栈深度是有限的，所以是不安全的。

## 堆排序
思想：堆结构采用完全二叉树的思想,使用堆结构对数组进行排序的算法，分为大根堆和小根堆。

堆结构：落地结构为一个数组，逻辑结构实质上是完全二叉树。（相关概念：叶子、满二叉树、完全二叉树。）逻辑结构有，第i个节点的左节点为2*i+1，右节点为2*i+2，父节点为（i-1）/2。

大根堆：在完全二叉树中，任何一棵子树的最大值就是该子树的头节点。

小根堆：在完全二叉树中，任何一棵子树的最小值就是该子树的头节点。

让一个数组变成一个大根堆的时间复杂度为： log1+log2+log3+...logn+log(n-1)收敛于 O（N）

## 排序稳定性
