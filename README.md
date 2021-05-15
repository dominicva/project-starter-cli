## Commander docs

## Options

Options are defined with the `.option()` method, also serving as documentation for the options. Each option can have a short flag (single character) and a long name, separated by a comma or space or vertical bar ('|').

The parsed options can be accessed by calling .opts() on a Command object, and are passed to the action handler. Multi-word options such as "--template-engine" are camel-cased, becoming program.opts().templateEngine etc.

Multiple short flags may optionally be combined in a single argument following the dash: boolean flags, followed by a single option taking a value (possibly followed by the value). For example -a -b -p 80 may be written as -ab -p80 or even -abp80.

You can use -- to indicate the end of the options, and any remaining arguments will be used without being interpreted.

By default options on the command line are not positional, and can be specified before or after other arguments.
