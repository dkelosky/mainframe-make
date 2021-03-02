const config = require("../../user.config.json");

// default project
const HELLO_WORLD = "hello";

// user config
const user: string = config.user;
const project: string = config.project || HELLO_WORLD;

// PDS and directory pattern
export const ZFS = `${user.toUpperCase()}.PUBLIC.${project.toUpperCase()}.ZFS`;
export const TARGET_DIR = `/tmp/${user.toLowerCase()}/${project.toLowerCase()}`;

// primary command
export const ZOWE = "zowex"; // `zowe` for non-daemon

export const SOURCE_DIR = `zossrc`;