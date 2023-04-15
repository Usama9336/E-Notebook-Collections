#include <bits/stdc++.h>
using namespace std;
#define ll long long;
int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n, q;
        cin >> n >> q;
        long long k[q];
        long long a[n];
        for (int i = 0; i < n; i++)
            cin >> a[i];
        for (int i = 0; i < q; i++)
            cin >> k[i];
        long long sum = 0;
        int j = 0, i = 0;

            while (j < q)
            {
                if ((a[i] <= k[j])&&(i<n))
                {
                    sum += a[i];
                    i++;
                }
                else
                {
                    cout << sum << " ";
                    sum = 0;
                    j++;
                    i = 0;
                }
            } 
        cout << endl;
        /* code */
    }

    return 0;
}
