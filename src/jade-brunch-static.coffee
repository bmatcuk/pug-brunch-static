jade = require 'jade'
_ =
  merge: require 'lodash.merge'

class JadeBrunchStatic
  constructor: (@config) ->
    if @config?.fileMatch
      @handles = @config.fileMatch
      delete @config.fileMatch
    if @config?.fileTransform
      @transformPath = @config.fileTransform
      delete @config.fileTransform

  handles: /\.static\.jade$/

  transformPath: (filename) ->
    filename.replace /\.static\.jade$/, '.html'

  compile: (data, filename, options, callback) ->
    opts = _.merge {}, @config, options?.jade
    template = jade.compile data, opts
    callback null, do template

module.exports = (config) -> new JadeBrunchStatic config

