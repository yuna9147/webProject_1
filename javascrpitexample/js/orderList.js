// const no1_ea = document.getElementById("ea1");
// const no2_ea = document.getElementById("ea2");
// const no3_ea = document.getElementById("ea3");

// const no1_sum = document.getElementById("sum1");
// const no2_sum = document.getElementById("sum2");
// const no3_sum = document.getElementById("sum3");


// //총 합계 구하기
// document.getElementById("check").addEventListener("click",()=>{

//         no1_sum.value = no1_ea.value*25000;
//         no2_sum.value = no2_ea.value*27000;
//         no3_sum.value = no3_ea.value*25000;

//         //document.getElementById("total_ea").value = Number(no1_ea.value) + Number(no2_ea.value) + Number(no3_ea.value);
//         document.getElementById("total_sum").value = Number(no1_sum.value) + Number(no2_sum.value) + Number(no3_sum.value);
// });


const uncomma = function(str) {
    return str.replace(/[^\d]+/g, '');
};

const update = function() {
    // 총수량 구하기
    let totalNumber = 0;
    // 속성 선택자 : input[type='number'] input 태그의 속성 중에 type="number"인 대상만.
    const number = document.querySelectorAll("input[type='number']");
    /*for(let i =0; i < number.length; i++){
        totalNumber += parseInt(number[i].value);
    }*/

    number.forEach(num => {
        totalNumber += parseInt(num.value);
    });
    document.getElementById("totalNumber").value = totalNumber;
    


    
    // 총합계 구하기
    let totalPrice = 0;
    // 속성 선택자 : input[name$='Total'] input 태그의 속성 중에 name 속성의 값이
    // ~Total로 끝나는 대상만.
    const price = document.querySelectorAll("input[name$='Total']");
    /*for(let i =0; i < price.length; i++){
        totalPrice += parseInt(price[i].value);
    }*/

    price.forEach(num => {
        totalPrice += parseInt(num.value);
    });

    document.getElementById("totalPrice").value = totalPrice.toLocaleString('ko-KR');
};



document.getElementById("btn").addEventListener("click", update);

const input = document.querySelectorAll("input[type='number']");
input.forEach((target) => { 
    target.addEventListener("input", function(e){
        console.log(e.target);
        const id = e.target.id;
        const price = id.replace("Number", "Price");  //id가 book1Number인걸 book1Total로 변경해주고. 그 값을 price에 넣어줌
        const total = id.replace("Number", "Total");
        document.getElementById(total).value = uncomma(document.getElementById(price).innerHTML) * parseInt(this.value);
        update();
    });
});