$("td:eq(4)").css("background","#ffff00");
$("td:eq(2)").css("background","#ff0000");

$("td:eq(4)").next().css("background","#00ff00");

$("td").eq(4).prev().css("background","#0000ff");

$("td:eq(4)").parent().css("color","#ffffff");
$("td:eq(4)").parent().next().css("color","#ff0000");
$("td:eq(4)").parent().prer().css("color","#0000ff");


$("td:eq(4)").parent().next().children().css("text-decoration","underline");
$("td").eq(4).parent().next().children().eq(1).css("font-weight", "bold");
