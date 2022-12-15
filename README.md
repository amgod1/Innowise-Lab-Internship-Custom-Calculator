# Innowise Lab Internship Custom Calculator

#### [App Deploy](https://amgod1.github.io/Innowise-Lab-Internship-Custom-Calculator/dist/)

#### [Task Link](https://drive.google.com/file/d/18RDvQiHxvJ5FnfJg68lYUZB8oAmOTVof/view?usp=sharing)

## How to run the app:

> When you press the number keys, you will automatically set the first operand. As soon as you press **_an operation key_** (+, -, \*, /, ^, √) you will be able to set the second operand. If you want to perform the selected operation, you must press **_the = key_** or **_any other operator_**. If you press the **_special operations keys_** (+/-, %, x!, x^2, x^3, 2√x, 3√x) the action will be executed to the last operand you set. If you want to return the previous value/prevent the operation you have to press the **_'back'_** key (works for all actions and operations except **_'memory keys'_**). To delete all values and clear the input field press the **_'AC'_** key (does not clear calculator memory).

- **numpad** support is **available**
- if you press **_zero (0)_** key more than once, the operand value will remain correct (you can't set invalid numbers like **'00'**, **'000'** and so on)
- if you press any **_natural number_** key after **_zero (0)_**, the operand value will remain correct (you can't set invalid numbers like **'02'**, **'049'** and so on)
- only **_one point_** is possible (.) for a floating point number (your can't set invalid numbers like **_'2.12.3'_**, **_'0.012.235.5'_** and so on)
- if the first operand is not given and you press **_an operation key_** (+, -, \*, /, ^, √), the first operand automatically **_becomes zero (0)_** and the next time you press the number key, you will set the second operand
- if only the first operand and the sign of the operation are given and you press **_the = key_**, the second operand **_equals the first operand_** and then the operation is executed
- after the operation, the result is written to the first operand, after which you can either press **_the = key_** to continue the operation with the last change in the first operand, or you can press **_the operation key_**, after which you have to enter the second operand (or press **_the = key_** and the above step will be executed)

```diff
@@ See the detailed instructions below: @@
```

### Sum operation (+), Difference operation (-) & Multiply operation (\*)

- if the **_first operand_** is missing, it is automatically replaced by **_zero (0)_**
- if the **_second operand_** is missing and **_the = key_** is pressed, it is automatically **_replaced_** by the first operand, and then the action is executed
- works with integers, bigInt and floating point numbers\*

### Division operation (/)

- if the **_first operand_** is missing, it is automatically replaced by **_zero (0)_**, but the result is **_always zero (0)_**
- if the second operand is **_zero (0)_**, the result is **_always zero (0)_**
- if the **_second operand_** is missing and **_the = key_** is pressed, it is automatically **_replaced_** by the first operand, and then the action is executed
- works with integers and floating point numbers\*

### Percentage operation (%)

- if the first operand is given, pressing the % key will show **_how many percent of '100' that number is_** and then replace its value with the result
- if the first operand (v1) and the second operand (v2) are given, **_pressing the % key will change the second operand_** to a number that is (v2) percent of the first operand

### Positive-Negative operation (+/-)

- if the first operand is given, then pressing the +/- key will **_reverse its value_**
- if the first and second operands are specified, then pressing the +/- key will **_reverse the value of the second operand_**
- works with all numbers exept zero (0)

### Exponentation operations (x^2, x^3)

- if the first operand is defined, then pressing the key will **_raise it to the selected power_**
- if the first and second operands are defined, then pressing the key **_will raise the second operand to the selected power_**

### Selective exponentation operation (x^y)

- the first operand is 'x' and the second operand is 'y' (the number 'x' is raised to the power of 'y')
- if you raise **_any_** number to an **_even_** number, the result is always **_positive_**
- if you raise a **_negative_** number to the **_odd_** power, the result is **_negative_**
- if you raise a **_positive_** number to an **_odd_** power, the result is **_positive_**
- exponentiation of any number to the power of **_zero (0)_** will always be **_one (1)_**

### Root operations (2√x, 3√x)

- if the first operand is defined, then pressing the key will calculate **_the root from it_**, and after that its value will be replaced by the result
- if the first and second operands are defined, pressing the key will calculate **_the root from the second operand_** and then its value will be replaced by the result
- the square root **_cannot_** be calculated from a **_negative_** number

### Selective root operation (y√x)

- the first operand is 'x' and the second operand is 'y' (calculates the root of 'y' degree of number 'x')
- the operation **_will not_** be performed if you try to take **_the root at an even base (y) for a negative number (x)_**
- the operation **_will not_** be performed, if you try to take **_an even degree root of a negative number_**
- сalculating a root of any degree from zero (0) will always be zero (0)

### Factorial operation (!x)

- if the first operand is defined, press the key to **_subtract its factorial_** and then replace its value with the result
- if the first and second operands are defined, press the key to **_subtract the factorial of the second operand_**, and then replace its value with the result
- the factorial **_can't_** be calculated from **_negative numbers_** and **_zero_**

### Memory buttons (mc, m+, m- & mr)

- the **_mr_** button **_shows_** the memorized result **_(initially zero)_**
- the **_m+_** button **_adds_** to the memorized result the result of the **_previous operation_**, or **_the first operand_**
- the **_m-_** button **_subtracts_** from the memorized result the result of the **_previous operation_** or **_the first operand_**
- the **_mc_** button **_clears_** the memorized result (after that it **_equals zero_**)
- pressing the **_AC key does not clear_** the memorized result
- memorized result is **_saved_** in the **_local store_** of the browser so you can't lose it so you cannot lose them unless you **_delete them yourself_**
- **_addition_** and **_subtraction_** of the memorized result can **_only_** be performed with **_the m+_** & **_m- keys_** but you can but you can **_perfom different operations_** with it

### Theme management

- each of 12 button has a **_unique_** background; when you click on it, **_the background_** you choose will be **_applied_** to the entire document and **_stored locally_**
- buttons **_change_** their backgrounds when you press the **_'space'_** key, so everyone can easily select a background for the calculator
- the application has **_382_** backgrounds

# Important Note:

```diff
@@ Any operation that uses floating point numbers automatically rounds the result to 11 digits after the dot. @@
```

# Folder structure:

├── ...
├── dist # production build created with webpack
├── node_modules # all downloaded packages
├── src # source files
| ├── classes # all used classes
| | ├── MainClass # chain of inherited classes necessary to create the calculator template
| | ├── OperationClass # classes of operations necessary for the calculator functionality and operability
| ├── functions # functions that simplify the creation and operation of the calculator
├── tests # unit test using jest
└── ... # ect.

Created by [Kamill](https://github.com/amgod1)
