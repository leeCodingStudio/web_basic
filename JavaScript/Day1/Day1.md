# 자바스크립트(JavaScript)

### 1995년
- 넷스케이프 커뮤니테이션즈: 네비게이터 브라우저가 90% 이상의 점유율

### 1996년
- 브랜던 아이크 동적인 프로그램을 개발하기 위해 언어(모카, 10일만에 개발)를 개발
- 네비게이터2에 탑재(모카 -> 라이브스크립트 -> 자바스크립트)
- MS의 익스플로러의 jscript 호환성 문제로 크로스 브라우징 이슈가 발생

### 1997년
- 자바스크립트는 ECMAScript(비영리 표준화 기구 ECMA 인터내셔널)로 명명됨

### 1999년
- 비동기적(Asynchronous) 서버와 브라우저가 데이터를 교환할 수 있는 통신기능 Ajax(Asynchronous JavaScript and XML)

### 2005년
- 구글이 발쵸한 구글맵에 Ajax기술을 사용
- 크롬 발표함(V8 자바스크립트 엔진)

### 2006년
- jQuery 등장으로 크로스 브라우정 이슈도 해결

### 2009년
- Node.js의 등장
- 탈 브라우징(웹 브라우저를 벗어나 서버 사이드 애플리케이션 개발에도 사용)

### SPA(Single Page Application) 개발
- React, Vue, Angular

### Typescript
- Javascript에 type을 추가한 스크립트

### 자바스크립트의 특징
- 객체 기반의 스크립트 언어
- 대소문자를 구별
- 문장 끝에 세미콜론을 사용(생략이 가능)

### 자바스크립트의 출력
- Web API Console을 통해 브라우저 Console 창에 출력
- \<script> ~ \</script>
- 외부 자바스크립트를 사용 \<script src="파일명">\</script>

### 자바스크립트의 실행 순서
- 인터프리터 방식이므로 위에서 아래로 실행
- Javascript 파일 및 문장을 \<head> ~ '\</head>' 사이에 넣었을 경우
    - html문서의 시작 -> \<head>에 있는 \<script>를 다운로드/실행 -> \<body>에 있는 HTML 태그를 실행 -> 끝
    - 외부 script 파일을 사용할 경우 script 파일 다운로드가 늦을 때 HTML 실행되지 않은 상태에서 빈 화면이 보일 수 있음

- Javascript 파일 및 문장을 \<body> 끝에 넣을 경우
    - html문서의 시작 -> \<body>에 있는 HTML 태그를 실행 -> \<script>를 다운로드/실행 -> 끝
    - 완벽하지 않은 HTML이 먼저 보여 잘못된 UI가 보일 수 있음

- \<script async>를 사용할 경우
    - html문서의 시작 -> script 파일을 동시에 다운로드/삭제 -> \<body>에 있는 HTML 태그를 실행 -> 끝
    - script 파일이 여러개 있을 경우 먼저 다운로드된 script 파일을 먼저 실행하게 됨
    - script 파일이 서로 연관성이 있는 경우 하나의 스크립트만 실행 후 문제가 발생할 수 있음

- \<script defer>를 사용할 경우
    - html문서의 시작 -> script 파일을 다운로드/삭제 -> \<body>에 있는 HTML 태그를 실행 -> 끝
    - HTML 시작되고 script 파일을 동시에 다운로드/실행을 진행함
    - script 실행은 페이지 구성이 모두 끝날 때까지 지연
    - script 순서에 따라 실행

### ✅ CSS, JavaScript가 반영되지 않을 경우(캐쉬가 남을 경우)
- f12키를 누르고 새로고침 버튼을 누르고 있는 상태에서 "강력새로고침"을 선택
- 컨트롤 + 쉬프트 + R

### 주석문
- // : 한줄 주석
- /* ... */ : 여러줄 주석

### 익스텐션 설치
- JavaScript (ES6) code snippets
    - 자바스크립트 문법을 편하게 사용 가능

### snippets 등록하기
    F1 -> snippets 사용자 코드 조각 구성 -> 새 전역 코드 조각 파일 -> 파일이름 저장 ->
```
{
	"Console log": {
		"prefix": "cl",
		"body": "console.log('$1')"
	}
}
```


# 변수
- 데이터를 저장할 수 있는 메모리 공간
- 값이 변경될 수 있음
- 자바스크립트의 변수는 타입이 없음
- let 키워드를 사용하여 변수를 선언

### var
- 유연한 변수 선언 방식
- 지역변수, 전역변수의 구별이 없음
- 같은 이름의 변수를 선언할 수 있음
```
    console.log(num)
    var num = 10;
    {
        console.log(num);   // 전역변수 num = 10
        var num = 20;       // 지역변수 num = 20
    }
    console.log(num);       // 전역변수 num = 20
```

### let
- 지역변수, 전역변수의 구별이 확실
- 같은 이름의 변수를 선언할 수 없음

### ✅트랜스 컴파일러
- 과거 브라우저 및 특정 브라우저 버전등을 모두 사용할 수 있도록 해석해주는 라이브러리
- BABEL


# 상수(constant)
- 한번 선언된 상수는 다시 재정의 할 수 없음
- 값을 재할당 할 수 없음

```
const 상수명 = 값;
const num = 10;

const 상수명;
상수명 = 값; (X)
```

### ✅자바스크립트에서 상수를 권장하는 이유
- 해킹을 방지하기 위해
- 개발자 실수를 방지하기 위해


# 데이터 타입(Data Type)
- 프로그램에서 다룰 수 있는 값의 종류
- 자바스크립트는 선언시 타입을 정하지 않기 때문에 많은 문제가 발생할 수 있음
- 자바스크립트의 타입 유연성을 해결하기 위해 타입스크립트가 탄생

### 숫자형(number)
- 정수와 실수를 따로 구분하지 않음
- 모든수를 실수 하나로만 표현

### 문자형(string)
- '', "" 또는 ``로 둘러싸인 문자의 집합

```
num = 10
"입력한 숫자는" + num + "입니다.";
`입력한 숫자는 ${num} 입니다.`;
```

### 논리형(boolean)
- 참(true)과 거짓(false)으로 표현되는 값
- false, 0, '', "", null, undefined는 모두 거짓(false)로 판정함
- false가 아닌 모든 값은 참(true)로 판정함

### undefined, null
- undefined: 타입이 정해지지 않은 타입을 의미(변수 선언 후 값이 정해지지 않은 경우)
```
let num;
console.log(num);   // undefined
```
- null: null을 저장한 값. 값이 없는 것
```
let obj = null;
console.log(obj);   // null
```

### 심볼형(symbol)
- 유일하고 변경 불가능한 기본값을 만듬
- 객체 속성의 ket로 사용
```
const sym1 = Symbol('Apple);
const sym2 = Symbol('Apple);
consol.log(sym1 == sym2);   // 값이 같은지 비교
consol.log(sym1 === sym2);  // 데이터타입과 값이 같은지 비교
```

### 객체형(object)
- 어떤 속성을 하나의 변수에 저장할 수 있게 해주는 집합
- key value pair 구조로 저장
```
const user = {userid: 'apple', name: '김사과', age: 20};
              ------  ------
               key     value 
```

### ✅자바스크입트의 변수는 타입이 고정되어 있지 않으며 같은 변수에 다른 타입의 값을 대입할 수 있음
```
let user = {userid: 'apple', name: '김사과', age: 200};
user = '김사과';
```

### 자동 타입 변환
- 특정 타입의 값을 기대하는 곳에 다른 타입의 값이 오면 자동으로 타입을 변환해서 사용
```
const num4 = 10;
const str3 = '10';
console.log(num4 + str3);   // 1010
console.log(num4 - str3);   // 0 -> 자동형변환
console.log(num4 * str3);   // 100 -> 자동형변환
console.log(num4 / str3);   // 1 -> 자동형변환
```

### NaN(Not a Number)
- '정의되지 않은 값이나 표현할 수 없는 값' 이라는 의미
- 숫자로 변환할 수 없는 연산을 시도
```
const char = '삼십';
result = char - 10; // result의 값은 NaN
```

### 타입변환 함수
- 강제로 타입을 변환할 수 있음
- Number(): 문자를 숫자로 변환
- String(): 숫자나 불린등을 문자형으로 변환
- Boolean(): 문자나 숫자등을 불린형으로 변환
- Object(): 모든 자료형을 객체형으로 변환
- parseInt(): 문자를 int형으로 변환
- parseFloat(): 문자를 float형으로 변환


### 자바스크립트의 대화상자
- Web API: 브라우저에서 제공하는 API(Application Programming Interface)
- 프로그램들과 기능들의 상호 통신 방법을 규정하고 도와주는 매개체
- alert(): 사용자에게 메세지를 보여주고 확인을 기다리
- confirm(): 사용자에게 메세지를 보여주고 확인이나 취소를 누르면 그 결과를 불린값으로 반환
- prompt(): 사용자에게 메세지를 보여주고 사용자가 입력한 문자열을 반환