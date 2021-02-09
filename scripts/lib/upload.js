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
const fs_1 = require("fs");
const path_1 = require("path");
const util_1 = require("util");
const read = util_1.promisify(fs_1.readFile);
const readDir = util_1.promisify(fs_1.readdir);
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield uploadAll();
}))();
function uploadAll() {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield getFiles();
        for (let i = 0; i < files.length; i++) {
            yield upload(files[i]);
        }
    });
}
function getFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        return readDir(constants_1.SOURCE_DIR);
    });
}
function upload(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const source = `${constants_1.SOURCE_DIR}${path_1.sep}${file}`;
        const target = `${constants_1.TARGET_DIR}/${file}`;
        const uploadCmd = `${constants_1.ZOWE} files upload ftu "${source}" "${target}"`;
        console.log(`Uploading "${source}" to "${target}"`);
        const strResp = yield utils_1.runCmd(uploadCmd, true);
        const jsonResp = JSON.parse(strResp);
        if (!jsonResp.success) {
            console.log(jsonResp.error.msg);
            console.log(jsonResp.error.additionalDetails);
            console.log(`Try running "${uploadCmd}" for more information`);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUFnQztBQUNoQywyQ0FBMEQ7QUFDMUQsMkJBQXVDO0FBQ3ZDLCtCQUEyQjtBQUMzQiwrQkFBZ0M7QUFHaEMsTUFBTSxJQUFJLEdBQUcsZ0JBQVMsQ0FBQyxhQUFRLENBQUMsQ0FBQztBQUNqQyxNQUFNLE9BQU8sR0FBRyxnQkFBUyxDQUFDLFlBQU8sQ0FBQyxDQUFDO0FBRW5DLENBQUMsR0FBUyxFQUFFO0lBQ1IsTUFBTSxTQUFTLEVBQUUsQ0FBQztBQUN0QixDQUFDLENBQUEsQ0FBQyxFQUFFLENBQUM7QUFFTCxTQUFlLFNBQVM7O1FBQ3BCLE1BQU0sS0FBSyxHQUFHLE1BQU0sUUFBUSxFQUFFLENBQUM7UUFDL0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0NBQUE7QUFFRCxTQUFlLFFBQVE7O1FBQ25CLE9BQU8sT0FBTyxDQUFDLHNCQUFVLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQUE7QUFFRCxTQUFlLE1BQU0sQ0FBQyxJQUFZOztRQUM5QixNQUFNLE1BQU0sR0FBRyxHQUFHLHNCQUFVLEdBQUcsVUFBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQzVDLE1BQU0sTUFBTSxHQUFHLEdBQUcsc0JBQVUsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QyxNQUFNLFNBQVMsR0FBRyxHQUFHLGdCQUFJLHNCQUFzQixNQUFNLE1BQU0sTUFBTSxHQUFHLENBQUM7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLE1BQU0sU0FBUyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRXBELE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixTQUFTLHdCQUF3QixDQUFDLENBQUM7U0FDbEU7SUFFTCxDQUFDO0NBQUEifQ==