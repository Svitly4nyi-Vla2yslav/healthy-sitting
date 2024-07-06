interface Palette {
    colors: { [key: string]: string };
    radiuses: { [key: string]: string };
    fontSizes: { [key: string]: number };
    weights: { [key: string]: number };
}

const palette: Palette = {
    colors: {
        black: '#000000',
        blue: '#00baff',
        white: '#ffffff',
        lightBlue: '#66b2ff',
    },
    radiuses: {
        small: '4px',
        medium: '8px',
        large: '12px',
        round: '50%',
    },
    weights: {
        normal: 400,
        semiBold: 600,
        bold: 700,
        black: 900,
    },
    fontSizes: {}
};

export default palette;