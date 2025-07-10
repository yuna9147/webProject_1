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


function check(){
    const rand = Math.floor(Math.random() * 10 ) +1;
    const guess = document.getElementById("guess").vlaue;

    if(guess > rand){
        document.getElementById("hint").vlaue = 'row';
    } else if(guess<rand){
        document.getElementById("hint").vlaue = 'high';
    } else if(guess=rand) {
        window.alert('정답입니다.');
    }

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