import test from 'tape';
import getWebGLContext from '../src';

test('should return the Web Graphic Library - context', t => {
  t.plan(1);

  const canvas = document.createElement('canvas');
  const gl = getWebGLContext(canvas);

  t.ok(gl instanceof WebGLRenderingContext, 'Web Graphic Library context returned');
});

test('Return null if !=', t => {
  t.plan(1);

  const div = document.createElement('div');
  const gl = getWebGLContext(div);

  t.ok(gl === null, 'null returned');
});
