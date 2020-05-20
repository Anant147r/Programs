function main(){
    var q=[1,2];
    var p=[8,19];
    var wt=2;
    var arr=knapsack(q,p,wt);
    var i,j;
    console.log(arr);
}
function knapsack(q,p,wt){
    var arr=new Array(q+1);
    var i,j;
    for(i=0;i<=q.length;i++)
        arr[i]=new Array(p+1);

    for(i=0;i<=q.length;i++)
        for(j=0;j<=p.length;j++)
            arr[i][j]=0;
            
    for(i=0;i<=q.length;i++)
    {
        for(j=0;j<=p.length;j++)
        {
            if((i!=0)&&(j!=0)&&(j-q[i-1]>=0)){
                if(j-q[i-1]>=0)
                    arr[i][j]=Math.max(arr[i-1][j-q[i-1]]+p[i-1],arr[i-1][j])
                else
                    arr[i][j]=arr[i-1][j];
            }
        }
    }
    return arr;
}
main();