---
# layout: post
# title: "프로토타입과 프로토타입 체인(Prototype & Prototype Chain)"
# categories:
#   - javascript
# tags:
#   - javascript
#   - prototype
#   - oop
---

<hr/>

자바스크립트는 프로토타입 기반의 언어입니다.<br/>
프로로타입 기반의 언어가 무엇인지, 자바스크립트에서는 이것이 어떻게 구현되는지 알아보자.<br/>

<hr/>

### 프로토타입 기반의 언어?

먼저 위키백과에 정의되어 있는 `프로토타입 기반의 언어`는 아래와 같다.

```
프로토타입 기반 프로그래밍은 객체지향 프로그래밍의 한 형태의 갈래로 클래스가 없고,
클래스 기반 언어에서 상속을 사용하는 것과는 다르게,
객체를 원형(프로토타입)으로 하여 복제의 과정을 통하여 객체의 동작 방식을 다시 사용할 수 있다.
프로토타입기반 프로그래밍은 클래스리스(class-less), 프로토타입 지향(prototype-oriented)
혹은 인스턴스 기반(instance-based) 프로그래밍이라고도 한다.
```

프로토타입에 대해 더 알기 전, 아래와 같은 자바스크립트의 고유 특징을 알아두자.<br/>

- <b>모든 함수는 prototype이라는 이름의 속성값이 있다.</b><br/>
  ( 이것이 프로토타입은 아니다. 단지, 속성값의 이름이 prototype이다. )
- <b>모든 객체는 객체 생성에 사용한 생성자(함수 객체)의 prototype 객체로 연결되는 (숨은) 링크를 갖는다</b>

<br/>
그럼, 자바스크립트에서 ``프로토타입``이라는 것이 어떤식으로 사용되는지 확인해보자.
<hr/>

### 프로토타입?

위에서 정의되어있는 것과 마찬가지로 `프로토타입`은 객체의 원형이다.<br/>
자바스크립트에서는 새로운 객체가 생성될 때, 이 `객체원형(=프로토타입)`을 복사하여 생성된다.<br/>
`프로토타입`에 대해 정확하게 알려면 `Prototype Object`와 `Prototype Link`를 알아야 한다.<br/>
아래 코드를 통해 확인해 보자.

```
function Person(){}
```

아무런 속성을 가지지 않는 `Person`이라는 함수를 정의하였다.<br/>
이 Person이라는 함수가 어떻게 구성되어있는지 확인해보면 아래와 같다.<br/>
<img src="/assets/images/prototype-1.png" alt="Person"/>
일단, `prototype`이라는 속성과 `<prototype>`이라는 속성이 보인다.<br/>

##### Prototype Object

여기서 `prototype` 속성 객체는 Person의 `Prototype Object`로 Person의 객체가 생성될 때,<br/>
참조할 프로토타입이 객체가 된다.<br/>
이 `Prototype Object` 객체는 기본적으로, `constructor`라는 생성자 함수와, `__proto__`를 가지고있다. 여기서 이 `constructor`인 생성자 함수는 위에서 정의된 Person이란 함수를 가리킨다.<br/>
여기서 Person이라는 객체가 생성될 때 이 `Prototype Object`의 `constructor`라는 생성자 함수를 호출하여 새로운 객체가 생성된다.<br/>
다시 말해, 생성되는 객체들의 Prototype으로 사용되는 객체가 `Prototype Object`이다<br/><br/>

여기서는 Person의 `Prototype Object`를 `Person Prototype`로 표현 할 수 있으며,<br/>
코드로는 `Person.prototype`으로 접근이 가능하다.<br/>
<br/>

##### Prototype Link

위의 이미지에서 보이는 `<prototype>`이라는 속성은 `__proto__`라는 속성이라고 생각하면 된다.<br/>
위의 함수 구조는 파이어폭스를 이용해 출력하였는데, 크롬을 사용하면 `__proto__`라고 나올 것이다.<br/>
코드상에서 사용할 때도 `__proto__`으로 사용하므로 `__proto__`라고 이해하자.<br/>
여튼, `__proto__`는 위에 말한 `Prototype Link`이다.<br/><br/>

`Prototype Link`는 해당 객체가 생성될 때 어떤 `Prototype Object`를 복사하여 생성되었는지 알려준다.<br/>
그럼, 위의 `Person Prototype` 객체의 `Prototype Link`는 무엇일까?<br/>
`Object Prototype` 객체이다.<br/><br/>

```
자바스크립트의 모든 객체는 Object 프로토타입을 확장하여 만들었기 때문이다.
```

따라서, Object의 프로토타입에 선언된 toString()과 같은 메소드를 어떤 객체에서든지 사용이 가능하다.

<hr/>

##### code

위의 내용을 코드로 표현해 보자.

```
function Person(firstName){
    this.firstName = firstName;
}

Person.prototype.lastName = "kim";
Person.prototype.getName = function() {
    return this.lastName + this.firstName;
}

var kimcoder = new Person("coder");
var kimchi = new Person("chi");

console.log(kimcoder.getName());    // kimcoder
console.log(kimchi.getName());      // kimchi
```

위의 소스를 설명하자면..<br/>
앞서 정의내린 Person에 인자값으로 firstName을 받아 해당 객체의 변수에 저장,<br/>
Person Prototype에 lastName이라는 속성과, getName이라는 메소드를 정의하였다.<br/>
그 후, kimcoder와 kimchi라는 Person 객체를 생성, getName이라는 메소드를 호출.<br/>
위에서 프로토타입에 대해 어느정도 이해가 됐다면 충분히 어렵지 않은 코드이다.<br/>
아래 스크린샷 이미지도 참조한다면 더 좋을 것이다.<br/>

<img src="/assets/images/prototype-2.png" alt="Person objects"/>
Person Prototype에 정의내린 lastName과 getName이라는 속성과 메소드를 할 수 있고,<br/>
kimcoder와 kimchi 각각의 객체는 firstName 속성과 ``__proto__``에 Person Prototype이<br/>
연결된 것을 확인할 수 있다.<br/><br/>
Person Prototype의 속성을 중간에 동적으로 바꾸면 어떻게 될까?

```
console.log(kimcoder.getName());    // kimcoder
console.log(kimchi.getName());      // kimchi

Person.prototype.lastName = "lee";

console.log(kimcoder.getName());    // leecoder
console.log(kimchi.getName());      // leechi

kimcoder.lastName = "kim";

console.log(kimcoder.getName());    // kimcoder
console.log(kimchi.getName());      // leechi
```

위와 같이 lastName이라는 속성 값을 바꾸면, 그 이후에 값을 참조 때는 바뀐 값을 참조한다.<br/>
kimcoder와 kimchi의 `Prototype Link`인 `Prototype Object`, 즉 Person prototype의<br/>
lastName 값이 lee로 바뀌었기 때문에 모두 lee값이 출력된다.<br/>
<b>여기서 우리는 상위 프로토타입객체를 하위 객체에서 공유하고 있다는 것을 확인 할 수 있다.</b>

그 후, 아래에서 `kimcoder.lastName = "kim";`를 보자.<br/>
kimcoder 객체에 직접 lastName이라는 속성에 kim이라는 값을 넣어주고, 출력하였다.<br/>
보이는 것처럼, 두 객체의 값이 다르게 출력된다.<br/>
위의 상황에 대해서 파악하려면 `프로토타입 체인(Prototype Chain)`에 대해서 알아야 한다.

<hr/>

### 프로토타입 체인

```
프로토타입 체인이란, 프로토타입이 상위 프로토타입까지 연결되는 구조를 말한다.
하위에 있는 프로토타입은 상위에 있는 프로토타입의 속성과 메소드를 공유받는다.
```

사실 위의 소스 혹은 설명들에서 알게모르게 프로토타입 체인의 개념이 나왔었다.<br/><br/>

일단 위의 코드를 이어서 생각해보자.<br/>

- kimcoder라는 객체에는 getName라는 메소드가 선언이 되지 않았는데 어떻게 사용했을까?<br/>
- kimcoder객체의 lastName과 kimchi객체의 lastName 속성값이 왜 다르게 나온것일까?<br/>

우리가 객체에서 어떠한 속성값을 참조할 시에는 아래와 같은 순서로 값을 참조한다.<br/>

1. <b>자기 자신의 객체에서 속성값이 있는가? 있다면 여기서 참조.</b>
2. <b>자기 객체의 프로토타입 객체에 속성값이 있는가? 있다면 여기서 참조.</b>
3. <b>상위 객체의 프로토타입이 있다면, 그 프로토타입 객체에 속성값이 있는가? 있다면 여기서 참조.</b><br/>
   ( 만약 상위 객체가 최상위 객체인 Object prototype 객체라면 아래와 같이 행동. )
4. <b>가장 최상위 프로토타입 객체인 Object prototype 객체에서 값이 있는가? 있다면 참조.</b><br/>
   ( 해당 속성이 존재하지 않을때 = undefined 리턴 )<br/>
   ( 해당 메소드가 존재하지 않을때 = 오류 발생 )<br/>

<br/>
그럼, kimcoder.getName() 동작 구현을 위의 원리에 맞게 생각해보자.<br/>
1. 일단, kimcoder 자신의 객체에는 getName이라는 메소드가 없다. 
2. kimcoder 객체의 프로토타입 객체인 Person Prototype에 접근, 해당 메소드를 찾음.
3. 해당 메소드 실행. 메소드 내부의 ``this.lastName + this.firstName``구문을 보자.
4. lastName 속성 검색. 
5. kimcoder 자신 객체에서 발견. 해당 값 참조.<br/>
( Person Prototype 객체에도 속성이 있지만 자신의 객체에서 발견했으므로 상위 객체에서 값 참조 X )
6. firstName 속성 검색. 자신 객체에서 찾지 못하고 상위 프로토타입 객체에서 찾음. 해당 값 참조.

이와 같은 순서로 kimcoder.getName()이 호출 될 것이다.<br/>
또, kimchi.getName()과 kimcoder.getName()의 결과가 다른 이유는,<br/>
kimcoder 객체에는 lastName이라는 속성 값을 지정해주었기 때문에 상위 프로토타입 객체까지 검색을 하지 않기 때문이다. (아래 이미지를 보면 확실하게 알 수 있다.)<br/>
<img src="/assets/images/prototype-3.png" alt="Person objects"/>
위에 설명했던대로 kimcoder객체는 자신 객체에서 속성 값들이 존재하여 참조하였고,<br/>
kimchi객체는 lastName 속성이 없기 때문에 `__proto__`(상위 프로토타입객체)에 있는 값을 참조하였다.<br/>

<b>이러한 순서에 의해 값을 검색하는 행위를 `프로토타입 체이닝`이라고 한다.</b><br/>
<b>프로토타입 체이닝이 길어질수록 퍼포먼스와는 반비례하니 꼭 명심하도록 하자.</b><br/>
또한, 반대로 프로토타입을 공유하지 않는 새로운 객체를 생성하고 역으로 프로토타입 체인 연결이 가능하다.<br/>

```
var newObj = {};

newObj.__proto__ = Person.prototype;
// newObj.__proto__ = kimcoder.__proto__;
// 이런식으로 해도 결과는 동일하다.
// (kimcoder.__proto__는 Person.prototype이기 때문에)
```

<hr/>

#### 마치며

프로토타입에 대해 간략히 정리하자면,<br/>

1. 자바스크립트는 프로토타입 기반의 언어이므로 프로토타입을 사용하여 객체지향 설계가 가능하다.
2. 모든 함수는 prototype이라는 속성 값이 있으며, 이는 이 함수 객체의 Prototype Object이다.
3. 생성자 함수를 통해 만든 객체는 속성 **proto**를 통해 함수 객체의 프로토타입으로 연결된다.
4. 모든 객체의 최상위 프로토타입은 Object의 prototype 객체이다.
5. 프로토타입 체인닝에 의해 상위 프로토타입 객체들에 접근이 가능하고, 체인닝이 커질수록 퍼포먼스는 안 좋아진다.
<hr/>

##### references

https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85_%EA%B8%B0%EB%B0%98_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D<br/>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain<br/>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript<br/>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype<br/>
