'use strict';

import { ExtensionContext, workspace } from 'vscode';
import * as path from 'path';
const jetpack = require('fs-jetpack');

import TypingsInstaller from './typingsInstaller';

const METEOR_DIR = '.meteor';

export function activate(context: ExtensionContext) {
    // Only activate if it's a Meteor project
    if (!jetpack.exists(path.join(workspace.rootPath, METEOR_DIR))) {
        return;
    }

    const typingsInstaller: TypingsInstaller = new TypingsInstaller(context.extensionPath);
    typingsInstaller.install();
}