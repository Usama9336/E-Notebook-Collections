#include<bits/stdc++.h>
using namespace std;
int main()
{
    int t;
    cin>>t;
    while (t--)
    {
        int n,x;
        cin>>n>>x;
        int a[n];
        int b[n];
        for(int i=0;i<n;i++)
        cin>>a[i];
        for(int i=0;i<n;i++)
        cin>>b[i];
        int sum=0;
        for(int j=0;j<n;j++)
        {
            if(a[j]>=x)
            sum+=b[j];
        }
        cout<<sum<<endl;
        /* code */
    }
    

    return 0;
}