---
layout: post
title: "모듈 패턴(Module Pattern)"
categories:
  - javascript
tags:
  - javascript
  - namespace
  - module
  - designpattern
---

<hr/>

오늘 포스팅은 자바스크립트 디자인 패턴 중 하나인 모듈패턴에 대해 쓰고자 한다.

<hr/>

### 디자인 패턴?

개발을 하면서 디자인패턴에 대한 이야기는 셀수도 없이 많이 들어보았을 것이다.<br/>
자바스크립트뿐만 아니라 어떤 프로그래밍에서든지 적용되는 개념으로,<br/>
프로그래밍에 있어 구조적인 문제를 해결하는 방식에 대해 여러가지 정리를 해두었다고 생각하면 좋을 것 같다.<br/>
23개의 디자인패턴을 공식적으로 처음 정리한 GoF(Gang of four)라고 칭하는 4명의 개발자들을 시작으로<br/>
지금은 수많은 디자인패턴이 존재한다.<br/>
효율적인 아키텍쳐 설계를 하고자한다면 꼭 디자인패턴에 대해 학습을 해야 한다고 생각한다.

<hr/>

### 네임스페이스 패턴

이번 포스팅의 주제인 모듈 패턴에 앞서 네임스페이스 패턴에 대해 간략히 알아보자.<br/>
위키백과에서 네임스페이스의 정의는 아래와 같다.<br/>
`개체를 구분할 수 있는 범위를 나타내는 말로 일반적으로 하나의 이름 공간에서는 이름이 단 하나의 개체만을 가리킨다.`<br/><br/>
특정 이름에 대해 단 하나의 공간, 즉 영역을 가지는 것이라고 생각할 수 있다.<br/>
네임스페이스 패턴은 자바스크립트의 환경에서 유용하게 쓰일 수 있는 패턴이다.<br/>
자바스크립트에서는 일반적으로 아래와 같이 코드를 짤 수 있다.

```
const FacebookAppData = {
    appKey: "---",
    isLogined: false,
    init: function(){
        // facebook api init..
    },
    alerts: {
        isNotValidName: "이름이 정확히 입력해주세요.",
        isNotValidPassword: "비밀번호를 정확히 입력해주세요.",
    }
};
```

페이스북 API 관련된 개발을 한다고하면 위와 같이 `FacebookAppData`라는<br/>
하나의 namespace에 여러 변수나 함수들을 정의내리고 사용할 수 있다.<br/><br/>

이러한 방식으로 인해<br/>
전역에서 사용될 수도 있는 변수들의 사용을 최소화하고, 코드의 관리 및 품질을 높일 수가 있다.<br/>
위에 정의 내린 것처럼 하나의 namespace는 단 하나의 독립된 공간으로 사용해야하니,<br/>
`FacebookAppData`이라는 변수 네임의 독립성을 지켜주어야 한다.<br/>
추가로 [Typescript](https://www.typescriptlang.org/docs/handbook/namespaces.html)에서는 namespace라는 키워드를 사용할 수 있다.

<hr/>

#### 모듈 패턴

모듈패턴은 위의 네임스페이스패턴의 아쉬움을 조금 더 보완해 줄 수 있는 패턴이다.<br/>
위의 네임스페이스패턴에 클로저, 즉시실행함수를 사용해 내부에서 사용되는 데이터를 캡슐화한다.<br/>
코드로 확인해보자.

```
const FacebookAppData = (function(){
    const AppKey = "---";
    let isLogined = false;

    const privateMethod = () => {
        // do something..
    };

    return {
        init: () => {
            // facebook api init..
        },
        isLogined: () => isLogined,
        login: () => {
            // do login..
            isLogined = true;
        },
        alerts: {
            isNotValidName: "이름이 정확히 입력해주세요.",
            isNotValidPassword: "비밀번호를 정확히 입력해주세요.",
        }
    }
})();
```

위와 같이 데이터들을 캡슐화하여 처리할 수 있다.<br/>
사실 `namespace`, `closure`, `즉시실행함수` 이러한 개념들을 잘 알고 있다면,<br/>
그리 어렵거나 복잡한 패턴은 아니라고 생각한다.<br/>

간략히 정리를 해보자면,<br/>

1. namespace를 활용하여 독립된 공간에서 여러 개체들을 다룰 수 있게 한다.
2. 모듈패턴은 데이터를 캡슐화가 가능하기 때문에 좀 더 객체지향적인 코드 설계가 가능하다.
3. private한 메소드들의 단위테스트가 어려울 수 있으며, private 변수들의 관리에 대해 잘 신경써야 한다.
4. 코드의 품질 및 관리를 고려한다면 재사용이 가능한 좋은 코드가 될 수 있다.
<hr/>

#### 마치며

개인적인 일들로 인해 약 한달만의 포스팅이 되었다.<br/>
나에게 중요했던 일들이었지만, 포스팅을 게을리 하지 않겠다는 다짐을 다시 해본다.<br/>
또, 현재 하고 싶은 일들이 너무 많아, 포스팅도 좀 더 진취적인 내용으로 하는 것이 좋겠다는 생각이 든다.

<hr/>

##### references

https://ko.wikipedia.org/wiki/%EC%9D%B4%EB%A6%84%EA%B3%B5%EA%B0%84<br/>
https://namu.wiki/w/%EB%94%94%EC%9E%90%EC%9D%B8%20%ED%8C%A8%ED%84%B4<br/>
https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript<br/>
