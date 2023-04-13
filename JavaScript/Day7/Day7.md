# 프로미스(promise)
- 자바스크립트 비동기 처리에 사용되는 객체
- 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용

### 프로미스를 사용시 장점
- 비동기 처리 시점을 명확하게 표현
- 연속된 비동기 처리 작업을 수정, 삭제, 추가하기 편하고 유연
- 코드위 유지 보수성이 증가

```
const 프로미스객체 = () => new Promise((resolve, reject) => {

})
```

### 비동기 처리가 성공 또는 실패 등의 상태 정보를 갖게됨
- resolve가 호출된 경우: 성공
- reject가 호출된 경우: 실패

### 프로미스를 리턴받은 객체
- .then(정상적으로 프로미스 객체가 리턴되었다면 필요한 일을 수행)
- .catch(에러객체가 리턴되었다면 에러를 처리)
- .finally(최종적으로 처리할 일을 수행)


# 옵셔널 체이닝(Optional Chaining)
- ECMA Script 11 버전에 추가
- null 또는 undifined를 확인할 때 쓰이는 연산자
- ?. , ??

```
let dog = {}

dog && dog.name && dog.age
dog?.dog.name
dog.name?.age
```

# async / await
- callback, Promise 비동기터리를 좀 더 쉽게 처리할 수 있도록 사용됨
- ES7에 추가된 문법

```
// 1. Promis(비동기 처리될 전체 함수)를 만들고자 하는 함수 앞에 async를 붙여줌

async function 함수명(){
    ...
    // 2. promise 앞에 await를 붙여줌

    return 값;  // 3. resolve()값과 동일
}
```

### 문제
- 아래 함수를 이용하여 async/await 함수를 만들어 출력하는 문서를 작성해보자.

```
function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
    return Promise.resolve(`🐤 => 🐓`);
    // return Promise.reject(new Error('치킨집 망함!'));
}
```

# JSON(JavaScript Object Notation)
- 데이터를 저장하거나 전송할 때 사용되는 경량의 Data 교환 형식
- 사란과 기계 모두 이해하기 쉬우며 용향이 작아서 XML을 대체하여 데이터 전송들ㅇ에 많이 사용
- 데이터 포멧일 뿐, 통신 방법도 프로그래밍 문법도 아님


### JSON의 특징
- 서버와 클라이언트간의 교류에서 일반적으로 많이 사용
- 자바스크립트를 이용하여 JSON 형식의 문서를 자바스크립트 객체로 변환하기 쉬움
- 자바스크립트 문법과 굉장히 유사하지만 텍스트 형식일 뿐
- 특정 언어에 종속되지 않으며, 대부분 프로그래밍 언어에서 JSON 포멧의 데이터를 핸들링 할 수 있는 라이브러리를 제공

```
{"name":"루시", "age":14, "family":"포메라니안", "weight":3.5}
```

✅ JSON은 이름과 값으로 구성된 프로퍼티의 정렬되지 않은 집합이며 메소드 프로퍼티가 없음

### JSON의 구조
- 이름과 값의 쌍으로 이루어짐
- 데이터는 쉼표로 구분하여 나열
- {}중괄호로 감싸 표현
- 배열은 []대괄호로 감싸 표현

### JSON의 타입
- 숫자, 문자열, 불리언, 객체, 배열, null

```
{
    "class":[
        {"name":"김사과", "age":20, "hp":"010-1111-1111", "pass":true}.
        {"name":"반하나", "age":25, "hp":"010-2222-2222", "pass":false}.
        {"name":"오렌지", "age":30, "hp":"010-2222-2222", "pass":true}.
    ],
    [
        ...
    ]
}
```


### stringify(object)
- 객체를 문자열로 변환

### parse(JSON)
- 문자열 데이터를 자바스크립트 객체로 변환

### fetch api
- Request나 Response와 같은 객체를 이용하여 HTTP 프로토콜을 통해 원격지의 정보를 가져오기 위해 사용하는 api
Ajax -> XMLHttpRequest() -> fetch API
     -> jQuery, Axios

### JSON 검증 사이트
- https://jsonlint.com/
- chrom: JSON Formatter
