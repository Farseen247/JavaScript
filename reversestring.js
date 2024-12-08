// let str="bridgeon"
// let x=[];
// let y=0;
// for(let i=str.length-1;i>=0;i--,y++)
// {
//      x[y]=(str.charAt(i))    
// }
// console.log(x.join(""));

// let str="bridgeon"
// let x=[];
// for (let i = str.length-1; i >=0 ; i--) {
//     x.push(str[i]);
    
// }
// console.log(x.join(""));


reverse =( string ) => {
    let x=[];
    for (let i = string.length-1; i >=0 ; i--) {
        x.push(string[i]);
    }
    return x;
}
let str="bridgeon";
a= reverse(str);
console.log(a.join(""));
