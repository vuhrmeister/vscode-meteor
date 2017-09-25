'use strict';
var vscode_1 = require('vscode');
var completionItemProvider_1 = require('./completionItemProvider');
function activate(context) {
    var disposable = vscode_1.languages.registerCompletionItemProvider({ scheme: 'file', language: 'javascript' }, new completionItemProvider_1.default(), '.');
    context.subscriptions.push(disposable);
}
exports.activate = activate;
