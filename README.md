# Bundler

Sass, TS, Vue, React 등을 html, css, js로 변환시켜주는 도구

## Bundler 종류

* parcel
  - 구성이 없는 단순 자동 번들링
  - 소/중형 프로젝트에 적합
* Webpack
  - 매우 꼼꼼한 구성
  - 중/대형 프로젝트에 적합

## favicon 변환 사이트

[ico Converter]("https://www.icoconverter.com/")

## 브라우저 지원 코드 plugin
  
### npm i -D postcss autoprefixer

*In package.json*
```json
    "browserslist": [
    "> 1%", //점유율 1% 이상
    "last 2 versions" //위 조건의 최근 2개 버전
  ]
```

## Babel

ECMAScript 2015+(ES6) 이전 버전과 호환되는 코드로 변환에 사용되는 JS Trans Compiler