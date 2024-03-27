
//$(document).ready(function () {
//    $("header").on({
//        click: function () {
//            $(this).css("background-color", "pink");
//        }
//    });

//    $("footer").on({
//        mouseenter: function () {
//            $(this).css("background-color", "cyan");
//        },
//        mouseleave: function () {
//            $(this).css("background-color", "#86895D");
//        },
//    });

//    $("#botonocultar").click(function () {
//        $("#goku").hide();
//    });

//    $("#botonmostrar").click(function () {
//        $("#goku").show();
//    });

//});

//$document.ready(function)(){
//    creacadena("1", 1)
//    creacadena("2", 2)
//    creacadena("3", 3)
//    creacadena("4", 4)
//    creacadena("5", 5)
//    creacadena("6", 6)
//    creacadena("7", 7)
//    creacadena("8", 8)
//    creacadena("9", 9)
//    creacadena("0", 0)
//    creacadena("+", +)
//    creacadena("-", -)
//};

//function creacadena(control, valor) {
//    $("#" + control).click(function (){
//        var valactual = $("#calculador").val();
//        cadena = calactual + valor;
//    }
//}

$(funcion) {
    $(".boton").on(){
        let contenido = $("#entrada").val();
        contenido += $(this).val();
        $("#entrada").val(contenido);
    }
}

