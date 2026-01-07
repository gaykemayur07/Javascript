

function getArrayElement(arr,n){

    if(!n){
        return arr[0];
    }
    if(n> arr.length){
        console.log("Enter valid length");
        
    }else{
        console.log(arr.slice(0,n));
        
        
    }
    
}

 getArrayElement([1,2,3,4,5,6,7],3);


