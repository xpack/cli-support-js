/*
 * This file is part of the xPack distribution
 *   (http://xpack.github.io).
 * Copyright (c) 2017 Liviu Ionescu.
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

'use strict'
/* eslint valid-jsdoc: "error" */
/* eslint max-len: [ "error", 80, { "ignoreUrls": true } ] */

// ----------------------------------------------------------------------------

/**
 * This is the module entry point, the file that is processed when
 * `require('@ilg/cli-start-options')` is called.
 *
 * For this to work, it must be linked from `package.json` as
 * `"main": "./index.js",`, which is, BTW, the default behaviour.
 *
 * This file does not define the classes itself, but imports them
 * from various implementation files, and re-exports them.
 *
 * To import classes from this module into Node.js applications, use:
 *
 * ```javascript
 * const { CliOptions, CliCommand } =
 *   require('@ilg/cli-start-options')
 * ```
 */

// ----------------------------------------------------------------------------
// Node.js specific export definitions.

// By default, `module.exports = {}`.

module.exports = {
  ...(require('./lib/cli-application.js')),
  ...(require('./lib/cli-command.js')),
  ...(require('./lib/cli-help.js')),
  ...(require('./lib/cli-options.js')),
  ...(require('./lib/cli-error.js')),
  ...(require('./lib/cli-logger.js'))
}

// In ES6, it would be:
// export class CliApplication { ... }
// ...
// import { CliApplication, CliCommand, CliHelp, CliOptions, ... }
// from 'cli-start-options.js'

// ----------------------------------------------------------------------------
