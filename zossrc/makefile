ASM = as
BIND = ld
TARGET = main
CC=xlc
CXX=xlc++

MTL_OPTS=metal,\
 langlvl(extended),\
 sscom,\
 nolongname,\
 inline,\
 genasm,\
 inlrpt,\
 csect,\
 nose,\
 lp64,\
 list,\
 warn64,\
 optimize(2),\
 list,\
 showinc,\
 showmacro,\
 source,\
 aggregate

MACLIBS=-ISYS1.MACLIB \
 -ICBC.SCCNSAM

MTL_HEADERS=-I/usr/include/metal

MTL_FLAGS=-S -W "c,$(MTL_OPTS)"

BIND_FLAGS = -bRMODE=ANY

ASM_FLAGS=-mrent

FLAGS=-W "c,lp64"

all: $(TARGET)

# listings must have .lst suffix to be automatically downloaded
$(TARGET): $(TARGET).o
	$(BIND) $(BIND_FLAGS) -V -eMAIN -o $@ $^ > $*.bind.lst

$(TARGET).o: $(TARGET).s
	$(ASM) $(ASMFLAGS) -a=$*.asm.lst -o $@ $^

lec: lec.c
	$(CC) $(FLAGS) -qlist=$*.cpp.lst -o $@ $^

mtlmain: mtlmain.o
	$(BIND) $(BIND_FLAGS) -V -eMAIN -o $@ $^ > $*.bind.lst

mtlmain.o: mtlmain.s
	$(ASM) $(ASMFLAGS) -a=$*.asm.lst -o $@ $^

mtlmain.s: mtlmain.c
	$(CC) $(MTL_FLAGS) -qlist=$*.mtl.lst $(MTL_HEADERS) -o $@ $^

# TODO(Kelosky): conditional delet files
.PHONY: clean
clean:
	rm *.o
	rm *.lst
	rm $(TARGET)
