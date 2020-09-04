//program to search element in a array of strings
let size = prompt("enter array size");
let arr= new Array();
for(let i=0; i<size; i++)
{
    arr[i] = prompt("enter elements");
}

let s = prompt("enter the string to be searched");

let d = arr.indexOf(s);
if(d == -1)
{ 
    console.log("not found");
}
else{
    console.log(`the searched ele is ${arr[d]}`);
}

