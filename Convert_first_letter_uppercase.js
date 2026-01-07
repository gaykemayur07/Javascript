

let string= "mayur rameshwar gayke";

const capitalize=(str)=>{
    let result=str.split(' ').map((ele)=>{
        return ele.charAt(0).toUpperCase()+ele.slice(1);
    })
    
    return result.join(' ');
    
    
}

let final =capitalize(string);
console.log(final);



