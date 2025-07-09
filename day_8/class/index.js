// let arr=[1,2,3,4,5,6,6]
//(map)
// let out=arr.map((Element,index)=>{
// console.log(Element,index)
// return element*2
// });
// console.log(element)
// arr.forEach((Ele,index)=>{
//  console.log(Ele,index)
//  });
//  let filterOut=arr.filter((Ele,index)=>{
// //    return typeof(Ele)=="string"
// return index%2==1;
//  });
//  console.log(filterOut)
//  let reduceOut=arr.reduce((acc,cur,)=>{

//  return acc+cur;
//  },5);
//  console.log(reduceOut)
//  let out=arr.map((ele,index)=>{
// return ele**2;
//  return acc+cur;
//  }).filter((ele,index)=>{
//     return ele%2==0;
//  }).reduce((acc,cur)=>{
//     return acc+cur;
//  });
//  console.log(out)
let fruit= [3,5,7,6,4,2,4]
let row= fruit.map((ele,index)=>{
    return ele%2==0 ? ele*2:ele;
}).filter((ele,index)=>{
    return ele<=5;
}).reduce((acc,cur)=>{
    return acc+curr;
});
console.log(row);