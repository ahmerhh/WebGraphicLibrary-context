import test from 'tape';
import getWebGLContext from '../src';

test('getWebGLContext - Should return the WebGL context for a canvas', t => {
  t.plan(1);

  const canvas = document.createElement('canvas');
  const gl = getWebGLContext(canvas);

  t.ok(gl instanceof WebGLRenderingContext, 'WebGL context returned');
});

test('getWebGLContext - Should return null for non-canvas elements', t => {
  t.plan(1);

  const div = document.createElement('div');
  const gl = getWebGLContext(div);

  t.equal(gl, null, 'null returned');
});

test('getWebGLContext - Should return null for null input', t => {
  t.plan(1);

  const gl = getWebGLContext(null);

  t.equal(gl, null, 'null returned');
});

test('getWebGLContext - Should return null for undefined input', t => {
  t.plan(1);

  const gl = getWebGLContext(undefined);

  t.equal(gl, null, 'null returned');
});
