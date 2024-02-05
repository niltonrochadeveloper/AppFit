import { Colors, FontSizes, FontWeights } from "./scheme";

export const lightTheme = {
    colors: Colors.light,
    fontSizes: FontSizes,
    fontWeights: FontWeights,
    components: {
        Button: {
            baseStyle: {
                color: Colors.light.default,
                bgGradient: `linear-gradient(90deg, ${Colors.light.ButtonGradientColors})`,
                start: { x: 1, y: 0 },
                end: { x: 0, y: 1 },
            },
        },
    },
};




