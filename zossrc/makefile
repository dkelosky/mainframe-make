ASM = as
ASMFLAGS = -mrent
BIND = ld
BINDFLAGS = -bRMODE=ANY
TARGET = main

all: $(TARGET)

$(TARGET): $(TARGET).o
	$(BIND) $(BINDFLAGS) -V -eMAIN -o $@ $^ > $*.bind.lst

$(TARGET).o: $(TARGET).s
	$(ASM) $(ASMFLAGS) -a=$*.asm.lst -o $@ $^

clean:
	rm *.o
	rm *.lst
	rm $(TARGET)
