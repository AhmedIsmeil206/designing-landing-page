
import { colors } from '@shared/colors';
import frontendMasterLogo from '@assets/logos/frontend-master.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiscord,
    faXTwitter,
    faLinkedin,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';
import Button from '@shared/button';

interface FooterColumn {
    id: string;
    title: string;
    width: string;
    links: FooterLinkItem[];
}

const socialIconStyles = {
    width: '30px',
    height: '25px',
    color: colors.babyBlue
}
const colTitle = {
    fontSize: "18px",
    fontWeight: "900",
    textTransform: "uppercase",
    marginBlockEnd: "12px",
    color: colors.black,
    fontStyle: "bold",
};
const list = {
    textAlign:'left' ,
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" ,
    gap: "10px",
};
const link = {
    color: colors.darkGrey,
    textDecoration: "none",
    fontSize: "16px",
    '&:hover': {
        textDecoration: "underline",
    }
};
const footerStyles = {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    backgroundColor: colors.Main_white,
    '@media (max-width: 1024px)': {
        paddingInline: '32px'
    },
    '@media (max-width: 768px)': {
        paddingInline: '20px',
        paddingBlock: '32px'
    }
}

const topRowStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBlock: '32px',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'flex-start',
        marginBlock: '24px'
    }
};

const socialIconsWrap = {
    display: 'flex',
    gap:'24px',
    marginInlineEnd:'30px',
    '@media (max-width: 768px)': { marginInlineEnd: '0' }
};

const columnsWrap = {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection:'row',
    marginBlockStart:'40px',
    gap:'2rem',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '24px',
        alignItems: 'flex-start'
    }
};

const newsletterWrap = {
    display: 'flex',
    alignItems: 'start',
    flexDirection:'column',
    flex: 1,
    marginInlineEnd:'100px',
    '@media (max-width: 1024px)': {
        marginInlineEnd: '0',
        marginInlineStart: '0'
    },
    '@media (max-width: 768px)': {
        width: '100%',
        marginInlineEnd: '0',
        marginInlineStart: '0'
    }
};

const newsletterActionWrap = {
    display: 'flex',
    alignItems: 'center',
    gap:'16px',
    flexDirection:'row',
    width:'100%',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        alignItems: 'stretch'
    }
};

const subscribeInputStyle = {
    border: `1px solid ${colors.grey}`,
    borderRadius: '4px',
    padding: '8px',
    width: '250px',
    height: '25px',
    fontSize:'18px',
    '@media (max-width: 768px)': {
        width: '100%'
    }
};

const subscribeBtnStyle = {
    fontSize: '16px',
    padding: '16px 36px',
    fontStyle: 'italic',
    fontWeight: '900',
    '@media (max-width: 768px)': { fontSize: '14px', padding: '13px 26px' },
    '@media (max-width: 480px)': { fontSize: '12px', padding: '11px 20px' }
};

const socialIcons = [faDiscord, faXTwitter, faLinkedin, faFacebook];

const footerColumns: FooterColumn[] = [
    {
        id: 'frontend-mentor',
        title: 'Frontend Mentor',
        width: '220px',
        links: [
            { label: 'Unlock Pro', href: '#' },
            { label: 'Contact us', href: '#' },
            { label: 'FAQs', href: '#' },
            { label: 'Become a partner', href: '#' },
            { label: 'Use cases', href: '#' },
        ]
    },
    {
        id: 'explore',
        title: 'Explore',
        width: '120px',
        links: [
            { label: 'Learning Paths', href: '#' },
            { label: 'Challenges', href: '#' },
            { label: 'Solutions', href: '#' },
            { label: 'Articles', href: '#' },
        ]
    },
    {
        id: 'community',
        title: 'Community',
        width: '120px',
        links: [
            { label: 'Discord', href: '#' },
            { label: 'Guidelines', href: '#' },
        ]
    },
    {
        id: 'companies',
        title: 'For companies',
        width: '180px',
        links: [
            { label: 'Hire Developers', href: '#' },
            { label: 'Train Developers', href: '#' },
        ]
    }
];

function SocialLinksRow() {
    return (
        <div css={socialIconsWrap}>
            {socialIcons.map((icon, index) => (
                <FontAwesomeIcon key={index} icon={icon} css={socialIconStyles} />
            ))}
        </div>
    );
}

function FooterLinkColumn({ column }: { column: FooterColumn }) {
    return (
        <div css={{ display: 'flex', alignItems: 'start', flexDirection:'column', width: column.width }}>
            <span css={colTitle}>{column.title}</span>
            <ul css={list}>
                {column.links.map((item) => (
                    <li key={item.label}><a css={link} href={item.href}>{item.label}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default function Info()  {

    return (
        <div css={footerStyles}>
            <div css={topRowStyles}>
                <div css={{display: 'flex', alignItems: 'center', '@media (max-width: 768px)': { marginInlineStart: '0' }}}>
                    <a href="https://www.frontendmentor.io" aria-label="Frontend Mentor">
                        <img
                            src={frontendMasterLogo}
                            alt="Frontend Mentor"
                            css={{ width: '200px', height: '32px', '@media (max-width: 768px)': { width: '150px', height: '24px' } }}
                        />
                    </a>
                </div>
                <SocialLinksRow />
            </div>

            <div css={columnsWrap}>
                <div css={newsletterWrap}>
                    <span css={{color:colors.darkPurple, fontSize:'24px',fontWeight:'500',marginBlock:'12px', '@media (max-width: 768px)': { fontSize: '20px' }}}>Stay up to date</span>
                    <span css={{color:colors.black, fontSize:'16px',fontWeight:'600',maxWidth:'400px',textAlign:'left' ,marginBlock:'12px', '@media (max-width: 768px)': { fontSize: '14px' }}}>with new challenges, featured solutions, selected articles, and our latest news</span>
                    <div css={newsletterActionWrap}>
                        <input type="text" placeholder="email@example.com" css={subscribeInputStyle}/>
                        <div>
                            <Button variant="redButton" style={subscribeBtnStyle}>Subscribe</Button>
                        </div>
                    </div>
                </div>

                {footerColumns.map((column) => (
                    <FooterLinkColumn key={column.id} column={column} />
                ))}
            </div>
        </div>
    )
}