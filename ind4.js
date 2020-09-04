//program to display only elements containing "a" in term of array
let size = prompt("enter array size");
let arr= new Array();
for(let i=0; i<size; i++)
{
    arr[i] = prompt("enter elements");
}

for (let i=0; i<size; i++)
{
    for(let j=0; j<arr[i].length; j++)
    {
        if(arr[i][j] == "a")
        {
        console.log(arr[i]);
        break;
        }
    }
   
}
