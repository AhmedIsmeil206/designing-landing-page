
import { colors } from '@shared/colors';

interface LegalLink {
    label: string;
    href: string;
}


const divider = {
    width: "100%",
    display:'flex',
    alignItems:'center',
    borderTop: `1px solid ${colors.grey}`,
    justifyContent: "space-between",
    flexDirection: "row",
    fontSize: "15px",
    fontWeight: "500",
    paddingBlock: "16px",
    marginBlockStart: "24px",
    color: colors.darkGrey,
    '@media (max-width: 768px)': {
        flexDirection: 'column' ,
        gap: '16px',
        alignItems: 'flex-start',
        paddingInline: "16px"
    }
};

const legalLinks = {
    marginInlineEnd: "280px",
    display: "flex",
    gap: "18px",
    '@media (max-width: 768px)': {
        flexWrap: 'wrap' ,
        gap: '12px'
    }
};

const link = {
    textDecoration: "none",
    color: colors.darkGrey,
    cursor: "pointer",
    '&:hover': {
        textDecoration: "underline"
    }
};

const legalLinksData: LegalLink[] = [
    { label: 'Terms', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'License', href: '#' },
];

export default function Rights()  {

    return (
        <div>


            <div css={divider}>
                <div css={{paddingInlineStart: "230px", '@media (max-width: 768px)': { marginInlineStart: '0' }}}> © Frontend Mentor 2019 - 2026</div>
                <div css={legalLinks}>
                    {legalLinksData.map((item) => (
                        <a key={item.label} css={link} href={item.href}>{item.label}</a>
                    ))}
                </div>
            </div>

        </div>
    )
}