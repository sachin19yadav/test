// // const obj = [
// //     {name: "sachin", class: '10th'},
// //     {name: "divyanshu", class: '10th'}//creating a object that have contain two values
// // ];

// // function getData(){  //this method is use for calling data from object
// //     output = " ";
// //     setTimeout(()=>{
// //        obj.forEach((data,index)=>{
// //           output += `<li>${data.name}</li>`
// //        });
// //        document.body.innerHTML = output;
// //     }, 2000);
// // }

// // // pushData makes for push data inside the object
// // function pushData(newData){//take second parameter as callback function which is help us to calling method of getData
// //     return new Promise((resolve, reject)=>{
// //         setTimeout(()=>{
// //             obj.push(newData);
// //             let error = false;
// //             if(!error){
// //                 resolve();
// //             }else{
// //                 reject();
// //             }
            
// //             // callback();//calling getData method after push data in object
// //         }, 5000);
// //     });
    
// // }
// // // pushData({name:"nitin", class: "10th"}); //general method of calling method
// // // pushData({name:"nitin", class: "10th"}).then(getData);  //this method is call back method


// // async function start(){
// //     await pushData({name:"nitin", class: "10th"});
// //     getData();  
// // }
// // start();


// // General method

// // firstly we will create object for the data


// const obj = [
//     {name: "Rohit", designation: "Software Engineer"},
//     {name: "Vipin", designation: "Software Engineer"}
// ];


// // now we will create method which help us to get data from object 

// function getData(){
//     setTimeout(()=>{
//       let output = " ";
//       obj.forEach((data, index)=>{
//        output += `<li>${data.name}</li>`
//       });
//       document.body.innerHTML = output;
//     }, 2000);
// }

// // getData();

// // now we will push data into object using new method

// function pushData(takeData){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             obj.push(takeData);
//             let err = false;
//             if(!err){
//                 resolve();
//             }else{
//                 reject();
//             }
//            }, 5000);
//     });
        
// }

// // we have three value after push new data but it is showing only two in output 
// // it is generating error because getData method run in 2 second and push data method run in 5 second because i give 5000 means 5 second
// // so now how we can overcome 



// // 1st technique => now we will use call back function to over come form this bugs
// // 2nd technique => using promis
// // 3rd now we will learn third technique using async and await


// // now we will create new method 

// async function start(){
//     await pushData({name: "Ankit", designation: "Software Engineer"});
//     getData();
// }

// start();

function emailValidation(emailValidate, passwordValidation){
    var string = passwordValidation.value;
    if(string.length>=8){
        console.log(string.length);
        alert("valid password");
    }else{
        alert("invalid password less then 8 charactor")
    }
      
        var format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        
        if(emailValidate.value.match(format))
        
        {
        
        alert("email is valid");
        
        document.form1.email.focus();
        
        return true;
        
        }
        
        else
        
        {
            alert("email is invalid");  
        }
       
}





