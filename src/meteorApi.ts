import { CompletionItemKind } from 'vscode';

export interface IEntry { description?: string; signature?: string; kind: CompletionItemKind }
export interface IEntries { [name: string]: IEntry; }

const Meteor: IEntries = {

    // Core

    isClient: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.isClient',
        description: `Boolean variable. True if running in client environment.`
    },
    isServer: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.isServer',
        description: `Boolean variable. True if running in server environment.`
    },
    isCordova: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.isCordova',
        description: `Boolean variable. True if running in Cordova mobile environment.`
    },
    isDevelopment: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.isDevelopment',
        description: `Boolean variable. True if running in development environment.`
    },
    isProduction: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.isProduction',
        description: `Boolean variable. True if running in production environment.`
    },
    startup: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.startup(func)',
        description: `Run code when a client or a server starts.`
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
        description: `Defer execution of a function to run asynchronously in the background (similar to Meteor.setTimeout(func, 0).`
    },
    absoluteUrl: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.absoluteUrl([path], [options])',
        description: `Generate an absolute URL pointing to the application. The server reads from the ROOT_URL environment variable to determine where it is running. This is taken care of automatically for apps deployed to Galaxy, but must be provided when using meteor build.`
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
        description: `Meteor.release is a string containing the name of the release with which the project was built (for example, "1.2.3"). It is undefined if the project was built using a git checkout of Meteor.`
    },

    // Publish and subscribe

    publish: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.publish(name, func)',
        description: `Publish a record set.`
    },
    subscribe: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.subscribe(name, [arg1, arg2...], [callbacks])',
        description: `Subscribe to a record set. Returns a handle that provides stop() and ready() methods.`
    },

    // Methods

    methods: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.methods(methods)',
        description: `Defines functions that can be invoked over the network by clients.`
    },
    Error: {
        kind: CompletionItemKind.Constructor,
        signature: 'new Meteor.Error(error, [reason], [details])',
        description: `This class represents a symbolic error thrown by a method.`
    },
    call: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.call(name, [arg1, arg2...], [asyncCallback])',
        description: `Invokes a method passing any number of arguments.`
    },
    apply: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.apply(name, args, [options], [asyncCallback])',
        description: `Invoke a method passing an array of arguments.`
    },

    // Server Connections

    status: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.status()',
        description: `Get the current connection status. A reactive data source.`
    },
    reconnect: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.reconnect()',
        description: `Force an immediate reconnection attempt if the client is not connected to the server.

            This method does nothing if the client is already connected.`
    },
    disconnect: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.disconnect()',
        description: `Disconnect the client from the server.`
    },
    onConnection: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.onConnection(callback)',
        description: `Register a callback to be called when a new DDP connection is made to the server.`
    },

    // Accounts

    user: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.user()',
        description: `Get the current user record, or null if no user is logged in. A reactive data source.`
    },
    userId: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.userId()',
        description: `Get the current user id, or null if no user is logged in. A reactive data source.`
    },
    users: {
        kind: CompletionItemKind.Variable,
        signature: 'Meteor.users',
        description: `A Mongo.Collection containing user documents.`
    },
    loggingIn: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.loggingIn()',
        description: `True if a login method (such as Meteor.loginWithPassword, Meteor.loginWithFacebook, or Accounts.createUser) is currently in progress. A reactive data source.`
    },
    logout: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.logout([callback])',
        description: `Log the user out.`
    },
    logoutOtherClients: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.logoutOtherClients([callback])',
        description: `Log out other clients logged in as the current user, but does not log out the client that calls this function.`
    },
    loginWithPassword: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.loginWithPassword(user, password, [callback])',
        description: `Log the user in with a password.`
    },
    loginWithMeteorDeveloperAccount: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.loginWith<ExternalService>([options], [callback])',
        description: `Log the user in using an external service.`
    },
    loginWithFacebook: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.loginWith<ExternalService>([options], [callback])',
        description: `Log the user in using an external service.`
    },
    loginWithGithub: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.loginWith<ExternalService>([options], [callback])',
        description: `Log the user in using an external service.`
    },
    loginWithGoogle: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.loginWith<ExternalService>([options], [callback])',
        description: `Log the user in using an external service.`
    },
    loginWithMeetup: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.loginWith<ExternalService>([options], [callback])',
        description: `Log the user in using an external service.`
    },
    loginWithTwitter: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.loginWith<ExternalService>([options], [callback])',
        description: `Log the user in using an external service.`
    },
    loginWithWeibo: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.loginWith<ExternalService>([options], [callback])',
        description: `Log the user in using an external service.`
    },

    // Timers

    setTimeout: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.setTimeout(func, delay)',
        description: `Call a function in the future after waiting for a specified delay.`
    },
    setInterval: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.setInterval(func, delay)',
        description: `Call a function repeatedly, with a time delay between calls.`
    },
    clearTimeout: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.clearTimeout(id)',
        description: `Cancel a function call scheduled by Meteor.setTimeout.`
    },
    clearInterval: {
        kind: CompletionItemKind.Function,
        signature: 'Meteor.clearInterval(id)',
        description: `Cancel a repeating function call scheduled by Meteor.setInterval.`
    },
}

// Publish and subscribe
const DDPRateLimiter: IEntries = {
    addRule: {
        kind: CompletionItemKind.Function,
        signature: 'DDPRateLimiter.addRule(matcher, numRequests, timeInterval)',
        description: `Add a rule that matches against a stream of events describing method or subscription attempts. Each event is an object with the following properties:

            - type: Either "method" or "subscription"
            - name: The name of the method or subscription being called
            - userId: The user ID attempting the method or subscription
            - connectionId: A string representing the user's DDP connection
            - clientAddress: The IP address of the user

            Returns unique ruleId that can be passed to removeRule.`
    },
    removeRule: {
        kind: CompletionItemKind.Function,
        signature: 'DDPRateLimiter.removeRule(id)',
        description: `Removes the specified rule from the rate limiter. If rule had hit a rate limit, that limit is removed as well.`
    },
    setErrorMessage: {
        kind: CompletionItemKind.Function,
        signature: 'DDPRateLimiter.setErrorMessage(message)',
        description: `Set error message text when method or subscription rate limit exceeded.`
    },
}

// Check
const Match: IEntries = {
    test: {
        kind: CompletionItemKind.Function,
        signature: 'Match.test(value, pattern)',
        description: `Returns true if the value matches the pattern.`
    },
    Any: {
        kind: CompletionItemKind.Enum,
        signature: 'Match.Any',
        description: `Matches any value.`
    },
    Integer: {
        kind: CompletionItemKind.Enum,
        signature: 'Match.Integer',
        description: `Matches a signed 32-bit integer. Doesn’t match Infinity, -Infinity, or NaN.`
    },
    ObjectIncluding: {
        kind: CompletionItemKind.Function,
        signature: 'Match.ObjectIncluding({key1: pattern1, key2: pattern2, …})',
        description: `Matches an Object with the given keys; the value may also have other keys with arbitrary values.`
    },
    Maybe: {
        kind: CompletionItemKind.Function,
        signature: 'Match.Maybe(pattern)',
        description: `Matches either undefined, null, or pattern. If used in an object, matches only if the key is not set as opposed to the value being set to undefined or null.
            This set of conditions was chosen because undefined arguments to Meteor Methods are converted to null when sent over the wire.`
    },
    Optional: {
        kind: CompletionItemKind.Function,
        signature: 'Match.Optional(pattern)',
        description: `Behaves like Match.Maybe except it doesn’t accept null. If used in an object, the behavior is identical to Match.Maybe.`
    },
    OneOf: {
        kind: CompletionItemKind.Function,
        signature: 'Match.OneOf(pattern1, pattern2, ...)',
        description: `Matches any value that matches at least one of the provided patterns.`
    },
    Where: {
        kind: CompletionItemKind.Function,
        signature: 'Match.Where(condition)',
        description: `Calls the function condition with the value as the argument. If condition returns true, this matches. If condition throws a Match.Error or returns false, this fails. If condition throws any other error, that error is thrown from the call to check or Match.test.`
    },
}

const DDP: IEntries = {

    // Server Connections

    connect: {
        kind: CompletionItemKind.Function,
        signature: 'Template.connect(url)',
        description: `Connect to the server of a different Meteor application to subscribe to its document sets and invoke its remote methods.`
    },
}

const Mongo: IEntries = {

    // Collections

    Collection: {
        kind: CompletionItemKind.Constructor,
        signature: 'new Mongo.Collection(name, [options])',
        description: `Constructor for a Collection.`
    },
    ObjectID: {
        kind: CompletionItemKind.Constructor,
        signature: 'new Mongo.ObjectID([hexString])',
        description: `Create a Mongo-style ObjectID. If you don't specify a hexString, the ObjectID will generated randomly (not using MongoDB's ID construction rules).`
    },
}

const Session: IEntries = {

    // Session

    set: {
        kind: CompletionItemKind.Function,
        signature: 'Session.set(key, value)',
        description: `Set a variable in the session. Notify any listeners that the value has changed (eg: redraw templates, and rerun any Tracker.autorun computations, that called Session.get on this key.)`
    },
    setDefault: {
        kind: CompletionItemKind.Function,
        signature: 'Session.setDefault(key, value)',
        description: `Set a variable in the session if it hasn't been set before. Otherwise works exactly the same as Session.set.`
    },
    get: {
        kind: CompletionItemKind.Function,
        signature: 'Session.get(key)',
        description: `Get the value of a session variable. If inside a reactive computation, invalidate the computation the next time the value of the variable is changed by Session.set.
            This returns a clone of the session value, so if it's an object or an array, mutating the returned value has no effect on the value stored in the session.`
    },
    equals: {
        kind: CompletionItemKind.Function,
        signature: 'Session.equals(key, value)',
        description: `Test if a session variable is equal to a value. If inside a reactive computation, invalidate the computation the next time the variable changes to or from the value.`
    },
}

const Accounts: IEntries = {

    // Accounts

    'ui.config': {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.ui.config(options)',
        description: `Configure the behavior of {{> loginButtons}}.`
    },

    // Passwords

    createUser: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.createUser(options, [callback])',
        description: `Create a new user.`
    },
    setUsername: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.setUsername(userId, newUsername)',
        description: `Change a user's username. Use this instead of updating the database directly. The operation will fail if there is an existing user with a username only differing in case.`
    },
    addEmail: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.addEmail(userId, newEmail, [verified])',
        description: `Add an email address for a user. Use this instead of directly updating the database. The operation will fail if there is a different user with an email only differing in case. If the specified user has an existing email only differing in case however, we replace it.`
    },
    removeEmail: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.removeEmail(userId, email)',
        description: `Remove an email address for a user. Use this instead of updating the database directly.`
    },
    verifyEmail: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.verifyEmail(token, [callback])',
        description: `Marks the user's email address as verified. Logs the user in afterwards.`
    },
    findUserByUsername: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.findUserByUsername(username)',
        description: `Finds the user with the specified username. First tries to match username case sensitively; if that fails, it tries case insensitively; but if more than one user matches the case insensitive search, it returns null.`
    },
    findUserByEmail: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.findUserByEmail(email)',
        description: `Finds the user with the specified email. First tries to match email case sensitively; if that fails, it tries case insensitively; but if more than one user matches the case insensitive search, it returns null.`
    },
    changePassword: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.changePassword(oldPassword, newPassword, [callback])',
        description: `Change the current user's password. Must be logged in.`
    },
    forgotPassword: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.forgotPassword(options, [callback])',
        description: `Request a forgot password email.`
    },
    resetPassword: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.resetPassword(token, newPassword, [callback])',
        description: `Reset the password for a user using a token received in email. Logs the user in afterwards.`
    },
    setPassword: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.setPassword(userId, newPassword, [options])',
        description: `Forcibly change the password for a user.`
    },
    sendResetPasswordEmail: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.sendResetPasswordEmail(userId, [email])',
        description: `Send an email with a link the user can use to reset their password.`
    },
    sendEnrollmentEmail: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.sendEnrollmentEmail(userId, [email])',
        description: `Send an email with a link the user can use to set their initial password.`
    },
    sendVerificationEmail: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.sendVerificationEmail(userId, [email])',
        description: `Send an email with a link the user can use verify their email address.`
    },
    onResetPasswordLink: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.onResetPasswordLink(callback)',
        description: `Register a function to call when a reset password link is clicked in an email sent by Accounts.sendResetPasswordEmail. This function should be called in top-level code, not inside Meteor.startup().`
    },
    onEnrollmentLink: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.onEnrollmentLink(callback)',
        description: `Register a function to call when an account enrollment link is clicked in an email sent by Accounts.sendEnrollmentEmail. This function should be called in top-level code, not inside Meteor.startup().`
    },
    onEmailVerificationLink: {
        kind: CompletionItemKind.Function,
        signature: 'Accounts.onEmailVerificationLink(callback)',
        description: `Register a function to call when an email verification link is clicked in an email sent by Accounts.sendVerificationEmail. This function should be called in top-level code, not inside Meteor.startup().`
    },
    emailTemplates: {
        kind: CompletionItemKind.Variable,
        signature: 'Accounts.emailTemplates',
        description: `Send an email with a link the user can use to reset their password.`
    },
}

const Template: IEntries = {

    // Templates

    registerHelper: {
        kind: CompletionItemKind.Function,
        signature: 'Template.registerHelper(name, function)',
        description: `Defines a helper function which can be used from all templates.`
    },
    instance: {
        kind: CompletionItemKind.Function,
        signature: 'Template.instance()',
        description: `The template instance corresponding to the current template helper, event handler, callback, or autorun. If there isn't one, null.`
    },
    currentData: {
        kind: CompletionItemKind.Function,
        signature: 'Template.currentData()',
        description: `- Inside an onCreated, onRendered, or onDestroyed callback, returns the data context of the template.
            - Inside an event handler, returns the data context of the template on which this event handler was defined.
            - Inside a helper, returns the data context of the DOM node where the helper was used.

            Establishes a reactive dependency on the result.`
    },
    parentData: {
        kind: CompletionItemKind.Function,
        signature: 'Template.parentData([numLevels])',
        description: `Accesses other data contexts that enclose the current data context.`
    },
    body: {
        kind: CompletionItemKind.Function,
        signature: 'Template.body',
        description: `The template object representing your <body> tag.`
    },
}

const Blaze: IEntries = {

    // Templates

    render: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.render(templateOrView, parentNode, [nextNode], [parentView])',
        description: `Renders a template or View to DOM nodes and inserts it into the DOM, returning a rendered View which can be passed to Blaze.remove.`
    },
    renderWithData: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.renderWithData(templateOrView, data, parentNode, [nextNode], [parentView])',
        description: `Renders a template or View to DOM nodes with a data context. Otherwise identical to Blaze.render.`
    },
    remove: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.remove(renderedView)',
        description: `Removes a rendered View from the DOM, stopping all reactive updates and event listeners on it. Also destroys the Blaze.Template instance associated with the view.`
    },
    getData: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.getData([elementOrView])',
        description: `Returns the current data context, or the data context that was used when rendering a particular DOM element or View from a Meteor template.`
    },
    toHTML: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.toHTML(templateOrView)',
        description: `Renders a template or View to a string of HTML.`
    },
    toHTMLWithData: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.toHTMLWithData(templateOrView, data)',
        description: `Renders a template or View to HTML with a data context. Otherwise identical to Blaze.toHTML.`
    },
    View: {
        kind: CompletionItemKind.Constructor,
        signature: 'new Blaze.View([name], renderFunction)',
        description: `Constructor for a View, which represents a reactive region of DOM.`
    },
    currentView: {
        kind: CompletionItemKind.Variable,
        signature: 'Blaze.currentView',
        description: `The View corresponding to the current template helper, event handler, callback, or autorun. If there isn't one, null.`
    },
    getView: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.getView([element])',
        description: `Gets either the current View, or the View enclosing the given DOM element.`
    },
    With: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.With(data, contentFunc)',
        description: `Constructs a View that renders content with a data context.`
    },
    If: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.If(conditionFunc, contentFunc, [elseFunc])',
        description: `Constructs a View that renders content conditionally.`
    },
    Unless: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.Unless(conditionFunc, contentFunc, [elseFunc])',
        description: `An inverted Blaze.If.`
    },
    Each: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.Each(argFunc, contentFunc, [elseFunc])',
        description: `Constructs a View that renders contentFunc for each item in a sequence.`
    },
    Template: {
        kind: CompletionItemKind.Constructor,
        signature: 'new Blaze.Template([viewName], renderFunction)',
        description: `Constructor for a Template, which is used to construct Views with particular name and content.`
    },
    isTemplate: {
        kind: CompletionItemKind.Function,
        signature: 'Blaze.isTemplate(value)',
        description: `Returns true if value is a template object like Template.myTemplate.`
    },
}

const Tracker: IEntries = {

    // Tracker

    autorun: {
        kind: CompletionItemKind.Function,
        signature: 'Tracker.autorun(runFunc, [options])',
        description: `Run a function now and rerun it later whenever its dependencies change. Returns a Computation object that can be used to stop or observe the rerunning.`
    },
    flush: {
        kind: CompletionItemKind.Function,
        signature: 'Tracker.flush()',
        description: `Process all reactive updates immediately and ensure that all invalidated computations are rerun.`
    },
    nonreactive: {
        kind: CompletionItemKind.Function,
        signature: 'Tracker.nonreactive(func)',
        description: `Run a function without tracking dependencies.`
    },
    active: {
        kind: CompletionItemKind.Variable,
        signature: 'Tracker.active',
        description: `True if there is a current computation, meaning that dependencies on reactive data sources will be tracked and potentially cause the current computation to be rerun.`
    },
    currentComputation: {
        kind: CompletionItemKind.Variable,
        signature: 'Tracker.currentComputation',
        description: `The current computation, or null if there isn't one. The current computation is the Tracker.Computation object created by the innermost active call to Tracker.autorun, and it's the computation that gains dependencies when reactive data sources are accessed.`
    },
    onInvalidate: {
        kind: CompletionItemKind.Function,
        signature: 'Tracker.onInvalidate(callback)',
        description: `Registers a new onInvalidate callback on the current computation (which must exist), to be called immediately when the current computation is invalidated or stopped.`
    },
    afterFlush: {
        kind: CompletionItemKind.Function,
        signature: 'Tracker.afterFlush(callback)',
        description: `Schedules a function to be called during the next flush, or later in the current flush if one is in progress, after all invalidated computations have been rerun. The function will be run once and not on subsequent flushes unless afterFlush is called again.`
    },
    Dependency: {
        kind: CompletionItemKind.Function,
        signature: 'new Tracker.Dependency',
    },
}

const EJSON: IEntries = {

    // EJSON

    parse: {
        kind: CompletionItemKind.Function,
        signature: 'EJSON.parse(str)',
        description: `Parse a string into an EJSON value. Throws an error if the string is not valid EJSON.`
    },
    stringify: {
        kind: CompletionItemKind.Function,
        signature: 'EJSON.stringify(val, [options])',
        description: `Serialize a value to a string.

            For EJSON values, the serialization fully represents the value. For non-EJSON values, serializes the same way as JSON.stringify.`
    },
    fromJSONValue: {
        kind: CompletionItemKind.Function,
        signature: 'EJSON.fromJSONValue(val)',
        description: `Deserialize an EJSON value from its plain JSON representation.`
    },
    toJSONValue: {
        kind: CompletionItemKind.Function,
        signature: 'EJSON.toJSONValue(val)',
        description: `Serialize an EJSON-compatible value into its plain JSON representation.`
    },
    equals: {
        kind: CompletionItemKind.Function,
        signature: 'EJSON.equals(a, b, [options])',
        description: `Return true if a and b are equal to each other. Return false otherwise. Uses the equals method on a if present, otherwise performs a deep comparison.`
    },
    clone: {
        kind: CompletionItemKind.Function,
        signature: 'EJSON.clone(val)',
        description: `Return a deep copy of val.`
    },
    newBinary: {
        kind: CompletionItemKind.Function,
        signature: 'EJSON.newBinary',
        description: `Allocate a new buffer of binary data that EJSON can serialize.`
    },
    isBinary: {
        kind: CompletionItemKind.Function,
        signature: 'EJSON.isBinary(x)',
        description: `Returns true if x is a buffer of binary data, as returned from EJSON.newBinary.`
    },
    addType: {
        kind: CompletionItemKind.Function,
        signature: 'EJSON.addType(name, factory)',
        description: `Add a custom datatype to EJSON.`
    },
}

const HTTP: IEntries = {

    // HTTP

    call: {
        kind: CompletionItemKind.Function,
        signature: 'HTTP.call(method, url, [options], [asyncCallback])',
        description: `Perform an outbound HTTP request.`
    },
    get: {
        kind: CompletionItemKind.Function,
        signature: 'HTTP.get(url, [callOptions], [asyncCallback])',
        description: `Send an HTTP GET request. Equivalent to calling HTTP.call with "GET" as the first argument.`
    },
    post: {
        kind: CompletionItemKind.Function,
        signature: 'HTTP.post(url, [callOptions], [asyncCallback])',
        description: `Send an HTTP POST request. Equivalent to calling HTTP.call with "POST" as the first argument.`
    },
    put: {
        kind: CompletionItemKind.Function,
        signature: 'HTTP.put(url, [callOptions], [asyncCallback])',
        description: `Send an HTTP PUT request. Equivalent to calling HTTP.call with "PUT" as the first argument.`
    },
    del: {
        kind: CompletionItemKind.Function,
        signature: 'HTTP.del(url, [callOptions], [asyncCallback])',
        description: `Send an HTTP DELETE request. Equivalent to calling HTTP.call with "DELETE" as the first argument. (Named del to avoid conflict with the Javascript keyword delete)`
    },
}

const Email: IEntries = {

    // Email

    send: {
        kind: CompletionItemKind.Function,
        signature: 'Email.send(options)',
        description: `Send an email. Throws an Error on failure to contact mail server or if mail server returns an error. All fields should match RFC5322 specification.

            If the MAIL_URL environment variable is set, actually sends the email. Otherwise, prints the contents of the email to standard out.

            Note that this package is based on mailcomposer version 0.1.15, so make sure to refer to the documentation for that version if using the attachments or mailComposer options. Click here to read the mailcomposer 0.1.15 docs.`
    },
}

const Assets: IEntries = {

    // Assets

    getText: {
        kind: CompletionItemKind.Function,
        signature: 'Assets.getText(assetPath, [asyncCallback])',
        description: `Retrieve the contents of the static server asset as a UTF8-encoded string.`
    },
    getBinary: {
        kind: CompletionItemKind.Function,
        signature: 'Assets.getBinary(assetPath, [asyncCallback])',
        description: `Retrieve the contents of the static server asset as an EJSON Binary.`
    },
    absoluteFilePath: {
        kind: CompletionItemKind.Function,
        signature: 'Assets.absoluteFilePath(assetPath)',
        description: `Get the absolute path to the static server asset. Note that assets are read-only.`
    },
}

const App: IEntries = {

    // Mobile Configuration

    info: {
        kind: CompletionItemKind.Function,
        signature: 'App.info(options)',
        description: `Set your mobile app's core configuration information.`
    },
    setPreference: {
        kind: CompletionItemKind.Function,
        signature: 'App.setPreference(name, value, [platform])',
        description: `Add a preference for your build as described in the Cordova documentation.`
    },
    accessRule: {
        kind: CompletionItemKind.Function,
        signature: 'App.accessRule(pattern, [options])',
        description: `Set a new access rule based on origin domain for your app. By default your application has a limited list of servers it can contact. Use this method to extend this list.`
    },
    configurePlugin: {
        kind: CompletionItemKind.Function,
        signature: 'App.configurePlugin(id, config)',
        description: `Set the build-time configuration for a Cordova plugin.`
    },
    icons: {
        kind: CompletionItemKind.Function,
        signature: 'App.icons(icons)',
        description: `Set the icons for your mobile app.`
    },
    launchScreens: {
        kind: CompletionItemKind.Function,
        signature: 'App.launchScreens(launchScreens)',
        description: `Set the launch screen images for your mobile app.`
    },
}

export const api = {
    Meteor,
    DDPRateLimiter,
    Match,
    DDP,
    Mongo,
    Session,
    Accounts,
    Template,
    Blaze,
    Tracker,
    EJSON,
    HTTP,
    Email,
    Assets,
    App,
}