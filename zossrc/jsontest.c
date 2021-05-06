#include <stdio.h>

int main() {
  printf("{\n");

  printf(" \"anArray\": \n");

  printf("   [\n");

  for(int i  = 0 ; i < 10; i++){
    printf("    {\n");

    printf("       \"element%d\": \"value%d\" \n", i, i);

    if( i+1 < 10) {
      printf("    },\n");

    } else {
      printf("    }\n");

    }
  }
  printf("   ]\n");

  printf("}\n");

}