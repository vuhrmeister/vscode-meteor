import { workspace } from 'vscode';
import * as path from 'path';
const jetpack = require('fs-jetpack');

// VS Code shows an error when having a typings folder. So we name it a bit different.
// Should be changed to 'typings' asap (https://github.com/Microsoft/vscode/issues/8493)
const TYPINGS_PATH_SRC = 'meteor-typings';
const TYPINGS_PATH_DEST = '.vscode/typings';
const METEOR_TYPINGS_FILE = 'meteor.d.ts';

export default class TypingsInstaller {
    private extensionPath: string

    constructor (extensionPath: string) {
        this.extensionPath = extensionPath;
    }

    install () {
        const src = jetpack.cwd(path.resolve(this.extensionPath, TYPINGS_PATH_SRC));
        const dest = jetpack.cwd(path.join(workspace.rootPath, TYPINGS_PATH_DEST));

        // Just copy, even if it exists. Checking for existens first shouldn't make it faster.
        src.copy(METEOR_TYPINGS_FILE, dest.path(METEOR_TYPINGS_FILE), { overwrite: true });
    }
}