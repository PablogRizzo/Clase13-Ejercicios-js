// Ej-1  cadena = "javascript"; dada la anterior cadena colocar la primera letra en mayúscula
//       output => Javascript

let cadena = "javascript";
r = cadena.charAt(0).toUpperCase();
a = cadena.split("");
a.shift();
a.unshift(r);
cadena = a.join("");
console.log(cadena);


// Ej-2 cadena = "javascript";  dada la anterior cadena colocar la ultima letra en mayúscula
//     output => javascripT

let cadena2 = "javascript";
r2 = cadena2.charAt(cadena2.length-1).toUpperCase();
a2 = cadena2.split("");
a2.pop();
a2.push(r2);
cadena2 = a2.join("");
console.log(cadena2);

// Ej-3 arr = ["foo", "bar", "baz", "qux", "origin"]
//      buscar en ele array el elemento baz y mostrarlo console
//      output =>  baz

let arr = ["foo", "bar", "baz", "qux", "origin"]
for(let i=0;i<arr.length;i++){
    if(arr[i] == "baz"){
        console.log(arr[i])
    }
}

// Ej-4 arr = ["foo", "bar", "baz", "qux", "origin"]
//      vaciar el arr
//      output => [ ]

let arr2 = ["foo", "bar", "baz", "qux", "origin"]
while(arr2.length>0){
    arr2.shift();
}
console.log(arr2);

// Ej-5  1 str = "origin"
//   eliminar las vocales del string
//   output => rgn

let str = "origin";
str= str.replace(/[aeiou]/ig,"");
console.log(str);