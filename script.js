function obtenerNumeroMayor() {
    // Obtener los valores ingresados por el usuario
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
  
    // Comparar los números y mostrar el resultado
    var resultado = document.getElementById("resultado");
  
    if (num1 < num2) {
      resultado.textContent = "El número menor es: " + num1;
    } else if (num2 < num1) {
      resultado.textContent = "El número menor es: " + num2;
    } else {
      resultado.textContent = "Los números son iguales.";
    }
  }
  