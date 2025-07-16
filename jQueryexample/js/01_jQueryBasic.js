//자바 스크립트
document.querySelector("#jsBtn").addEventListener("click",function(){
    this.style.backgroundColor = "black";
    this.style.color = "yellow";
    this.style.fontSize = "20px";
});

document.getElementById("colorChange").addEventListener("click", function(){
    let wrapper = document.getElementById("wrapper");   //div 태그
    let ul = wrapper.getElementsByTagName("ul");        //div 하위 ul태그
    let li = ul[0].getElementsByTagName("li");          //ul 하위 li태그

    for(let i = 0; i < li.length ; i++) {
        let l = li[i];
        if(l.className == "two" ){    //li 태그의 클래스명
            let txt = l.getElementsByTagName("span");
            txt[0].style.color = "red"; //첫번째 span 태그의 글씨색 변경
        }
    }
});




//jQuery
$("#jQueryBtn").on("click",function(){
    $(this).css("background-color","black").css("color","white").css("font-size","20px");
});

$("#colorChange").on("click",function(){
    $("#wrapper > ul > li.three > span").css("color","blue");
});


//-----------------------------------------------------


$("#hello").html("hello jQuery").css({"color": "green", "font-size":"72px"});

$("#btnChange").on("click",function() {
    $("#hello").html("오늘은 선 메이플 후 LOL..."); //설정
    $("#text").html("읽어온 문자: "+$("#hello").html());
    console.log($("#text").html());
})

//-----------------------------------------------------
//이미지 마우스오버

$("#img").hover(
    function() {
         $(this).attr("src","../image/easys-2.jpg");
    } ,

    function() {
         $(this).attr("src","../image/easys-1.jpg");
    } 
);

/*
$("#img").on({
    mouseenter: function(){
        $(this).attr("src","../image/easys-2.jpg");
    }, 
    mouseleave: function(){
        $(this).attr("src","../image/easys-1.jpg");
    }
});
*/

//-----------------------------------------------------
//input 요소값 얻기
$("#phone").on("keyup", function(e) {
    if(e.key === "Enter") {

    const regExp = /^01[016789]-\d{3,4}-\d{4}$/;

    if(regExp.test($("#phone").val())) {
        $("#phoneResult").text("유효한 전화번호 입니다.").css("color","green");
    } else{
        $("#phoneResult").text("전화번호 형식이 유효하지 않습니다. (예: 010-1234-5678)");
        $("#phoneResult").css("color","red");
    }
    if($("#phone").val().length===0) {
        $("#phoneResult").text("");
    }
    }
});

//-----------------------------------------------------
//단독/복수 개체 확인 
$("#singleButton").on("click", function(){
    $(this).html("오늘은 무슨일을 할까?");
});

$(".multiButton").on("click",function() {
    let index = $(this).index();
    let result = index+1 +"번 버튼";
    $(this).html(result);
})


//-----------------------------------------------------
//이미지클릭시 이미지 전환

let number = 1;  //클릭했을 때 2번 이미지 나오게 하려고 number의 초기값 1로 잡아줌.
$("#treeImage").on("click", function() {
    number = (number % 6) +1 ;
    $(this).attr("src","../image/tree-"+number+".jpg");
});