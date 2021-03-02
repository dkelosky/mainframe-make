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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUFnQztBQUNoQywyQ0FBMEQ7QUFDMUQsMkJBQTZCO0FBQzdCLCtCQUEyQjtBQUMzQiwrQkFBZ0M7QUFFaEMsTUFBTSxPQUFPLEdBQUcsZ0JBQVMsQ0FBQyxZQUFPLENBQUMsQ0FBQztBQUVuQyxDQUFDLEdBQVMsRUFBRTtJQUNSLE1BQU0sU0FBUyxFQUFFLENBQUM7QUFDdEIsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUFDO0FBRUwsU0FBZSxTQUFTOztRQUNwQixNQUFNLEtBQUssR0FBRyxNQUFNLFFBQVEsRUFBRSxDQUFDO1FBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztDQUFBO0FBRUQsU0FBZSxRQUFROztRQUNuQixPQUFPLE9BQU8sQ0FBQyxzQkFBVSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUFBO0FBRUQsU0FBZSxNQUFNLENBQUMsSUFBWTs7UUFDOUIsTUFBTSxNQUFNLEdBQUcsR0FBRyxzQkFBVSxHQUFHLFVBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUM1QyxNQUFNLE1BQU0sR0FBRyxHQUFHLHNCQUFVLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdkMsTUFBTSxTQUFTLEdBQUcsR0FBRyxnQkFBSSxzQkFBc0IsTUFBTSxNQUFNLE1BQU0sR0FBRyxDQUFDO1FBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxNQUFNLFNBQVMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVwRCxNQUFNLE9BQU8sR0FBRyxNQUFNLGNBQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUE7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsU0FBUyx3QkFBd0IsQ0FBQyxDQUFDO1NBQ2xFO0lBRUwsQ0FBQztDQUFBIn0=