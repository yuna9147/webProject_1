let number =1;

$("button:eq(0)").on("click",function(){
    let li1 = $("<li>").css("color","red").html("추가항목"+ (number++));
    li1.addClass("liEvent");

    let li2 = $("<li>").css("color","green").html("추가항목"+ (number++));
    li2.addClass("liEvent");

    let li3 = $("<li>").css("color","blue").html("추가항목"+ (number++));
    li3.addClass("liEvent");


    li1.click(function() {
        $(this).remove();
    });

    li2.click(function() {
        $(this).remove();
    });

    li3.click(function() {
        $(this).remove();
    });


    $("ul").append(li1).append(li2).append(li3)
});



$("button:eq(1)").on("click",function(){
    $("ul").empty();
    number = 1;
});

$("button:eq(2)").on("click", ".liEvent", function(){
    $(this).remove();
});
