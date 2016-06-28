
'use strict';

import { CompletionItemProvider, TextDocument, Position, CompletionItem } from 'vscode';
import { IEntries, IEntry, api } from './meteorApi';

export default class MeteorCompletionItemProvider implements CompletionItemProvider {
    provideCompletionItems (document: TextDocument, position: Position): CompletionItem[] {
        const word = this.getWord(document, position);
        const entries: IEntries = api[word];
        return this.getCompletionItems(entries);
    }

    getWord (document: TextDocument, position: Position): string {
        const line = document.getText(document.lineAt(position).range);
        const wordPosition = new Position(position.line, line.lastIndexOf('.') - 1);
        const wordRange = document.getWordRangeAtPosition(wordPosition);
        return document.getText(wordRange);
    }

    getCompletionItems (entries: IEntries): CompletionItem[] {
        let completionItems: CompletionItem[] = [];

        for (let name in entries) {
            if (entries.hasOwnProperty(name)) {
                let entry: IEntry = entries[name];
                completionItems.push(this.createCompletionItem(name, entry));
            }
        }

        return completionItems;
    }

    createCompletionItem (name: string, entry: IEntry): CompletionItem {
        let item = new CompletionItem(name);
        item.kind = entry.kind;
        item.detail = entry.signature;
        item.documentation = entry.description;
        item.sortText = '0';
        return item;
    }
}