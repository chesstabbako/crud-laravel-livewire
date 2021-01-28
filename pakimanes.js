var pakimanes= [];

pakimanes["Pokacho"]="img/pollo.png";
pakimanes["Tocinauro"]="img/cerdo.png";
pakimanes["Vaqueichon"]="img/pollo.png"; 

class pakiman {
    
    constructor(n, v, a){   
    
       this.imagen= new Image();
       this.nombre= n,   
       this.vida= v,
       this.ataque= a
    
       this.imagen.src= pakimanes[this.nombre];  

    }
    
    mostrar(){
     
      document.body.appendChild(this.imagen);    
      document.body.innerHTML+="<br><p><Nombre: " + this.nombre + "<br>" + "Vida: " + this.vida + "<br>" + "Ataque: " + this.ataque + "<p><br><hr>";     
          
    }
    
     
}


var coleccion= [];

coleccion.push(new pakiman("Pokacho", 100, 40));
coleccion.push(new pakiman("Tocinauro", 90, 50));
coleccion.push(new pakiman("Vaqueichon", 10, 60));


for(var tabako of coleccion){
    
  tabako.mostrar();    
       
}



