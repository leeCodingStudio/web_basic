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