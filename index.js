function detectShaderType(str) {
  // GLSL
  const glsl = str.match(/#version (\d+)$/m);

  if (glsl && glsl[1]) {
    // GLSL version to OpenGL
    // https://en.wikipedia.org/wiki/OpenGL_Shading_Language
    const OpenGL = {
      100: "OpenGL ES 2.0",
      300: "OpenGL ES 3.0",
      110: "OpenGL 2.0",
      120: "OpenGL 2.1",
      130: "OpenGL 3.0",
      140: "OpenGL 3.1",
      150: "OpenGL 3.2",
      330: "OpenGL 3.3",
      400: "OpenGL 4.0",
      410: "OpenGL 4.1",
      420: "OpenGL 4.2",
      430: "OpenGL 4.3",
      440: "OpenGL 4.4",
      450: "OpenGL 4.5",
      460: "OpenGL 4.6",
    };

    return OpenGL[glsl[1]];
  }

  return 'OpenGL ES 2.0';
}

function run(context) {
  const canvas = document.createElement("canvas");
  const gl =
    context ||
    canvas.getContext("webgl2") ||
    canvas.getContext("webgl") ||
    canvas.getContext("experimental-webgl");

  const ext = gl.getExtension("WEBGL_debug_shaders");

  if (!ext) {
    console.log("No ext available");
    return;
  }

  const isWebGL2 = gl instanceof WebGL2RenderingContext;
  const shader = gl.createShader(gl.VERTEX_SHADER);

  gl.shaderSource(
    shader,
    `#version ${isWebGL2 ? "300 es" : "100"}
    void main() {
      gl_Position = vec4(__VERSION__, 1.0, 1.0, 1.0);
    }
  `
  );

  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    return console.error("invalid shader", gl.getShaderInfoLog(shader));
  }

  const source = ext.getTranslatedShaderSource(shader);

  return detectShaderType(source);
}

console.log(run());
