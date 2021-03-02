"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOURCE_DIR = exports.ZOWE = exports.TARGET_DIR = exports.ZFS = void 0;
const config = require("../../user.config.json");
const HELLO_WORLD = "hello";
const user = config.user;
const project = config.project || HELLO_WORLD;
exports.ZFS = `${user.toUpperCase()}.PUBLIC.${project.toUpperCase()}.ZFS`;
exports.TARGET_DIR = `/tmp/${user.toLowerCase()}/${project.toLowerCase()}`;
exports.ZOWE = "zowex";
exports.SOURCE_DIR = `zossrc`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUdqRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFHNUIsTUFBTSxJQUFJLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQztBQUNqQyxNQUFNLE9BQU8sR0FBVyxNQUFNLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQztBQUd6QyxRQUFBLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsV0FBVyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQztBQUNsRSxRQUFBLFVBQVUsR0FBRyxRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztBQUduRSxRQUFBLElBQUksR0FBRyxPQUFPLENBQUM7QUFFZixRQUFBLFVBQVUsR0FBRyxRQUFRLENBQUMifQ==