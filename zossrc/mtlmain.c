#include "wto.h"
#include "stdio.h"
#include "stdlib.h"
#include "ams.h"

// test
int main() {
    WTO_BUF buf = {0};
    buf.len = sprintf(buf.msg, "hello world\n");
    wto(&buf);

    int rc = 0;
    int rsn = 0;

    // IO_CTRL *snapIoc = openOutputAssert("SNAP", 125, 1632, dcbrecv + dcbrecbr + dcbrecca);

    return 0;
}