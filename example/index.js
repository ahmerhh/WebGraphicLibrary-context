import getGl from '../src';

const canvas = document.createElement('canvas');
const gl = getGl(canvas);

console.log(gl);