$(document).ready(function(){
    $("#Up").hide()
    $(".Over").hide()
    $("#Off").click(function(){
        $(".Over").slideToggle()
        $("#Off").hide()
        $("#Up").show()
    })
    $("#Up").click(function(){
        $(".Over").slideUp()
        $("#Up").hide()
        $("#Off").show()
    })
    $("#Bo").click(function(){
        alert("Inicio Sesion mi perro")
    })
})  