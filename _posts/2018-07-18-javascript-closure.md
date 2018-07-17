---
layout: post
title: "클로저 함수(Excution Context & Scope)"
categories:
  - javascript
tags:
  - javascript
  - closure
  - context
  - scope
  - scopeChain
---
<hr/>
첫 블로깅으로 *실행 컨텍스트(excution context)*와 *유효 범위(scope)*에 대해 정리하고자 합니다.<br>
<hr/>

### 자바스크립트에서 컨텍스트란?
용어들이 낯설게 느껴질 수도 있지만 가볍게 생각하면 코드가 실행되는 환경이라고 생각하면 된다.<br>
컨텍스트의 종류는 [전역컨텍스트(Global Context)](#globalContext)와 [함수컨텍스트(Function Context)](#functionContext)가 있다.<br>

#### 컨텍스트의 특징
- 코드가 실행될때 해당 컨텍스트가 생성된다.
- 코드의 실행이 종료될때 해당 컨텍스트가 소멸된다. (클로저를 제외하고)
- 컨텍스트 내부에는 variable object, scope chain, this가 존재한다.
- this 프로퍼티는 따로 값이 바인딩되지 않으면 글로벌 객체(Global object)를 가리킵니다.<br>
( 웹브라우저에서 글로벌객체는 window )
<hr/>

##### <a name="globalContext"></a>전역 컨텍스트(Global Context)
전역컨텍스트는 스크립트의 첫 실행이라고 볼 수 있는 브라우저에서 스크립트 로드가 끝난 직후에 생성된다.<br>
좀 더 이해하기 쉽게 코드와 컨텍스트를 시각화해서 아래와 같이 표현해보고자 한다.
```
var name = "kimcoder";

function showName() {
    // do something
}
```
사전에 정리한 컨텍스트 특징에 따라 위의 코드를 시각화하여 표현하면 아래와 같이 된다.<br>
변수객체에는 name과 showName이 있고, 스코프체인은 자기자신인 전역객체만 존재한다.
```
전역컨텍스트 : {
    variableObject : {
        variable : {
            name : "kimcoder",
            showName : Function
        }
    },
    scopeChain : [ 전역객체(=window) ]
    this : window
}
```
<hr/>

##### <a name="functionContext"></a>함수 컨텍스트(Function Context)
함수 컨텍스트는 선언된 해당 함수가 호출 될때 생성되고, 함수의 모든 동작이 끝나면 소멸된다.<br>
마찬가지로 이해하기 쉽게 코드와 컨텍스트를 시각화하여 표현해보자.
```
var name = "kimcoder";

function showName(friend) {
    console.log(name);      // "kimcoder"
    var name = "steve";
    console.log(name);      // "steve"
    console.log(friend);    // "james"
}

showName("james");
```
처음으로 console에 name을 출력하면 showName 컨텍스트에 선언된 name 변수가 없기 때문에<br>
스코프체이닝을 하여 전역객체(window)에서 값을 참조하게 되어 "kimcoder"가 출력된다.<br>
그 후에 console 출력은 showName 컨텍스트 내부에 선언된 "steve"라는 값의 name변수를 참조하여<br>
출력이 된다.<br>

showName의 함수 컨텍스트를 시각화하자면, 함수가 실행될때 아래와 같이 컨텍스트가 생성되며,<br>
전역 컨텍스트와의 달리 변수객체에 함수 인자로 전달받는 arguments가 추가되고<br>
스코프체인은 전역객체에 앞서 현재 컨텍스트의 변수객체가 추가된다.<br>
```
showName 컨텍스트 : {
    variableObject : {
        variable : {
            name : "steve",
            showName : Function
        }, 
        arguments : {
            friend : "james"
        }
    },
    scopeChain : [ showName 활성화 객체, 전역객체 ]
    this : window
}
```
<hr/>

##### <a name="scope"></a>스코프(Scope)
스코프라는 것은 간단히 해당 코드의 접근이 가능한 유효한 범위라고 생각하면 된다.<br>
글로벌 스코프와 로컬 스코프, 이렇게 2가지가 있으며,<br>
글로벌 스코프의 경우 전역 컨텍스트의 스코프, 로컬 스코프의 경우 함수 컨텍스트의 스코프라고 이해하면 된다.<br>
마찬가지로 소스와 함께 이해하면 좋을 것 같다.<br>
```
var globalValue = 1;

function test() {
    var localValue = 100;
    console.log(globalValue);   // 1
    console.log(localValue);    // 100
}

test();
console.log(globalValue);       // 1
console.log(localValue);        //  error, localValue is not defined 
```
test 함수 내부에서의 console 출력은 모두 정상적으로 작동된다.<br>
스코프체이닝을 통해 전역 스코프에 있는 전역변수 globalValue를 참조할 수 있고,<br>
로컬 스코프(test함수 컨텍스트의 스코프)에 있는 지역변수 localValue를 참조할 수 있기 때문이다.<br>
반면, 전역에서 출력한 localValue 같은 경우 참조가 불가능하기 때문에, 에러가 난다.<br><br>
<hr/>

##### <a name="scopeChain"></a>스코프체인(ScopeChain)
스코프체인은 컨텍스트들의 스코프를 특정 객체에 저장하여 단계별로 저장되는 것을 말합니다.<br>
특정한 변수들을 자기자신의 컨텍스트에서부터 시작하여 단계별로 상위 스코프들을 탐색하여 참조 할 수 있다.<br>
```
var globalValue = 1;

function test() {
    var localValue = 2;
    function inner() {
        var innerValue = 3;
        function deeper() {
            console.log(globalValue, localValue, innerValue);   // 1, 2, 3
        }   
    }
}
```
위의 소스에서 deeper 함수 내에서 출력하는 변수들은 아래와 같은 순서로 탐색하여 참조가 된다.<br>
``[ 'deep context 객체', 'inner context 객체', 'test context 객체', '전역객체' ]``<br>
탐색경로가 길어지면 길어질 수록 코드의 성능이 좋지 않으므로 주의해야 한다.<br>
( 기본적으로 컴퓨터가 하는 일이 많아지면 성능은 반비례한다고 생각을 해두자. )<br>
<hr/>

#### 블록 스코프와 함수 스코프
또 알아두어야 할 것이, 기본적으론 자바스크립트에서는 블록스코프가 아닌, 함수스코프를 기반으로 작동한다.<br>
아래 소스를 보자<br>
```
for (var i=0; i<3; i++) {
    // do something
}
console.log(i);     // 3
```
자바스크립트가 블록 스코프를 기반으로 작동한다면 마지막에 i를 출력하는 소스는 에러가 날 것이다.<br>
왜냐하면 i는 for문이 종료되고 블록을 벗어나면 사라질 것이기 때문이다.<br>
하지만 i는 선언시에, 함수스코프를 기반으로 호이스팅이 되고 여기서는 전역 컨텍스트의 변수객체에 저장이 된다.<br>
따라서 마지막에 출력되는 i의 값은 3이 될 것이고, 전역객체인 window의 i라는 속성으로 저장되어진다.<br>

추가적으로 ES6부터 사용이 가능한, ``let``과 ``const`` 블록 스코프를 기반으로 변수가 생성된다.<br>
소스로 비교를 해보자<br>
```
for (let i=0; i<3; i++) {
    // do something
}
console.log(i);     //  ReferenceError: i is not defined
```
여기서 i값은 ``let``으로 생성하였기 때문에 for문이 종료되고 block 외부에서 참조가 불가능하다.<br>
물론, let으로 변수를 선언하여도 호이스팅은 일어나지만 block scope 단위로 발생하기 때문에<br>
block 외부에서는 참조가 불가능하다.
<hr/>

#### 마치며
첫 블로깅이라 글을 쓰는데에 상당히 시간을 들인 것 같다...<br>
앞으로 꾸준히 글들을 적으리라 다짐하며 다음에는 closure에 대해 적으면 좋을 것 같다.<br>
<hr/>

##### references
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/block
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const
https://github.com/lukehoban/es6features