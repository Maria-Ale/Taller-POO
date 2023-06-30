class Empleado{
    constructor(nombre, apellidos, sexo, fechaNacimiento, fechaIngreso, salario, formacion, estudios, universidad, nombresN, apellidosN, sexoN, cargoN, fechaNacimientoN, formacionN, fechaIngresoN, institucionN){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.sexo = sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaIngreso = fechaIngreso;
        this.salario = salario;
        this.formacion = formacion;
        this.estudios = estudios;
        this.universidad = universidad; 
        this.nombresN = nombresN;
        this.apellidosN = apellidosN;
        this.sexoN = sexoN;
        this.institucionN = institucionN;
        this.fechaNacimientoN = fechaNacimientoN;
        this.formacionN = formacionN;
        this.fechaIngresoN = fechaIngresoN;
    }
    nombre(){
        return (this.nombre = document.getElementById("nombre").value);
    }

    apellido(){
        return (this.apellidos = document.getElementById("apellidos").value);
    }
    sexo(){
      return (this.sexo = document.getElementById("sexo").value);
    }
    fechaNaci(){
            return (this.fechaNacimiento = document.getElementById("fechaNacimiento").value);
    }
    fechaIng(){
            return (this.fechaIngreso = document.getElementById("fechaIngreso").value);
    }
    salarios(){
        return (this.salario = parseFloat( document.getElementById("salario").innerHTML));
    }
    formaci() {
      return (this.Nivel = document.getElementById("formacion").value);
    }
  
    estudi() {
      return (this.Instituto = document.getElementById("estudios").value);
    }
  
    univer() {
      return (this.Titulo = document.getElementById("universidad").value);
    }
    nomN(){
        return (this.nombresN = document.getElementById("nombresN").value);
    }
    apeN(){
        return (this.apellidosN = document.getElementById("apellidosN").value);
    }
    sexN(){
        return (this.sexoN = document.getElementById("sexoN").value);
    }
    carN(){
        return (this.cargoN = document.getElementById("cargoN").value);
    }
    fecNacN(){
        return (this.fechaNacimientoN = document.getElementById("fechaNacimientoN").value);
    }
    forN(){
        return (this.formacionN = document.getElementById("formacionN").value);
    }
    fecIngN(){
        return (this.fechaIngresoN = document.getElementById("fechaIngresoN").value);
    }

    calcularEdad() {
        let CalcularEdad = document.getElementById("fechaNacimiento").value;
        if (CalcularEdad <= 0 || CalcularEdad.length == 0) {
          alert("Ingrese una fecha correcta");
          return 0;
        } else {
          let año = parseInt(CalcularEdad.substr(6, 4));
          let ed = 2023 - año;
          return ed;
        }
      }

    calcularAntiguedad() {
        let CalAntiguo = document.getElementById("fechaIngreso").value;
        if (CalAntiguo <= 0 || CalAntiguo.length == 0) {
          alert("Ingrese una fecha correcta");
          return 0;
        } else {
          let ingre = parseInt(calcularAntiguedad.substr(6, 4));
          let antiguo = 2023 - ingre;
          return antiguo;
        }
      }
    CalcularPrestacion() {
        let salEmpleado = document.getElementById("salario").innerHTML;
        let Inicio = document.getElementById("fechaIngreso").value;
    
        if (
           salEmpleado <= 0 || salEmpleado.length == 0  || Inicio== 0
        ) {
          alert("Salario incorrecto");
          return 0;
        } else {
            let pago = this.salario();
            let antiguos = this.calcularAntiguedad();
            let prestacion = (antiguos * pago) / 12;
          return prestacion.toFixed(3);
          }
    }  
    
}
    function modificarSalario() {
        let nuevoSalario = new Empleado();
        let nueSalario = prompt("Ingrese su nuevo salario $ ");

        if (nueSalario <= 0 || nueSalario.length == 0) {
            alert("Salario invalido");
        } else {
            nuevoSalario.salarios(nueSalario);
            document.getElementById("salario").innerHTML = nueSalario;
        }
    }


    function calcularEdad() {
        var fechaNacimiento = document.getElementById("fechaNacimiento").value;
        var fechaActual = new Date();
    
        // Convierte la fecha de nacimiento y la fecha actual en objetos de fecha
        var fechaNacimientoObj = new Date(fechaNacimiento);
        var edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
    
        // Verifica si aún no se ha cumplido el día y el mes de nacimiento en el año actual
        if (
            fechaActual.getMonth() < fechaNacimientoObj.getMonth() ||
            (fechaActual.getMonth() === fechaNacimientoObj.getMonth() &&
                fechaActual.getDate() < fechaNacimientoObj.getDate())
            ) {
            edad--;
        }
        // Muestra la edad calculada
        document.getElementById("resultado1").innerHTML = "Tu edad es: " + edad + " años.";
    }


  function calcularAntiguedad() {
    var fechaIngreso = document.getElementById("fechaIngreso").value;
    var fechaActual = new Date();
  
    // Convierte la fecha de ingreso y la fecha actual en objetos de fecha
    var fechaIngresoObj = new Date(fechaIngreso);
    var antiguedad = fechaActual.getFullYear() - fechaIngresoObj.getFullYear();
  
    // Verifica si aún no se ha cumplido el día y el mes de ingreso en el año actual
    if (
      fechaActual.getMonth() < fechaIngresoObj.getMonth() ||
      (fechaActual.getMonth() === fechaIngresoObj.getMonth() &&
        fechaActual.getDate() < fechaIngresoObj.getDate())
    ) {
      antiguedad--;
    }
  
    // Muestra la antiguedad calculada
    document.getElementById("resultado2").innerHTML = "Tu antiguedad en la empresa es de: " + antiguedad + " año(s)";
  }

  function calcularPrestaciones() {
    var fechaIngreso = document.getElementById("fechaIngreso").value;
    var salario = parseInt(document.getElementById("salario").value);
    
    var fechaActual = new Date();
    var fechaIngresoObj = new Date(fechaIngreso);
    
    var antiguedad = fechaActual.getFullYear() - fechaIngresoObj.getFullYear();
  
    if (
      fechaActual.getMonth() < fechaIngresoObj.getMonth() ||
      (fechaActual.getMonth() === fechaIngresoObj.getMonth() && fechaActual.getDate() < fechaIngresoObj.getDate())
    ) {
      antiguedad--;
    }
    var prestaciones = (antiguedad * salario) / 12;
    document.getElementById("resultado3").innerHTML ="Las prestaciones a las que tienes derecho son: $" + prestaciones.toFixed(2);
  }

  function datos() {
    var op = document.getElementById("adicionaal");
    if (op.style.display === "none") {
      op.style.display = "block";
    } else {
      op.style.display = "none";
    }
  }

  function mostrar(){
    var ver = document.getElementById("informacion");
    if (ver.style.display === "none") {
      ver.style.display = "block";
    } 
    let nombreE = document.getElementById("nombre").value;
    let apellidoE = document.getElementById("apellidos").value;
    let sexemp = document.getElementById("sexo").value
    let fechaNaci= document.getElementById("fechaNacimiento").value;
    let fechaIngree = document.getElementById("fechaIngreso").value;
    let salariom = document.getElementById("salario").innerHTML;
    let nivelEst = document.getElementById("formacion").value;
    let institutoEst = document.getElementById("estudios").value;
    let tituloEst = document.getElementById("universidad").value;
   
    if(datos != null){
        alert("Nombre: "+ nombreE +
        "\n Apellidos: " + apellidoE +
        "\n Sexo: " + sexemp +
        "\n Fecha de Nacimiento: " + fechaNaci +
        "\n Fecha de Ingreso: " + fechaIngree +
        "\n Salario: " + salariom +
        "\nSu formación academica es: " + nivelEst +
        "\n Su cargo es: " + institutoEst +
        "\n Dependecia en la que ejerce es: " + tituloEst
    );
    }
  }

  function datosN() {
    var opc = document.getElementById("extra");
    if (opc.style.display === "none") {
      opc.style.display = "block";
    } else {
      opc.style.display = "none";
    }
  }

  
  function nuevoE(){
    var indicar = document.getElementById("contrato");
    if (indicar.style.display === "none") {
      indicar.style.display = "block";
    } 
    let nombresNue = document.getElementById("nombresN").value;
    let apellidosNue = document.getElementById("apellidosN").value;
    let sexoNue = document.getElementById("sexoN").value;
    let fechaNacNue = document.getElementById("fechaNacimientoN").value;
    let fechaIngNue = document.getElementById("fechaIngresoN").value;
    let formacionNue = document.getElementById("formacionN").value;
    let institutoN = document.getElementById("institucionN").value;

    if(datosN != null){
        alert(" Nombres: "+ nombresNue +
        "\n Apellidos: " + apellidosNue +
        "\n Sexo: " + sexoNue + 
        "\n Fecha de Nacimiento: " + fechaNacNue +
        "\n Fecha de Ingreso: " + fechaIngNue +
        "\n Formación Académica: " + formacionNue +
        "\n Nombre de la institución: " + institutoN
    );
    }
  }
 
  