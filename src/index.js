  /**
 * Get the WebGL context from a canvas.
 *
 * @param {HTMLCanvasElement} canvas - The canvas element from which to retrieve the WebGL context.
 * @returns {WebGLRenderingContext | null} The WebGL context or null if not available.
 */
function getWebGLContext(canvas) {
  try {
    // Try to get the standard WebGL context first
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return gl;
  } catch (error) {
    // If an error occurs during context creation, return null
    return null;
  }
}

export default getWebGLContext;
