# Innowise Lab Internship Custom Calculator 
#### [App Deploy](https://amgod1.github.io/Innowise-Lab-Internship-Custom-Calculator/dist/)
#### [Task Link](https://drive.google.com/file/d/18RDvQiHxvJ5FnfJg68lYUZB8oAmOTVof/view?usp=sharing)

## How to run the app:

> When you press the number keys, you will automatically set the first operand. As soon as you press ***an operation key*** (+, -, *, /, ^, √) you will be able to set the second operand. If you want to perform the selected operation, you must press ***the = key***. If you press the ***special operations keys*** (+/-, %, x!, x^2, x^3, 2√x, 3√x) the action will be executed to the last operand you set. If you want to return the previous value/prevent the operation you have to press the ***'back'*** key (works for all actions and operations except ***'memory keys'***). To delete all values and clear the input field press the ***'AC'*** key (does not clear calculator memory).

- if you press ***zero*** key ***(0)*** more than once, the operand value will remain correct (you can't set invalid numbers like **'00'**, **'000'** and so on)
- only ***one point*** is possible (.) for a floating point number (your can't set invalid numbers like ***'2.12.3'***, ***'0.012.235.5'*** and so on)
- if the first operand is not given and you press ***an operation key*** (+, -, *, /, ^, √), the first operand automatically ***becomes zero (0)*** and the next time you press the number key, you will set the second operand
- if only the first operand and the sign of the operation are given and you press ***the = key***, the second operand ***equals the first operand*** and then the operation is executed
- after the operation, the result is written to the first operand, after which you can either press ***the = key*** to continue the operation with the last change in the first operand, or you can press ***the operation key***, after which you have to enter the second operand (or press ***the = key*** and the above step will be executed)

```diff
@@ See the detailed instructions below: @@
```

### Sum operation (+), Difference operation (-) & Multiply operation (*)
- if the ***first operand*** is missing, it is automatically replaced by ***zero (0)***
- if the ***second operand*** is missing and ***the = key*** is pressed, it is automatically ***replaced*** by the first operand, and then the action is executed
- works with integers, bigInt and floating point numbers*

### Division operation (/)
- if the ***first operand*** is missing, it is automatically replaced by ***zero (0)***, but the result is ***always zero (0)***
- if the second operand is ***zero (0)***, the result is always ***'infinity'***
- if the ***second operand*** is missing and ***the = key*** is pressed, it is automatically ***replaced*** by the first operand, and then the action is executed
- works with integers and floating point numbers*

### Percentage operation (%)
- if the first operand is given, pressing the % key will show ***how many percent of '100' that number is*** and then replace its value with the result
- if the first operand (v1) and the second operand (v2) are given, ***pressing the % key will change the second operand*** to a number that is (v2) percent of the first operand

### Positive-Negative operation (+/-)
- if the first operand is given, then pressing the +/- key will ***reverse its value***
- if the first and second operands are specified, then pressing the +/- key will ***reverse the value of the second operand***
- works with all numbers exept zero (0)

### Exponentation operations (x^2, x^3)
- if the first operand is defined, then pressing the key will ***raise it to the selected power***
- if the first and second operands are defined, then pressing the key ***will raise the second operand to the selected power***

### Selective exponentation operation (x^y)
- the first operand is 'x' and the second operand is 'y' (the number 'x' is raised to the power of 'y')
- if you raise ***any*** number to an ***even*** number, the result is always ***positive***
- if you raise a ***negative*** number to the ***odd*** power, the result is ***negative***
- if you raise a ***positive*** number to an ***odd*** power, the result is ***positive***
- exponentiation of any number to the power of ***zero (0)*** will always be ***one (1)***

### Root operations (2√x, 3√x)
- if the first operand is defined, then pressing the key will calculate ***the root from it***, and after that its value will be replaced by the result
- if the first and second operands are defined, pressing the key will calculate ***the root from the second operand*** and then its value will be replaced by the result
- the square root ***cannot*** be calculated from a ***negative*** number

### Selective root operation (y√x)
- the first operand is 'x' and the second operand is 'y' (calculates the root of 'y' degree of number 'x')
- the operation ***will not*** be performed if you try to take ***the root at an even base (y) for a negative number (x)***
- the operation ***will not*** be performed, if you try to take ***an even degree root of a negative number***
- сalculating a root of any degree from zero (0) will always be zero (0)

### Factorial operation (!x)
- if the first operand is defined, press the key to ***subtract its factorial*** and then replace its value with the result
- if the first and second operands are defined, press the key to ***subtract the factorial of the second operand***, and then replace its value with the result
- the factorial ***can't*** be calculated from ***negative numbers*** and ***zero***

### Memory buttons (mc, m+, m- & mr)
- the ***mr*** button ***shows*** the memorized result ***(initially zero)***
- the ***m+*** button ***adds*** to the memorized result the result of the ***previous operation***, or ***the first operand***
- the ***m-*** button ***subtracts*** from the memorized result the result of the ***previous operation*** or ***the first operand***
- the ***mc*** button ***clears*** the memorized result (after that it ***equals zero***)
- pressing the ***AC key does not clear*** the memorized result
- memorized result is ***saved*** in the ***local store*** of the browser so you can't lose it so you cannot lose them unless you ***delete them yourself***
- ***addition*** and ***subtraction*** of the memorized result can ***only*** be performed with ***the m+*** & ***m- keys***

### Theme management
- each of 12 button has a ***unique*** background; when you click on it, ***the background*** you choose will be ***applied*** to the entire document and ***stored locally***
- buttons ***change*** their backgrounds when you press the ***'space'*** key, so everyone can easily select a background for the calculator
- the application has ***382*** backgrounds

# Important Note: 
```diff
@@ Any operation that uses floating point numbers automatically rounds the result to 11 digits after the dot. @@
```

⭐️Created by [Kamill](https://github.com/amgod1)
