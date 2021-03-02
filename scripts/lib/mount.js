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
exports.isMounted = exports.mountZfs = void 0;
const utils_1 = require("./utils");
const constants_1 = require("./constants");
function mountZfs(zfs, dir) {
    return __awaiter(this, void 0, void 0, function* () {
        const mountCmd = `${constants_1.ZOWE} files mount fs ${zfs} '${dir}' -m rdwr`;
        let mounted = yield isMounted(zfs, dir);
        if (!mounted) {
            console.log(`Mounting ZFS "${zfs}" to "${dir}"`);
            let strResp = yield utils_1.runCmd(mountCmd);
            console.log(`... ${strResp}`);
        }
    });
}
exports.mountZfs = mountZfs;
function isMounted(zfs, dir) {
    return __awaiter(this, void 0, void 0, function* () {
        const listCmd = `${constants_1.ZOWE} uss issue ssh 'df "${dir}"'`;
        console.log(`Checking for mount...`);
        let strResp = yield utils_1.runCmd(listCmd, true);
        const jsonResp = JSON.parse(strResp);
        const lines = jsonResp.stdout.split(/\r?\n/);
        let mounted = false;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].indexOf(`${zfs}`) > -1) {
                mounted = true;
                break;
            }
        }
        if (mounted) {
            console.log(`... ${dir} is mounted`);
        }
        else {
            console.log(`... ${dir} is not mounted`);
        }
        return mounted;
    });
}
exports.isMounted = isMounted;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW91bnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbW91bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWdDO0FBQ2hDLDJDQUFtRDtBQUVuRCxTQUFzQixRQUFRLENBQUMsR0FBVyxFQUFFLEdBQVc7O1FBQ25ELE1BQU0sUUFBUSxHQUFHLEdBQUcsZ0JBQUksbUJBQW1CLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQztRQUVsRSxJQUFJLE9BQU8sR0FBRyxNQUFNLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ2pELElBQUksT0FBTyxHQUFHLE1BQU0sY0FBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztDQUFBO0FBVkQsNEJBVUM7QUFFRCxTQUFzQixTQUFTLENBQUMsR0FBVyxFQUFFLEdBQVc7O1FBQ3BELE1BQU0sT0FBTyxHQUFHLEdBQUcsZ0JBQUksdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBRXRELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxJQUFJLE9BQU8sR0FBRyxNQUFNLGNBQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQyxNQUFNLEtBQUssR0FBYSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2RCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDakMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDZixNQUFNO2FBQ1Q7U0FDSjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQUE7QUF4QkQsOEJBd0JDIn0=