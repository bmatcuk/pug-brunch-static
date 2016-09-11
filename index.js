var PugBrunchStatic, _, pug;

pug = require('pug');

_ = {
  merge: require('lodash.merge')
};

PugBrunchStatic = (function() {
  function PugBrunchStatic(config1) {
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

  PugBrunchStatic.prototype.handles = /\.static\.pug$/;

  PugBrunchStatic.prototype.transformPath = function(filename) {
    return filename.replace(/\.static\.pug$/, '.html');
  };

  PugBrunchStatic.prototype.compile = function(data, filename, options, callback) {
    var opts, template;
    opts = _.merge({}, {
      filename: filename
    }, this.config, options != null ? options.pug : void 0);
    template = pug.compile(data, opts);
    return callback(null, template());
  };

  return PugBrunchStatic;

})();

module.exports = function(config) {
  return new PugBrunchStatic(config);
};

