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
const utils_1 = require("./utils");
const constants_1 = require("./constants");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield make(constants_1.TARGET_DIR);
}))();
function make(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        const makeCmd = `${constants_1.ZOWE} uss issue ssh "cd '${dir}' && 'make'"`;
        const strResp = yield utils_1.runCmd(makeCmd);
        console.log(`... ${strResp}`);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFrZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWtlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWdDO0FBQ2hDLDJDQUEwRDtBQUUxRCxDQUFDLEdBQVMsRUFBRTtJQUNSLE1BQU0sSUFBSSxDQUFDLHNCQUFVLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUM7QUFFTCxTQUFlLElBQUksQ0FBQyxHQUFXOztRQUMzQixNQUFNLE9BQU8sR0FBRyxHQUFHLGdCQUFJLHVCQUF1QixHQUFHLGNBQWMsQ0FBQztRQUNoRSxNQUFNLE9BQU8sR0FBRyxNQUFNLGNBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQUEifQ==