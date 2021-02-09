"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZOWE = exports.DIR = exports.ZFS = void 0;
const config = require("../../user.config.json");
const user = config.user;
exports.ZFS = `${user.toUpperCase()}.PUBLIC.MAKE.ZFS`;
exports.DIR = `/tmp/${user.toLowerCase()}/make`;
exports.ZOWE = "zowex";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUVqRCxNQUFNLElBQUksR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDO0FBR3BCLFFBQUEsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQztBQUM5QyxRQUFBLEdBQUcsR0FBRyxRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO0FBR3hDLFFBQUEsSUFBSSxHQUFHLE9BQU8sQ0FBQyJ9