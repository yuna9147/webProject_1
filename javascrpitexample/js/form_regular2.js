// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", function(){
    const span = document.getElementById("inputNameResult");

    // 한글 2~5글자 정규 표현식(정규식)
    // [가-힣] : 한글(단일 자음, 모음 제외)
    const regExp = /^[가-힣]{2,5}$/ ;

    //유효성 검사
    if( regExp.test(this.value) ){
        span.innerText = "유효한 이름 형식입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";
    } else{
        span.innerText = "이름 형식이 유효하지 않습니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }

    if (this.value.trim().length === 0) {
        span.innerText = "";
        return;
    }
});


document.getElementById("idCheck").addEventListener("click",function() {
    const mid = document.getElementById("mid");
    const span = document.getElementById("inputIdResult");

    // 영문자 + 숫자 또는 문자
    //const pattern =/^[a-zA-Z][0-9a-zA-Z]{4,7}$/; //시작문자는 영문이기 때문에 4,7로 한거

     // 최소 하나 이상의 숫자를 포함할 때
    const pattern = /^(?=[a-zA-Z][0-9a-zA-Z]{4,7}$)(?=.*\d).*/;

    console.log("test반환값: " + pattern.test(mid.value));

    if(pattern.test(mid.value)){
        span.innerHTML = "유효한 아이디 입니다."
        span.className="confirm";
    } else{
        span.innerHTML = "아이디는 5~8자로, 첫글자는 영문자로 나머지는 숫자와 영문자만 가능합니다."
        span.className = "error";
    }
    mid.value="";
});

document.getElementById("mid").addEventListener("focus", function(e) {
    document.getElementById("inputIdResult").innerHTML = "";
});



//공백 유효성 검사
document.getElementById("nameCheck").addEventListener("click",function(){
    const userName = document.getElementById("userName");
    const span = document.getElementById("msg");

    if(userName.value.replace(/\s/g,"") === "") {
        span.innerHTML = "이름을 입력해 주세요.";
        span.style.color ="red";
        userName.value="";
    }else{
        span.innerHTML = "입력이 완료되었습니다.";
        span.style.color ="green";
    }
});

document.getElementById("userName").addEventListener("focus", function() {
    document.getElementById('msg').innerHTML = "";
});     



//비밀번호 유효성 검사

document.getElementById("pwdCheck").addEventListener("click",function(){
    const regExp1 = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{6,10}$/;

    const input = document.getElementById("userPwd");
    const message = document.getElementById("message");

    if(regExp1.test(input.value)){
        message.innerHTML = "유효한 비밀번호 입니다.";
        message.className = "confirm";
    } else{
        message.innerHTML = "유효하지 않은 비밀번호입니다.";
        message.className = "error";
    }
});