ASM = as
ASMFLAGS = -mrent
BIND = ld
BINDFLAGS = -bRMODE=ANY
TARGET = main
CC=xlc
CXX=xlc++

FLAGS=-W "c,lp64"

all: $(TARGET)

$(TARGET): $(TARGET).o
	$(BIND) $(BINDFLAGS) -V -eMAIN -o $@ $^ > $*.bind.lst

$(TARGET).o: $(TARGET).s
	$(ASM) $(ASMFLAGS) -a=$*.asm.lst -o $@ $^

lec: lec.c
	$(CC) $(FLAGS) -qlist=$*.cpp.lst -o $@ $^

clean:
	rm *.o
	rm *.lst
	rm $(TARGET)
