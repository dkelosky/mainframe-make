import { runCmd } from "./utils"
import { ZOWE, TARGET_DIR, SOURCE_DIR } from "./constants"
import { readdir } from "fs";
import { sep } from "path";
import { promisify } from "util"

const readDir = promisify(readdir);

(async () => {
    await uploadAll();
})();

async function uploadAll() {
    const files = await getFiles();
    for (let i = 0; i < files.length; i++) {
        await upload(files[i]);
    }
}

async function getFiles() {
    return readDir(SOURCE_DIR);
}

async function upload(file: string) {
    const source = `${SOURCE_DIR}${sep}${file}`;
    const target = `${TARGET_DIR}/${file}`;
    const uploadCmd = `${ZOWE} files upload ftu "${source}" "${target}"`;
    console.log(`Uploading "${source}" to "${target}"`);

    const strResp = await runCmd(uploadCmd, true);
    const jsonResp = JSON.parse(strResp);

    if (!jsonResp.success) {
        console.log(jsonResp.error.msg)
        console.log(jsonResp.error.additionalDetails)
        console.log(`Try running "${uploadCmd}" for more information`);
    }

}
