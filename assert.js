const assert = require("assert");
const fs = require("fs");
const tempTxt = fs.readFileSync("out.json", "utf-8");
// const tempTxt = fs.readFileSync("out2.txt", "utf-8");
let i;
for (i = 0; i < 10000; i++) {
    try {
        assert.strictEqual(new RegExp(`element${i}`).test(tempTxt), true);
        assert.strictEqual(new RegExp(`value${i}`).test(tempTxt), true);
    } catch (err) {
        console.log(i);
    }
}
console.log(`🥳`)