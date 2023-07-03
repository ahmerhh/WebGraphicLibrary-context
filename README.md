# GL Context

Get the WebGL context from a canvas.

## Installation

```sh
$ npm install --save @ahmerhh/WebGraphicLibrary_Context
```

## Usage

```js
import getGl from '@ahmerhh/WebGraphicLibrary_Context';

const canvas = document.createElement('canvas');
const gl = getWebGLContext(canvas);

if(gl == null) {
  // WebGraphicLibrary is not supported
}
```

## API

#### `gl = getWebGLContext(canvas)`

Returns the `WebGraphicLibrary` context from the `canvas`. If it fails, `gl` is `null`.

## License

MIT, see [LICENSE.md](https://github.com/ahmerhh/WebGraphicLibrary_Context/blob/master/LICENSE.md) for more details.

## Credits

Thanks to the amazing [stackgl](http://stack.gl/) for the inspiration.