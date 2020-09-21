
    var end = new Date('09/23/2020 4:30 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
         var distance = end - now;
        if (distance < 0 || distance1 < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = '00:00';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);


        document.getElementById('countdown').innerHTML = days + ' Dias,';
        document.getElementById('countdown').innerHTML += hours + ' horas, ';
        document.getElementById('countdown').innerHTML += minutes + ' minutos y ';
        document.getElementById('countdown').innerHTML += seconds + ' segundos';

    }

    timer = setInterval(showRemaining, 1000);

    //const form = document.getElementById('pass1');
    //form.onsubmit = (e) => {
    //    e.preventDefault();
     //   const respuesta1 = document.getElementById('Respuesta1');
    //    const Valor = respuesta1.value;
    //    respuesta1.value = " ";
    //    console.log(Valor);
    //    if (Valor == 1) {
    //        alert("Felicidades");
    //    }
        
    //}
