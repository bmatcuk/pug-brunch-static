var JadeBrunchStatic, _, jade;

jade = require('jade');

_ = {
  merge: require('lodash.merge')
};

JadeBrunchStatic = (function() {
  function JadeBrunchStatic(config1) {
    var ref, ref1;
    this.config = config1;
    if ((ref = this.config) != null ? ref.fileMatch : void 0) {
      this.handles = this.config.fileMatch;
      delete this.config.fileMatch;
    }
    if ((ref1 = this.config) != null ? ref1.fileTransform : void 0) {
      this.transformPath = this.config.fileTransform;
      delete this.config.fileTransform;
    }
  }

  JadeBrunchStatic.prototype.handles = /\.static\.jade$/;

  JadeBrunchStatic.prototype.transformPath = function(filename) {
    return filename.replace(/\.static\.jade$/, '.html');
  };

  JadeBrunchStatic.prototype.compile = function(data, filename, options, callback) {
    var opts, template;
    opts = _.merge({}, this.config, options != null ? options.jade : void 0);
    template = jade.compile(data, opts);
    return callback(null, template());
  };

  return JadeBrunchStatic;

})();

module.exports = function(config) {
  return new JadeBrunchStatic(config);
};

