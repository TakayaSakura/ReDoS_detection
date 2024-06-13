#include <stdio.h>
int get(void){
  int c;
  while((c=getchar())=='\n');
  return c;
}
int main(void){
 int c;
 label1:
  c=get();
  if(c=='A'){ goto label2;}
  if(c=='C'){ goto label3;}
  goto err;
 label2:
  c=get();
  if(c=='A'){ goto label2;}
  if(c=='B'){ goto label3;}
  goto err;
 label3:
  c=get();
  if(c==EOF){ goto accept;}
  if(c=='B'){ goto label1; }
  goto err;
 err:
  printf("reject\n");
  return 2;
 accept:
  printf("accept\n");
  return 0;
}