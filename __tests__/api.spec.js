const nx = require('@feizheng/next-js-core2');
require('../src/next-multiple-exec');

describe('api.basic test', () => {
  test('nx.multipleExec basic test', function () {
    var re1 = /\${{(.*?)}}/g;

    var str1 = '${{ GITHUB_API_TOKEN }} - ${{ afei }}';
    var str2 = 'abc - 23234';

    expect(
      nx.multipleExec(re1, str1),
    ).toEqual([' GITHUB_API_TOKEN ', ' afei ']);

    expect(
      nx.multipleExec(re1, str2),
    ).toEqual([]);

  });
});
