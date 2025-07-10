function fnAlert(){
    alert("alert버튼 클릭됨");
}

function documentWrite(){
    document.writeln("자바스크립트<br/>");
    document.writeln("<b>안녕하세요</b><br/><h2>반가워요</h2>");
}

function getInnerText(){
    const test1 = document.getElementById("test1");
    console.log(test1.innerText);
}

function setInnerText(){
    document.getElementById("test1");
    test1.innerText = "innerText로<br/> 변경된 내용입니다.";
}

function getInnerHTML1(){
    const test2 = document.getElementById("test2");
    console.log(test2.innerHTML);
}

function setInnerHTML1(){
    const test2 = document.getElementById("test2");
    test2.innerHTML = "<strong>innerHTML</strong>로 변경된 내용<br/>반갑습니다."
}

function print(){
    const testitlet3 = document.getElementById("title");
    title.innerHTML ="이건 <b>첫 번째 레슨</b> 좋은 건 너만 알기<br/> 이제 <b>두 번째 레슨</b> 슬픔도 너만 갖기"
    title.style.color="brown";
    title.style.border="1px solid rgb(2, 20, 78)";
    title.style.borderRadius="10px";
    title.style.fontSize="20px";
    title.style.padding="5px 10px";
    title.style.backgroundColor="#aac499";
    title.style.width="fit-content";
}

function fnConfirm(){
    const confirmBtn = document.getElementById("confirmBtn");

    if(confirm("버튼 배경색을 초록색으로 바꾸겠습니까?")){
        confirmBtn.style.backgroundColor="lightgreen";
    }else{
        confirmBtn.style.backgroundColor="#3485da";
    }
}

function fnPrompt1(){
    const name = prompt("당신의 이름은 무엇입니까?","강하늘");
    const level = prompt("당신의 레벨은 몇입니까?",260);

    console.log(name);
    console.log(level);

    const divEl = document.getElementById("area2");
    divEl.innerHTML = "<b>안녕하세요, "+ name + " 용사님<br/> 당신의 레벨은" +level +"이시군요!</b>";
}

function fnPrompt2(){
    const singer = prompt("찾으시는 가수가 누구인가요?", "아이유");
    const song = prompt("어떤 노래를 찾고 있나요?", "분홍신");

    console.log(singer);
    console.log(song);

     const divE2 = document.getElementById("area3");
    // divE2.innerHTML = `${singer}가 부릅니다. ${song}`;

    if(singer!==null && singer.trim() !== "" && song !==null && song.trim() !== ""){
        divE2.innerHTML = `${singer}가 부릅니다. ${song}`;
    } else {
        alert('가수와 노래제목을 입력해 주세요.');
        divE2.innerHTML="";
    }
}

function fnInput(){
    const input1 = document.getElementById("userId");
    const input2 = document.getElementById("userPwd");

    const id = input1.value.trim();
    const pwd = input2.value.trim();

    // const id = document.getElementById("userId").value.trim();
    // const pwd = document.getElementById("userPwd").value.trim();

    const result = document.getElementById("result");

    if(id !="" && pwd !=""){
        result.value = `${id}, ${pwd}`;
    }else {
        result.value = "다시 확인해 주세요";
    }
    input1.value = "";
    input2.value = "";
}

function fnChange(){
    let before = document.getElementById("number1").value;
    let after = document.getElementById("number2").value;

    const term = before;
        before = after;
        after = term;

    document.getElementById("number1").value = before;
    document.getElementById("number2").value = after;
}

document.getElementById("btn").onclick = function(){
    document.getElementById("namePrint").innerHTML = document.getElementById("name").value;
}