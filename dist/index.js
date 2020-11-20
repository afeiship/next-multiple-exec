/*!
 * name: @jswork/next-multiple-exec
 * description: Multiple exec for regexp.
 * homepage: https://github.com/afeiship/next-multiple-exec
 * version: 1.0.0
 * date: 2020-11-20 18:10:03
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = {
    transform: function (inValue) {
      return inValue[1];
    }
  };

  nx.multipleExec = function (inRe, inString, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var results = [];
    var res;
    var getter = function () {
      return inRe.exec(inString) || [, null]
    };

    while (res = getter(), res[1]) {
      results.push(options.transform(res));
    }
    return results
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.multipleExec;
  }
})();
