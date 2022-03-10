//Masala
// n natural soni berilgan va geometrik progressiyaning dastlabki hadi A va ayirmasi D berilgan. Shu geometrik progressiyaning n ta hadidan tashkil topgan massiv hosil qiling

//bn=b1*(q**(n-1))

var n=4;  //2,6,18,54     
var A=2;
var D=3;
var b=[];
var c=[];

function geometrikProgressiya(){
    for(i=1; i<=n; i++){
        b[i]=A*(D**(i-1));
    }

    for(i=1; i<=n; i++){
        c.push(b[i])
    }
    return c
}

console.log(geometrikProgressiya());