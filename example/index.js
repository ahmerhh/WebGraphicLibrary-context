import getWebGLContext from '../src';

const canvas = document.createElement('canvas');
const glContext = getWebGLContext(canvas);

console.log(glContext);

import test from 'tape';
import getWebGLContext from '../src';

test('getWebGLContext - Should return the WebGL context for a canvas', t => {
  t.plan(1);

  const canvas = document.createElement('canvas');
  const glContext = getWebGLContext(canvas);

  t.ok(glContext instanceof WebGLRenderingContext, 'WebGL context returned');
});

test('getWebGLContext - Should return null for non-canvas elements', t => {
  t.plan(1);

  const div = document.createElement('div');
  const glContext = getWebGLContext(div);

  t.equal(glContext, null, 'null returned for non-canvas element');
});

test('getWebGLContext - Should return null for null input', t => {
  t.plan(1);

  const glContext = getWebGLContext(null);

  t.equal(glContext, null, 'null returned for null input');
});

test('getWebGLContext - Should return null for undefined input', t => {
  t.plan(1);

  const glContext = getWebGLContext(undefined);

  t.equal(glContext, null, 'null returned for undefined input');
});
