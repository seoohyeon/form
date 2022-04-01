const dropdown = document.querySelector('.dropdown')
const toggleButton = document.querySelector('.dropdown-toggle')
const menu = document.querySelector('.dropdown-menu')
const options = document.querySelectorAll('.dropdown-option')
const nextButton = document.querySelector('.next-button')

// 토글버튼 클릭시 -> 메뉴를 보여줌
// 메뉴 max-height: 0 => 메뉴가 있는데 숨김
// 메뉴.show : max-height: 280px => 메뉴 보여줌.
toggleButton.addEventListener('click', function(){
    menu.classList.toggle("show");
})

toggleButton.addEventListener('blur', ()=>{  // focus 반대 blur
    menu.classList.remove("show");
})

/* options.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        const value = e.currentTarget.innerText
        // innerText 혹은 textContent 쓰면 됨
        toggleButton.innerText = value;
        toggleButton.classList.add("selected");
        // menu.classList.toggle("show");
        nextButton.disabled = false;
        // nextButton.removeAttribute('disabled'); 해줘도 동일함
    })
})
*/

/* event.target으로 옵션들의 부모요소ul을 참조해 
이벤트를 위임시키면 반복문을 쓰지않고도 
옵션들에 이벤트를 줄수 있어요~ 
옵션이 많아지면 반복문이 돌아갈때 성능이슈도 있으니 
이 방법도 많이 쓰이고 있습니다

li 부모 태그인 ul태그에 한 번반 이벤트리스너하면 된다

부모ul태그에 한번만 등록해놓고 
자식 li클릭시(버블링은 기본값) 버블링을 활용하면 
하나의 이벤트리스너로  li 요소들 전체를 다룰수있는거죠.
단 모든 이벤트가 버블링이 발생하는건아님.. 
click은 버블링이 기본으로 발생함
*/

menu.addEventListener('click', (e)=>{
    console.log(e)
    const value = e.target.innerText
    toggleButton.innerText = value;
    toggleButton.classList.add("selected");
    
    nextButton.disabled = false;
})

