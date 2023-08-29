#include <iostream>

using namespace std;

int main()
{
    int a[]={1,3,4,5,6,3,7,9};
    int n=8;
    for (int i=0;i<n-2;i++)
    {
        for (int j=i+1;j<n-1;j++)
        {
            for (int k=j+1;j<n;k++)
            {
                if ((a[i]+a[j]+a[k])==12)
                cout<<a[i]<<a[j]<<a[k];
                
            }
        }
    }

    return 0;
}