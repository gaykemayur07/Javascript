

let arr=['M',1,2,4,5,'g'];
let sum=0;
arr.forEach((item)=>{
    
    if(typeof item=== "number"){
        sum+=item;
    }

})

console.log(sum);