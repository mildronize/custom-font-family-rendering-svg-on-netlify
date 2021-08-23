const sharp = require('sharp');

const width = 1200;
const height = 630;
const label = "เราควรเพิ่มประสิทธิภาพของ Single Page Application โดยใช้ Server-side Rendering (SSR) หรือไม่"; // "Medium Text" "Short"
let fontsize = 30;
let letterspace = 0;
// let width = 300;
// let height = 90;
let x = 0;
let y = -45;

// const svg = `
// <svg width="${width}" height="${height}" viewBox="0 0 ${height} ${height + 2}">
//   <!--this rect should have rounded corners-->
//   <rect x="0" y="0" width="100%" height="100%" fill="#fff"/>
//   <text x="50%" y="50%" text-anchor="middle" dy="0.25em" fill="#000">${label}</text>
// </svg>
// `;

// const svg = `
// <svg width="${width - 20}" height="${height - 20}">
// <defs>
//     <style type="text/css">
//         @font-face {
//           font-family: 'IBM Plex Sans Thai';
//           src: url('IBMPlexSansThai-Medium.ttf');
//         }
//     </style>
//   </defs>
// <text x="50%" y="50%" font-family="IBM Plex Sans Thai" font-size="30" text-anchor="middle">${label}</text>
// </svg>`;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${x} ${y} 500 40">
            <defs>
            <style type="text/css">
                <![CDATA[
                    @font-face {
                        font-family: 'IBM Plex Sans Thai';
                        src: url('./IBMPlexSansThai-Medium.ttf');
                    }
                    svg {
                        width: 100%;
                        height: 100%;
                    }
                ]]>
            </style>
            </defs>

            <text x="0" y="0" font-family="'IBM Plex Sans Thai'" font-size="${fontsize}" letter-spacing="${letterspace}">
                ${label}
            </text>
        </svg>
        `;

const svg_buffer = Buffer.from(svg);
const image = sharp({
    create: {
        width: width,
        height: height,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 },
    }
})
  .composite([{
    input: svg_buffer,
    top: 0,
    left: 0,
}])
  .png()
  .toFile('sample.png');