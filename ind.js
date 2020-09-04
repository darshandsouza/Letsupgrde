//program to search for particular character in a string

let k = prompt("enter any string");
let pos = 0;
let j = prompt("enter char u want to find its position");
for(let i=0; i<k.length; i++)
{
    if (k[i]==j)
    {
        pos = pos +1;
        console.log(`pos is at ${pos}`);
    }
    
}
if(pos==0)
    {
        console.log("not found");
    }









