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
    yield createDirs(constants_1.TARGET_DIR);
    yield creatZfs(constants_1.ZFS);
    yield mount_1.mountZfs(constants_1.ZFS, constants_1.TARGET_DIR);
}))();
function createDirs(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Creating directory "${dir}"...`);
        const mkdirCmd = `${constants_1.ZOWE} uss issue ssh 'mkdir -p "${dir}"'`;
        const strResp = yield utils_1.runCmd(mkdirCmd);
        console.log(`${strResp}`);
    });
}
function creatZfs(zfs) {
    return __awaiter(this, void 0, void 0, function* () {
        const listCmd = `${constants_1.ZOWE} files list ds "${constants_1.ZFS}"`;
        const createCmd = `${constants_1.ZOWE} files create zfs "${constants_1.ZFS}"`;
        console.log(`Checking for ZFS "${zfs}"...`);
        let strResp = yield utils_1.runCmd(listCmd, true);
        const jsonResp = JSON.parse(strResp);
        if (jsonResp.data.apiResponse.returnedRows === 0) {
            strResp = yield utils_1.runCmd(createCmd);
            console.log(`... ${strResp}`);
        }
        else {
            console.log(`... data set already exists`);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsb2NhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYWxsb2NhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBZ0M7QUFDaEMsMkNBQW1EO0FBQ25ELG1DQUFrQztBQUVsQyxDQUFDLEdBQVMsRUFBRTtJQUNSLE1BQU0sVUFBVSxDQUFDLHNCQUFVLENBQUMsQ0FBQztJQUM3QixNQUFNLFFBQVEsQ0FBQyxlQUFHLENBQUMsQ0FBQztJQUNwQixNQUFNLGdCQUFRLENBQUMsZUFBRyxFQUFFLHNCQUFVLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUM7QUFJTCxTQUFlLFVBQVUsQ0FBQyxHQUFXOztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLE1BQU0sUUFBUSxHQUFHLEdBQUcsZ0JBQUksNkJBQTZCLEdBQUcsSUFBSSxDQUFDO1FBQzdELE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FBQTtBQUVELFNBQWUsUUFBUSxDQUFDLEdBQVc7O1FBQy9CLE1BQU0sT0FBTyxHQUFHLEdBQUcsZ0JBQUksbUJBQW1CLGVBQUcsR0FBRyxDQUFDO1FBQ2pELE1BQU0sU0FBUyxHQUFHLEdBQUcsZ0JBQUksc0JBQXNCLGVBQUcsR0FBRyxDQUFDO1FBRXRELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDNUMsSUFBSSxPQUFPLEdBQUcsTUFBTSxjQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEtBQUssQ0FBQyxFQUFFO1lBQzlDLE9BQU8sR0FBRyxNQUFNLGNBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sT0FBTyxFQUFFLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztDQUFBIn0=