export class Color {
    static brand = "#FF4040";
    static white = "#FFFFFF";
    static black = "#1F1F1F";
    static dark = "#3F3F3F";
    static gray = "#DCDCDC";
    static green = "#569650";
    static gold = "#FFD700";
    static silver = "#C0C0C0";
    static bronze = "#CD7F32";
}

export class Font {
    static semiBold = "SUIT-SemiBold";
    static bold = "SUIT-Bold";
    static regular = "SUIT-Regular";
    static light = "SUIT-Light";
    static thin = "SUIT-Thin";
    static extraLight = "SUIT-ExtraLight";
    static extraBold = "SUIT-ExtraBold";
    static medium = "SUIT-Medium";
    static extraMedium = "SUIT-ExtraMedium";
    static heavy = "SUIT-Heavy";
    static black = "SUIT-Black";
}

export class TypoGraphy {
    static title = ({color = Color.black}) => {
        return {
            color: color,
            fontSize: 24,
            fontFamily: Font.extraBold,
            // textAlign: 'center',
        }
    }

    static header = ({color = Color.black}) => {
        return {
            color: color,
            fontSize: 24,
            fontFamily: Font.semiBold,
        }
    }

    static default = ({color = Color.black}) => {
        return {
            color: color,
            fontSize: 16,
            fontFamily: Font.semiBold,
        }
    }
}

export class Style {
    static flex = {
        flex: 1,
    }

    static row = (align: 'center' | 'space-between' | 'space-around') => {
        return {
            flexDirection: 'row',
            justifyContent: align,
        }
    }

    static column = (align: 'center' | 'space-between' | 'space-around') => {
        return {
            flexDirection: 'column',
            justifyContent: align,
        }
    }

    static gap = (gap: number) => {
        return {
            gap: gap,
        }
    }

    static padding = (padding: number | [number, number] | [number, number, number, number]) => {
        if (typeof(padding) === 'number') {
            return {
                padding: padding,
            }
        } else if (Array.isArray(padding)) {
            if (padding.length === 2) {
                return {
                    paddingVertical: padding[0],
                    paddingHorizontal: padding[1],
                }
            } else if (padding.length === 4) {
                return {
                    paddingTop: padding[0],
                    paddingRight: padding[1],
                    paddingBottom: padding[2],
                    paddingLeft: padding[3],
                }
            }
        }
        throw new Error("padding must be a number or an array of 2 or 4 numbers");
    }

    static backgroundColor = (color: string) => {
        return {
            backgroundColor: color,
        }
    }

    static background = [this.flex, this.backgroundColor(Color.black)];
    static content = [this.flex, this.gap(24), this.padding([24, 24, 0, 24])];
}