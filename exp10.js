
// // promises
// function dashboard(id,callback){
//     let error;
//     setTimeout(()=>
//         {
//             if (error){
//                 return callback(error);
//             }
//             console.log("fetching  user data");
//             setTimeout(()=>
//                 {
//                     if (error){
//                         return callback(error);
//                     }
//                     console.log("fetching user frined list data");
//                     setTimeout(()=>
//                         { error="error occur";
//                             if (error){
//                                 return callback(error);
//                             }
//                             console.log("fetching user posts");
//                             setTimeout(()=>
//                                 {
//                                     if (error){
//                                         return callback(error);
//                                     }
//                                     console.log("fetching user comments");
//                                 },2000);
//                         },2000);
//                 },2000);
//         },2000);
// }
// function errorhandle(error){
//     console.log("error has occured")
// }
// dashboard("101",errorhandle);
// let prm= new Promise((reject)=>{
// console.log("function excute");
// reject("failure");
// });
// console.log(prm);
// console.log();
// let prm1= new Promise((resolve)=>{
//     console.log("function excute");
//     resolve("success");
//     });
//     console.log(prm1);
//     console.log();
//     let prm2=new Promise((resolve,reject)=>{
//         // console.log("excuted");
//         resolve({id:101,name:"muniza"});
//     });
//     prm2.then((result)=>{
//         console.log(result);
//     }); 
//     console.log();
//      let prm3=new Promise((resolve,reject)=>{
//         // console.log("excuted");
//         resolve("sucesss");
//     });
//     prm3.then((result)=>{
//         console.log(result);
//     });
//     console.log();
//      let prm4=new Promise((resolve,reject)=>{
//         // console.log("excuted");
//         reject("its fail");
//     });
//     prm4.catch((result)=>{
//         console.log(result);
//     });     
//     console.log();
    let prm5=new Promise((resolve,reject)=>{
        resolve("sucesss");
    });
   prm5
   .then()
   .catch();