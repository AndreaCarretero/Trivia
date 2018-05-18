//Le asigno una variable al nombre del jugador -
var userGame= prompt('¿Cuál es tu nombre o apodo?');
// Asignaré el puntaje desde 0
var score = 0
var day=  'Las preguntas del día: ';
// Se asigna  variable a cada pregunta y respuesta en orden correspondiente
var list1='-¿Quién escribió ´El amor en los tiempos del cólera?';
var list2='-¿En que año inicia la I Guerra Mundial?';
var list3='-¿Cómo se llama el himno nacional de Francia?';
var answer1='+Respuesta correcta: C. Gabriel Garcia Marquez-';
var answer2='+Respuesta correcta:  D.1939-';
var answer3='+Respuesta correcta: B.Marsellesa';
// Asignaré una variable para que se aplica la condicional si el usuario jugará la trivia
var play=parseInt(prompt(userGame+  '¿Te atreves a jugar?\n 1 es SI!\n 2 es NO.\n '));
// Esta condicional es: Si el jugador presiona 1 entonces se le dará la Bienvenida con su usuario
if (play===1) {document.getElementById('userGame').innerHTML= ' Bienvenidx ' + userGame;
// Aquí voy a traer cada pregunta con su respuesta utilizando el document.getElementById
// (el id que deseo traer).innerHTML (recordando solo si el usuario jugará la trivia)
    document.getElementById('day').innerHTML= day;
    document.getElementById('list1').innerHTML= list1;
    document.getElementById('answer1').innerHTML= answer1;
    document.getElementById('list2').innerHTML= list2;
    document.getElementById('answer2').innerHTML= answer2;
    document.getElementById('list3').innerHTML= list3;
    document.getElementById('answer3').innerHTML= answer3;

// Asignaré un alert solo para que aparezca como un mensaje
    alert('Comienza la aventura');
//Asignaré preguntas para que el usuario pueda escribirlas ( prompt) ( cada una con sus alternativas)
    var question1=prompt('¿Quién escribió ´El amor en los tiempos del cólera?\n a. Julio Cortazar \n b.Pablo Neruda \n c.Gabriel Garcia Marquez\n d.Mario Benedetti');
//Si su respuesta resulta ser la letra "c"
    if (question1==='c') {
// Entonces se figurará un mensaje diciendo"RESPUESTA CORRECTA"
      alert('RESPUESTA CORRECTA!!');
//Es aquí donde el puntaje tendrá un +1 en cada pregunta
      score = score +1;
// Si su respuesta no es la letra "c"
    } else {
// Entonces se mostrará el siguiente mensaje:
  alert('Hay que empezar a leer..');
        }
//Sucesivamente será así para con las siguientes dos preguntas
    var question2=prompt('¿En que año inicia la I Guerra Mundial? \n a. 1896\n b.1839\n c.1945\n d.1939');
      if (question2==='d') {
        alert('¡Es correcto!');
        score= score + 1;
    } else {
    alert("Incorrecto..¡Pregunta que todo humano debe saber!");
    }
    var question3=prompt('¿Cómo se llama el himno nacional de Francia? \n a. Coran \n b.Marsellesa\n c.La Marcha Real\n d.Marcha Granadera');
      if (question3==='b') {
      alert('MUY BIEN!!');
      score= score + 1;
     } else {
      alert('Esta si que estaba fácil...');
      }
//Le asignaré una variable con el puntaje final y así aparecerá el nombre del usuario+ el puntaje sumado por cada respuesta CORRECTA
    var scorefinal= (document.getElementById('result').innerHTML= userGame +' : Acertaste  ' + score + ' de 3 pregunta(s). ');
//Le asignaré una variable para que aparezcan  las respuestas INCORRECTAS del usuario
    var mistake=(document.getElementById('hits').innerHTML='* Fallaste en '+ (3 - score) + ' pregunta(s).'  +'    ¡Vuelve mañana por otra dosis de conocimientos!  ');
 }
 // Esto ocurrirá si no se cumple la condición principal
else {document.getElementById('userGame').innerHTML= ' Que pena '+  userGame  + ' , TU  te la pierdes :( ';
}
