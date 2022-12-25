#include <iostream>
#include <bits/stdc++.h>
using namespace std;
void solve(){
long long n,i,j,n1,n2;
cin>>n;
long long a[n],b[n-1],c[n-2];
for(i=0;i<n;i++){
   cin>>a[i];
}
for(i=0;i<n-1;i++){
   cin>>b[i];
}
for(i=0;i<n-2;i++){
   cin>>c[i];
}
sort(a,a+n);
sort(b,b+n-1);
sort(c,c+n-2);
for(i=0;i<n-1;i++){
   if(a[i]!=b[i]){
      n1=a[i];
      break;
   }
   else{
      n1=a[n-1];
   }
}
for(i=0;i<n-2;i++){
   if(b[i]!=c[i]){
      n2=b[i];
      break;
   }
   else{
      n2=b[n-2];
   }
}
cout<<n1<<" "<<n2<<"\n";
}
int main()
{
   ios_base::sync_with_stdio(0);
   cin.tie(0);cout.tie(0);
   long t=1;
   cin>>t;
   for(long i=0;i<t;i++){
      solve();
   }
}
