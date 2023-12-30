import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme"
import { Colors, FontSizes, FontWeights } from "./scheme";

export const useBaseThemes: any = () => {
    return {
        lightTheme,
        darkTheme,
        Colors,
        FontSizes,
        FontWeights,
    }
}



