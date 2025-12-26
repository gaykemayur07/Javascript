

const mayur={
    name :{
        first:"Mayur",
        last: "Gayke",

    },
    age:20,
    mail:"gaykemayur07@gmail.com",

    
};

console.log(mayur.name.first);


const ob1={a:1,b:2,c:3};
const ob2={d:4,e:5,f:6};

const ob3={...ob1,...ob2};
const ob4=Object.assign(ob1,ob2);
console.log(ob3);
console.log(ob4);

console.log(Object.keys(ob1));

console.log(Object.values(ob1));
