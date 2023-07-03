import getWebGLContext from '../src';

const canvas = document.createElement('canvas');
const glContext = getWebGLContext(canvas);

console.log(glContext);
