$(".im2").hide();
$(".im3").hide();
$(".pr6").hide();
$(".b3").click(function (){
    if($(".im3").slideDown())
    {
        $(".im3").slideUp();
    }
    $(".im2").slideToggle();

})
$(".b4").click(function (){
    if($(".im2").slideDown())
    {
        $(".im2").slideUp();
    }
    $(".im3").slideToggle();

})
$(".b6").click(function (){
    $(".pr6").fadeToggle();
})

$(".in3").click(function ()
{
    alert("Work In Progress!")
})
$(".in7").click(function ()
{
    alert("Work In Progress!")
})