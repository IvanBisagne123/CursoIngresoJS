function mostrar()
{
    //tomo la edad  
    var edad
    
    edad= document.getElementById("edad").value;
    
    if(edad <13)
    {
        alert("muy chiquito");
    }
    else
    {
        if(edad<17)
        alert("sos un adolecente");    
       else
       alert("adulto");
    }
}//FIN DE LA FUNCIÓN