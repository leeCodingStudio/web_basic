// 메뉴 바
const menu = document.querySelector('.navbar__menu')
const menu2 = document.querySelector('.navbar_action')
function Menu_active(){
    menu.classList.toggle('active')
    menu2.classList.toggle('active')
}

// 메뉴 바 클릭
function goToScroll(name) {     // goToScroll()이라는 함수 생성.
    const location = document.querySelector('#'+name).offsetTop; // location 변수가 class(온점+name)을 기준으로 위치하도록 선언.
        window.scrollTo({
            // window.scrollTo()메서드를 이용하여 location으로 이동.
            top: location - 65, // menu에 부여된 z-index에 겹치는 부분을 고려하여 -65의 위치조정을 진행.
        behavior: 'smooth'}); // smooth하게 이동할 수 있도록 조정.
}



window.onload = () => {
    const allCount = document.getElementsByClassName('project');
    const front = document.getElementsByClassName('front');
    const back = document.getElementsByClassName('back');
    const ai = document.getElementsByClassName('ai');
    
    document.getElementsByClassName('all__count')[0].innerText = allCount.length;
    document.getElementsByClassName('front__count')[0].innerText = front.length;
    document.getElementsByClassName('back__count')[0].innerText = back.length;
    document.getElementsByClassName('ai__count')[0].innerText = ai.length;
}

function ProjectButtonClick(project, me) {
    const allCount = document.getElementsByClassName('project');
    const projectCount = document.getElementsByClassName(project);
    const selected = document.getElementsByClassName('selected')[0];

    for(let i=0; i<allCount.length; i++){
        allCount[i].classList.add('none');
    }
    
    for(let i=0; i<projectCount.length; i++){
        projectCount[i].classList.remove('none');
    }

    selected.classList.remove('selected');
    me.classList.add('selected');
}

const btn = document.getElementsByClassName('arrow-up');
window.addEventListener('scroll', () => {
    const home = document.querySelector('#home');
    if (window.scrollY > home.offsetTop + home.offsetHeight) {
        for(let i=0; i < btn.length; i++){
            btn[i].classList.add('visible')
        }
    } else {
        for(let i=0; i < btn.length; i++){
            btn[i].classList.remove('visible')
        }
    }
});