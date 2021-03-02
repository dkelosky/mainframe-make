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
const mount_1 = require("./mount");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield unmount(constants_1.ZFS);
}))();
function unmount(zfs) {
    return __awaiter(this, void 0, void 0, function* () {
        let mounted = yield mount_1.isMounted(constants_1.ZFS, constants_1.TARGET_DIR);
        if (mounted) {
            console.log(`Unmounting "${zfs}"...`);
            const unmountCmd = `${constants_1.ZOWE} files unmount fs "${zfs}"`;
            const strResp = yield utils_1.runCmd(unmountCmd);
            console.log(`${strResp}`);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5tb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy91bm1vdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlDO0FBQ2pDLDJDQUFvRDtBQUNwRCxtQ0FBb0M7QUFFcEMsQ0FBQyxHQUFTLEVBQUU7SUFDUixNQUFNLE9BQU8sQ0FBQyxlQUFHLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUM7QUFFTCxTQUFlLE9BQU8sQ0FBQyxHQUFXOztRQUU5QixJQUFJLE9BQU8sR0FBRyxNQUFNLGlCQUFTLENBQUMsZUFBRyxFQUFFLHNCQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLE9BQU8sRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sVUFBVSxHQUFHLEdBQUcsZ0JBQUksc0JBQXNCLEdBQUcsR0FBRyxDQUFDO1lBQ3ZELE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzdCO0lBRUwsQ0FBQztDQUFBIn0=