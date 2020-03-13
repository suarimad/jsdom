var r='';


//KOTAK
for (var i=0; i<5;i++){
    for (var j=0;j<5;j++){
        r+= '*';
        }
    r+='\n';
}
console.log(r);

console.log('\n');


//SEGITIGA
var s ='';
for (var i=0; i<5;i++){
    for (var j=0;j<5;j++){
        s+= '*';
        if(i == j){
            break;
        }
    }
    s+='\n';
}
console.log(s);

console.log('\n');


//SEGITIGA KEBALIK
var q='';
for (var i=0; i<5;i++){
    for (var j=0;j<5;j++){
        q+= '*';
        if((i+j) == 4){
            break;
        }
    }
    q+='\n';
}
console.log(q);

console.log('\n');


//SEGITIGA SAMA KAKI 
var t='';
for (var i=0; i<9;i++){
    for (var j=0;j<9;j++){
        t+= '*';
        if(i == j){
             break;
        } else if((i+j) == 8){
            break;
        }
    }
    t+='\n';
}
console.log(t);


//SEGITIGA SAMA KAKI 
