function interleave(str1,str2,test){
    var len1=str1.length;
    var len2=str2.length;
    var len3=test.length;
    var arr;
    arr=new Array(len1+1);
    var i,j;
    for(i=0;i<=len1;i++)
        arr[i]=new Array(len2+1);
    for(i=0;i<=len1;i++)
    {
        for(j=0;j<=len2;j++)
        {
            if((i==0)&&(j==0))
                arr[i][j]=true;
            else if(i==0){
                if(arr[i][j-1]&&(test[i+j-1]===str2[j-1]))
                    arr[i][j]=true;
                else
                arr[i][j]=false;
            }
            else if(j==0){
                if(arr[i-1][j]&&(test[i+j-1]===str1[i-1]))
                    arr[i][j]=true;
                else
                    arr[i][j]=false;
            }
            else{
                arr[i][j]=(arr[i-1][j]&&(test[i+j-1]===str1[i-1]))||(arr[i][j-1]&&(test[i+j-1]===str2[j-1]))
            }
        }
    }
    return arr;
}
function main(){
    var str1="xyz";
    var str2="abcd";
    var test="xabyczd";
    var arr=interleave(str1,str2,test);
    console.log(arr);
}
main();