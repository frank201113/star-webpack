
const assert = require('assert');

describe('builder-webpack test case', () => {
  const baseConfig = require('../../lib/webpack.base.js')
  console.log(baseConfig);
  it('entry', () => {
    assert.equal(baseConfig.entry.index, 'D:/work/code/demo/unit-demo/builder-webpack/test/smoke/template/src/index/index.js');
    assert.equal(baseConfig.entry.search, 'D:/work/code/demo/unit-demo/builder-webpack/test/smoke/template/src/search/index.js');
  });
});