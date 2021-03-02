"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCmd = void 0;
const child_process_1 = require("child_process");
const util_1 = require("util");
const exc = util_1.promisify(child_process_1.exec);
function runCmd(cmd, rfj = false) {
    return __awaiter(this, void 0, void 0, function* () {
        cmd += (rfj) ? " --rfj" : "";
        const resp = yield exc(cmd);
        if (resp.stderr) {
            throw new Error(resp.stderr);
        }
        return resp.stdout;
    });
}
exports.runCmd = runCmd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXFDO0FBQ3JDLCtCQUFnQztBQUVoQyxNQUFNLEdBQUcsR0FBRyxnQkFBUyxDQUFDLG9CQUFJLENBQUMsQ0FBQztBQUU1QixTQUFzQixNQUFNLENBQUMsR0FBVyxFQUFFLEdBQUcsR0FBRyxLQUFLOztRQUNqRCxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEM7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztDQUFBO0FBUEQsd0JBT0MifQ==