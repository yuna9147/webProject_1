document.getElementById("joinBtn").addEventListener("click", function(){

const userName = document.getElementById("user_name");

if(userName.value.replace(/\s/g,"") ==="") {
    alert("이름을 입력해 주세요.");
    userName.value="";
    userName.focus();
    return;
}

//라디오 버튼 입력여부 검사
const gender = document.getElementsByName("gender");
if(!gender[0].checked && !gender[1].checked) {
    alert("성별을 선택해 주세요.");
    return;
}

const job = document.getElementById("job");
if(job.value===""){
    alert("직업을 선택해 주세요.");
    return;
}

const hobby = document.getElementsByName("hobby");
let chk = false;
for(let i=0; i<hobby.length ; i++){
    if(hobby[i].checked) {
        chk = true;
        break;
    }
}

if(!chk) {
    alert("취미를 선택해 주세요");
    return;
}


let str = inputData();
str += "\n\n입력하신 내용이 맞습니까?\n[취소를 누르면 모든 데이터가 사라집니다.]";

//입력 확인
if(confirm(str)) {
    return;
}else {
    document.getElementById("form1").reset();
    return;
}
});


//입력값 출력
function inputData(){
let result = `▶ 이름 : ${document.getElementById("user_name").value}`+"\n";

const gender = document.getElementsByName("gender");
let sex;
for(let i = 0; i <gender.length ; i++){
    if(gender[i].checked) {
        sex = gender[i].value;
    }
}

result += `▶ 성별 : ${sex}`+"\n";
result += `▶ 직업 : ${document.getElementById("job").value}`+"\n";

const hobby = document.getElementsByName("hobby");
let hby="";
for(let i=0; i < hobby.length ; i++){
    if(hobby[i].checked) {
        hby += hobby[i].value + " ";
    }
}
result += `▶ 취미 : ${hby}`+"\n";

return result;
}