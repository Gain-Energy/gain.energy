import { css, Global } from '@emotion/react';
import PPNikkei300 from '../fonts/PPNikkeiPacific-Light.otf'
import PPNikkei400 from '../fonts/PPNikkeiPacific-Regular.otf'
import Consolas from '../fonts/consola.ttf'

const GlobalStyles = () => (
    <Global
        styles={css`
            @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&family=JetBrains+Mono:wght@100..800&display=swap');
            
            @font-face {
                font-family: 'PP Nikkei Pacific';
                src: url(${PPNikkei300}) format('opentype');
                font-weight: 300;
                font-style: normal;
            }

            @font-face {
                font-family: 'PP Nikkei Pacific';
                src: url(${PPNikkei400}) format('opentype');
                font-weight: 400;
                font-style: normal;
            }

            @font-face {
                font-family: 'Consolas';
                src: url(${Consolas}) format('truetype');
                font-weight: 400;
                font-style: normal;
            }

            :root {
                --us_fill-green: #31ED37;
                --us_fill-white: #F9F6EF;
                --us_fill-dark_grey: #292929;
                --us_fill-grey: #4E4E4E;
                --us_fill-light_grey: #6D6D6D;
                --us_fill-grad: linear-gradient(68deg, #0AF 0%, #1DD59F 50%, #39FF3F 100%);
            }

            * {
                margin: 0;
                padding: 0;
            }

            html, body {
                font-family: 'PP Nikkei Pacific', 'Consolas', 'JetBrains Mono', 'Inter', sans-serif;
                overflow-x: hidden;
            }
        `}
    />
)

export default GlobalStyles;