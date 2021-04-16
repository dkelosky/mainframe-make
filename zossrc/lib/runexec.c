#include "runexec.h"
#include <stdlib.h>

#pragma prolog(RUNEXE, "&CCN_MAIN SETB 1 \n MYPROLOG")

int RUNEXE()
{
    // call_alloc();
    return 3;
}

// typedef int EXTF();
// #pragma linkage(EXTF, OS_UPSTACK)

// int call_alloc()
// {
//     EXTF *bpxwdyn = (EXTF *)fetch("BPXWDYN");
//     return bpxwdyn("alloc fi(syslib) da(sys1.maclib) shr msg(2)");
// }
