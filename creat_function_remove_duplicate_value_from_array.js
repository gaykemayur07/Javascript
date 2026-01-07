

function removeDuplicate(arr){

    let set =new Set(arr);

    return [...set];

}

let result=removeDuplicate([1,2,2,2,4,5,6,8,1,0]);

console.log(result);



let arr1=[5,5,7,8,9,9,0];


let res=arr1.filter((ele,index)=>{
    if(arr1.indexOf(ele)===index){
        return arr1;
    }
    
})

console.log(res);
