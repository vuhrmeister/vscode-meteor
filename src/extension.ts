'use strict';

import { ExtensionContext, languages } from 'vscode';
import MeteorCompletionItemProvider from './completionItemProvider';

export function activate(context: ExtensionContext) {
    let disposable = languages.registerCompletionItemProvider({ scheme: 'file', language: 'javascript' }, new MeteorCompletionItemProvider(), '.');
    context.subscriptions.push(disposable);
}