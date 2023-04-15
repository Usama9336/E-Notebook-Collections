#include<bits/stdc++.h>
using namespace std;
int maxim(int d,int f,int g)
{
    if(d>f)
    {
        if(d>g)
        return d;
        else
        return g;
    }
    else{
        if(f>g)
        return f;
        else
        return g;
    }
}
int main(){
    int t;
    cin>>t;
    while(t--)
    {   
        int a,b,c;
        cin>>a>>b>>c;
        int k=maxim(a,b,c);
        int x=0;
        for(int i=2;i<k;i++)
        {
            if(a%i==0)
            {continue;}
            else if(b%i==0)
            {continue;}
            else if(c%i==0)
            {continue;}
            else
            {x=i;
            break;}
        }
        if(x==0)
        {
            for(int j=k+1;j<100;j++)
            {
                 if(a%j==0)
            {continue;}
            else if(b%j==0)
            {continue;}
            else if(c%j==0)
            {continue;}
            else
            {x=j;
            break;}
            }
        }
        cout<<x<<endl;
    }
    return 0;
}