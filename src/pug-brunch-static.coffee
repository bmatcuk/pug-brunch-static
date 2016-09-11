pug = require 'pug'
_ =
  merge: require 'lodash.merge'

class PugBrunchStatic
  constructor: (@config) ->
    if @config?.fileMatch
      @handles = @config.fileMatch
      delete @config.fileMatch
    if @config?.fileTransform
      @transformPath = @config.fileTransform
      delete @config.fileTransform

  handles: /\.static\.pug$/

  transformPath: (filename) ->
    filename.replace /\.static\.pug$/, '.html'

  compile: (data, filename, options, callback) ->
    opts = _.merge {}, {filename: filename}, @config, options?.pug
    template = pug.compile data, opts
    callback null, do template

module.exports = (config) -> new PugBrunchStatic config

