document.getElementById("input").addEventListener("keydown", () => {
    
    const inputTxt = document.getElementById("input");
    
    document.getElementById("output").innerHTML = inputTxt.value;
  
});



document.getElementById("btn").addEventListener("click",()=>{
    const widthV = Number(document.getElementById("width").value);
    const heightV = Number(document.getElementById("height").value);
    const txt = document.getElementById("txt").value;

    document.getElementById("result").style.width =widthV +"px";
    document.getElementById("result").style.height = heightV+"px";
    document.getElementById("result").innerHTML = txt;
});


document.getElementById("bgColor").addEventListener("input",e=>{
    document.getElementById("result").style.backgroundColor = document.getElementById("bgColor").value;
});