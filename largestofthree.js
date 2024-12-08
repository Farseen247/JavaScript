largestofthree = ( n1 , n2 , n3 ) =>{
    if (n1>n2) {
        if (n1>n3) {
            console.log(n1 + " is largest");
            
        } else {
            console.log(n3 + " is largest");
        }
    } else {
        if (n2>n3) {
            console.log(n2 + " is largest");
        } else {
            console.log(n3 + " is largest");
        }
    }
}

let a = largestofthree(100,150,25);