// Jquery file 
$(document).ready(function(){
    console.log("welcome mahmoud")
});
$(`.landing h1`).click(function(){
    $(".landing p").toggle(`fast`,function(){
        $(`.landing h1`).remove()
    })
})
// عند الضغط علي h1 يتم اختفاء p ثم يحزف h1 نهائيا
$(`.features .container .feat`).click(function(){
    $(`.features .container .feat h3`).css("color: red")
})
