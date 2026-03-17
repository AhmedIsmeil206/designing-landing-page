import { colors } from '@shared/colors';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'redButton' | 'MainwhiteButton' | 'BlackButton' | 'purpleButton' | 'darkgreyButton' | 'Main_MainwhiteButton';
    style?: object;
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
    textTransform: 'uppercase' ,
    letterSpacing: '0.5px',
    '@media (max-width: 768px)': {
        fontSize: '12px',
        padding: '9px 16px',
    },
    '@media (max-width: 480px)': {
        fontSize: '11px',
        padding: '8px 14px',
    },
}
const variants = {
    redButton:{
        backgroundColor: colors.red,
        color: colors.Mainwhite,
        ':hover': colors.redHover
    },
    MainwhiteButton:{
        backgroundColor: colors.Mainwhite,
        color: colors.black,
    },
    BlackButton:{
        backgroundColor: colors.black,
        color: colors.Mainwhite,
        ':hover': colors.blackHover
    },
    purpleButton:{
        backgroundColor: colors.purple,
        color: colors.Mainwhite,
        ':hover': colors.purpleHover
    },
    darkgreyButton:{
        backgroundColor: colors.darkGrey,
        color: colors.Mainwhite,
    },
    Main_MainwhiteButton: {
        backgroundColor: colors.Mainwhite,
        color: colors.black,
        ':hover': colors.MainwhiteHover
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