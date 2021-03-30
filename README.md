# 🚪 gl-backend
This is a proof of concept that explores the possibility of detecting the graphic rendering backend behind the WebGL implementation.

WebGL's browser implementations translates user supplied shaders from GLSL ES version 100 (version 300 for WebGL2), to the host platform's native shading language. As far as I know, currently in production browsers are only targeting Direct3D (via ANGLE), OpenGL and OpenGL ES 2.0.

This proof of concept can be extremely interesting once new backend rendering will be implemented in production by browser's vendors (notably Vulkan and Metal).

This example relies on the WebGL extension [`WEBGL_debug_shaders`](https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_shaders/) which seems enabled by default on many configuration I tried.

The script will output the following, in a small test I did:
```
Mac OS 11 -> OpenGL 4.1
Windows 10 -> Direct3D
Android 10 -> OpenGL ES 3.0
Android 7 -> OpenGL ES 2.0
iOS 14 -> OpenGL ES 2.0
```

[DEMO](https://luruke.github.io/gl-backend/)