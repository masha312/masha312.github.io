const frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform sampler2D displacement;

varying vec2 v_texcoord;

vec4 rgb(float r, float g, float b) {
    return vec4(r / 255.0, g / 255.0, b / 255.0, 1.0);
}

void main(void)
{
    vec2 uv = v_texcoord;

    vec2 mouse = u_mouse / u_resolution;
		float dist = distance(uv, mouse);
		float strength = smoothstep(0.5, 0.0, dist);

    vec2 point = fract(uv * 0.1 + u_time * 0.005);

    vec4 dispColor = texture2D(displacement, point);

    vec4 tl = rgb(252.0, 221.0, 255.0);
    vec4 tr = rgb(255.0, 252.0, 221.0);
    vec4 bl = rgb(196.0, 255.0, 230.0);
    vec4 br = rgb(252.0, 221.0, 255.0);


    float dispX = mix(-0.2, 0.2, dispColor.r);
    float dispY = mix(-0.2, 0.2, dispColor.r);

    vec4 color = mix(
        mix(tl, tr, uv.x + dispX * strength),
        mix(bl, br, uv.x - dispX * strength),
        uv.y + dispY + strength
    );

    gl_FragColor = color;
}`
