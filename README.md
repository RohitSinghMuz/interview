# JavaScript output based interview questions 
---

#### Click :star: if you like it!!
Every contribution counts, regardless of its size. I value and appreciate the efforts of all contributors, from beginners to seasoned developers. Join me on this exciting journey of open-source collaboration. **Together, let's build something amazing!** :handshake:

---

#### Contribution Guidelines

- :point_right: Please ensure that your contributions adhere to the coding style and guidelines of this project
- :point_right: Include clear and concise commit messages for all your commits
- :point_right: Provide a detailed description of your changes in the pull request.
- :point_right: Be respectful and considerate towards other contributors.

---

**1. What will be the output**
```js
let arr = [1, 2, 3, 4, 5, -6, 7];
arr.length = 0;
console.log(arr);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : [ ]</li>
	<li><b>Reason</b> : The length of the array has been set to 0, so the array becomes empty.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**2. What will be the output**
```js
x = 10;
console.log(x);
var x;
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 10</li>
	<li><b>Reason</b> : The declaration of the variable x is hoisted to the top of its scope.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**3. What will be the output**
```js
let a = { x: 1, y: 2 }
let b = a;
b.x = 3;
console.log(a);
console.log(b);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : { x: 3, y: 2 } { x: 3, y: 2 }</li>
	<li><b>Reason</b> : 'a' and 'b' both are pointing to the same reference.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**4. What will be the output**
```js
for(var i = 0; i < 10; i++){
    setTimeout(function(){
      console.log("value is " + i);
  })
}
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 10 times, "value is 10"</li>
	<li><b>Reason</b> : "var" has a function scope, and there will be only one shared binding for the iterations. By the time the setTimeout function gets executed, the for loop has already completed and the value of the variable i is 10.</li>
</ul>
</details> 

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**5. What will be the output**
```js
for(let i = 0; i < 10; i++){
    setTimeout(function(){
      console.log("value is " + i);
  })
}
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 10 times "value is" followed by the value of i in each iteration, from 0 to 9</li>
	<li><b>Reason</b> : "let" has a block scope, and a new binding will be created for each iteration. Here, a new variable i is created and has a different value for each iteration of the loop.</li>
</ul>
</details> 

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**6. What will be the output**
```js
function hello() {
  console.log("1");
    setTimeout(() => {
        console.log("2");
    })
  console.log("3");
}
hello();
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : "1" followed by "3", and then after a small delay, "2"</li>
	<li><b>Reason</b> : console.log("1") statement logs "1" to the console. Then setTimeout() function is set to execute the callback function in the next event loop iteration and logs "3" to the console.</li>
</ul>
</details> 

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**7. What will be the output**
```js
let f = "8";
let a = 1;
console.log((+f)+a+1);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 10</li>
	<li><b>Reason</b> : The expression (+f) is a shorthand way to convert the string value of f to a number. Therefore, (+f) evaluates to 8.</li>
</ul>
</details> 

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**8. What will be the output**
```js
let a = 10;
if(true){
   let a = 20;
   console.log(a, "inside");
}
console.log(a, "outside");
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 20, "inside" and 10, "outside"</li>
	<li><b>Reason</b> : The variable "a" declared inside "if" has block scope and does not affect the value of the outer "a" variable.</li>
</ul>
</details> 

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**9. What will be the output**
```js
var a = "xyz";
var a = "pqr";
console.log(a)
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : "pqr"</li>
	<li><b>Reason</b> : Both the variables are declared using "var" keyword with the same name "a". The second variable declaration will override the first variable declaration.</li>
</ul>
</details> 

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**10. What will be the output**
```js
const arr1 = [1, 2, 3, 4];
const arr2 = [6, 7, 5];
const result = [...arr1, ...arr2];
console.log(result);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : [1, 2, 3, 4, 6, 7, 5]</li>
	<li><b>Reason</b> : Spread operator (...) concatenates the two arrays into "result" array.</li>
</ul>
</details> 

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**11. What will be the output**
```js
const person1 = { name: 'xyz', age: 21 };
const person2 = { city: 'abc', ...person1 };
console.log(person2);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : { city: 'abc', name: 'xyz', age: 21 }</li>
	<li><b>Reason</b> : Spread operator (...) copies all the properties from person1 into person2.</li>
</ul>
</details> 

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**12. What will be the output**
```js
console.log(5 < 6 < 7);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : true</li>
	<li><b>Reason</b> : In JavaScript, the < operator evaluates expressions from left to right. First, the expression 5 < 6 is evaluated, resulting in true because 5 is less than 6. Then, the expression true < 7 is evaluated. In this case, JavaScript performs type coercion and converts true to the number 1. Therefore, the expression becomes 1 < 7, which is true.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**13. What will be the output**
```js
console.log(7 > 6 > 5);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : false</li>
	<li><b>Reason</b> : In JavaScript, the > operator evaluates expressions from left to right. First, the expression 7 > 6 is evaluated, resulting in true because 7 is greater than 6. Then, the expression true > 5 is evaluated. In this case, JavaScript performs type coercion and converts true to the number 1. Therefore, the expression becomes 1 > 5, which is false.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**14. What will be the output**
```js
console.log(0 == false);
console.log(1 == true);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : true, true</li>
	<li><b>Reason</b> : The == operator converts operands to a common type before making the comparison. In both the cases, the boolean value will be converted to a number, i.e., false is converted to 0 and true is converted to 1. So, the expression 0 == false is equivalent to 0 == 0 and 1 == true is equivalent to 1 == 1.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**15. What will be the output**
```js
console.log([11, 2, 31] + [4, 5, 6]);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : "11,2,314,5,6"</li>
	<li><b>Reason</b> : The + operator is used for both addition and string concatenation. When you try to concatenate two arrays using the + operator, the arrays are converted to strings and then concatenated together. In this case, the arrays [11, 2, 31] and [4, 5, 6] are converted to strings as "11,2,31" and "4,5,6" respectively. Then, the two strings are concatenated, resulting in "11,2,314,5,6".</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**16. What will be the output**
```js
console.log({} == {}); 
console.log({} === {});
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : false, false</li>
	<li><b>Reason</b> : When you compare objects using == or ===, it checks if they refer to the exact same object. So even if they are looking same, they are pointing to different memory locations.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**17. What will be the output**
```js
let x = 5;
let y = x++;
console.log(y);
console.log(x)
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 5, 6</li>
	<li><b>Reason</b> : The post-increment operator increments and returns the value before incrementing.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**18. What will be the output**
```js
let x = 5;
let y = ++x;
console.log(y);
console.log(x)
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 6, 6</li>
	<li><b>Reason</b> : The pre-increment operator increments and returns the value after incrementing.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**19. What will be the output**
```js
console.log('apple'.split(''));
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : [ 'a', 'p', 'p', 'l', 'e' ]</li>
	<li><b>Reason</b> : split method is used to split a string into an array of substrings based on a specified separator. </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**20. What will be the output**
```js
const arr = [2,3,5,2,8,10,5];
console.log(arr.indexOf(5))
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 2</li>
	<li><b>Reason</b> : indexOf method returns the index of the first occurrence of the specified element in the array. </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**21. What will be the output**
```js
const array = [8, 18, 28, 38];
const result = array.map(element => element + 2)
               .filter((element) => element > 25);
console.log(result);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : [ 30, 40 ]</li>
	<li><b>Reason</b> : The code increments each element in the array by 2 using map and filters out elements greater than 25 using filter.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**22. What will be the output**
```js
function checkValue(value){
    var result = Array.isArray(value);
    console.log(result);
}
checkValue([1,2,3]);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : true</li>
	<li><b>Reason</b> : Array.isArray() method is used to check if the provided value is an array.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**23. What will be the output**
```js
function sum(a=5, b=7){
    return a+b;
}
console.log(sum(undefined, 20));
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 25</li>
	<li><b>Reason</b> : Here, undefined is passed as the value for parameter a, and 20 is passed for parameter b. When any parameter is undefined, the default value is used. </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**24. What will be the output**
```js
console.log(10 + "5");
console.log("5" + 10);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 105, 510</li>
	<li><b>Reason</b> : Since one operand is a string, the + operator performs string concatenation. </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**25. What will be the output**
```js
console.log(10 - "5");
console.log("5" - 10);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 5, -5</li>
	<li><b>Reason</b> : In JavaScript, when the subtraction operator - is used, the operands are converted to numbers before performing the subtraction </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**26. What will be the output**
```js
console.log(printName());
function printName(){
    return "Hi my name is Bob"
}
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : Hi my name is Bob</li>
	<li><b>Reason</b> : Regular functions are hoisted to the top. And you can access and call them even before they are declared. </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**


**27. What will be the output**
```js
console.log(printName());
const printName = () => {
    return "Hi my name is Bob"
}
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : ReferenceError: Cannot access 'printName' before initialization</li>
	<li><b>Reason</b> : Arrow functions cannot be accessed before they are initialised. </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**28. What will be the output (shallow copy of an object)**
```js
const userDetails = {
  firstName: "Surbhi",
  lastName: "Dighe",
  age: 20,
  address: {
    city: "Hyderabad",
    country: "India",
  },
};

let cloneUserDetails = { ...userDetails };
//Updating original object
userDetails.age = 22;
userDetails.address.city = "Banglore";

console.log(cloneUserDetails.age); 
console.log(cloneUserDetails.address.city);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 20, "Banglore"</li>
	<li><b>Reason </b> : cloneUserDetails is created by using the spread syntax ({ ...userDetails }). This syntax creates a shallow copy of the userDetails object, meaning that the top-level properties are copied, but nested objects are still referenced.</li>
	<li><b>case 1</b> : Although userDetails.age was changed to 22, cloneUserDetails still holds the original value of 20. This is because the spread syntax only creates a shallow copy, so the age property of cloneUserDetails remains unchanged.</li>
	<li><b>case 2</b> : The nested address object is still referenced by cloneUserDetails, so when the city property of userDetails.address is changed, it reflects in cloneUserDetails.address as well. Therefore, the output is "Banglore".</li>
	</ul>

</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**29. What will be the output**
```js
function hello(){
console.log(name);
console.log(age);
var name = "Alice";
let age = 21;
}
hello();
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : undefined, ReferenceError: can't access lexical declaration 'age' before initialization"</li>
	<li><b>Reason for console.log(name)</b> : The variable name (declared with var) is hoisted to the top, so JavaScript knows it exists, but it hasn't been assigned a value yet, so it prints undefined</li>
	<li><b>Reason for console.log(age)</b> : The variable age (declared with let) is also hoisted to the top of its scope, but unlike var, it is not initialized until the line where it is declared.</b></li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**


**30. What will be the output**
```js
const arr1 = [1,2,3];
const arr2 = [1,2,3];
const str = "1,2,3";

console.log(arr1 == str);
console.log(arr1 == arr2);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : true, false</li>
	<li><b>Reason for console.log(arr1 == str)</b> : Javascript compiler performs type conversion. In this case, it converts the array arr1 and the string str to their string representations and then compares them.</li>
	<li><b>Reason for console.log(arr1==arr2) </b> : In Javascript arrays are objects and objects are compared by reference. In this case, arr1 and arr2 are pointing to 2 different memory locations</b></li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**31. What will be the output**
```js
const a = {x : 1};
const b = {x : 1};
console.log(a === b);
console.log(a.x === b.x)
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : false, true</li>
	<li><b>Reason for console.log(a === b)</b> : This compares whether a and b refer to the exact same object in memory. They are two different objects in memory, so the comparison evaluates to false</li>
	<li><b>Reason for console.log(a.x === b.x)</b> : This compares the x property of objects a and b. Since both a.x and b.x have the same value i.e., 1, so the comparison evaluates to true.</b></li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**32. What will be the output**
```js
const arr = [10, -1, 2];
arr.sort((a, b) => a - b);
console.log(arr);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : [-1, 2, 10]</li>
	<li><b>Reason</b> : The compare function (a, b) => a - b sorts the numbers numerically in ascending order.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**33. What will be the output**
```js
const arr = [11, 0, '', false, 2, 1];
const filtered = arr.filter(Boolean);
console.log(filtered);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : [11, 2, 1]</li>
	<li><b>Reason</b> : filter(Boolean) removes all falsy values (0, "" (empty string), false, null, undefined, and NaN) from the array and keeps truthy ones.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**34. What will be the output**
```js
var x = 0;
var y = 10;
if(x){
  console.log(x);
}
if(y){
  console.log(y);
}
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 10</li>
	<li><b>Reason</b> : x = 0 is falsy and doesn't trigger the console.log(x), while y = 10 is truthy and triggers the console.log(y).</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**35. What will be the output**
```js
const obj = {
var1: 1,
var2: 2
};
const { var1, var2 } = obj;
console.log(var1, var2);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 1, 2</li>
	<li><b>Reason</b> : Object destructuring extracts the values of var1 and var2 from obj object and prints them using console.log(var1, var2)</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**36. What will be the output**
```js
const user = { 
name: "Surbhi dighe", 
country: "India" 
};
const { name: fullname, country } = user;
console.log(fullname);
console.log(name);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : Surbhi Dighe, ReferenceError: name is not defined</li>
	<li><b>Reason for console.log(fullname)</b> : The name property from user is assigned to a local variable fullname.</li>
	<li><b>Reason for console.log(name)</b> : It gives an error because name was assigned to a local variable fullname and therefore name is not directly accessible.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**37. What will be the output**
```js
const person = {
  firstName: 'Surbhi',
};
const { lastName="dighe" } = person;
console.log(lastName);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : dighe</li>
	<li><b>Reason</b> : The lastName property is not defined in the person object and the destructuring syntax provides a default value ("dighe") to be used when the property is missing.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**38. What will be the output**
```js
const person = {
  firstName: 'Surbhi',
};
const { firstName="Henry"} = person;
console.log(firstName);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : Surbhi</li>
	<li><b>Reason</b> : The `firstName` property in the `person` object has the value 'Surbhi'. The default value "Henry" is ignored because it only applies when the property does not exist or is `undefined`</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**39. What will be the output**
```js
var a = 10;
let a = 20;
console.log(a)
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : SyntaxError: Identifier 'a' has already been declared</li>
	<li><b>Reason</b> : In Javascript, we cannot redeclare a variable with let if it has already been declared in the same scope. </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**40. What will be the output**
```js
const arr = ["A","B","C","D","E"]
console.log(Object.keys(arr)); 
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : [ '0', '1', '2', '3', '4' ]</li>
	<li><b>Reason</b> : In JavaScript, arrays are a special type of object. Object.keys() on an array returns an array of strings representing the indices of the array elements. </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**41. What will be the output**
```js
function modify(obj) {
    obj.name = "Updated";
}
let person = { name: "Original" };
modify(person);
console.log(person.name);

function reassign(obj) {
    obj = { name: "New Object" };
}
reassign(person);
console.log(person.name); 
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : Output of the first console log will be "Updated". Output of the second console log will also be "Updated".</li>
	<li><b>Reason</b> : JS does not allow true pass by reference. It uses call by value for primitives (numbers, strings, booleans, null, undefined and symbols) and call by sharing for objects and arrays. <br> If you modify an object's properties inside a function, the changes will reflect outside the function but if you reassign the object completely inside the function, the original reference will remain unchanged outside.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**


**42. What will be the output**
```js
let a={ x:1, y: {alpha:10,beta:20} };
let b = {...a};

b.x=101;
b.y.alpha=1001;

console.log(a.x);
console.log(a.y.alpha);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : First console log will output "1". Second console log will output "1001".</li>
	<li><b>Reason</b> : The spread operator provides a shallow copy operation and any objects that are deeply nested in the variable a will still be shared between a as well as b. To make an actual deep copy, use the method structuredClone(a) </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**


**43. What will be the output**
```js
console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');
```
<details>
    <summary><b>View Answer</b></summary>
<ul>    
    <li><b>Output</b> : The console will output in this order -> Start, End, Promise, setTimeout</li>
    <li><b>Reason</b> : The execution order is Synchronous code first, then Microtasks run and the Microtask queue is emptied, then the Macrotasks run in the Task queue/ Callback queue. All the callbacks in the .then(), .catch() and .finally() get into the microtask queue and the other asynchronous operations, go into the WebAPIs first and when they are completed, the callbacks in them go to task queue.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**44. What will be the output**
```js
var array = [1,2,3,4,5];
delete array[2];
console.log(array.length);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 5</li>
	<li><b>Reason</b> : "delete" removes the element but does not reindex the array or change its length. It leaves undefined holes in the array</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**45. What will be the output**
```js
let x = ["a","b","c"];
let y = ["a","b","c"];
let z = y;

console.log(x == y);
console.log(z == y);
console.log(z == x);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : false, true, false (In JS arrays are objects, and objects are compared by reference, not by value)</li>
	<li><b>Reason for console.log(x == y)</b> : x and y are two different arrays stored at different memory locations</li>
	<li><b>Reason for console.log(z == y)</b> : z is assigned to y, so both refer to the same memory location</li>
	<li><b>Reason for console.log(z == x)</b> : z and x are two different arrays stored at different memory locations</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**46. What will be the output**
```js
let x; 
console.log(x);
x = 20;
console.log(x);
x = "John";
console.log(x);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : undefined, 20, John</li>
	<li><b>Reason for first console.log(x)</b> : Since x is declared but not assigned any value yet, so this logs undefined</li>
	<li><b>Reason for second console.log(x)</b> : Now x has been assigned a value 20, so this logs 20</li>
	<li><b>Reason for third console.log(x)</b> : Now the value of x has been changed to "John", so this logs John</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**47. What will be the output**
```js
let text;
switch (1) {
  case 0:
    text = "This is zero";
    break;
  case 1:
    text = "This is one";
  case 2:
    text = "This is two";
    break;
  default:
    text = "No matches found!";
}
console.log(text);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : This is two</li>
	<li><b>Reason</b> : switch(1) means JS looks for a case that matches 1. It finds case 1 & sets text as "This is one". But there is no break, so it keeps going (falls through) into case 2 & overwrites the value.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**48. What will be the output**
```js
const user = {
    name: 'Aman Bhoria!',
    logMessage() {
        console.log(this.name); // What is logged? 
    }
}; 
setTimeout(user.logMessage, 1000);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : undefined</li>
	<li><b>Reason</b> : We've passed the reference in setTimeout not the actual function so as a result it doesn't have the user's context while executing. To get the name we've to pass a callback like: setTimeout(() => user.logMessage(), 1000); </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**49. What will be the output**
```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const finalObj = Object.assign({}, obj1, obj2);
console.log(finalObj);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : { a: 1, b: 3, c: 4 }</li>
	<li><b>Reason</b> : When two or more objects are merged: If keys conflict (i.e., the same key exists in multiple objects), the value from the later object overwrites the earlier one.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**50. What will be the output**
```js
let a = {};
let b = { key: "abc" };
let c = { key: "efg" };

a[b] = 111;
a[c] = 222;
console.log(a[b]);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 222</li>
	<li><b>Reason</b> :In JavaScript, using an object as a key in a normal object turns it into a string. That string is usually "[object Object]". So, two different objects like b and c become the same key -> a[b] = 111 & a[c] = 222 becomes a["[object Object]"] = 111 & a["[object Object]"] = 222. Hence, the second value (222) replaces the first one. </li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**51. What will be the output of this code?**
```js
function printName(firstName, lastName) {
    firstName = "Aman";
    lastName = "Bhoria";
    return arguments[0] + " " + arguments[1];
}

let name = printName("John", "Doe");
console.log(name)
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : Aman Bhoria</li>
	<li><b>Reason</b> :In non-strict mode, the arguments object (an array-like object) holds the values passed to the function. When you change the function parameters, the corresponding values in the arguments object are updated as well. In strict mode, this link is removed. As a result, function prints the original values that were passed.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**

**52. What will be the output of this code?**
```js
let x = true + false; 
let y = x + 1;

console.log(x, y);
```
<details>
	<summary><b>View Answer</b></summary>
<ul>	
	<li><b>Output</b> : 1, 2</li>
	<li><b>Reason</b> : When + operator is used with boolean values, JavaScript performs implicit type coercion: true is converted to 1 and false is converted to 0.</li>
</ul>
</details>

**[:top: Scroll to Top](#javascript-output-based-interview-questions)**


# top 100 mcq below


# JavaScript-100-objective-based-questions


**1. Can we connect JavaScript Directly with Actual Database. can you give reason of it ?**
```js
a) Yes;
b) No;
c) Sometime;
d) Some Database
```
<details>
	<summary><b>View Answer</b></summary>
<ul>
Answer: b) No
</ul>
</details>


**2. Which of the following is NOT a JavaScript data type?**
```js
a) String
b) Boolean
c) Float
d) Undefined
```

<details>
	<summary><b>View Answer</b></summary>
<ul>
Answer: c) Float
</ul>
</details>


**3. Which symbol is used for single-line comments in JavaScript?**
```js
a) //
b) /*
c) #
d) <!--
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) //
</ul>
</details>


** 4. What will typeof null return?**
```js
a) "null"
b) "object"
c) "undefined"
d) "string"
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) "object"
</ul>
</details>



**5. How to make immutable object in JavaScript**
```js
a) final var ={name:'Anil'}
b) const user={name:'Anil'}
c) var  user={name:'Anil'}; Object.freeze(user);
c) There is no way to make immutable object
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) var  user={name:'Anil'}; Object.freeze(obj);
</ul>
</details>



**6. Operators & Expressions
What will 2 + "2" evaluate to? **
```js
a) 4
b) "22"
c) NaN
d) Error
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) "22"
</ul>
</details>


*** 7.Which operator is used for strict equality in JavaScript?***
```js
a) ==
b) !==
c) =
d) !=
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) !==
</ul>
</details>



**8. What does !!"false" evaluate to?**
```js
a) true
b) false
c) undefined
d) Error
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) true
</ul>
</details>



**9. What is the result of 5 == "5"?**
```js
a) true
b) false
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) true
</ul>
</details>



** 10. What is the result of type of  "5 " === " 5"? **
```js
a) true
b) false
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) false
</ul>
</details>



** 11. Which loop is guaranteed to execute at least once? **
```
a) for loop
b) while loop
c) do-while loop
d) None of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) do-while loop
</ul>
</details>



**12. Output of this for loop loop**
```js 
for(;;) {
console.log("Loop")
}
```
```js
a) Infinit Loop 
b) Loop will not execute
c) Error
d) Only Run once 
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) Infinit Loop
</ul>
</details>


** 13. What will console.log(typeof NaN); print? **
```js
a) "number"
b) "NaN"
c) "undefined"
d) "object"
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) "number"
</ul>
</details>


**14. Output of below statment**
```js
let x=null;
let y=null;
console.log(x+y) 
```
```js
a) null
b) object
c) 0
d) undefined
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) 0
</ul>
</details>


*** 15. What will console.log(typeof function(){}); return? ***
```js
a) "function"
b) "object"
c) "undefined"
d) "null"
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) "function"
</ul>
</details>


*** 16. What will console.log(typeof function(){}(); return? ***
```js
a) "function"
b) "object"
c) "undefined"
d) "null"
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) "undefined"
</ul>
</details>

*** 17. What is the default return value of a function in JavaScript if no return statement is used? ***
```js
a) null
b) undefined
c) false
d) 0
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) undefined
</ul>
</details>


** 18. Which type of function executes immediately after its definition? **
```js
a) Anonymous function
b) Named function
c) IIFE (Immediately Invoked Function Expression)
d) Arrow function
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) IIFE
</ul>
</details>


**19 Outpout of below statment ** 
```js
 console.log(x);
 let x = 5; 
```
```js 
a) 5
b) undefined
c) ReferenceError
d) NaN
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) ReferenceError
</ul>
</details>


**20. How do you create an object in JavaScript? **
```js
a) let obj = {};
b) let obj = new Object();
c) Both a and b
d) None of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) Both a and b
</ul>
</details>


**21 How do you access a property in an object?**
```js
a) obj[property]
b) obj.property
c) Both a and b
d) None of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) Both a and b
</ul>
</details>

**22. Which method is used to add a new element at the end of an array?**
```js
a) push()
b) pop()
c) shift()
d) unshift()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) push()
</ul>
</details>


**23 What will console.log([1,2,3].length); return? **
```js
a) 2
b) 3
c) 4
d) undefined
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) 3
</ul>
</details>


**24 How do you remove first 2 element of an array?**
```js
a) pop()
b) shift()
c) unshift()
d) splice()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) splice()
</ul>
</details>


**25 Which keyword allows block-scoped variable declarations? **
```js
a) var
b) let
c) const
d) Both b and c

```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) Both b and c
</ul>
</details>

**26 Which of the following is true about const variables?**
```js
a) Their values cannot be changed
b) They cannot be reassigned
c) They are always immutable
d) All of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) They cannot be reassigned
</ul>
</details>


**27. What is the output of console.log(typeof([]));? **
```js
a) "object"
b) "array"
c) "undefined"
d) "null"
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) "object"
</ul>
</details>


**28 What is a template literal in JavaScript? **
```js
a) A type of array
b) A string enclosed in backticks (` `)
c) A special function
d) A new ES6 data type
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) A string enclosed in backticks (` `)
</ul>
</details>


**29. What will console.log(..."Hello"); output? **
```js
a) "H e l l o"
b) ["H", "e", "l", "l", "o"]
c) Syntax Error
d) undefined
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) "H e l l o"
</ul>
</details>


** 30. How do you define an arrow function? **
```
a) const add = (a, b) => a + b;
b) const add = function(a, b) { return a + b; };
c) Both a and b
d) None of the above
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) const add = (a, b) => a + b;
</ul>
</details>



**31 What does the spread operator ... do in JavaScript?**
```js
a) Combines arrays
b) Expands iterable elements
C) All of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: C) All of the above
</ul>
</details>


** 32. What will console.log([...new Set([1, 2, 2, 3])]); return? **
```js
a) [1, 2, 3]
b) [1, 2, 2, 3]
c) Set {1, 2, 3}
d) {1, 2, 3}
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) [1, 2, 3]
</ul>
</details>


**33. Which statement about arrow functions is true? **
```js
a) They do not bind this
b) They can be used as constructors
c) They have a prototype property
d) They support arguments keyword
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) They do not bind this
</ul>
</details>


**34 Output of follow code? **
```js
function tryFruits(...fruits)
{
console.log(...fruits)
}

tryFruits('apple','banana','grapes')
```
```js
a) ['apple', 'banana', 'grapes']
b) {'apple', 'banana', 'grapes'}
c) 'apple 'banana grapes'
d) 'apple'
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a)  ['apple', 'banana', 'grapes']
</ul>
</details>


**35. What is the purpose of JavaScript Promises?**
```js
a) Handle synchronous code
b) Handle asynchronous operations
c) Block execution until resolved
d) Replace all callbacks
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) Handle asynchronous operations
</ul>
</details>


**36. Which state is NOT valid for a Promise?**
```js
a) Pending
b) Fulfilled
c) Rejected
d) Running
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) Running
</ul>
</details>


**37. Use of Await keyword ?**
```js
a) wait for an asynchronous operation to finish before continuing the execution
b) make promise
c) atop execution  
d) all of above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) wait for an asynchronous operation to finish before continuing the execution
</ul>
</details>


**38. Which method selects an element by ID?**
```
a) document.getElementofId()
b) document.getElementById()
c) document.selectElementById()
d) document.selectById()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) document.getElementById()
</ul>
</details>



**39 Which event is triggered when an input field loses focus?**
```js
a) click
b) blur
c) focus
d) change
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) blur
</ul>
</details>


**40. Which method adds an event listener to an element?**
```js
a) element.addEventListener()
b) element.attachEvent()
c) element.onEvent()
d) element.setEventListener()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) element.addEventListener()
</ul>
</details>


**41. What does event.preventDefault() do?**
```js
a) Stops the default action of an event
b) Stops event propagation
c) Prevents event from being attached
d) None of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) Stops the default action of an event
</ul>
</details>

**43. What is localStorage used for?**
```js
a) Storing session data
b) Storing data persistently in the browser
c) Making API requests
d) Caching images
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) Storing data persistently in the browser
</ul>
</details>


**44 Which method converts a JavaScript object into a JSON string?**
```js
a) JSON.stringify()
b) JSON.parse()
c) toJSON()
d) parseJSON()
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) JSON.stringify()
</ul>
</details>


**45 What will console.log(parseInt("10px")) return?**
```js
a) 10
b) NaN
c) "10px"
d) Error
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) 10
</ul>
</details>


**46. Which method executes a function repeatedly with a time interval? **
```js
a) setInterval()
b) setTimeout()
c) repeat()
d) setLoop()
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) setInterval()
</ul>
</details>



** 47. How do you check if a variable is an array?**
```js
a) typeof x === "array"
b) x.isArray()
c) Array.isArray(x)
d) x instanceof Object
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) Array.isArray(x)
</ul>
</details>




** 48. What is a closure in JavaScript?**
```js
a) A function inside another function that has access to its parent’s scope
b) A block of code that runs automatically
c) A way to define private variables
d) Both a and c
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) Both a and c
</ul>
</details>



**49. Which of the following is true about closures?**
```js
a) Closures have access to their own scope
b) Closures have access to their parent function's scope
c) Closures have access to global scope
d) All of the above
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) All of the above
</ul>
</details>

**50.What will this code output?**
```js
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
```

```js
a) 1 2
b) 0 1
c) 1 1
d) Error
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) 1 2
</ul>
</details>


**51. Which statement about var and let is true?**
```js
a) Both are function-scoped
b) var is function-scoped, let is block-scoped
c) Both are block-scoped
d) var allows redeclaration, let doesn’t
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) var is function-scoped, let is block-scoped
</ul>
</details>


**52. What will console.log(x); var x = 10; output?**
```js
a) 10
b) undefined
c) ReferenceError
d) NaN
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) undefined
</ul>
</details>


** 53. Which statement is used for error handling in JavaScript?**
```js
a) try...catch
b) throw
c) finally
d) All of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) All of the above
</ul>
</details>


**54 What happens if an error occurs inside the try block?**
```js
a) The script stops execution
b) The error is caught in the catch block
c) The script crashes
d) The error is ignored
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) The error is caught in the catch block
</ul>
</details>


**55. What will console.log(x); inside a try block with no catch or finally do?**
```js
a) Print undefined
b) Print null
c) Throw a ReferenceError
d) Nothing
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) Throw a ReferenceError
</ul>
</details>


**56. Which method is used to generate a custom error?**
```js
a) throw new Error()
b) console.error()
c) generateError()
d) raiseError()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) throw new Error()
</ul>
</details>


**57. What will finally do in a try-catch-finally block?**
```js
a) Execute only if no error occurs
b) Execute only if an error occurs
c) Always execute
d) None of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) Always execute
</ul>
</details>


**58. OOP (Object-Oriented Programming) in JavaScript
Which keyword is used to create a class in JavaScript?**
```js
a) class
b) function
c) Class
d) new Class

```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) class
</ul>
</details>

**59. What is the purpose of the constructor method in a class?**
```js
a) To create private variables
b) To initialize object properties
c) To call another class
d) None of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) To initialize object properties
</ul>
</details>



**60. Which keyword is used for inheritance in JavaScript?**
```js
a) implements
b) extends
c) inherits
d) prototype
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) extends
</ul>
</details>



**61. Which method in a class is used to call the parent class constructor?**
```js
a) parent()
b) super()
c) this()
d) constructor()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) super()
</ul>
</details>


**62 Which statement about JavaScript classes is true?**
```js
a) They support multiple inheritance
b) They are syntactic sugar over prototypes
c) They can be redeclared
d) They do not support inheritance
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) They are syntactic sugar over prototypes
</ul>
</details>


**63 Web APIs & Asynchronous JavaScript**
```js
Which API is used for making HTTP requests in JavaScript?
a) XMLHttpRequest
b) Fetch API
c) Axios
d) All of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) All of the above
</ul>
</details>


**64. Which method sends a GET request using Fetch API?** 
```js
a) fetch(url)
b) fetch(url, { method: 'GET' })
c) Both a and b
d) None of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) Both a and b
</ul>
</details>


**65. What does navigator.geolocation.getCurrentPosition() do?**
```js
a) Gets user’s IP address
b) Gets user’s location
c) Opens a Google Maps page
d) None of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) Gets user’s location
</ul>
</details>


**66. Which storage API stores data persistently?**
```js
a) localStorage
b) sessionStorage
c) cookies
d) All of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) localStorage
</ul>
</details>


**67. How can you set an interval in JavaScript?**
```js
a) setTimeout()
b) setInterval()
c) setRepeat()
d) Interval()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) setInterval()
</ul>
</details>



**68 Which method removes an element from an array?**
```js
a) splice()
b) slice()
c) remove()
d) delete()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) splice()
</ul>
</details>


**69. Which JavaScript engine is used in Google Chrome?**
```js
a) SpiderMonkey
b) V8
c) Chakra
d) Nitro
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) V8
</ul>
</details>

**70. Which method converts a string into a number?**
```js
a) parseInt()
b) Number()
c) + (unary plus)
d) All of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) All of the above
</ul>
</details>


** 71. Which function generates a random number between 0 and 1?**
```js
a) Math.random()
b) random()
c) generateRandom()
d) Math.rand()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) Math.random()
</ul>
</details>



** 72. Which of the following is a falsy value in JavaScript?**
```js
a) "false"
b) "0"
c) undefined
d) "undefined"
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) undefined
</ul>
</details>


**73 What will console.log([] == false); return?**
```js
a) true
b) false
c) undefined
d) Error
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) true
</ul>
</details>



**74. Which of the following is NOT a primitive data type in JavaScript?**
```js
a) Number
b) String
c) Object
d) Symbol
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) Object
</ul>
</details>

**75 How do you deep clone an object in JavaScript?**
```js
a) Object.assign({}, obj)
b) JSON.parse(JSON.stringify(obj))
c) obj.clone()
d) obj.copy()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) JSON.parse(JSON.stringify(obj))
</ul>
</details>


**76. What is the output of console.log(2 + "2" - 1);?**
```js
a) "21"
b) 21
c) "22"
d) 1
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) 21
</ul>
</details>



**77. Which method is used to filter elements from an array?**
```js
a) map()
b) filter()
c) reduce()
d) slice()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) filter()
</ul>
</details>



**78 Which function combines array elements into a single value?**
```js
a) reduce()
b) map()
c) join()
d) concat()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) reduce()
</ul>
</details>



**79. What does the following code return?**
```js
console.log([1, 2, 3].map(num => num * 2));
```
```js
a) [2, 4, 6]
b) [1, 4, 9]
c) [1, 2, 3]
d) [2, 3, 4]
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) [2, 4, 6]
</ul>
</details>


**80. Which of the following is NOT an immutable operation?***
```js
a) map()
b) filter()
c) splice()
d) concat()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) splice()
</ul>
</details>


**81. What is the event loop in JavaScript?**
```js
a) A process that handles function calls
b) A mechanism that allows async operations
c) A feature that prevents infinite loops
d) A method to execute code
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) A mechanism that allows async operations
</ul>
</details>


**82. Which of the following executes first in the event loop?**
```js
a) setTimeout()
b) setInterval()
c) Promise.resolve().then()
d) console.log()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) console.log()
</ul>
</details>



**83. Which queue does setTimeout() use in JavaScript?**
```js
a) Microtask queue
b) Callback queue
c) Event loop queue
d) Execution stack
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) Callback queue
</ul>
</details>


**84. What will be the output of this code?**
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```
```js
a) A B C
b) A C B
c) B A C
d) C A B
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) A C B
</ul>
</details>

**85. Which of the following is a best practice in JavaScript?**
```js
a) Using == instead of ===
b) Avoiding global variables
c) Using var instead of let
d) Nesting loops as deep as possible
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) Avoiding global variables
</ul>
</details>


**86. What does "debouncing" do in JavaScript?**
```js
a) Delays function execution until a pause in events
b) Executes a function immediately
c) Runs a function continuously
d) None of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) Delays function execution until a pause in events
</ul>
</details>


**87. What does "throttling" do?**
```js
a) Executes a function only at fixed intervals
b) Prevents a function from running
c) Removes unnecessary function calls
d) Stops event propagation
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) Executes a function only at fixed intervals
</ul>
</details>


**88. Which of the following improves JavaScript performance?**
```js
a) Minifying JavaScript files
b) Using lazy loading
c) Avoiding unnecessary DOM manipulations
d) All of the above
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) All of the above
</ul>
</details>


**89. What is the best way to check if a variable is null or undefined?**
```js
a) if (x == null)
b) if (typeof x === "null")
c) if (x === null || x === undefined)
d) if (x == undefined)
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) if (x === null || x === undefined)
</ul>
</details>


**90. What does document.createElement('div') do?**
```js
a) Creates and appends a div
b) Creates a div but does not append it
c) Selects an existing div
d) Deletes all div elements
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) Creates a div but does not append it
</ul>
</details>


**91. Which API is used to create animations in JavaScript?**
```js
a) WebGL
b) requestAnimationFrame()
c) animateCSS()
d) window.setInterval()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) requestAnimationFrame()
</ul>
</details>



**92. Which function removes whitespace from both ends of a string?**
```js
a) trim()
b) slice()
c) removeSpace()
d) strip()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) trim()
</ul>
</details>


**93. Which method removes the last element from an array?**
```js
a) pop()
b) shift()
c) splice()
d) removeLast()
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) pop()
</ul>
</details>

**94. What is the output of the following code?**
```js
console.log(myFunc);
function myFunc() {
    return "Hello";
}
```
```
A) undefined
B) ReferenceError: myFunc is not defined
C) [Function: myFunc]
D) TypeError: myFunc is not a function

```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: c) ƒ myFunc() { return "Hello"; }
</ul>
</details>

**95. Which of the following is an example of a higher-order function?**
```js
a) A function that returns another function
b) A function with a return type of void
c) A function that has a loop inside
d) A function that only contains if-else statements
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) A function that returns another function
</ul>
</details>

**96. Which method is used to handle asynchronous functions in JavaScript?**
```js
a) setTimeout()
b) Promise.then()
c) async/await
d) All of the above
```

<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) All of the above
</ul>
</details>

 **97. Which of the following is NOT true about closures?**
 ```js
 a) A closure allows a function to retain access to variables from its outer scope.
b) Closures are created every time a function is invoked.
c) Closures help in data encapsulation.
d) Closures cannot access global variables.
 ```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: d) Closures cannot access global variables.

</ul>
</details>

**98. What will be the output of the following code?**
```js
const obj = {
    value: 42,
    getValue: () => {
        return this.value;
    }
};
console.log(obj.getValue());
```
```js
a) 42
b) undefined
c) ReferenceError
d) null
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) undefined
</ul>
</details>

**99 What will be the output of the following asynchronous function?**
```js
async function foo() {
    return "Hello";
}
console.log(foo());
```
```js
a) "Hello"
b) Promise { "Hello" }
c) undefined
d) Error
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: b) Promise { "Hello" }
</ul>
</details>

**100. What is currying in JavaScript?**
```js
a) A technique where a function is transformed into a sequence of unary (one-argument) functions.
b) A method to execute functions asynchronously.
c) A way to cache function results for optimization.
d) A technique to convert a function into a class.
```
<details>
	<summary><b>View Answer</b></summary><ul>
Answer: a) A technique where a function is transformed into a sequence of unary functions.	
</ul>
</details>



