/**
 * @function getWebGLContext
 * @param {HTMLCanvasElement} canvas
 * @returns {WebGLRenderingContext}
 */
export default function getWebGLContext(canvas) {
    let gl;
  
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    }
    catch(err) {
      gl = null;
    }
  
    return gl;
  }
  