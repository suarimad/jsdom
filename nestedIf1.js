
//KOTAK
var s ='';
for ( var i=0; i < 5;i++){
    for ( var j=0; j < 5;j++){
        s+='*';
    }
    s+='\n';
}
console.log(s);

//SEGITIGA
var t ='';
for ( var i=0; i < 5;i++){
    for ( var j=0; j <= i;j++){
        t+='*';
    }
    t+='\n';
}
console.log(t);

//SEGITIGA KEBALIk
var u ='';
for ( var i=5; i > 0;i--){
    for ( var j=0; j < i;j++){
        u+='*';
    }
    u+='\n';
}
console.log(u);


//COBA
var v='';
for ( var i = 0 ; i <= 5; i++){
    for ( var j = 5; j >= i; j--){
        v+=' ';
        }
    for ( var k= 0; k <= i; k++){
        v+='*';
    }
    for ( var l= 0; l <= i-1; l++){
        v+='*';
    }
    v+='\n';
   
}
for ( var i = 0 ; i <= 5; i++){
    for ( var j = 0; j < 5; j++){
        v+='*';
    }
}


console.log(v);