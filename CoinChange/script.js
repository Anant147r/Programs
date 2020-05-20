function Coin(coins,sum){
    var arr;
    var len=coins.length;
    arr=new Array(sum+1);
    var i;
    for(i=0;i<=sum;i++)
        arr[i]=new Array(len+1);
    for(i=0;i<=sum;i++)
    {
        for(j=0;j<=len;j++)
        {
            if((i==0)||(j==0))
                arr[i][j]=0;    
            else{
                if((i-coins[j-1])>0)
                    arr[i][j]=Math.min(arr[i-coins[j-1]][j-1],arr[i][j-1])+1;
                else
                    arr[i][j]=arr[i][j-1];
                }
        }
    }
    return arr;
}
function main(){
    var coins=[1,2,5,10,20,50];
    var sum=65;
    var arr=Coin(coins,sum);
    console.log(arr);
}
main();