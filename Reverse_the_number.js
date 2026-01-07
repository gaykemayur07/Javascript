

function ReverseNumber(num){

    let str=num.toString().split('').reverse().join('');
    console.log(Number(str));
    

    
}
ReverseNumber(12345)