//array
//let arr=[1,2,3,"Sheetal",'k']
//console.log(arr);
//console.log(arr[4]);
//insertion
//arr.push("kumari");
//console.log(arr);
// insertion at specific index
//arr[5]="kumari";
//console.log(arr);
//arr.pop();
//console.log(arr)
// let obj={
//     name:"sheetal",
//     batch:"fs",
//     college:"rb",
//     roll_no:2305599,
//     subject:{
//         1:["chemistry","maths","physics"],
//         2:["ed","maths","ds"],
//         Specialization : {
//              1:"pps",
//              2:"es",
//              3:["se","flate"],
//         }
//     },
//     college:"RB",
//      myFunction:function(){
//         console.log(this)
//      }
//   }
//   obj.myFunction()

//console.log(obj.subject.specialization[3][0]);
//console.log(obj.roll_no);
//for(let key in obj){
   // console.log(key+":"+obj[key]);
//}

// let str = "varsha";
// for(let i = 0; i < 10 ; i=i+0.5){
//     console.log(i);
    
// }


//  let obj={
//     name:"sheetal",
//     batch:"fs",
//     college:"rb",
//     roll_no:2305599,
//     subject:{
//         1:["chemistry","maths","physics"],
//         2:["ed","maths","ds"],
//         Specialization : {
//              1:"pps",
//              2:"es",
//              3:["se","flate"],
//         }
//     },
//     college:"RB",
//      myFunction:function(){
//         console.log(this)
//      }
//   }
 
// //to print the string type only
// for(let key in obj){
// if(typeof(obj[key])=="string"){
//     console.log(obj[key]);
// }
// }

let arr=[1,2,3,4,5,6,7,8]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        // template lateral(``),it is for if we want only dynamic values
        console.log(`element ${arr[i]} is Even`)
    }
}