#include<bits/stdc++.h>
using namespace std;
long long hcf(long long a,long long b)
{
    if(b!=0)
    return hcf(b,a%b);
    else
    return a;
}
int main()
{long long t;
cin>>t;
while (t--)
{
    long long n,m;
    cin>>n>>m;
         cout<<hcf(n,m)<<endl;
}
    return 0;
}