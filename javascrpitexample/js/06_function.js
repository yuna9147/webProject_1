
function test1(){}


function bgChange(color){}


function clickCount(){}
function test1(){
    alert("함수 선언식");
}

function bgChange(color){
    document.getElementById("divBg").style.backgroundColor = color;
}

// function clickCount(){
//     const btn = document.getElementById("btn1");
//     btn.innerText = parseInt(btn.innerText) + 1;
// }

function clickCount(btn) {
    btn.innerText = parseInt(btn.innerText) + 1;
}

function add(){
    const num1 = Number(document.getElementById("number1").value);
    const num2 = Number(document.getElementById("number2").value);
    
    const result = document.getElementById("result");
    result.value=num1+num2;
}

// 익명함수와 화살표 함수(함수 표현식)
// HTML 요소에서 특정 이벤트(클릭하거나, 키를 누르거나, 마우스를 움직이는 등)가 발생했을 때, 
//실행할 함수를 등록하는 방법
// document.getElementById("요소id").addEventListener("이벤트", function(){

// }); 


// 화살표 함수(Arrow Function)
// 1. 기본 형태: ([매개변수]) => {}
document.getElementById("btn2-1").addEventListener("click",() => {
    alert("화살표 함수 기본 형태 입니다.");
});

//2.매개변수가 하나일 경우: 매개변수 =>{}
    document.getElementById("btn2-2").addEventListener("click", e => {
        console.log(e.target.id);
        e.target.style.backgroundColor = "yellow";
    })

    function printConsole(fn) { //매개변수로 함수가 전달됨
        //1),2) 실행문
        //console.log(fn(6));
        //3) 실행문
        console.log(fn("홍길동",20));
    }

//3. {}, return 생략
    document.getElementById("btn2-3").addEventListener("click", () => {
    //1. 함수 호출(익명 함수)
    //printConsole( function(num){return num*10});

    // // 2) 함수 호출(화살표 함수)
    // printConsole( num =>  num * 5);

    // // 3) {}, return 생략
    // // printConsole( (name, age) =>  { "name" : name, "age" : age} ); // 문법오류
    // printConsole( (name, age) => { return { "name" : name, "age" : age} } );
     printConsole((name, age) => ({ name: name, age: age }));

});

//this(이벤트가 발생한 요소) 사용 불가
// 1) 익명 함수는 this 사용 가능
document.getElementById("btn2-4").addEventListener("click",function() {
    this.style.backgroundColor = "pink";
})

//2) 화살표 함수는 this 사용 불가
document.getElementById("btn2-4").addEventListener("click",(e)=>{
    console.log(e.target);
    e.target.style.color = "red"
})

// 글자색 변경 클릭했을때 변경
// document.getElementById("fontChang").addEventListener("click", ()=>{
//     document.getElementById("bicycle").style.color = document.getElementById("fontColor").value;
// });


//글자색 선택하자마자 변경
document.getElementById("fontColor").addEventListener("input",e=>{
    document.getElementById("bicycle").style.color = document.getElementById("fontColor").value;
})