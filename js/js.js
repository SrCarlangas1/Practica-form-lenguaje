var nota=0;
window.onload = function(){ 

 
 //LEER XML de xml/preguntas.xml
// fichoro xml que está en el servidor rawgit
var url="https://rawgit.com/SrCarlangas1/Practica-form-lenguaje/master/json/json.json";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  // función personalizada que gestiona la respuesta a la petición de fichero
  gestionarJson(this.responseText); 
 }
};
xhttp.open("GET", url, true); //url del fichero
xhttp.send();

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
 
}

 function gestionarJson(dadesJson){
  var objecteJson = JSON.parse(dadesJson); //Parse JSON to xmlDoc
 
//Introducir preguntas//
 //Poner las preguntas del json//
  var nopt = 10;
    for (i = 0; i < nopt; i++) { 
     document.getElementsByTagName("h2")[i].innerHTML = objecteJson.question[i].title;
    }
//Introducir opciones//
  //Poner opciones del primer select//
    var no3=objecteJson.question[2].option.length;
    var sel = document.getElementsByTagName("select")[0];
    for(var i=0;i<no3;i++){
      var opt = document.createElement("option");
      opt.value=i+1;
      opt.text=objecteJson.question[2].option[i];
      sel.appendChild(opt);
    }
  //Poner opciones del segundo select//
    var no4=objecteJson.question[3].option.length;
    var sel2 = document.getElementsByTagName("select")[1];
    respuesta1=parseInt(objecteJson.question[2].answer[0])
    for(var i=0;i<no4;i++){
      var opt = document.createElement("option");
      opt.value=i+1;
      opt.text=objecteJson.question[3].option[i];
      sel2.appendChild(opt);
    }
  //Poner opciones del tercer select//
    var no5=objecteJson.question[4].option.length;
    var sel3 = document.getElementsByTagName("select")[2];
    for(var i=0;i<no5;i++){
      var opt = document.createElement("option");
      opt.value=i+1;
      opt.text=objecteJson.question[4].option[i];
      sel3.appendChild(opt);
    }
  //Poner opciones del cuarto select//
    var no6=objecteJson.question[5].option.length;
    var sel4 = document.getElementsByTagName("select")[3];
    for(var i=0;i<no6;i++){
      var opt = document.createElement("option");
      opt.value=i+1;
      opt.text=objecteJson.question[5].option[i];
      sel4.appendChild(opt);
    }
  //Poner opciones del primer checkbox//
    var no7=objecteJson.question[6].option.length;
    var sel5=document.getElementById('primeCheck');
    for (i = 0; i < no7; i++) { 
      var input = document.createElement("input");
      var label = document.createElement("label");
      var h=h+1
      label.innerHTML=objecteJson.question[6].option[i];
      input.type="checkbox";
      input.name="juan";
      input.id="Input"+h;    
      sel5.appendChild(input);
      sel5.appendChild(label);
      sel5.appendChild(document.createElement("br"));
    }
  //Poner opciones del segundo checkbox//
    var no8=objecteJson.question[7].option.length;
    var sel6=document.getElementById('segunCheck');
    for (i = 0; i < no8; i++) { 
      var input = document.createElement("input");
      var label = document.createElement("label");
      var h=h+1
      label.innerHTML=objecteJson.question[7].option[i];
      input.type="checkbox";
      input.name="pepe";
      input.id="Input"+h;    
      sel6.appendChild(input);
      sel6.appendChild(label);
      sel6.appendChild(document.createElement("br"));
    }
  //Poner opciones del primer radio//
    var no9=objecteJson.question[8].option.length;
    var sel7=document.getElementById('terceCheck');
    for (i = 0; i < no9; i++) { 
      var input = document.createElement("input");
      var label = document.createElement("label");
      var h=h+1
      label.innerHTML=objecteJson.question[8].option[i];
      input.type="radio";
      input.name="pepe";
      input.id="Input"+h;    
      sel7.appendChild(input);
      sel7.appendChild(label);
      sel7.appendChild(document.createElement("br"));
    }
  //Poner opciones del segundo radio//
    var no10=objecteJson.question[9].option.length;
    var sel8=document.getElementById('cuartCheck');
    for (i = 0; i < no10; i++) { 
      var input = document.createElement("input");
      var label = document.createElement("label");
      var h=h+1
      label.innerHTML=objecteJson.question[9].option[i];
      input.type="radio";
      input.name="pepe";
      input.id="Input"+h;    
      sel8.appendChild(input);
      sel8.appendChild(label);
      sel8.appendChild(document.createElement("br"));
    }


//Corregir pregunta 1//
var numeroCorrecto1=objecteJson.question[0].answer;
var numeroEscrito1=document.getElementById('pregunta1').value;
function corregirPre1(){     
  if (numeroEscrito==numeroCorrecto) {
      alert("bien")
   nota +=1;
  }
  else {
      alert("mal")
  }
}

//Corregir pregunta 2//
var numeroCorrecto2=objecteJson.question[1].answer;
var numeroEscrito2=document.getElementById('pregunta2').value;
function corregirPre2(){   
  if (numeroCorrecto2==numeroEscrito2) {
    alert("bien")
   nota +=1;
  }
  else {
    alert("mal")
  }
}
}
