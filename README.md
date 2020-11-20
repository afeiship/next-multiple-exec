# next-multiple-exec
> Multiple exec for regexp.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-multiple-exec
```

## usage
```js
import '@feizheng/next-multiple-exec';

const re = /\${{(.*?)}}/g;
const str = '${{ GITHUB_API_TOKEN }} - ${{ afei }}';

nx.multipleExec(re, str);     // [ ' GITHUB_API_TOKEN ', ' afei ' ]
```

## resources
- https://stackoverflow.com/questions/7954022/javascript-regular-expression-multiple-match

## license
Code released under [the MIT license](https://github.com/afeiship/next-multiple-exec/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-multiple-exec
[version-url]: https://npmjs.org/package/@jswork/next-multiple-exec

[license-image]: https://img.shields.io/npm/l/@jswork/next-multiple-exec
[license-url]: https://github.com/afeiship/next-multiple-exec/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-multiple-exec
[size-url]: https://github.com/afeiship/next-multiple-exec/blob/master/dist/next-multiple-exec.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-multiple-exec
[download-url]: https://www.npmjs.com/package/@jswork/next-multiple-exec
