


function isPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if( num%i===0){
            console.log(" Not Prime Number");
            
        }else{
            console.log("Prime Number");
            
        }
    }
}

isPrime(10);