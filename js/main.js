$(document).ready(function () {
    /*
        padronizando as datas e horas
    */
    function zero(num) {
        return num < 10 ? "0" + num : num
    }
    /*
        manipulando a data e hora atual e imprimindo nas divs #date e #time
    */
    function datetime(date) {
        /* data atual*/
        var year = date.getFullYear();
        var mounth = date.getMonth() + 1;
        var day = date.getDate();

        /* hora atual */
        var hour = date.getHours();
        var min = date.getMinutes();

        /* imprimindo data e hora */
        $("#date").text(`${zero(day)}/${zero(mounth)}/${zero(year)}`);
        $("#time").text(`${zero(hour)}:${zero(min)}`)
    }
    /* 
        imprimindo valor default do rgba -> black 
    */
    $('#rgb').text("rgba(0, 0, 0)")
    /* 
        função que recebe os valores do input range e retorna o rgb
        em texto e mudar a cor do círculo
    */
    function render () {
        var r = $('#red').val();
        var g = $('#green').val();
        var b = $('#blue').val();

        var rgb = `rgba(${r}, ${g}, ${b})`

        $('#circle').css("background-color", rgb);
        $('#rgb').text(rgb)

        var data = new Date();
        datetime(data)
    }
    /* renderiza os elementos a cada 1 milésimo */
    window.setInterval(render, 100)

    /*
        tema escuro
    */
    function darkMode(date) {
        if (date.getHours() >= 18) {
            $('body').css({
                backgroundColor: "#363940",
                color: "#FFF"
            })
            $('a').css("color", "#FFF")
            $('.box-datetime').css("background-color", "#44474e")
            $('.box-content-rgb').css("background-color", "#44474e")
        }
        if (date.getHours() > 0 && date.getHours() < 6) {
            $('body').css({
                backgroundColor: "#363940",
                color: "#FFF"
            })
            $('a').css("color", "#FFF")
            $('.box-datetime').css("background-color", "#44474e")
            $('.box-content-rgb').css("background-color", "#44474e")
        }
        if (date.getHours() >= 6 && date.getHours() < 18) {
            $('body').css({
                backgroundColor: "#FFF",
                color: "#363940"
            })
            $('a').css("color", "#363940")
            $('.box-datetime').css("background-color", "#f6f6f6")
            $('.box-content-rgb').css("background-color", "#e5e5e5")
        }
    }
    var date = new Date();
    datetime(date);
    darkMode(date);
})
