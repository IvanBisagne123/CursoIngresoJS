function mostrar()
{
    var nº1, nº2, nº3, nº4,suma, descuento, gnm, mensaje, resultado;
    
    nº1= prompt("ingerese el primer numero");
    nº1= parseInt(nº1);
    nº2= prompt("ingrese el segundo numero");
    nº2= parseInt(nº2);
    nº3= prompt("ingrese el tercer numero");
    nº3= parseInt(nº3);
    nº4= prompt("ingrese el cuarto numero");
    nº4= parseInt(nº4);

    
    suma= nº1+nº2+nº3+nº4
    alert(suma);
    
    if(suma >100){
        descuento= suma*10/100;
        resultado= suma-descuento;
        alert(resultado);
    }else{
        if(suma>50 && suma<100){
            descuento= suma*5/100;
            resultado= suma-descuento;
            alert(resultado);
        }else{
            if(suma<50){
                descuento= suma*15/100;
                resultado= suma+descuento;
                alert(resultado);
            }
        }
    }
}