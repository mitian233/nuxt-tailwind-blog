---
id: 0
title: cpp实验课
date: 2021-11-23 11:09:35
tags:
    - 日志
---
## 实验一

### 题目一

> 让用户输入两个自然数，求其之间的自然数之和。

```cpp
#include <iostream>
using namespace std;

int sum(int a,int b)
{
	if (a<b){
		int result = 0;
		for (int i = a; i <= b; i++)
			result = result + i;
		cout << "Result is " << result << endl;
		return result;
	}
	else
	{
		cout << "Wrong input! First number must bigger than the last one. ";
	}


}

int main(void)
{
	int a, b;
	cin >> a;
	cin >> b;
	sum(a, b);
}
```

### 题目二

> 判断用户输入的年份是否为闰年

```cpp
#include <iostream>
using namespace std;

bool IsLeapYear(int year)
{
	if (year % 100 == 0)
	{
		int firstchar = year / 100;
		if (firstchar % 4 == 0)
			return true;
		else
			return false;
	}
	else
	{
		if (year % 4 == 0)
			return true;
		else
			return false;
	}
}

int main(void)
{
	int year;
	cout << "Input a year to calculate:";
	cin >> year;
	if (IsLeapYear(year) == true)
		cout << year << " is leap year. " << endl;
	else
		cout << year << " is not leap year. " << endl;
}

```

## 实验二

### 题目一

> 华氏/摄氏转换

```cpp
#include <iostream>
using namespace std;

float f2c(int t) {
	float result;
	result = 5 * (t - 32) / 9;
	return result;
}

float c2f(int t) {
	float result;
	result = (9 * t + 32) / 5;
	return result;
}

int main(void) {
	char calctype;
	cout << "C2F(c) or F2C(f)?";
	cin >> calctype;
	float temperature;
	switch (calctype) {
	case 'c':
		cout << "Enter temperature in Celsius:";
		cin >> temperature;
		cout << "Result is " << c2f(temperature) << endl;
		break;
	case 'f':
		cout << "Enter temperature in Fahrenheit:";
		cin >> temperature;
		cout << "Result is " << f2c(temperature) << endl;
		break;
	default:
		cout << "Invalid input.";
	}
}
```

### 题目二

> 递归方式求斐波那契级数

```cpp
#include <iostream>
using namespace std;

long long fib(unsigned int n)
{
	if (n <= 0)
		return 0;
	if (n == 1)
		return 1;
	else
		return fib(n - 1) + fib(n - 2);
}

int main(void)
{
	unsigned int n;
	cout << "Please enter Fibonacci series number:";
	cin >> n;
	cout << "The Fibonacci number is: " << fib(n) << endl;
}
```

### 题目三

> 递归方式求n阶勒让德多项式的值

```cpp
#include <iostream>
using namespace std;

float legendre(int n,float x)
{
	if (n == 0)
		return 1;
	if (n == 1)
		return x;
	else
		return ((2 * n - 1) * x * legendre(n - 1, x) - (n - 1) * legendre(n - 2, x)) / n;
}

int main(void)
{
	cout << "Enter the number of Legendre polynomial terms:";
	int n;
	cin >> n;
	cout << "Enter the value of the x:";
	float x;
	cin >> x;
	cout << "The result is " << legendre(n, x) << endl;
}
```

## 实验三

### 题目一

> 编写一个3×3矩阵转置的函数，在main()函数中输入数据。

```cpp
#include <iostream>
using namespace std;

void move(int* pointer) {
	int i, j, t;
	for (i = 0; i < 3; i++) {
		for (j = i; j < 3; j++) {
			t = *(pointer + 3 * i + j);
			*(pointer + 3 * i + j) = *(pointer + 3 * j + i);
			*(pointer + 3 * j + i) = t;
		}
	}
}

int main(void){
	int a[3][3], * p, i;
	for (i = 0; i < 3; i++)
		cin >> a[i][0] >> a[i][1] >> a[i][2];
	p = &a[0][0];
	move(p);
	for (i = 0; i < 3; i++)
		cout << a[i][0] << " " << a[i][1] << " " << a[i][2] << endl;
	return 0;
}
```

### 题目二

> 设学生人数N=60，提示用户输入N个人的考试成绩，然后计算出他们的平均成绩并显示。

```cpp
#include<iostream>
using namespace std;

int main(void){
	int n;
	cout << "How many students:";
	cin >> n;
	int* p = new int[n];
	for (int i = 1; i <= n; i++) {
		cout << "Type the points of No." << i << " student：";
		cin >> p[i];
	}
	float sum = 0;
	for (int j = 1; j <= n; j++) {
		sum = sum + p[j];
	}
	float average = sum / n;
	cout << "Average is:" << average << endl;
}
```
