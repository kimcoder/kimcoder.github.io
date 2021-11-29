---
id: react-simple-image-slider-1
title: "React 컴포넌트 제작기 1 / 3"
categories:
  - react
tags:
  - reactjs
  - react-component
  - rollup
  - webpack
  - babel
---

<hr/>
2018-09-21
reactjs 컴포넌트 제작부터 배포까지의 과정을 다뤄보고자 한다.<br>
이번 포스팅은 컴포넌트 제작을 위환 환경 구축 과정까지 할 예정이다.<br><br>
( <a href="https://github.com/kimcoder/react-simple-image-slider" target="_blank"><b>react-simple-image-slider</b></a>를 제작하면서 쓰는 포스팅. )

<hr/>

### React 컴포넌트 제작을 위한 환경 구축

세부적인 내용을 확인하기 전에, 대략적으로 필요한 것들을 정리해보자.<br>

1. <b>React 컴포넌트 모듈 번들 도구 설정</b>.
2. jsx, ES6 문법 등 모던한 방식의 개발을 할 예정이므로, 이를 위한 <b>babel 설정</b>.
3. 작업하는 컴포넌트 배포 전, <b>실제 테스트 환경 설정</b>.
4. 코드 컨벤션 적용을 위한 eslint 설정 등 기타 필요 플러그인들 설치.

대략 정리를 해보면 위와 같지만, 사실 실제 할 일들은 그리 많지 않다.<br>
( 필요한 것들만 잘 셋팅해준다면 ^^ )

<hr/>

### 1. rollup

필자는 그동안 개발을 해오면서 `gulp`와 `webpack` 이 2가지를 사용한 경험이 있다.<br>
하지만, 이번 컴포넌트 제작은 `rollup`이라는 번들 도구를 사용할 예정이다.<br><br>
리액트를 제작한 페이스북에서도 rollup으로 현재 빌드를 하고 있고,<br>
<a href="https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c" target="_blank">Webpack and Rollup: the same but different</a>란 제목의 재밌는 글을 읽은 이유도 있다.<br>
이 글에서 `Use webpack for apps, and Rollup for libraries`구문이 눈에 들어왔다.<br>
또, rollup은 `react`, `vue`, `ember`, `D3`, `ThreeJs` 등에서도 사용하는 도구로 소개를 하고 있으니, 이정도면 한 번 경험해 볼 만한 가치는 충분할 것이다.<br><br>

<a href="https://rollupjs.org/guide/en#quick-start" target="_blank">공식홈페이지<a/>의 소개를 보면, `rollup`은 작거나 큰 단위 조각의 코드, 혹은 라이브러리나 애플리케이션과 같이 더 복잡한 조각들의 코드들을 컴파일해주는 도구로 소개되어 있다. 또한, ES6, CommonJS, AMD와 같은 방식들의 모듈 제작 환경을 모두 지원한다.<br>

<hr/>

**install**

제작하고자하는 컴포넌트 디렉토리를 생성 후, 설치를 해주자.

```
mkdir react-simple-image-slider
cd react-simple-image-slider

..
( npm init을 통해 package.json을 생성 )
..

npm install rollup rollup-plugin-babel --save-dev
```

위에서 설명했던대로 babel을 사용할 예정이므로 plugin도 설치를 같이 해준다.
babel에 대한 자세한 설정은 아래에서 다시 다루겠다.

<hr/>

**rollup.config.js**

rollup config 파일을 아래와 같이 작성하였다.

```
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

const external = id => !id.startsWith("/") && !id.startsWith(".");

export default {
    input: "./src/ImageSlider.jsx",
    output: {
        file: pkg.main,
        format: "cjs",
    },
    plugins: [
        babel({ runtimeHelpers: true }),
    ],
    external,
};
```

- input : 번들링 할 소스의 index 파일의 path.
- output : 번들링 결과물 파일의 path와 모듈 방식. ( cjs는 CommonJS방식 )
- plugins : 필요한 플러그인들 지정. ( 초기에는 babel plugin만 추가 )
- external : 소스에서 import하는 모듈들이 외부 의존적인 모듈 지정.

만약, external에서 외부 의존성이 있는 모듈이라면 해당 모듈은 번들링시 포함하지 않게 된다.<br>
예를 들어 지금은 react 컴포넌트를 제작하는 것이므로 reactjs와 같은 모듈은 npm으로 설치하여 import하여 사용을 하게 될 것이다.
여기서 이러한 external한 외부 모듈들은 번들링 결과물에 포함이 되지 않는다.<br>

```
external : [ "react" ]
```

위와 같이 직접 모듈명을 작성해주어도 되지만, 외부 모듈들이 많아지면 번거롭게 다 지정해주어야 하기 때문에,<br>
필자는 함수를 하나 작성하여 처리해주었다.<br>
아래와 같이 import하는 모듈들의 경로를 기준으로 판단하면 쉽게 외부 모듈인지 확인이 가능하다.<br>

```
import React from "react";
import ImageSliderPropTypes from "./ImageSliderPropTypes";
import ImagePreLoader from "./ImageSliderPreLoader";
```

<hr/>

**package.json**

scripts에 rollup 명령어를 아래와 같이 추가해준다.<br>

```
  "scripts": {
      "build": "rollup -c",
      "build:watch": "rollup -c --watch"
  },
```

`-c` flag는 `--config`와 동일하며, config파일명이 `rollup.config.js`일 경우, 파일명은 적지 않아도 된다.
`--config` 뒤에 파일명을 적어 특정 파일의 설정을 참조할 수 도 있다.<br>
또, watch flag을 통해 소스 변경시마다 번들링이 되게 해준다.

<hr/>

### 2. babel

babel에 대해선 따로 설명을 하진 않겠으나, 간략하게 말하자면 ES2015+ 자바스크립트 코드를 구형 브라우저, 환경에서 적용할 수 있게 해주는 컴파일러이다.<br>
babel은 버전이 바뀌면서 셋팅값들이 바뀌는 부분이 있으므로 꼭 <a href="https://babeljs.io/docs/en/" target="_blank">공식홈페이지</a>에서 필요한 부분을 확인하자.<br>
필자는 7.x 버전으로 셋팅 할 예정이다.

<hr/>

**install**

설치해야 할 리스트는 아래와 같다.<br>

- @babel/core" : babel.
- @babel/preset-env" : babel preset을 지정할 수 있게 해주는 모듈. ( babel7부터 사용 )
- @babel/preset-react" : babel react preset.
- @babel/plugin-proposal-class-properties" : Class에서 멤버 변수 관련 문법을 위한 플러그인.
- @babel/plugin-transform-runtime" : 컴포넌트 소스 중 필요한 부분만 polyfill 적용을 위한 플러그인.
- @babel/polyfill" : 테스트 환경 App 빌드시 사용 될 polyfill.
- babel-loader : 테스트 환경을 위한 webpack 설정시 쓸 babel loader.

위의 리스트들을 모두 설치해주자.

```
npm install ... --save-dev
```

<hr/>

**.babelrc**

babel의 설정은 아래와 같이 해준다.

```
{
    "presets": [
        ["@babel/preset-env", {
            "loose": true,
            "modules": false,
            "targets": "> 0.25%, not dead"
        }],
        "@babel/preset-react"
    ],
    "plugins": [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-class-properties"
    ]
}
```

어떤 preset과 plugin들을 쓸 것인지 명시만 해주면 된다.<br>
잠깐, 확인할 부분이 있다면 babel 7.0에서부터는 preset 설정이 조금 바뀌었다는 것이다.<br>
기존에 `es-2015`, `stage-0`과 같은 preset들은 deprecated 되었고 위처럼 target을 지정해주면 된다.<br>
`> 0.25%, not dead`은 점유율이 0.25%인 브라우저들을 타겟으로 컴파일 된다는 의미이다.<br>
( IE10, Blackberry와 같은 보안업데이트가 중단된 브라우저는 무시한다고 한다. )<br>
<a href="https://babeljs.io/docs/en/v7-migration" target="_blank">공식홈페이지</a>에서 더 자세히 확인 할 수 있다.

<hr/>

### 3. 테스트 환경

테스트 환경 설정은, <b>실제 제작한 컴포넌트가 react App에서 import하여 잘 작동이 되는지</b>를 위한 것이다.<br>
4.x대의 버전의 Webpack으로 테스트 환경을 설정할 예정이다.<br>
Webpack에 대한 소개나 설정 방법 등의 자세한 설명은 생략할 예정이다.<br>
( Webpack을 주목적으로 다루는 내용이 아니므로. )

<hr/>

**install**

아래와 같이 설치해준다.<br>

```
npm install webpack webpack-cli webpack-dev-server --save-dev

// "webpack": "^4.17.2",
// "webpack-cli": "^3.1.0",
// "webpack-dev-server": "^3.1.7"
```

webpack 4.x버전부터는 webpack-cli를 같이 설치해줘야 커맨드라인에서 webpack 명령어를 사용할 수 있다.<br>
또, webpack-dev-server를 설치하여 좀 더 편리한 테스팅 환경을 설정해주자.

<hr/>

**webpack.config.js**

```
const path = require("path");

module.exports = {
    entry: {
        index: ["@babel/polyfill", "./example/App.jsx"],
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "example"),
    },
    module: {
        rules: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: "babel-loader",
        }],
    },
    mode: "production",
    plugins: [
    ],
    devServer: {
        contentBase: "./example",
        host: "0.0.0.0",
    },
};
```

테스트 App을 위한 Webpack 설정파일이다.<br>
현재 컴포넌트의 디렉토리에서 테스트 App의 경로를 `./example`로 설정하였고,<br>
`babel-loader`와 `webpack-dev-server` 관련된 내용을 확인할 수 있다.<br>
( babel의 preset과 plugin인 설정 등은 위에서 생성한 .babelrc 파일을 따른다. )<br>
이외에 기본적인 React App을 빌드 시 필요한 html파일과 reactjs 설치 등은 생략하겠다.

**./example/App.jsx**

간략하게 React 소스의 Index부분만 잠깐 살펴보자.<br>

```
import React from "react";
import ReactDOM from "react-dom";
import ImageSlider from "..";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Image Slider Example</h1>
                <ImageSlider/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("App"));
```

`import ImageSlider from "..";`를 보면 상위 디렉토리( =컴포넌트 루트 디렉토리 )에서 모듈을 import하는 것을
확인할 수 있다.<br>
( rollup으로 빌드한 컴포넌트의 소스가 `package.json`의 `main` 값으로 지정하였기 때문 )

<hr/>

**package.json**

scripts에 webpack 명령어를 아래와 같이 추가해준다.<br>

```
  "scripts": {
      "example": "webpack-dev-server --mode development",
      "build": "rollup -c",
      "build:watch": "rollup -c --watch"
  },
```

`npm run example`을 통해 webpack-dev-server를 실행시키면 된다.<br>
`--inline`이나 `--hot`과 같은 flag를 추가하여 Live Reloading, Hot Module Reloading의 기능을
쓰면 더 편리할 수도 있다.<br>
Live Reloading은 전체 페이지가 리로드 되고, Hot Module Reloading은 수정된 소스의 해당 모듈만 리로딩이 된다.<br>

<hr/>

### 4. 기타 설정

마지막으로 eslint 설정, 폴더구조 등 정리를 하자면..<br>

<hr/>

**eslint**

필자는 아래 같이 설치를 하였다.<br>
아마 react를 사용하고 babel을 사용한다면 대부분 비슷한 설정이 될 수도 있겠지만,<br>
자신들의 코딩컨벤션을 적용하여 설정을 해두자.<br>

- eslint
- eslint-config-airbnb
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- eslint-plugin-react
- babel-eslint
<hr/>

**directory structure**

<div style="text-align:center;font-size:13px;">
    <img src="/assets/images/react-component-1-directory.png" alt="component directory structure"/>
    - 컴포넌트 디렉토리 구조 - 
</div>

- dist : rollup으로 React 컴포넌트의 소스가 빌드되는 디렉토리. 배포를 위한 디렉토리.
- example : 개발한 React 컴포넌트를 webpack으로 테스트앱을 제작하여 테스트하는 디렉토리.
- node_modules : 개발시 사용되는 모듈들.
- src : React 컴포넌트의 소스가 있는 디렉토리.
  <br>

현재 디렉토리의 index가 없지만, `package.json`에서 `main` 속성을 dist의 배포용 소스로 지정하였다.<br>
따라서 추후에 컴포넌트를 import할 때 index를 못 찾거나 하는 문제가 발생하지 않는다.<br>

<hr/>

#### 마치며

여기까지의 과정들은 <a href="https://github.com/kimcoder/react-simple-image-slider/tree/213b1195d405be2e76e17ffee9e0ba9670a1d2f2" target="_blank">Git Repository</a>에서 확인할 수 있다.<br><br>
React 컴포넌트 제작기를 총 3번에 나눠 포스팅 계획을 세웠는데,<br>
2번째는 실제 React 컴포넌트 소스를 개발과정을,<br>
3번째는 npm, git에 업로드까지의 과정을 다룰 예정이다.<br>

<hr/>

##### references

https://medium.com/webpack/webpack-and-rollup-the-same-but-different-a41ad427058c<br>
https://rollupjs.org/guide/en#quick-start<br>
https://rollupjs.org/guide/en#configuration-files<br>
https://babeljs.io/docs/en/v7-migration<br>
https://webpack.js.org/<br>
https://webpack.js.org/concepts/#entry<br>
