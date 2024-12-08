printpattern = (numberoflines) =>{
    let num=1;
    let str="";
    for( let i=1; i<=numberoflines;i++){
        for (let j = 1; j <= i ; j++){
                str +=" " + num++; 
        }
    str+="\n"
    }    
    console.log(str);
    
}

let a = printpattern(4);