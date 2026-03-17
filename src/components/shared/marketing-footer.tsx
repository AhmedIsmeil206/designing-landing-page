import { Link } from 'react-router-dom';
import { colors } from '@shared/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import hiringLogo from '../../pages/hiring.png';

interface FooterColumn {
    title: string;
    links: string[];
}

const footerColumns: FooterColumn[] = [
    {
        title: 'Hiring',
        links: ['Why us', 'Pricing', 'Blog', 'FAQs', 'Contact us', 'Become a partner'],
    },
    {
        title: 'Use Cases',
        links: [
            'Recruitment agencies',
            'Talent acquisition',
            'Startups',
            'Scaleups',
            'Small businesses',
            'Remote hiring',
        ],
    },
    {
        title: 'For Companies',
        links: ['Train developers', 'Hire developers'],
    },
    {
        title: 'For Developers',
        links: ['Take challenges'],
    },
];

const legalLinks = ['Terms', 'Cookie policy', 'Privacy policy'];
const socialIcons = [faXTwitter, faLinkedin, faFacebook];

const footerStyles = {
    backgroundColor: colors.Mainwhite,
    borderTop: `1px solid ${colors.grey}`,
};

const innerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '34px 24px 22px',
};

const topStyles = {
    display: 'grid',
    gridTemplateColumns: '220px minmax(0, 1fr) auto',
    gap: '36px',
    alignItems: 'start',
    '@media (max-width: 1080px)': {
        gridTemplateColumns: '1fr',
    },
};

const columnsWrapStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(140px, 1fr))',
    gap: '28px',
    '@media (max-width: 900px)': {
        gridTemplateColumns: 'repeat(2, minmax(140px, 1fr))',
    },
    '@media (max-width: 560px)': {
        gridTemplateColumns: '1fr',
    },
};

const titleStyles = {
    margin: 0,
    marginBottom: '18px',
    fontSize: '18px',
    fontWeight: '900',
    textTransform: 'uppercase' ,
    letterSpacing: '0.04em',
    color: colors.black,
};

const listStyles = {
    listStyle: 'none' ,
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column' ,
    gap: '12px',
};

const linkStyles = {
    textDecoration: 'none',
    color: colors.darkGrey,
    fontSize: '16px',
    lineHeight: 1.5,
};

const socialWrapStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '22px',
};

const dividerStyles = {
    marginTop: '28px',
    paddingTop: '18px',
    borderTop: `1px solid ${colors.grey}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    color: colors.darkGrey,
    fontSize: '15px',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
};

const legalWrapStyles = {
    display: 'flex',
    flexWrap: 'wrap' ,
    gap: '24px',
};

export default function MarketingFooter() {
    return (
        <footer css={footerStyles}>
            <div css={innerStyles}>
                <div css={topStyles}>
                    <Link to="/blog" aria-label="Frontend Mentor Hiring">
                        <img
                            src={hiringLogo}
                            alt="Frontend Mentor Hiring"
                            css={{ width: '184px', height: '35px' }}
                        />
                    </Link>

                    <div css={columnsWrapStyles}>
                        {footerColumns.map((column) => (
                            <div key={column.title}>
                                <h3 css={titleStyles}>{column.title}</h3>
                                <ul css={listStyles}>
                                    {column.links.map((item) => (
                                        <li key={item}>
                                            <a  css={linkStyles}>
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div css={socialWrapStyles}>
                        {socialIcons.map((icon, index) => (
                            <a
                                key={index}
                                aria-label="Social link"
                                css={{ color: colors.babyBlue, fontSize: '31px' }}
                            >
                                <FontAwesomeIcon icon={icon} />
                            </a>
                        ))}
                    </div>
                </div>

                <div css={dividerStyles}>
                    <span>© Frontend Mentor 2019 - 2026</span>
                    <div css={legalWrapStyles}>
                        {legalLinks.map((item) => (
                            <a key={item}  css={linkStyles}>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
