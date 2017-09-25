'use strict';
var vscode_1 = require('vscode');
var meteorApi_1 = require('./meteorApi');
var MeteorCompletionItemProvider = (function () {
    function MeteorCompletionItemProvider() {
    }
    MeteorCompletionItemProvider.prototype.provideCompletionItems = function (document, position) {
        var word = this.getWord(document, position);
        var entries = meteorApi_1.api[word];
        return this.getCompletionItems(entries);
    };
    MeteorCompletionItemProvider.prototype.getWord = function (document, position) {
        var line = document.getText(document.lineAt(position).range);
        var wordPosition = new vscode_1.Position(position.line, line.lastIndexOf('.') - 1);
        var wordRange = document.getWordRangeAtPosition(wordPosition);
        return document.getText(wordRange);
    };
    MeteorCompletionItemProvider.prototype.getCompletionItems = function (entries) {
        var completionItems = [];
        for (var name in entries) {
            if (entries.hasOwnProperty(name)) {
                var entry = entries[name];
                completionItems.push(this.createCompletionItem(name, entry));
            }
        }
        return completionItems;
    };
    MeteorCompletionItemProvider.prototype.createCompletionItem = function (name, entry) {
        var item = new vscode_1.CompletionItem(name);
        item.kind = entry.kind;
        item.detail = entry.signature;
        item.documentation = entry.description;
        item.sortText = '0';
        return item;
    };
    return MeteorCompletionItemProvider;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MeteorCompletionItemProvider;
