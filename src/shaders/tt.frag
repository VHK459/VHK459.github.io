precision mediump float;
uniform sampler2D tDiffuse;
uniform vec2 uResolution;

// --- 5 Colors Palette ---
uniform vec3 uColor1; // Darkest
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform vec3 uColor5; 
uniform vec3 uColor6; // Brightest

varying vec2 vUv;

// Helper function to select color based on index (0 to 4)
vec4 getPaletteColor(float index) {
    if (index <= 0.0) return vec4(uColor1, 1.0);
    if (index <= 1.0) return vec4(uColor2, 1.0);
    if (index <= 2.0) return vec4(uColor3, 1.0);
    if (index <= 3.0) return vec4(uColor4, 1.0);
    if (index <= 4.0) return vec4(uColor5, 1.0);
    return vec4(uColor6, 1.0);
}

// Returns the threshold value (0.0 - 1.0) from the Bayer Matrix
float getBayerLimit(vec2 position) {
    int x = int(mod(position.x, 4.0));
    int y = int(mod(position.y, 4.0));
    int index = x + y * 4;
    float limit = 0.0;

    if (index == 0) limit = 0.0625;
    else if (index == 1) limit = 0.5625;
    else if (index == 2) limit = 0.1875;
    else if (index == 3) limit = 0.6875;
    else if (index == 4) limit = 0.8125;
    else if (index == 5) limit = 0.3125;
    else if (index == 6) limit = 0.9375;
    else if (index == 7) limit = 0.4375;
    else if (index == 8) limit = 0.25;
    else if (index == 9) limit = 0.75;
    else if (index == 10) limit = 0.125;
    else if (index == 11) limit = 0.625;
    else if (index == 12) limit = 1.0;
    else if (index == 13) limit = 0.5;
    else if (index == 14) limit = 0.875;
    else if (index == 15) limit = 0.375;

    return limit;
}

void main() {
    vec4 color = texture2D(tDiffuse, vUv);

    // 1. Calculate Luminance
    float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));

    // 2. Scale Grayscale to 0..4 range (since we have 5 colors)
    // For 5 colors, we have 4 intervals between them.
    float scaled = gray * 5.0;

    // 3. Get Dither Threshold
    vec2 pixelCoord = gl_FragCoord.xy;
    float limit = getBayerLimit(pixelCoord);

    // 4. Quantize
    // We determine the base color index (floor) and the next color index (ceil).
    // If the fractional part of the scaled value is greater than the dither limit,
    // we "round up" to the next color. This creates the dithering effect.
    float index = floor(scaled);
    
    if (fract(scaled) > limit) {
        index += 1.0;
    }

    // 5. Map index to actual color
    gl_FragColor = vec4(getPaletteColor(index));
}