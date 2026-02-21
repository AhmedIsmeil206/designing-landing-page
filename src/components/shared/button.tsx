/** @jsxImportSource @emotion/react */
import {colors} from './colors';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'redButton' | 'Main_whiteButton' | 'BlackButton' | 'purpleButton' | 'darkgreyButton' | 'Main_Main_whiteButton';
    style?: React.CSSProperties;
}
export default function Button ({onClick, children, variant = 'redButton', style}: ButtonProps) {
const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    borderRadius: '24px',
    fontSize: '13px',
    fontWeight: '700',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px'
}
const variants = {
    redButton:{
        backgroundColor: colors.red,
        color: colors.Main_white,
        ':hover': colors.redHover
    },
    Main_whiteButton:{
        backgroundColor: colors.Main_white,
        color: colors.black,
    },
    BlackButton:{
        backgroundColor: colors.black,
        color: colors.Main_white,
        ':hover': colors.blackHover
    },
    purpleButton:{
        backgroundColor: colors.purple,
        color: colors.Main_white,
        ':hover': colors.purpleHover
    },
    darkgreyButton:{
        backgroundColor: colors.darkGrey,
        color: colors.Main_white,
    },
    Main_Main_whiteButton: {
        backgroundColor: colors.Main_white,
        color: colors.black,
        ':hover': colors.Main_whiteHover
    }
}
const variantsStyles = variants[variant]

    return(
        <button
            css={{
                ...baseStyles,
                backgroundColor: variantsStyles.backgroundColor,
                color: variantsStyles.color,
                '&:hover': {
                    backgroundColor: variantsStyles[':hover'] || variantsStyles.backgroundColor
                },
                ...style
            }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}