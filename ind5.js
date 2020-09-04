// print an array in reverse order
let arr = prompt("enter the size of array");
let v = new Array();
for(let i=0; i<arr; i++)
{
    v[i] = prompt("enter the elements")
}
console.log(`before reversing`);
console.log(v);
let ca = new Array();
ca = v.reverse();
console.log(`after reversing`);
console.log(ca);


