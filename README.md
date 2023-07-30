# Web Graphic Library Context

Get the Web Graphic Library context from a canvas.

## Installation

```sh
$ npm install --save @ahmerhh/WebGraphicLibrary-context
```

## Usage

```js
import getGl from '@ahmerhh/WebGraphicLibrary-context';

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

MIT, see [LICENSE.md](https://github.com/ahmerhh/WebGraphicLibrary-context/blob/master/LICENSE.md) for more details.

## Credits

Thanks to the amazing [stackgl](http://stack.gl/) for the inspiration.