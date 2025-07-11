function test1(button){
    button.style.backgroundColor = "pink";
    button.style.color="red";
}

function changeBg(color) {
    const result = document.querySelector('#result');
    result.style.backgroundColor = color;
}

// 방법 1 : 요소를 변수로 지정 & 미리 만든 함수 사용
/*let btn = document.querySelector("#btn1");
btn.onclick = changeColor;

function changeColor() {
    document.querySelector("p").style.color = "#f00";
}*/

// 방법 2 : 요소를 따로 변수로 만들지 않고 사용
/*document.querySelector("#btn1").onclick = changeColor;

function changeColor() {
    document.querySelector("p").style.color = "#0f0";
}*/


//방법 3: 직접 함수 선언
document.querySelector("#btn1").onclick=function() {
    document.querySelector("p").style.color="#5fcda7";
};

document.getElementById("test2-1").onclick = function() {
    alert("고전 이벤트 모델로 출력된 대화상자");
};

//이벤트 제거
document.getElementById("test2-2").onclick = function() {
    //test2-1 이벤트 제거
    document.getElementById("test2-1").onclick = null;
    alert("test2-1 이벤트를 제거하였습니다.");
};


document.getElementById("test2-3").onclick = function(e){
    //방법1
    //e.target.style.backgroundColor = "skyblue";

    //방법2
    // document.getElementById("test2-3").style.backgroundColor = "pink";

    //방법3
    // this.style.backgroundColor="yellow";
};

    //방법4
    document.getElementById("test2-3").onclick = function(){
    this.style.color = "green";
};

document.getElementById("test3").addEventListener("click",function(){
    this.style.width = (this.clientWidth +20) + "px" ;
    this.style.height = (this.clientHeight +10) + "px";
});

//버튼 클릭했을 때 색 변경
document.getElementById("changeBtn1").addEventListener("click",function() {
    const div1 = document.getElementById("div1");
    const input1 = document.getElementById("input1");

    const bgColor = input1.value;
    div1.style.backgroundColor = bgColor;
});


//변화 있을 때 색 변경
document.getElementById("input1").addEventListener("change",function() {
    const div1 = document.getElementById("div1");
    
    const bgColor = this.value;
    div1.style.backgroundColor = bgColor;
    this.value = "";
});

const answers =["꿈을 갖기 위해서", "교도소","오목","독수리 오형제"];

const listItems = document.querySelectorAll("#nonsense li");
const answerDiv = document.getElementById("answer");

listItems.forEach((li,index) =>{
    li.addEventListener("mouseover",() => {
        answerDiv.className = "";
        answerDiv.innerHTML = answers[index];
    });

    li.addEventListener("mouseout" , () => {
        answerDiv.innerHTML = "정답보여주기";
    });
});


document.getElementById("quiz").addEventListener("click", e => {
    if(e.target.src.includes("quiz1.png")) {
        e.target.src = "../image/quiz1_1.png";
    }else {
        e.target.src = "../image/quiz1.png";
    }
});


document.getElementById("jumin1").addEventListener("keyup",e =>{
    const jumin1 = e.target;
    const jumin2 = document.getElementById("jumin2");

    if(jumin1.value.length===6){
        jumin2.focus();
    }
});



