import { extendTheme  } from "native-base";
import { config } from './config';
import { Colors, FontSizes, FontWeights } from "./scheme";

export const darkTheme = extendTheme({
    colors: Colors.dark,
    fontSizes: FontSizes,
    fontWeights: FontWeights,
    config,
    components: {
        Button: {
            baseStyle: {
                color: Colors.light.default,
                bgGradient: `linear-gradient(90deg, ${Colors.dark.ButtonGradientColors})`,
                start: { x: 1, y: 0 },
                end: { x: 0, y: 1 },
            },
        },
    },
});




