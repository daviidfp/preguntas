function evaluarQuiz()
{
    let respuetasCorrectas=["a","b","c","d","a","b","c","d","a","b"];
    let respuestasUsuario=new Array();
    let respuestasPregunta=new Array();
    let aciertos=0;
    let countPreguntas=0;
    let bien="bien.png";
    let mal="mal.png";
    let imagenesRespuestas=new Array();
    for (var i = 0; i <10; i++) {
        respuestasPregunta=document.getElementsByName('p'+(i+1));
        for (var j = 0; j <=3; j++) {
            if(respuestasPregunta[j].checked==true){
                countPreguntas++;
                respuestasUsuario[i]=respuestasPregunta[j].value;
                if(respuestasPregunta[j].value==respuetasCorrectas[i]){
                    imagenesRespuestas[i]=bien;
                    aciertos++;
                }else{
                    imagenesRespuestas[i]=mal;                    
                }
            }
        }
    }

    for (var i = 0; i < 10; i++) {
        console.log("Respuesta "+(i+1)+" "+respuestasUsuario[i]+ " Imagen " +imagenesRespuestas[i])
    }

    if (countPreguntas==10) {
        html="<table class='table'>";
        html+="tr";
        html+="<td>Pregunta</td>";
        html+="<td>Respuesta Usuario</td>";
        html+="<td>Respuesta Correcta</td>";
        html+="<td>Imagen</td>";
        html+="tr";
        for (var i = 0; i <10; i++) {
            html+="tr";
            html+="<td>"+(i+1)+"</td>";
            html+="<td>"+RespuestaUsuario[i]+"</td>";
            html+="<td>"+respuetasCorrectas[i]+"</td>";
            html+="<td><img src='"+ImagenesRespuestas[i]+"' width=30 heigt=30></td>";
            html+="tr";
        }
        html+="</table>";
        html+="<span> class='display-1'>Calificación" "+aciertos+"</span>"
        document.getElementById('resultado').innerHTML=html;
    }else{
        alert("Falta contestar Preguntas");
    }
}

function resetQuiz() {
    for (var i = 0; i <10; i++) {
        respuestasPregunta=document.getElementsByName('p'+(i+1));
        for (var j = 0; j <=3; j++) {
            respuestasPregunta[j].checked=false;
        }
    }
    document.getElementById('resultado').innerHTML="";
}