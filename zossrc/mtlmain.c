#include "wto.h"
#include "stdio.h"
#include "stdlib.h"

// test
int main() {
    WTO_BUF buf = {0};
    buf.len = sprintf(buf.msg, "hello world\n");
    wto(&buf);
    return 0;
}