const { log } = require('console');
const fs =require('fs');

//Asynchronous way to read file //

// fs.readFile('input.txt',function(err,data){
//     if(err){
//         console.log('Error',err);
//         return err;
//     }
//     console.log('Data',data.toString());
//     console.log('Read end');
//     return data;
// })
// console.log("Other stuff");



//synchronous//

// var data=fs.readFileSync('input.txt');
// console.log('Data',data.toString());
// console.log('read end');
// console.log('other stuff');



//open and read seperately//

// const buf=new Buffer(1024)                                                     //buf is a storage//
// fs.open('input.txt', 'r+', function(err, fd){
//     if(err){
//         console.log("error is",err);
//     }
//     console.log("file open successfully");

//     fs.read(fd,buf,0,buf.length,0,function(err,bytes){
//         if(err){
//             console.log("error is",err); 
//         }
//         console.log('Data',bytes);
//         console.log('Data',buf.slice(0,bytes).toString());
//         fs.close(fd,function(err){
//             if(err){
//                 console.log("error is",err);
//             }
//             else{
//                 console.log("file closed");
//             }
//         })
//     })
// });






//Writing in file

// fs.writeFile('input.txt','PW',function(err){
//         if(err){
//         console.log("error is",err);
//     }
//     else{
//         console.log("success in writing file");
//     }
// })





// append in file //

// fs.appendFile('input.txt', "-- Akshat Gupta","utf8",function(err){
//            if(err){
//         console.log("error is",err);
//     } 
//     else{
//         console.log("success in writing file at append");
//     }
// })





//Delete a file //

// fs.unlink('input.txt',function(err){
//                if(err){
//         console.log("error is",err);
//     } 
//     else{
//         console.log("Success to delete");
//     }
// })