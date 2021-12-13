---
layout: post
title: "Async/Await를 사용한 비동기처리"
categories:
  - javascript
tags:
  - javascript
  - es5+
  - asynchronous
  - async
  - await
  - babel
---

<hr/>

자바스크립트 개발을 하면 빼놓을 수 없는 비동기처리.<br/>
지난 Promise 포스팅에 이어 async function에 대해 글을 쓰고자 한다.

<hr/>

### Async Function

async function은 ES2017에서 처음으로 정의되었다.<br/>
말그대로 비동기 함수를 선언, 사용할 수 있고, Promise를 활용하여 구현된다.<br/>
아래 코드를 보자.<br/>

```
const doSomething = async () => {}
const doSomethingKim = async () => "kimcoder";

doSomething();      // "undefined"가 resolved된 Promise객체 반환
doSomethingKim();   // "kimcoder"가 resolved된 Promise객체 반환
```

보이는대로, `async function`은 Promise 객체를 반환한다.<br/>
위에서는 return 값에 Promise 객체를 따로 반환하지 않고 있기 때문에 자동적으로 resolved promise가 wrapping되어 반환되었다.<br/>
이 내용은 [지난 Promise 포스팅](https://kimcoder.github.io/javascript/2018/09/04/javascript-promise.html)에서도 확인이 가능하다.<br/><br/>
그럼, `async function`에서 `await`를 활용한 비동기 처리를 직접 다룬 코드를 확인해보자.

<hr>

### Await

<b>`await`는 `async function`내에서만 사용이 가능한 키워드이다.</b><br/>
아래 코드들을 확인해보자.

```
const doSomething = async () => {
    console.time("doSomethingTest");

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 300, "okay");
    })
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 300, "okay");
    })

    console.timeEnd("doSomethingTest"); // doSomethingTest: 약 600ms
}

doSomething();
```

위의 코드를 실행해보면 대략 600ms의 시간이 걸리는 것으로 확인된다.<br/>
이를 통해, await는 잠시 async함수 구문을 중단시키고 다시 순차적으로 실행되는 것을 알 수 있다.<br/>
(await가 없는 상황이라면, 당연하게도 timeEnd에서 나오는 시간이 0에 가깝게 나올 것이다.)<br/>
MDN에서는 아래와 같이 설명되어 있다.<br/>
`await 문은 async함수의 실행을 중단시키고, Promise가 fulfill되거나 reject되기를 기다리고, 다시 async함수를 실행시킵니다. 이때 await 문의 값은 Promise 에서 fulfill된 값이 됩니다.`<br/><br/>
왜 await라는 네이밍으로 표현하는지 알 것 같다.<br/>
좀 더 생산적인 코드로 확인해보자.<br/>

```
const getPromise = (time) => {
    return new Promise((resolve, reject) => setTimeout(resolve, time, "okay"));
};

const doSomething = async () => {
    console.time("doSomethingTest");

    let p1 = await getPromise(300);
    let p2 = await getPromise(300);

    console.timeEnd("doSomethingTest"); // doSomethingTest: 약 600ms
    return `${p1} ${p2}`;
}

doSomething().then(res => console.log(res));   // "okay okay";
```

MDN에서의 설명처럼 각 변수에 resolved된 값이 저장되어 있는 것이 확인된다.<br/>
그러면 reject의 경우에 어떻게 처리되는지도 확인해보자.

##### error handling

```
const getPromise = (time, isError) => {
    const val = isError ? "not okay" : "okay";
    return new Promise((resolve, reject) => setTimeout(isError ? reject : resolve, time, val));
};

const doSomething = async () => {
    console.time("doSomethingTest");

    try{
        let p1 = await getPromise(300, false);      // resolve
        let p2 = await getPromise(300, true);       // reject
        return `${p1} ${p2}`;
    } catch(rejectValue) {
        return Promise.reject(rejectValue);
    }

    console.timeEnd("doSomethingTest"); // doSomethingTest: 약 600ms
}


doSomething()
    .then(res => console.log(res))
    .catch(err => console.log(err));   // "not okay";
```

만약 await된 Promise가 reject되면, 그 값을 throw하기 때문에 `try...catch`를 활용해야한다.<br/>
코드를 보자면, 첫번째 Promise인 p1은 resolve가 되기 때문에 정상적으로 동작하지만,<br/>
두번째 Promise는 reject가 되어 그 값을 throw하기 때문에 catch문이 실행된다.<br/>
그에 맞게, 함수를 호출하는 외부에서도 catch를 활용하여 에러처리를 할 수 있도록 reject값을 반환해주어야 한다.

<hr/>

### Why Async/Await?

지금까지 `async function`과 `await`가 어떤 것인지 확인을 해보았다.<br/>
그럼 왜 우리가 이 문법을 사용하면 좋을지 확인해보자.<br/>
기존의 Promise 방식과 비교해보자.

```
const loadJson = (url) => {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson("/no-such-user.json")
    .then(res => console.log("success"))
    .catch(err => console.log(err)); // Error: 404
```

```
const loadJson = async (url) => {
    const response = await fetch(url);
    if (response.status == 200) {
        const json = await response.json();
        return json;
    } else {
        throw new Error(response.status);
    }
}

loadJson("/no-such-user.json")
    .then(res => console.log("success"))
    .catch(alert);
```

json을 `fetch`를 활용하여 로드하고, `fetch`의 `json()`이라는 비동기 함수를 호출하는 간략한 소스이다.<br/>
`async/await`를 활용한 아래 소스를 보면 함수 내의 비동기 호출에 대한 콜백 처리로 인한 들여쓰기나 그런 부분들을 처리하지 않아도 되기 때문에 코드의 가독성이 좀 더 좋아질 것으로 기대된다.<br/>
이는, 비동기 호출들이 많으면 많아질수록 더 부각될 것이다.

##### 병렬 처리

`await`는 설명한대로 `async function`을 잠시 중단시키고 해당 비동기 작업을 완료한 뒤, 다시 실행시킨다.<br/>
그러므로 위와 같은식으로 코드를 작성하면 동시성을 가진 여러 비동기작업들을 처리할때는 효과적이지 못하다.<br/>
하지만 아래와 같은 방식으로 병렬 처리를 할 수 있다.<br/>

```
const getPromise = (time) => {
    return new Promise((resolve, reject) => setTimeout(resolve, time, "okay"));
};

const doSomethingSerial = async () => {
    console.time("doSomethingSerial");

    let p1 = await getPromise(300);
    let p2 = await getPromise(300);

    console.timeEnd("doSomethingSerial"); // doSomethingSerial: 약 600ms
}

const doSomethingParallel = async () => {
    console.time("doSomethingParallel");

    let p1 = getPromise(300);
    let p2 = getPromise(300);

    await p1;
    await p2;

    console.timeEnd("doSomethingParallel"); // doSomethingParallel: 약 300ms
}

doSomethingSerial();
doSomethingParallel();
```

혹은 `Promise.all` 메소드를 이용하여 처리 할 수도 있을 것이다.<br/>

```
const doSomethingParallel = async () => {
    console.time("doSomethingParallel");

    let p = await Promise.all([getPromise(300), getPromise(300)])

    console.timeEnd("doSomethingParallel"); // doSomethingParallel: 약 300ms
}

doSomethingParallel();
```

<hr/>

#### 마치며

async/await는 ES2017부터 정의가 되어있기 때문에 사실 지원가능한 브라우저가 많지 않다.<br/>
그렇기 때문에 babel을 이용하여 컨버팅을 한 뒤 적용을 해야한다.<br/>
이미 많은 프론트엔드 개발자가 이와 같이 개발을 하고 있겠지만,<br/>
비동기 작업시 `Promise`와 `async/await`를 아직 사용하지 않는다면 꼭 사용해보는 것이 좋을 것 같다 :)

<div style="text-align:center;font-size:13px;">
    <img src="/assets/images/async&await-caniuse.png" alt="브라우지 지원현황"/>
    - async/await 지원 browser (출처 caniuse.com) - 
</div>
<hr/>

##### references

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/async_function<br/>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await<br/>
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/try...catch<br/>
https://developers.google.com/web/fundamentals/primers/async-functions?hl=ko<br/>
https://developer.mozilla.org/ko/docs/Web/API/Body/json<br/>
https://caniuse.com/#search=async%2Fawait<br/>
