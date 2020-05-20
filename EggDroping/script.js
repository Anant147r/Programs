function eggs(){
    var arr=new Array(101);
    arr[0]=0;
    arr[1]=1;
    arr[2]=2;
    var j,i,temp;
    for (i=3;i<=100;i++){
        arr[i]=100000;
        for(j=1;j<i;j++){
            temp=Math.max(j,i-j)
            if(temp<arr[i])
                arr[i]=temp;
        }
        temp=0;
    }
    console.log(arr);
}
function main(){
    eggs();
}
main();