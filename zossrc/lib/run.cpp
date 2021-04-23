#include <iostream>
#include <stdlib.h>
#include "runexec.h"
#include <vector>

using namespace std;

#pragma runopts(trap(off)) // nospie), ter(uadump))
// #pragma runopts(ter(uadump), trap(on, nospie)) // nospie), )
// #pragma runopts(ter(uadump), trap(on, nospie)) // nospie), )
// #pragma runopts(trap(on, nospie), ter(uadump))

// typedef int EXTF(char *);
extern "OS_UPSTACK" typedef int EXTF(char *);
// #pragma linkage(EXTF, OS_UPSTACK)
// #pragma linkage(EXTF, OS)

void call_alloc(char *);
void allocate();

EXTF *bpxwdyn = (EXTF *)fetch("BPXWDYN");

int main()
{
    cout << "hello" << endl;

    int i = RUNEXE("hello");
    allocate();
    // call_alloc();

    cout << "hello " << i << endl;
}

void allocate() {

    vector<char *> dds;
    dds.push_back("alloc fi(syslib) da(sys1.maclib) shr msg(2)");
    dds.push_back("alloc dd(STEPLIB) da('kelda16.work.loadxe13') shr");
    // dds.push_back("alloc dd(caoestop) DUMMY");

    for (vector<char *>::iterator it = dds.begin(); it != dds.end(); it++) {
        call_alloc(*it);
    }

    // array<char *> dds = new array();

    // char *dds[] = {
    //     "alloc fi(syslib) da(sys1.maclib) shr msg(2)",
    //     "alloc fi(steplib) path('/tmp/kelda16/make2/zossrc') shr msg(2)",
    //     "alloc dd(caoestop) DUMMY"
    // };

    // for (int i = 0; i < sizeof(dds) / sizeof)
}

void call_alloc(char *allocString)
{
    int rc = bpxwdyn(allocString);

    if (0 != rc) {
        cout << ">> Failure for: '" << allocString << "' rc: " << rc << endl;
    }

    // bpxwdyn("alloc fi(steplib) path('/tmp/kelda16/make2/zossrc') shr msg(2)");
    // bpxwdyn("alloc dd(caoestop) DUMMY");

}

