
let arr1=[1,2,3,'a','g',10];

let result=arr1.filter((ele)=>{
    
    if(typeof ele=== 'string'){
        return ele;
    }

})
console.log(result);
