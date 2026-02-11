/** @jsxImportSource @emotion/react */
import {colors} from '../assets/colors';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'redButton' | 'whiteButton' | 'BlackButton' | 'purpleButton' | 'darkgreyButton';
}
export default function Button ({onClick, children, variant = 'redButton'}: ButtonProps) {
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
        color: colors.white,
        ':hover': colors.redHover
    },
    whiteButton:{
        backgroundColor: colors.white,
        color: colors.black,
    },
    BlackButton:{
        backgroundColor: colors.black,
        color: colors.white,
        ':hover': colors.blackHover
    },
    purpleButton:{
        backgroundColor: colors.purple,
        color: colors.white,
        ':hover': colors.purpleHover
    },
    darkgreyButton:{
        backgroundColor: colors.darkGrey,
        color: colors.white,
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
                }
            }}
            onClick={onClick}
        >
            {children}
        </button>
    )
}