const mydate = new Date();
console.log(mydate.getFullYear(), mydate.getMonth() + 1, mydate.getDate());
console.log(mydate.getHours(), mydate.getMinutes(), mydate.getSeconds());

console.log("Date 객체가 가진 toXXXString() 메서드");
// toLocaleDateString() 함수는 "년 월 일"를 문자열로 반환하는 함수 
console.log(mydate.toLocaleDateString());
// toLocaleTimeString() 함수는 "오전/오후 시:분:초"를 문자열로 반환하는 함수 
console.log(mydate.toLocaleTimeString());
// toLocaleString() 함수는 "년월일 오전/오후 시:분:초"를 문자열로 반환하는 함수 
console.log(mydate.toLocaleString());


//3초 뒤 알람표시
document.getElementById("btn1").addEventListener("click", ()=> {
    setTimeout(function() {
        alert("setTimer()을 사용하여 표시됩니다.")},3000);
    });


//시계 작동    
let time_id;
const startTime = function(){
    let now = new Date();
    document.querySelector("#result").value = now.toLocaleTimeString();
    time_id = setTimeout(startTime,1000); //1초 간격으로 값 출력
}

document.getElementById("btn2").addEventListener("click",() =>{
    startTime();
});

document.getElementById("btn3").addEventListener("click",() =>{
    clearTimeout(time_id);
    document.querySelector("#result").value="";
});


//책읽기 제목 클릭
document.getElementById("readBook").addEventListener("click",function() {
    const now = new Date();  //현재 날짜와 시간
    const firstDay = new Date(2025,6,11);   //시작일 25년 7월 11일   // 월은 0부터 시작해서 설정값 -1월을 해줘야함.

    const toNow = now.getTime();    //1970년 1월 1일 부터 ~ 현재까지 시간
    const toFirst = firstDay.getTime(); //시작일까지 지난 시간
    let passedTime = toNow - toFirst;   //두 날짜 차이
    console.log(passedTime);

    passedTime = Math.floor(passedTime/(24*60*60*1000));

    document.querySelector("#result1").innerText=passedTime;
});

//이미지 변경

const image = document.querySelectorAll('.imageChoice');
const targetImg = document.getElementById('target');

image.forEach(thumb => {
    thumb.addEventListener('click',function() {
        const newSrc = this.getAttribute('src');
        targetImg.setAttribute('src',newSrc);
    });
});



//1초마다 이미지 변경
let num=0;
setInterval(function() {
    num =(num%3)+1;
    document.getElementById("imgView").src="../image/" + num+".jpg"},1000);




//이동하기
document.getElementById("btn4").addEventListener("click", ()=>{
    if(confirm("네이버로 이동하시겠습니까?")) {
        location.href="https://www.naver.com/";
        //location.replace("https://www.naver.com/");
    }
});

document.getElementById("btn5").addEventListener("click",() => {
    location.href="03_json.html";
});



//인증번호 생성
document.getElementById("btn6").addEventListener("click", function() {
    let value = "";
    for (let i = 0; i < 5; i++) {
        value += Math.floor(Math.random()*10);
    }
    const result2 = document.getElementById("result2");
    result2.innerHTML = value;
    result2.style.color = "red";
    result2.style.backgroundColor = "pink";
});

//페이지 새로고침


document.getElementById("goNaver").addEventListener("click",function(e){
    e.preventDefault(); //HTML요소가 가지고 있는 기본 이벤트 제거
    alert("네이버로 이동되지 않습니다.");
});
