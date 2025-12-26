
let Mayur={
    name:"Mayur",
    age: 20,
    sur: function(){
        console.log(`${this.name} Gayke`);
    }

}

Mayur.sur();

function Gayke(){
    let name="Mayur";
    console.log(this.name)

}
Gayke();


function Add(n1,n2){
    this.n1;
    this.n2;
    return n1+n2;

}
console.log(Add(10,5));