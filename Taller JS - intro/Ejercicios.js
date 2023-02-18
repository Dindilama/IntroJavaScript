/*Ejercicio 1
var salario = prompt("Digite su salario")
var salud = salario*8/100
var pension = salario*8/100
var sueldoTotal = salario - (salud + pension)
document.write("<h1> Tu sueldo </h1>")
document.write("<p> Tu salario total es: " + sueldoTotal + "</p>")
*/

/*Ejercicio 2 
var h = prompt("Digite la altura")
var b = prompt("Digite la base")
var area = h*b/2
document.write("<h1> AREA </h1>")
document.write("<p> El area del triangulo es: " + area + "</p>")
*/

/*Ejercicio 3
var n1 = prompt("Digite un numero")
var n2 = prompt("Digite otro numero")
document.write("<h1> Operaiones aritmeticas</h1>")
document.write("<p> Suma= "  + (parseInt(n1) + parseInt(n2)) + "</p>")
document.write("<p> Resta= "  + (n1-n2) + "</p>")
document.write("<p> Multiplicacion= "  + (n1*n2) + "</p>")
document.write("<p> Division= "  + (n1/n2) + "</p>") 
document.write("<p> Modulo= "  + (n1%n2) + "</p>")
*/

/*Ejercicio 4 
var horasT = prompt("Digite el numero de horas trabajadas en el mes")
var horasExtra = prompt("Digite el numero de horas extras trabajadas en el mes")
var hora = 3000
var totalSalario = hora * (horasT+horasExtra)
document.write("<h1> Total salario </h1>")
document.write("<p> Tu salario es: "  + totalSalario + "</p>") 
*/

/* Ejercicio 5 
var producto = prompt("Digite el valor del producto")
var iva = producto*19/100
var totalpago = iva
document.write("<h1> Total a pagar </h1>")
document.write("<p> Valor del producto: "  + producto + "</p>")
document.write("<p> Total a pagar con iva es: "  + totalpago + "</p>")
*/

/* Ejercicio 6 
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

/* Ejercicio 7 
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
    }
*/

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
          } 
*/

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
