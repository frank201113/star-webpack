
const assert = require('assert');

describe('builder-webpack test case', () => {
  const baseConfig = require('../../lib/webpack.base.js')
  console.log(baseConfig);
  it('entry', () => {
    assert.equal(baseConfig.entry.index.indexOf('/star-webpack/test/smoke/template/src/index/index.js') > -1, true);
    assert.equal(baseConfig.entry.search.indexOf('/star-webpack/test/smoke/template/src/search/index.js') > -1, true);
  });
});