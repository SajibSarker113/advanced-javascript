falsy:
0
""
undefined
null
NaN
false

Truthy:
"0"
" "
[]
{}
string er moddhe false likhle  true hobe

const age = 0;
if(age){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

let age = {};
if(age){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

let name = 0;
if(name || name == 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}