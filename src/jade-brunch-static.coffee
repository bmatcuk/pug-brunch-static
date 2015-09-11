jade = require 'jade'

class JadeBrunchStatic
  constructor: (@config) ->

  handles: /\.static\.jade$/

  transformPath: (filename) ->
    filename.replace /\.static\.jade$/, '.html'

  compile: (data, filename, callback) ->
    template = jade.compile data, @config
    callback null, do template

module.exports = (config) -> new JadeBrunchStatic config

