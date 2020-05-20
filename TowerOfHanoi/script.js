function TOH(s,d,t,num){
    if(num===1){
        console.log(s+"->"+d+" ");
        }
    else{
        TOH(s,t,d,num-1);
        console.log(s+"->"+d);
        TOH(t,d,s,num-1);
        }
    }
function main(){
   var n= window.prompt("Enter a number")
    TOH("Source","Destination","Temprory",n);
}
main();