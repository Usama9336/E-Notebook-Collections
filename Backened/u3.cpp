#include<bits/stdc++.h>
using namespace std;
int main()
{
    string a,b;
    int t;
    cin>>t;
    while (t--)
    {
        int n;
        cin>>n;
        cin>>a;
        cin>>b;
        int c=0,d=0;
        for(int i=0;i<n;i++)
        {
            char ch=a.at(i);
            char ch1=b.at(i);
            if(ch=='1')
            c++;
            else if(ch1=='1')
            d++; 
        }
         if(a==b)
        cout<<"YES\n";
        else if(c!=d)
        cout<<"NO\n";
        else
        {
          
        }
        /* code */
    }
    
    return 0;
}