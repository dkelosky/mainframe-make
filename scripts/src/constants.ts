const config = require("../../user.config.json");

const user: string = config.user;

// PDS and directory pattern
export const ZFS = `${user.toUpperCase()}.PUBLIC.MAKE.ZFS`;
export const DIR = `/tmp/${user.toLowerCase()}/make`;

// primary command
export const ZOWE = "zowex"; // `zowe` for non-daemon