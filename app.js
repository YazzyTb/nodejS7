const http = require ('http');

http.createServer((req,res)=>{
   
//    res.writeHead(200, {'Content-Type': 'text/plain'})  // Archivos txt
   
//    res.writeHead(200, {'Content-Type': 'application/json'})  // lo muestra como codigo json 


    res.setHeader('Content-Disposition','attachment; filename=lista.csv');  // añade a los Header hacer un archivo que se va a descargar y ese es el nombre del archivo 'lista.csv'
   res.writeHead(200, {'Content-Type': 'application/csv'})  //archivo excel u archivo csv 

    // const persona ={
    //     id: 1,
    //     nombre: 'Fernando'
    // }

   // res.write(JSON.stringify (persona));
   
   res.write('id, nombre\n');
   res.write('1, Ana\n');
   res.write('2, Carlos\n');
   res.write('3, Marcelo\n');
   res.write('4, Paola\n');

   res.end();
})

.listen( 3000 );

console.log('escuchando en el puerto',3000 );