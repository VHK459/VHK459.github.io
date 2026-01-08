precision lowp float;

uniform sampler2D tDiffuse;
uniform vec2 uResolution;

// --- 6 Colors Palette ---
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uColor5;
uniform vec3 uColor6;

varying vec2 vUv;

// -------- Palette lookup (branchless) --------
vec3 palette(float i) {
    i = clamp(i, 0.0, 5.0);

    vec3 c = uColor1;
    c = mix(c, uColor2, step(1.0, i));
    c = mix(c, uColor3, step(2.0, i));
    c = mix(c, uColor4, step(3.0, i));
    c = mix(c, uColor5, step(4.0, i));
    c = mix(c, uColor6, step(5.0, i));

    return c;
}

// -------- 4x4 Bayer matrix (branchless) --------
float bayer4x4(vec2 p) {
    vec2 f = mod(p, 4.0);
    int x = int(f.x);
    int y = int(f.y);

    // Flattened Bayer matrix (row-major)
    float m[16];
    m[0]  = 0.0625;  m[1]  = 0.5625;  m[2]  = 0.1875;  m[3]  = 0.6875;
    m[4]  = 0.8125;  m[5]  = 0.3125;  m[6]  = 0.9375;  m[7]  = 0.4375;
    m[8]  = 0.25;    m[9]  = 0.75;    m[10] = 0.125;  m[11] = 0.625;
    m[12] = 1.0;     m[13] = 0.5;     m[14] = 0.875;  m[15] = 0.375;

    return m[x + y * 4];
}

void main() {
    vec3 color = texture2D(tDiffuse, vUv).rgb;

    // Luminance
    float gray = dot(color, vec3(0.299, 0.587, 0.114));

    // Scale to palette range
    float scaled = gray * 5.0;

    // Bayer threshold
    float threshold = bayer4x4(gl_FragCoord.xy);

    // Dithered quantization
    float index = floor(scaled + step(threshold, fract(scaled)));

    // Output
    gl_FragColor = vec4(palette(index), 1.0);
}
