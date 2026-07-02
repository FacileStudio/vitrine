/**
 * Dithering shader implementation
 * Applies a dithering effect to the rendered scene
 *
 * Credits:
 * Original dithering pattern: https://www.shadertoy.com/view/ltSSzW
 * Ported from: https://github.com/niccolofanton/dithering-shader
 */

const ditheringShader = /*glsl*/`
uniform float ditheringEnabled;
uniform vec2 resolution;
uniform float gridSize;
uniform float luminanceMethod;
uniform float invertColor;
uniform float pixelSizeRatio;
uniform float grayscaleOnly;
uniform float rotation;

bool getValue(float brightness, vec2 pos) {
  if (brightness > 16.0 / 17.0) return false;
  if (brightness < 1.0 / 17.0) return true;

  vec2 pixel = floor(mod(pos.xy / gridSize, 4.0));
  int x = int(pixel.x);
  int y = int(pixel.y);

  if (x == 0) {
    if (y == 0) return brightness < 16.0 / 17.0;
    if (y == 1) return brightness < 5.0 / 17.0;
    if (y == 2) return brightness < 13.0 / 17.0;
    return brightness < 1.0 / 17.0;
  }
  else if (x == 1) {
    if (y == 0) return brightness < 8.0 / 17.0;
    if (y == 1) return brightness < 12.0 / 17.0;
    if (y == 2) return brightness < 4.0 / 17.0;
    return brightness < 9.0 / 17.0;
  }
  else if (x == 2) {
    if (y == 0) return brightness < 14.0 / 17.0;
    if (y == 1) return brightness < 2.0 / 17.0;
    if (y == 2) return brightness < 15.0 / 17.0;
    return brightness < 3.0 / 17.0;
  }
  else {
    if (y == 0) return brightness < 6.0 / 17.0;
    if (y == 1) return brightness < 10.0 / 17.0;
    if (y == 2) return brightness < 7.0 / 17.0;
    return brightness < 11.0 / 17.0;
  }
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec2 center = resolution * 0.5;
  float ca = cos(rotation);
  float sa = sin(rotation);
  mat2 rot = mat2(ca, sa, -sa, ca);
  mat2 rotInv = mat2(ca, -sa, sa, ca);

  vec2 fragCoord = uv * resolution;
  vec2 rc = rot * (fragCoord - center);

  float pixelSize = gridSize * pixelSizeRatio;
  vec2 cell = (floor(rc / pixelSize) + 0.5) * pixelSize;
  vec2 sampleCoord = rotInv * cell + center;
  vec4 sampled = texture2D(inputBuffer, sampleCoord / resolution);
  vec3 baseColor = sampled.rgb;

  if (sampled.a < 0.001) {
    outputColor = vec4(0.0);
    return;
  }

  float luminance = dot(baseColor, vec3(1., 1., 1.));

  if (grayscaleOnly > 0.0) {
    baseColor = vec3(luminance);
  }

  bool dithered = getValue(luminance, rc);
  baseColor = dithered ? vec3(0.0) : baseColor;

  if (invertColor > 0.0) {
    baseColor = 1.0 - baseColor;
  }

  outputColor = vec4(baseColor, sampled.a);
}`;

export default ditheringShader;
