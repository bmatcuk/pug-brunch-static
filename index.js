var JadeBrunchStatic, jade;

jade = require('jade');

JadeBrunchStatic = (function() {
  function JadeBrunchStatic(config1) {
    this.config = config1;
  }

  JadeBrunchStatic.prototype.handles = /\.static\.jade$/;

  JadeBrunchStatic.prototype.transformPath = function(filename) {
    return filename.replace(/\.static\.jade$/, '.html');
  };

  JadeBrunchStatic.prototype.compile = function(data, filename, callback) {
    var template;
    template = jade.compile(data, this.config);
    return callback(null, template());
  };

  return JadeBrunchStatic;

})();

module.exports = function(config) {
  return new JadeBrunchStatic(config);
};

