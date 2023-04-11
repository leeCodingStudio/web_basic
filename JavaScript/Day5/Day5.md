# wrapper object

### Primitive Types(기본 타입 == 원시타입)
- string, number, bigint, boolean, undefined, symbol, null
- 기본 타입은 객체가 아님
- 기본 타입은 프로퍼티와 메서드를 정의할 수 없음
- new 키워드를 사용하여 원시 타입을 래퍼 객체로 생성할 수 있지만, 주로 사용하는 방법은 아님

```
    let a = 'apple';                // string 타입
    let a = new String('apple');    // String 타입

```

string -> String
number -> Number
bigibt -> BigInt
boolean -> Boolean
symbol -> Symbol

# URL, URI(Uniform Resource Identifier)
- 아스키 문자로만 구성되야 함
- 한글이나 특수문자는 이스케이프 처리

```
    const URL = 'https://코리아아이티아카데미.com';
    const encoded = encodeURI(URL); // 이스케이프 처리
    const decoded = decodeURI(encoded); // 디코드 처리(원래대로)
```

# 동등 연산자(===)
- 기본 타입으로 생성된 변수와 new 키워드를 사용하여 명시적으로 생성된 래퍼객체는 서로 다른 타입

```
'JavaScript' === 'JavaScript';              // true
'JavaScript' === new String('JavaScript')   // false
10 === new Number(10)                       // false

let num1 = 10;
let num2 = new Number(10);
num1 === num2;                              // false
```