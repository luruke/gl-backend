# 🚪 gl-backend
This is a proof of concept that explores the possibility of detecting the graphic rendering API behind the browser's WebGL implementation.

WebGL's implementations will, at certain point, translates the users supplied shaders from GLSL ES version 100 (version 300 for WebGL2) to the host platform's native shading language. As far as I know, out in production there are only WebGL implementation targeting Direct3D (via ANGLE), OpenGL and OpenGL ES.

This proof of concept can be extremely interesting once new backend rendering will be implemented (most likely in ANGLE) in production (notably Vulkan and Metal).

This little script relies on the WebGL extension [`WEBGL_debug_shaders`](https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_shaders/) which seems enabled by default on many configuration.

Example of OS -> script output:
```
Mac OS 11 -> OpenGL 4.1
Windows 10 -> Direct3D
Android 10 -> OpenGL ES 3.0
Android 7 -> OpenGL ES 2.0
iOS 14 -> OpenGL ES 2.0
```

[DEMO](https://luruke.github.io/gl-backend/)
