# 이벤트(Event)
- 웹 브라우저가 알려주는 HTML 요소에 대한 사건이 발생
- 웹 페이지에 사용된 자바스크립트는 발생한 이벤트에 반응하여 특정 동작을 수행할 수 있음
- 자바스크립트는 비동기식 이벤트 중심의 프로그래밍 모델

```
<input type="button" onclick="sendit()" value="확인">
            -------  -------  --------
            이벤트타겟 이벤트타입 이벤트리스너

<button type="button" onclick="sendit()">확인</button>
```

### 이벤트 타입(Event Type)
- 발생한 이벤트의 종류를 나타내는 문자열로 이벤트명이라고도 함
- 키보드, 마우스, HTML DOM, window 객체... 등을 처리하는 이벤트 제공
- https://developer.mozilla.org/ko/docs/Web/API/Event

### 이벤트 타겟(Event Target)
- 이벤트가 일어날 객체를 의미

### 이벤트 리스너(Event Listener)
- 이벤트가 발생했을 때 그 처리를 담당하는 함수
- 이벤트 핸들러라고도 부름
- 지정된 타입의 이벤트가 특정 요소에서 발생하면 웹 브라우저는 그 요소에 등록된 이벤트리스너를 실행

```
// 이벤트 등록
객체.addEventListener(이벤트타입, 이벤트리스너);

// 이벤트 제거
객체.removeEventListener(이벤트타입, 이벤트리스너);
```

### 이벤트 객체(Event Object)
- 특정 타입의 이벤트와 관련이 있는 객체
- 이벤트 객체는 해당 타입의 이벤트에 대한 상세 정보를 저장하고 있음
- 모든 이벤트 객체는 이벤트의 타입을 나타내는 type 프로퍼티와 이벤트 대상을 나타내는 target 프로퍼티를 가지고 있음
- 이벤트 객체를 이벤트 리스너가 호출할 때 인수로 전달

```
function sendit(e){
    // e.target(), e.type(click)

}

<input type="button" onclick="sendit()" value="완료">
```

### 문제
- 버튼 2개를 아래와 같이 만들고 각 버튼을 누르면 콘솔에 출력하는 문서를 만들어보자. (단 이벤트 객체를 이용하여 버튼을 구별함)

버튼1을 클릭 -> 버튼 1이 눌렸어요
버튼2을 클릭 -> 버튼 2가 눌렸어요

```
window.onload = function(){
    버튼과 이벤트리스너 세팅!
}

function clockBtn(e){
    버튼을 구별하여 버튼의 출력을 결정
}
```

### 이벤트 전파(Event Propagation)
- 이벤트가 발생했을 때 브라우저가 이벤트 리스너를 실행시킬 대상 요소를 결정하는 과정
- document 객체나 html 문서의 요소에서 이벤트가 발생하면 대상 요소를 결정하기 위해 이벤트 전파가 일어남

- 버블링 전파방식
    - 자식에서 부모로 이벤트를 전파
- 캡처링 전파방식
    - 부모에서 자식으로 이벤트를 전파

- 이벤트 전파를 막는 방법

```
이벤트객체명.stopPropagation();
```

# 이터레이터, 이터러블, 제너레이터

### 이터레이터(Iterator)
- 반복 처리가 가능한 객체
- 내부적으로 next() 메서드를 가지며 next() 메서드는 IteratorResult 객체 value와 done이라는 프로퍼티를 가진 객체를 반환해야함

### 이터러블(Iterable)
- 반복이 가능한 객체
- Symbol.Iterator 메서드가 있어야 하며 Symbol.Iterator는 이터레이터 객체를 반환해야 함
- String, Array, Map, Set ..등 객체
- for 문법으로 반복이 가능

### 제너레이터(Generator)
- 실행을 멈췄다가 나중에 다시 접근할 수 있는 특이한 형태의 함수
- 나중에 다시 접근하기 위해 context(변수)를 저장된 상태로 남겨둠
- 이터레이터를 좀 더 유연하게 사용할 수 있음

```
function* 제너레이터명(){

}
```

# 스프레드(Spread) 연산자 -> 전개구문
- 모든 Iterable은 Spread가 될 수 있음
- 순회가능한 데이터는 펼쳐 질 수 있음

```
function 함수명(...Iterable){
    [...Iterable]
    {...obj}
}

function add(num1, num2, num3){
    return num1 + num2 + num3;
}

add(10, 20, 30);

const nums = [10, 20, 30];
add(nums[0], nums[1], nums[2]);
add(...nums);
```

### 구조 분해 할당

```
const fruits = ['🍌', '🍊', '🍎', '🍓', '🍉'];
const [fruit1, fruit2, fruit3, fruit4, fruit5] = fruits;
const [fruit1, fruit2, ...others] = fruits;
```

✅ 참고!

```
const point = [1, 2];
const [x, y, z=0] = point
```


# 세트(set)
- set 객체는 중복되지 않은 유일한 값들의 집합
- 요소 순서에 의미가 없음
- 인덱스로 요소에 접근할 수 없음
- 교집합, 합집합, 차집합, 여집합 등을 구현

```
const 세트명 = new Set([요소1, 요소2, 요소3..]);
```

### 문제1.
주어진 배열에서 중복을 제거해보자!
(단, set을 이용하여 중복제거)

const fruits = ['🍎','🍊','🍎','🍉','🍌','🍓','🍌','🍈','🍋','🍈'];

### 문제2.
주어진 두 세트의 공통된 아이템만 담고 있는 세트를 생성해보자

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);