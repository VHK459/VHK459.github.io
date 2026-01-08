precision highp float;

// uniform float matrixSize;
uniform float bias;
uniform vec2 resolution;
uniform sampler2D inputBuffer;

const mat2 bayerMatrix2x2 = mat2(0.0, 2.0, 3.0, 1.0) / 4.0;

const mat4 bayerMatrix4x4 = mat4(
    0.0,  8.0,  2.0, 10.0,
    12.0, 4.0,  14.0, 6.0,
    3.0,  11.0, 1.0, 9.0,
    15.0, 7.0,  13.0, 5.0
);

float getBayerMatrix8x8(int index) {
  if (index == 0) return 0.0/ 64.0; if (index == 1) return 48.0/ 64.0; if (index == 2) return 12.0/ 64.0; if (index == 3) return 60.0/ 64.0; if (index == 4) return 3.0/ 64.0; if (index == 5) return 51.0/ 64.0; if (index == 6) return 15.0/ 64.0; if (index == 7) return 63.0/ 64.0;
  if (index == 8) return 32.0/ 64.0; if (index == 9) return 16.0/ 64.0; if (index == 10) return 44.0/ 64.0; if (index == 11) return 28.0/ 64.0; if (index == 12) return 35.0/ 64.0; if (index == 13) return 19.0/ 64.0; if (index == 14) return 47.0/ 64.0; if (index == 15) return 31.0/ 64.0;
  if (index == 16) return 8.0/ 64.0; if (index == 17) return 56.0/ 64.0; if (index == 18) return 4.0/ 64.0; if (index == 19) return 52.0/ 64.0; if (index == 20) return 11.0/ 64.0; if (index == 21) return 59.0/ 64.0; if (index == 22) return 7.0/ 64.0; if (index == 23) return 55.0/ 64.0;
  if (index == 24) return 40.0/ 64.0; if (index == 25) return 24.0/ 64.0; if (index == 26) return 36.0/ 64.0; if (index == 27) return 20.0/ 64.0; if (index == 28) return 43.0/ 64.0; if (index == 29) return 27.0/ 64.0; if (index == 30) return 39.0/ 64.0; if (index == 31) return 23.0/ 64.0;
  if (index == 32) return 2.0/ 64.0; if (index == 33) return 50.0/ 64.0; if (index == 34) return 14.0/ 64.0; if (index == 35) return 62.0/ 64.0; if (index == 36) return 1.0/ 64.0; if (index == 37) return 49.0/ 64.0; if (index == 38) return 13.0/ 64.0; if (index == 39) return 61.0/ 64.0;
  if (index == 40) return 34.0/ 64.0; if (index == 41) return 18.0/ 64.0; if (index == 42) return 46.0/ 64.0; if (index == 43) return 30.0/ 64.0; if (index == 44) return 33.0/ 64.0; if (index == 45) return 17.0/ 64.0; if (index == 46) return 45.0/ 64.0; if (index == 47) return 29.0/ 64.0;
  if (index == 48) return 10.0/ 64.0; if (index == 49) return 58.0/ 64.0; if (index == 50) return 6.0/ 64.0; if (index == 51) return 54.0/ 64.0; if (index == 52) return 9.0/ 64.0; if (index == 53) return 57.0/ 64.0; if (index == 54) return 5.0/ 64.0; if (index == 55) return 53.0/ 64.0;
  if (index == 56) return 42.0/ 64.0; if (index == 57) return 26.0/ 64.0; if (index == 58) return 38.0/ 64.0; if (index == 59) return 22.0/ 64.0; if (index == 60) return 41.0/ 64.0; if (index == 61) return 25.0/ 64.0; if (index == 62) return 37.0/ 64.0; if (index == 63) return 21.0 / 64.0;
  return 0.0;
}

vec3 orderedDither(vec2 uv, float lum) {
  vec3 color = vec3(0.0);

  float threshold = 0.0;


  
    int x = int(mod(uv.x * resolution.x, 8.0));
    int y = int(mod(uv.y * resolution.y, 8.0));
    threshold = getBayerMatrix8x8(y * 8 + x);
  

  if (lum < threshold + bias) {
      color = vec3(0.0);
  } else {
      color = vec3(1.0); 
  }

  return color;
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec4 color = texture2D(inputBuffer, uv);

  float lum = dot(vec3(0.2126, 0.7152, 0.0722), color.rgb);
  color.rgb = orderedDither(uv, lum);

  outputColor = vec4(0.2126, 0.7152, 0.0722, 1.0);
}