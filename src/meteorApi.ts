import { CompletionItemKind } from 'vscode';

export interface IEntry { description?: string; signature?: string; kind: CompletionItemKind }
export interface IEntries { [name: string]: IEntry; }

const Meteor: IEntries = {
    isClient: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.isClient',
        description: 'Boolean variable. True if running in client environment.'
    },
    isServer: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.isServer',
        description: 'Boolean variable. True if running in server environment.'
    },
    isCordova: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.isCordova',
        description: 'Boolean variable. True if running in Cordova mobile environment.'
    },
    isDevelopment: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.isDevelopment',
        description: 'Boolean variable. True if running in development environment.'
    },
    isProduction: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.isProduction',
        description: 'Boolean variable. True if running in production environment.'
    },
    startup: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.startup(func)',
        description: 'Run code when a client or a server starts.'
    },
    wrapAsync: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.wrapAsync(func, [context])',
        description: `Wrap a function that takes a callback function as its final parameter. The signature of the callback of the wrapped function should be function(error, result){}. On the server, the wrapped function can be used either synchronously (without passing a callback) or asynchronousl
            (when a callback is passed). On the client, a callback is always required; errors will be logged if there is no callback. If a callback is provided, the environment captured when the original function was called will be restored in the callback.`
    },
    defer: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.defer(func)',
        description: 'Defer execution of a function to run asynchronously in the background (similar to Meteor.setTimeout(func, 0).'
    },
    absoluteUrl: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.absoluteUrl([path], [options])',
        description: 'Generate an absolute URL pointing to the application. The server reads from the ROOT_URL environment variable to determine where it is running. This is taken care of automatically for apps deployed to Galaxy, but must be provided when using meteor build.'
    },
    settings: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.settings',
        description: `Meteor.settings contains deployment-specific configuration options. You can initialize settings by passing the --settings option (which takes the name of a file containing JSON data) to meteor run or meteor deploy. When running your server directly (e.g. from a bundle), you
            instead specify settings by putting the JSON directly into the METEOR_SETTINGS environment variable. If the settings object contains a key named public, then Meteor.settings.public will be available on the client as well as the server. All other properties of Meteor.settings are only
            defined on the server. You can rely on Meteor.settings and Meteor.settings.public being defined objects (not undefined) on both client and server even if there are no settings specified. Changes to Meteor.settings.public at runtime will be picked up by new client connections.`
    },
    release: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.release',
        description: 'Meteor.release is a string containing the name of the release with which the project was built (for example, "1.2.3"). It is undefined if the project was built using a git checkout of Meteor.'
    },
    call: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.call(name, [arg1, arg2...], [asyncCallback])',
        description: 'Invokes a method passing any number of arguments.'
    },
}

const Template: IEntries = {
    instance: {
        kind: CompletionItemKind.Function,
        signature: 'Template.instance()',
        description: 'The template instance corresponding to the current template helper, event handler, callback, or autorun. If there isn\'t one, null.'
    },
}

export const api = {
    Meteor,
    Template
}