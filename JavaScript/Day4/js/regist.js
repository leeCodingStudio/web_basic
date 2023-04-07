function sendit() {
    // alert('회원가입 버튼 클릭!');
    const userid = document.getElementById('userid');
    const userpw = document.getElementById('userpw');
    const userpw_re = document.getElementById('userpw_re');


    // 정규 표현식
    const expIdText = /^[A-Za-z]{4,20}$/;
    // 비밀번호 정규 표현식 과제
    // 이름 정규 표현식 과제
    // 휴대폰번호 정규 표현식 과제
    // 이메일 정규 표현식 과제
    // const expPwText = //;

    if(!expIdText.test(userid.value)){
        alert('아이디는 4자 이상 20자 이하의 영문자로 입력하세요');
        userid.focus();
        return false;
    }

    if(userpw.value != userpw_re.value){
        alert('비밀번호와 비밀번호 확인의 값이 다릅니다');
        userpw.focus();
        return false;
    }

}
