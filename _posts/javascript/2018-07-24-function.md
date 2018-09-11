---
layout: post
title: "함수 표현식과 선언식(Function Expressions & Declarations)"
categories:
  - javascript
tags:
  - javascript
  - function
  - hoisting
---
<hr/>

자바스크립트에서 함수는 객체이다.<br>
객체리터럴로 생성되는 객체가 Object.prototype과 연결되는 것과 달리<br>
함수 객체는 Function.prototype에 연결된다. (물론, Function은 Object.prototype에 연결된다.)<br>
또한, 함수는 객체이므로 다른 객체들과 마찬가지로 아래와 같이 사용 될 수 있다.<br>
1. 변수나 객체, 배열 등에 저장할 수 있다.<br>
2. 다른 함수의 인자 값으로 사용할 수 있다.<br>
3. 반환 값으로 전달할 수 있다.<br>

위의 3가지 조건을 충족하는 객체이므로 함수는 ``first-class-object``라고 표현 할 수 있다.<br>
이제, 자바스크립트에서 함수를 정의하는 방법을 알아보자.
<hr/>

### 함수 선언식 (Function Declarations)
함수 선언식은 아래와 규칙으로 같이 쓸 수 있다.<br>
```
function name([param[, param[, ... param]]]) {
   statements
}

name - 함수 이름.
param - 함수에 전달되는 인수의 이름. 함수는 255개까지 인수를 가질 수 있다.
statements -  함수의 몸통을 구성하는 문.
```
이 규칙을 바탕으로 add라는 간단한 함수를 선언하면 아래와 같다.
```
function add(a, b) {
   return a + b;
}
```
<hr/>

### 함수 표현식 (Function Expressions)
함수 표현식은 함수 선언식과 아주 유사하지만, 익명으로 함수를 정의 할 수 있다.<br>
```
function [name]([param[, param[, ... param]]]) {
   statements
}

name - 함수 이름. 함수가 익명(anonymous) 함수로 알려진 경우, 생략될 수 있음.
param - 함수에 전달되는 인수의 이름. 함수는 255개까지 인수를 가질 수 있다.
statements -  함수의 몸통을 구성하는 문.
```
아래에서 기명, 익명 2가지의 방법으로 함수표현식으로 정의내렸다.<br>
함수 표현``Function Literal``은 특정 변수에 실행가능한 코드 블럭이 할당되는 것으로 생각할 수 있다.<br>
```
//named function expression
var add = function add(a, b) {
    return a + b;
}

//anonymous function expression
var add = function(a, b) {
    return a + b;
}
```
<br>
물론, 함수 선언식과 함수 표현식으로 정의 내린 함수의 동작은 동일하게 실행될 것이다.<br>
어떠한 차이가 있는지 아래에서 확인해 보자.
<hr/>

### 함수 표현식과 함수 선언식의 차이
가장 큰 차이점은 함수 표현식은 ``호이스팅``의 영향을 받지 않는다는 것이다.<br>
``호이스팅? 인터프린터가 자바스크립트 코드를 해석함에 있어서 선언된 변수나 함수를``<br>
``해당 Scope의 최상단으로 끌어올리는 것을 말한다.``<br>
코드로 확인해 보자.
```
add(1, 2);  // 3

function add(a, b) {
   return a + b;
}
```
위의 코드는 호이스팅에 의해 add 함수 선언 영역이 최상위로 올라간 뒤, add 함수가 호출된다.<br>
실제 동작시 코드를 표현하면 아래와 같이 될 것이다.<br>
```
function add(a, b) {
   return a + b;
}

add(1, 2);  // 3
```
하지만, 함수 표현식은 호이스팅의 영향을 받지 않기 때문에 아래와 같이 사용하면 에러가 발생한다.<br>
```
add(1, 2);  // TypeError. add is not a function

var add = function (a, b) {
   return a + b;
}
```
<br>
호이스팅은 자바스크립의 큰 특징 중 하나로 설명할 수 있겠지만,<br>
개인적으로 호이스팅의 특징을 사용하여 코드를 작성하는 것은 매우 좋지 않다고 생각한다.<br> 
코드의 가독성에도 문제가 생길 수 있으며, 실제 동작시에도 예측하지 못하는 경우가 생길 우려가 있다.<br>
따라서 함수표현식으로 코드를 작성하는게 좋다고 생각한다.<br>
[airbnb js style guide](https://github.com/airbnb/javascript#functions)에서도 표현식을 선언식보다 더 권장하고 있다.<br>
<hr/>

#### 마치며
개발자로서 자신만의 혹은 공동의 코드 컨벤션이 있는 것은 필수적인 거라고 생각한다.<br>
좋은 코드 컨벤션은 이런 작은 부분들이 모여서 만들어지는 것이기 때문에, <br>
항상 조그마한 부분에도 고민을 하고 객관적인 답을 내려보는게 좋은 것 같다.<br>
오늘의 포스팅이 아마도 이러한 것들 중의 한 예가 아닐까 싶다.<br>
<hr/>

##### references
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%ED%95%A8%EC%88%98<br>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions<br>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype<br>
https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function<br>
https://developer.mozilla.org/ko/docs/Glossary/Hoisting<br>
https://bestalign.github.io/2015/10/18/first-class-object/<br>