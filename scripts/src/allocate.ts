import { runCmd } from "./utils"
import { ZOWE, TARGET_DIR, ZFS } from "./constants"

(async () => {
    await createDirs(TARGET_DIR);
    await creatZfs(ZFS);
})();

// export _BPXK_JOBLOG=STDERR

async function createDirs(dir: string) {
    console.log(`Creating directory "${dir}"...`);
    const mkdirCmd = `${ZOWE} uss issue ssh 'mkdir -p "${dir}"'`;
    const strResp = await runCmd(mkdirCmd, false);
    console.log(`${strResp}`);
}

async function creatZfs(zfs: string) {
    const listCmd = `${ZOWE} files list ds "${ZFS}"`;
    const createCmd = `${ZOWE} files create zfs "${ZFS}"`;

    console.log(`Checking for ZFS "${zfs}"...`);
    let strResp = await runCmd(listCmd);
    const jsonResp = JSON.parse(strResp);

    if (jsonResp.data.apiResponse.returnedRows === 0) {
        strResp = await runCmd(createCmd, false);
        console.log(`... ${strResp}`);
    } else {
        console.log(`... data set already exists`);
    }
}
