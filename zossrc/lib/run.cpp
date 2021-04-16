#include <iostream>
#include <stdlib.h>
#include "runexec.h"

using namespace std;

#pragma runopts(trap(on, nospie))

// typedef int EXTF(char *);
extern "OS_UPSTACK" typedef int EXTF(char *);
// #pragma linkage(EXTF, OS_UPSTACK)
// #pragma linkage(EXTF, OS)

int call_alloc();


int main()
{
    cout << "hello" << endl;

    int i = RUNEXE();
    call_alloc();

    cout << "hello " << i << endl;
}

int call_alloc()
{
    EXTF *bpxwdyn = (EXTF *)fetch("BPXWDYN");
    return bpxwdyn("alloc fi(syslib) da(sys1.maclib) shr msg(2)");
}
