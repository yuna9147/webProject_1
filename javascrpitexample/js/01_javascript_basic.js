// js파일은 <script> 태그 내부라고 생각하면 됨
function btnClick2(){
    alert("외부 알림창 출력!!!");
}

function changeColor1(){
    document.querySelector("#box").style.backgroundColor = "red";
    //document.getElementById("box").style.backgroundColor = "red";
}

function changeColor2(){
    document.getElementById("box").style.backgroundColor = "yellow";
}