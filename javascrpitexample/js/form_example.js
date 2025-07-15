document.getElementById("input").addEventListener("keydown", (e) => {
    
    if(e.key === "Enter") {
        e.preventDefault();

        const inputTxt = e.target;
        const result = document.getElementById("output");

        result.value += inputTxt.value +"\n";

        inputTxt.value = "";
        inputTxt.focus();
    }
});



document.getElementById("btn").addEventListener("click",()=>{
    const widthV = Number(document.getElementById("width").value);
    const heightV = Number(document.getElementById("height").value);
    const txt = document.getElementById("txt").value;
    const bgcolor = document.getElementById("bgColor").value;
    const color = document.getElementById("Color").vlaue;

    const result = document.getElementById("result");
    result.style.width =widthV +"px";
    result.style.height = heightV+"px";
    result.style.backgroundColor = bgcolor;
    result.style.color = color;
    result.innerHTML = txt;


    //텍스트 정렬
    result.style.display="flex";
    result.style.justifyContent="center";
    result.style.alignItems="center";
});


// document.getElementById("bgColor").addEventListener("input",e=>{
//     document.getElementById("result").style.backgroundColor = document.getElementById("bgColor").value;
// });

// document.getElementById("Color").addEventListener("input",e=>{
//     document.getElementById("result").style.color = document.getElementById("Color").value;
// });