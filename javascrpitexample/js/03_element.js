//id로 접근하기
function accessId(){
    const div1 = document.getElementById("div1");
    //접근한 요소의 배경색 얻어오기
    const bgColor = div1.style.backgroundColor;
    if(bgColor ==="lightblue"){
        div1.style.backgroundColor = "lightgreen";
    }else{
        div1.style.backgroundColor = "lightblue";
    }
}

//class로 접근하기
function accessClass(){
    //요소를 여러개 접근하는 경우[배열] 형태로 반환됨
    const array = document.getElementsByClassName("div2");

    //인덱스를 이용해서 요소 하나씩 접근
    array[0].style.backgroundColor="lightpink";
    array[0].innerHTML = "첫 번째 요소";

    array[1].style.backgroundColor="tomato";
    array[1].innerHTML = "두 번째 요소";

    array[2].style.backgroundColor="skyblue";
    array[2].innerHTML = "세 번째 요소";
}

//태그명으로 접근하기
function accessTagName(){
    const tagName = document.getElementsByTagName("li");

    for(let i = 0; i<tagName.length; i++){
        const num = tagName[i].innerText;
        tagName[i].style.backgroundColor = "rgb(130, " +(50*num)+ ",450, 0.4)";
    }
}

// 임의의 데이터를 입력받아 콘솔에 출력.
function inputTest() {
    const data = document.getElementById("input-test");
    //data 요소의 현재 값 출력
    console.log(data.value);

    //값을 빈 문자열로 변경 (초기화)
    data.value="";

    //커서 위치를 data요소에 포커싱
    data.focus();
}

//name로 접근하기
function accessName(){
    const hobbyList = document.getElementsByName("hobby");
    let selected=[];

    for(let i = 0 ; i<hobbyList.length; i++) {
        if(hobbyList[i].checked) {
        //  배열에 값 추가
            selected.push(hobbyList[i].value);
        }
    }

    const resultDiv = document.getElementById("name-div");
    if(selected.length > 0) {
        resultDiv.innerHTML = `
                선택한 취미 : <br/>${selected.join(", ")}<br/><br/>
                선택한 개수 : ${selected.length} `;
        }else{
        resultDiv.innerHTML="선택된 항목이 없습니다.";
        }
    }

//CSS선택자로 접근하기
function accessCss(){
    //단일요소 선택
    document.querySelector("#css-div").style.border ="3px solid red";
    
    //여러개 중 첫번째 요소 선택
    document.querySelector("#css-div>div").style.fontSize = "30px";

    //querySelectiorAll() : 모든 자식 div 요소 선택
    const array = document.querySelectorAll("#css-div > div");
    for(let i=0; i<array.length; i++) {
        array[i].style.backgroundColor = "gold";
    }
}


//카카오톡 채팅 만들기
function readValue(){
    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chatting-input");

    if(input.value.trim().length > 0 ){
        bg.innerHTML += "<p> <span> " + input.value + "</span> </p>"

        // 요소.scrollTop            : 요소 내부 현재 스크롤 위치 반환
        // 요소.scrollTop = 위치     : 스크롤을 특정 위치 이동
        // 요소.scrollHeight        : 스크롤 전체 높이

        // 채팅창을 자동으로 아래로 스크롤 (스크롤 고정 효과)
        bg.scrollTop = bg.scrollHeight;
    }

    input.value="";
    input.focus();
}

    //input 태그 키가 눌려졌을 때 엔터인 경우를 검사하는 함수
function inputEnter(event) {
    if(event.key =="Enter") {
        readValue();
    }
}