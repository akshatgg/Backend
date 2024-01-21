const { log } = require('console');
const http =require('http');
const PORT=5032;
const HOSTNAME="localhost"



const server=http.createServer((req , res)=>{
 if(req.url == '/'){
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.write('Hello');
    res.end()
 }


// res.statusCode=200;
// res.setHeader('Content-Type','text/plain');
//  res.end('node server created by Akshat');



else if(req.url =='/Home'){
   res.statusCode=200;
res.setHeader('Content-Type','text/plain');
res.end("home page")
}
else if(req.url =='/About'){
   res.statusCode=200;
   res.setHeader('Content-Type','text/plain');
   res.end("about page")
}
else if(req.url =='/Contact'){
   res.statusCode=200;
   res.setHeader('Content-Type','text/plain');
   res.end("contact page")
}
else if(req.url == "/Product"){
   const options={
      hostname:"fakestoreapi.com",
      path:"/products/1",
      method:"GET"
      }


   const apireq=http.request(options,(apires)=>{
      apires.on("data",(data)=>{
         res.statusCode=200;
         res.setHeader('Content-Type', 'application/json');
         res.end(data.toString());
      })
   })
   apireq.end()
}

else{

   res.statusCode=500;
   res.setHeader('Content-Type','text/plain');
   res.end("Server Error");
}






})

server.listen(PORT,()=>{
   console.log(`server running at ${HOSTNAME}: ${PORT}`);

});

// console.log("the http sever is runnning at the port 5000");