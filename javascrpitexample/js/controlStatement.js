function result(){
    const kor = parseInt(document.getElementById("kor").value);
    const eng = parseInt(document.getElementById("eng").value);
    const math = parseInt(document.getElementById("math").value);

    const sum = kor + eng + math;
    const avg = (sum/3);
    
    document.getElementById("sum").value = sum;
    document.getElementById("avg").value = avg.toFixed(1) ;

    if(avg>=90){
        document.getElementById("grade").value = 'A';
    } else if(avg >=80) {
        document.getElementById("grade").value = 'B';
    } else if(avg >=70){
       document.getElementById("grade").value = 'C';
    }else if(avg >=60){
        document.getElementById("grade").value = 'D';
    } else {
       document.getElementById("grade").value = 'F';
    }
}



    const rand = Math.floor(Math.random() * 10 ) +1;
    let count = 0;
    let gameOver = false;

function check(){

    if(gameOver) return;

    let input = document.getElementById("guess");
    let number = parseInt(input.value);
    let result = "";

    // 입력값 유효성 검사
    if(isNaN(number) || number < 1 || number > 10) {
        alert('1~10 사이의 숫자를 입력해 주세요.');
        input.value="";
        input.focus();
        return;
    }

    count++;

    if (number === rand) {
        result = "성공입니다! 🥳";
        gameOver = true;
    } else if (number < rand) {
        result = "입력한 숫자가 너무 낮습니다.";
    } else {
        result = "입력한 숫자가 너무 높습니다.";
    }

    
    document.getElementById("count").value = count;
    document.getElementById("hint").value = result;

    
    input.value = "";
    input.focus();
}



function printTest() {

    const text = document.getElementById("hTag") ;
    const img = document.getElementById("imgTag") ;

    text.innerHTML="";
    img.innerHTML="";

    for(let i = 1; i<=6 ; i++) {
        text.innerHTML += `<h${i}> Hello JavaScript </h${i}>`;
    }

    for(let j=1; j<=3; j++){
        img.innerHTML += `<img src='../image/${j}.jpg' />`;
    }
}

function gugudanPrint() {
    let data = "";
    const gugudan = document.getElementById("gugudan");

    for (let i = 1; i <= 9; i++) {
        data += "<table>";
        data += `<tr><th>${i}단</th></tr>`;
        for (let j = 1; j <= 9; j++) {
            data += `<tr><td>${i} x ${j} = ${i * j}</td></tr>`;
        }
        data += "</table>";
    }
    gugudan.innerHTML = data; 
}