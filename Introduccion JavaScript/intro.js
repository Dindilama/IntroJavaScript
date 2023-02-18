//var nombre = "Dindi";
//ventana para mostrar un mensaje
//alert("su nombre es: " + nombre);


//Ventana para preguntar verdadero o falso
//var respuesta = confirm("¿Eres mayor de edad?");
//alert("su respuesta es: "+ respuesta);

//Funcion para mostrar el mensaje en la consola del navegador
//var respuesta = confirm("¿Eres mayor de edad?");
//console.log("su respuesta es: "+ respuesta);

//Funcion con campo de texto para escribir cualquier dato.
//var nombre = prompt("Digite su nombre");
//console.log("su nombre es: " + nombre);

//Función para escribir html en el navegador
//var nombre = prompt("Digite su nombre");
//document.write("<h1> Su nombre es: "+ nombre +"</h1>");

  /* punto 1 
  var salario = prompt("Digite su salario");
  var salud = salario * 8 / 100; // salario * 0.08;
  var pension = salario * 10 / 100;
  var sueldoNeto = salario - (salud + pension);
  document.write("<p> Su salario es: "+ salario + "</p>");
  document.write("<p> Su salario es: "+ salud + "</p>");
  document.write("<p> Su salario es: "+ pension + "</p>");
  document.write("<p> Su salario es: "+ sueldoNeto + "</p>");*/

  /* punto 2 
  var base = prompt("Digite la base de la figura");
  var altura = prompt("Digite la altura de la figura");
  var area = base * altura / 2;
  document.write("<p> la base de la figura es: "+ base + "</p>");
  document.write("<p> la altura de la figura es: "+ altura + "</p>");
  document.write("<p> El area de la figura es: "+ area + "</p>");*/

  /* punto 3 
  var n1 = prompt("Digite un numero")
  var n2 = prompt("Digite otro numero")
  document.write("<h1> Operaiones aritmeticas</h1>")
  document.write("<p> Suma= "  + (parseInt(n1) + parseInt(n2)) + "</p>")
  document.write("<p> Resta= "  + (n1-n2) + "</p>")
  document.write("<p> Multiplicacion= "  + (n1*n2) + "</p>")
  document.write("<p> Division= "  + (n1/n2) + "</p>") 
  document.write("<p> Modulo= "  + (n1%n2) + "</p>")*/

  /* punto 4 
  var horasT = prompt("Digite el numero de horas trabajadas en el mes")
  var horasExtra = prompt("Digite el numero de horas extras trabajadas en el mes")
  var hora = 3000
  var totalSalario = hora * (horasT+horasExtra)
  document.write("<h1> Total salario </h1>")
  document.write("<p> Tu salario es: "  + totalSalario + "</p>") */

  /* punto 5 
  var producto = prompt("Digite el valor del producto")
  var iva = producto*19/100
  var totalpago = iva
  document.write("<h1> Total a pagar </h1>")
  document.write("<p> Valor del producto: "  + producto + "</p>")
  document.write("<p> Total a pagar con iva es: "  + totalpago + "</p>")
  */

  /*punto 6
  var Alumnos = prompt("Digite el numero de Alumnos del salon")
  var Alumnas = prompt("Digite el numero de Alumnas del salon")
  var Total = (parseInt(Alumnas) + parseInt(Alumnos))
  var porcAlumnas = Alumnas*100/Total
  var porcAlumnos = Alumnos*100/Total 
  document.write("<h1> Total </h1>")
  document.write("<p> Numero de alumn@s: "  + Total + "%</p>")
  document.write("<p> Porcentaje de alumnos: "  + porcAlumnos + "%</p>")
  document.write("<p> Porcentaje de alumnos: "  + porcAlumnas + "%</p>")
  */

  /* punto 7
  var Nota1 = prompt("Digite la nota 1")
  var Nota2 = prompt("Digite la nota 2")
  var Nota3 = prompt("Digite la nota 3")
  var Nota4 = prompt("Digite la nota 4")
  var Nota5 = prompt("Digite la nota 5")
  var promedio = (parseInt(Nota1) + parseInt(Nota2) + parseInt(Nota3) + parseInt(Nota4) + parseInt(Nota5))/5
  document.write("<h1> Promedio </h1>")
  document.write("<p> El promedio: "  + promedio + "</p>")
  */

  /* Ejercicio 8 
  var numero = prompt("Ingrese un numero entero para saber si es par o impar y si es positivo o negativo")
  var resultado = parImpar(numero)
  var resultado1 = masMenos(numero)
  alert("El numero " + numero + " es " + resultado)
      function parImpar(numero){
          if(numero % 2 == 0){
              return "par"
          }
          else{
              return "impar"
          }
      }
  alert("El numero " + numero + " es " + resultado1)
      function masMenos(numero){
          if(numero > 0){
              return "Positivo"
          }
          else{
              return "Negativo"
          }
      }*/


  /*Ejercicio 9 
          var num1 = prompt("Digite el número uno")
          var num2 = prompt("Digite el número dos")

            if(num1 > num2){
              document.write("<h1>Número Mayor & Menor</h1>")
              document.write("<p>El número mayor es: </p>" + num1 + "<p> (Numero 1)</p>")
              document.write("<p>El número menor es: </p>" + num2 + "<p> (Numero 2)</p>")
            }else{
              if(num2 > num1){
              document.write("<h1>Número Mayor & Menor</h1>")
              document.write("<p>El número mayor es: </p>" + num2 + "<p> (Numero 2)</p>")
              document.write("<p>El número menor es: </p>" + num1 + "<p> (Numero 1)</p>")
              }
            } */


  /*Ejercicio 10 
          var dia
          var num = prompt("Digite un número del 1 al 7");

            if (num >=1 && num <=7 ){
              if (num == 1){
                dia= "lunes";
              }else{
                if (num == 2){
                  dia="Martes";
                }else{
                  if(num == 3){
                    dia="Miercoles";
                  }else{
                    if(num == 4){
                      dia="Jueves";
                    }else{
                      if(num == 5){
                        dia="Viernes";
                      }else{
                        if(num == 6){
                          dia="Sábado";
                        }else{
                          if(num == 7){
                            dia="Domingo";
                          }          
                        }
                      }
                    }
                  }
                }
              }
              document.write("<h1>El día de la semana</h1>");
              document.write("<p>El número</p> "+ num +"<p>Le corresponde al día </p>"+ dia);
            }
  */

  /*  punto 1 modificado 
calcular el salario de un empleado si
el salario es menor de 2000000 entonces de le descuenta el 4%
salud y pension
si el salario es mayor a 2000000 y menor o igual a 3000000 entonces
se le descuenta el 6% en salud y 8% en pension y si el salario es 
mayor a 3000000 entonces descuento en salud 8% y el 12%
*/
/*var salario = prompt("Digite salario del empleado");
if (salario < 2000000) {
    var salud = salario * 4/100;
    var pension = salario * 5/100;
    var sueldoNeto = salario - (salud + pension);
    document.write("<p> el salario es "+ salario +"</p>")
    document.write("<p> la salud es "+ salud +"</p>")
    document.write("<p> la pension es "+ pension +"</p>")
    document.write("<p> el salario es "+ sueldoNeto +"</p>")
} else if(salario > 20000000 && salario < 3000000){
    var salud = salario * 6/100;
    var pension = salario * 8/100;
    var sueldoNeto = salario - (salud + pension);
    document.write("<p> el salario es "+ salario +"</p>")
    document.write("<p> la salud es "+ salud +"</p>")
    document.write("<p> la pension es "+ pension +"</p>")
    document.write("<p> el salario es "+ sueldoNeto +"</p>")
}else{
    var salud = salario * 6/100;
    var pension = salario * 8/100;
    var sueldoNeto = salario - (salud + pension);
    document.write("<p> el salario es "+ salario +"</p>")
    document.write("<p> la salud es "+ salud +"</p>")
    document.write("<p> la pension es "+ pension +"</p>")
    document.write("<p> el salario es "+ sueldoNeto +"</p>")
}*/

/*Ejercicio 8 (profesor) forma 1
var numero = prompt("Digite un numero");
if(numero % 2 == 0 && numero > 0) {
    document.write("el numero" +numero+"es par y positivo");
}else if(numero % 2 == 0 && numero < 0) {
    document.write("el numero" +numero+"es par y negativo");
}else if(numero % 2 !== 0 && numero > 0) {
    document.write("el numero" +numero+"es impar y positivo");
}else{
    document.write("el numero" +numero+"es impar y negativo");
}*/

/*segunda forma
var numero = prompt("Digite un numero");
if(numero % 2 == 0 && numero > 0) {
    document.write("el numero" +numero+"es par y positivo");
}else if(numero % 2 == 0 && numero < 0) {
    document.write("el numero" +numero+"es par y negativo");
}else if(numero % 2 !== 0 && numero > 0) {
    document.write("el numero" +numero+"es impar y positivo");
}else if(numero % 2 !== 0 && numero < 0){
    document.write("el numero" +numero+"es impar y negativo");
}else{
    document.write("el numero" +numero+"es par y neutro");
}*/

/*var numero = prompt("Digite un numero");
if(numero > 0){
    if(numero % 2 === 0){
        document.write("el numero " +numero+" es par y positivo");
    }else{
        document.write("el numero " +numero+" es impar y positivo");
    }
}else{
    
    if(numero % 2 !==0){
        document.write("el numero " +numero+" es impar y negativo");
    }else{
        document.write("el numero " +numero+" es par y negativo");
    }
}*/
 
/*Ejercicio 11 
var edad = prompt("Digite su edad:")

if (edad < 18) {
    document.write("<h1>Etapa</h1>")
    document.write("<p>La etapa es adolescente</p>")
} else {
    if (edad > 18 && edad < 28) {
        document.write("<h1>Etapa</h1>")
        document.write("<p>La etapa es adulto adolescente</p>")
    } else {
        if (edad > 29 && edad < 49) {
            document.write("<h1>Etapa</h1>")
            document.write("<p>La etapa es adulto</p>")
        }else{
            document.write("<h1>Etapa</h1>")
            document.write("<p>La etapa es adulto mayor</p>") 
        }
    }
} */

/*PUNTO 12
var filas = parseInt(prompt("digite numero de filas"));
var columnas = parseInt(prompt("digite numeros de columnas"));
document.write("<table border= '1'>");
var x = 0;
var numero = 1;
while (x < filas) {
    document.write("<tr>");
    var y = 0;
    while (y < columnas) {
        document.write("<td>");
        document.write( numero ++ );
        document-write("</td>");
        y++
    }
    document.write("</tr>")
    x++
}
document.write("</table>");
*/

/*ejercicio 13 

var nota1 = prompt("Ingrese la primera nota del 0 al 20");
var nota2 = prompt("Ingrese la segunda nota del 0 al 20");
var nota3 = prompt("Ingrese la tercera nota del 0 al 20");

var notaPro = (parseInt(nota1)+parseInt(nota2)+parseInt(nota3)) / 3;

if(notaPro >= 0 && notaPro <= 10){
    document.write("<p>La nota final es: " + parseInt(notaPro) + "</p>");
    document.write("<p>Rendimiento: MALO</p>");
}else if((notaPro >= 11 && notaPro <= 13)){
    document.write("<p>La nota final es: " + parseInt(notaPro) + "</p>");
    document.write("<p>Rendimiento: REGUALR</p>");
}else if((notaPro >= 14 && notaPro <= 16)){
    document.write("<p>La nota final es: " + parseInt(notaPro) + "</p>");
    document.write("<p>Rendimiento: BUENO</p>");
}else if((notaPro >= 11 && notaPro <= 13)){
    document.write("<p>La nota final es: " + parseInt(notaPro) + "</p>");
    document.write("<p>Rendimiento: MUY BUENO</p>");
}else{
    document.write("<p>Error ingrese NOTAS validas</p>");
}*/

/*Ejercicio 14

var dia=prompt("ingrese el dia de nacimiento");
var mes=prompt("ingrese el mes de nacimiento en numeros");
var año=prompt("ingrese el año de nacimiento en numeros");
var edad;
var mesh=6;
var diah=8;
var edad=2022-año;

if (mesh>=mes && diah>=dia){
    edad=edad
}else{
    edad=edad-1
}

document.write("<h1>la edad es: " + edad+"</h1>")/*

/*ejercicio 15 

alert("Desea calcular costos de hospitalización")

var edadPaciente = prompt("ingrese la edad del paciente");
var diasHosp = parseInt(prompt("ingrese el total de días de hopitalización"));

var costoDia = 20000;
var costo2a4Dias = 30000;
var costo5a7Dias = 25000;
var costo8oMasDias = 15000;

if(edadPaciente > 0 && edadPaciente <= 10){
    if(diasHosp <= 1){
        document.write("<p>Sobre cargo del 0%</p>");
        document.write("<p>Costo de Hospitalización: $" + costoDia + "</p>");
    }else if (diasHosp >= 2 && diasHosp <=4){
        document.write("<p>Sobre cargo del 0%</p>");
        document.write("<p>Costo de Hospitalización: $" + (diasHosp * costo2a4Dias) + "</p>");
    }else if(diasHosp >= 5 && diasHosp <= 7){
        document.write("<p>Sobre cargo del 5%</p>");
        document.write("<p>Costo de Hospitalización: $" + (parseInt((costo5a7Dias*diasHosp)*5/100) + parseInt(costo5a7Dias*diasHosp)) + "</p>");
    }else if(diasHosp >= 8){
        document.write("<p>Sobre cargo del 10%</p>");
        document.write("<p>Costo de Hospitalización: $" + (parseInt((costo8oMasDias*diasHosp)*10/100) + parseInt(costo8oMasDias*diasHosp)) + "</p>");
    }
}else if(edadPaciente > 11 && edadPaciente <= 17){
    if(diasHosp <= 1){
        document.write("<p>Sobre cargo del 0%</p>");
        document.write("<p>Costo de Hospitalización: $" + costoDia + "</p>");
    }else if (diasHosp >= 2 && diasHosp <=4){
        document.write("<p>Sobre cargo del 0%</p>");
        document.write("<p>Costo de Hospitalización: $" + (diasHosp * costo2a4Dias) + "</p>");
    }else if(diasHosp >= 5 && diasHosp <= 7){
        document.write("<p>Sobre cargo del 0%</p>");
        document.write("<p>Costo de Hospitalización: $" + (diasHosp * costo5a7Dias)+ "</p>");
    }else if(diasHosp >= 8){
        document.write("<p>Sobre cargo del 10%</p>");
        document.write("<p>Costo de Hospitalización: $" + (parseInt((costo8oMasDias*diasHosp)*10/100) + parseInt(costo8oMasDias*diasHosp)) + "</p>");
    }
}else if(edadPaciente > 18 && edadPaciente <= 49){
    if(diasHosp <= 1){
        document.write("<p>Sobre cargo del 0%</p>");
        document.write("<p>Costo de Hospitalización: $" + costoDia + "</p>");
    }else if (diasHosp >= 2 && diasHosp <=4){
        document.write("<p>Sobre cargo del 0%</p>");
        document.write("<p>Costo de Hospitalización: $" + (diasHosp * costo2a4Dias) + "</p>");
    }else if(diasHosp >= 5 && diasHosp <= 7){
        document.write("<p>Sobre cargo del 0%</p>");
        document.write("<p>Costo de Hospitalización: $" + (diasHosp * costo5a7Dias)+ "</p>");
    }else if(diasHosp >= 8){
        document.write("<p>Sobre cargo del 15%</p>");
        document.write("<p>Costo de Hospitalización: $" + (parseInt((costo8oMasDias*diasHosp)*15/100) + parseInt(costo8oMasDias*diasHosp)) + "</p>");
    }
}else if(edadPaciente >= 50){
    if(diasHosp <= 1){
        document.write("<p>Sobre cargo del 0%</p>");
        document.write("<p>Costo de Hospitalización: $" + costoDia + "</p>");
    }else if (diasHosp >= 2 && diasHosp <=4){
        document.write("<p>Sobre cargo del 0%</p>");
        document.write("<p>Costo de Hospitalización: $" + (diasHosp * costo2a4Dias) + "</p>");
    }else if(diasHosp >= 5 && diasHosp <= 7){
        document.write("<p>Sobre cargo del 15%</p>");
        document.write("<p>Costo de Hospitalización: $" + (parseInt((costo5a7Dias*diasHosp)*15/100) + parseInt(costo5a7Dias*diasHosp)) + "</p>");
    }else if(diasHosp >= 8){
        document.write("<p>Sobre cargo del 20%</p>");
        document.write("<p>Costo de Hospitalización: $" + (parseInt((costo8oMasDias*diasHosp)*20/100) + parseInt(costo8oMasDias*diasHosp)) + "</p>");
    }
}else{
    document.write("<p>ERROR! por favor ingrese los datos de nuevo</p>"); 
}
*/