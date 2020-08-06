var compras;
fetch ('ticket.json') 
.then(function (response){
    return response.json();  })
.then(function (data){
    console.log(data);
compras= data.customer.purchases // array de compras 
    }) 

console.log(compras) 
    let products=compras;

    for (var i =0; i<products; i++) {  
        n+= i; 
        mifunction(n) 
        console.log(n);
    
//productos sea igual al codigo sku
 function Nproducts(n) { 
   let x=1;
   let y=2; 
    
     if(y>1) 
 { 
    // n+=Nproducts;
    console.log(Nproducts(n)); 
   let Nproducts= sku;    
  // let products= customer[products]; 
 } 

 else{
    return ('unProducto');
 }
 } 
 
 } 
 
 //comparacion de fechas falt filtrar json 
 
sku=compras;
 
var fechaPrimeracompra = new Date('2020-01-01').getTime();
var fechaultimacompra    = new Date('2020-01-15').getTime();

var variasCompras = fechaultimacompra - fechaPrimeracompra;

console.log(variasCompras/(1000*60*60*24) ); 
     
//Recompra es la diferencia de las dos fechas
function Resultado(){
   var  recompra= variasCompras,Nproducts;    
    console.log(recompra);
    
}
