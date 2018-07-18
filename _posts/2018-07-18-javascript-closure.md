---
layout: post
title: "클로저(Closure)"
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

### 클로저? Closure?
클로저는 특정 컨텍스트 내부에 선언된 함수에서 컨텍스트에 접근이 가능한 것을 말한다.<br>
MDN, W3School 등 여러 문서 혹은 불로그들에서 클로저를 정의내린 표현이 조금씩 다를 수 있다.<br>
물론, 다 같은 내용이겠지만 받아들이는 사람에 따라 다를 수가 있을 수 있다.<br>
역시나 가장 좋은 것은 코드와 함께 설명하는 것이라고 생각한다.<br>
<hr/>

##### <a name="counterExample"></a>클로저 예제
코드를 보기 전, 필수적으로 알아두어야 할 것이 ``스코프``,``지역변수의 생명주기``,``스코프체인``등을 알아야 한다<br>

클로저 설명의 정석과도 같은 카운터함수를 함수표현식으로 생성하여 확인을 해 보자.<br>
일반적으로 함수 내부에 선언된 지역변수를 카운팅하여 반환하는 함수를 작성한다고 하면 아래와 같을 것이다.<br>
```
var counter = function() {
    var counterValue = 0;
    return ++counterValue;
};
console.log(counter());     // 1
console.log(counter());     // 1
console.log(counter());     // 1
```
counter라는 변수에 함수를 선언하고 3번을 호출하였지만, 콘솔에 출력되는 값은 동일하다.<br>
함수내에 있는 지역변수인 counterValue는 counter()가 호출이 될때 생성되고, 동작이 모두 끝나면 메모리에서 사라지기 때문이다.<br>
본인이 경험한 몇가지의 프로그래밍 언어에서 지역변수들의 생명주기는 이와 같았다.<br><br>

이제 클로저를 사용한 예제를 확인해보자.<br>
```
var counter = (function() {
    var counterValue = 0;
    return function() {
        return ++counterValue;
    }
})();
console.log(counter());     // 1
console.log(counter());     // 2
console.log(counter());     // 3
```
마찬가지로 counter라는 변수에 익명의 함수를 선언함과 동시에 즉시호출을 하였다.<br>
위의 예제와 달리 counter라는 변수에 함수를 선언한 것이 아니라 익명함수를 호출한 결과를 저장한 것이다.<br> 
여기서 호출한 결과는 counterValue를 반환하는 함수인데 이것이 바로 바로 클로저이다.<br>
일반적인 지역변수의 생명주기를 생각한다면 counterValue는 counter() 호출이 끝난 후, 사라지겠지만<br>
자바스크립트에서는 클로저가 형성될때 해당 컨텍스트의 참조를 계속 유지하고 있기 때문에,<br>
console의 출력 결과가 위와 같이 나온다.<br><br>

위의 익명함수 즉시호출식은 아래와 같이도 변경가능하다.<br>
```
function counterMaker() {
    var counterValue = 0;
    return function() {
        return ++counterValue;
    }
};
var counter = counterMaker();
console.log(counter());     // 1
console.log(counter());     // 2
console.log(counter());     // 3
```
위의 즉시호출 함수를 counterMaker라는 함수로 선언한 것을 제외하곤 똑같은 소스이다.<br>
<hr/>

##### <a name="counterUse"></a>클로저 사용의 장단점
##### 장점
- 함수내의 변수들의 은닉화가 가능하여 객체지향식으로 설계가 가능.
- 특정 기능의 모듈을 제작할 때 유용하게 사용 가능.
- 필요한 부분을 은닉, 캡슐화하고, 무분별한 전역변수의 사용을 막을 수 있음.
- 자바스크립트의 수많은 비동기 호출, 이벤트 콜백 등에서 유용하게 쓰일 수 있음.
<br>

##### 단점
- 클로저가 해당 스코프를 참조하는동안 내부 변수를 위해 메모리가 계속 쓰이고 있음.<br>
( 내부 변수들은 gc의 수집 대상이 아님 )<br>
( 클로저의 사용이 끝나거나 필요가 없다면 아래와 같이 클로저 참조를 해제해야한다. )<br>
``counter = null``<br>
- 새로운 스코프를 생성하고, 스코프체이닝을 통해 변수를 검색하는 시간의 비용이 추가된다.
<hr/>

#### 마치며
클로저에 대해 더 많은 소스예제와 부가적인 내용을 더 자세하게 다루면 좋겠지만<br>
현재로썬 블로깅하는 것을 더 습관화하고 글을 작성하는데에 더 익숙해지는것이 개인적으로 더 큰 목표이다.<br>
추가적으로 클로저에 관해선 꼭 더 상세한 내용이 있는 문서를 보고 확인을 해두는 것이 좋겠다.<br>
<hr/>

##### references
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures<br>
https://www.w3schools.com/js/js_function_closures.asp<br>