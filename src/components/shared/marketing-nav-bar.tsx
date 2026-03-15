import { Link } from 'react-router-dom';
import { colors } from '@shared/colors';
import Button from '@shared/button';
import DropDownMenu from '@header/drop-down-menu';
import {
    faArrowTrendUp,
    faBriefcase,
    faBuilding,
    faLaptopCode,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import hiringLogo from '../../pages/hiring.png';

const useCasesItems = [
    { label: 'Recruitment agencies', href: '#', icon: faUsers },
    { label: 'Talent acquisition', href: '#', icon: faBriefcase },
    { label: 'Startups', href: '#', icon: faArrowTrendUp },
    { label: 'Remote hiring', href: '#', icon: faLaptopCode },
    { label: 'Small businesses', href: '#', icon: faBuilding },
];

const headerStyles = {
    position: 'sticky',
    top: 0,
    zIndex: 20,
    width: '100%',
    backgroundColor: colors.Main_white,
    backdropFilter: 'blur(16px)',
    borderBottom: `1px solid ${colors.grey}`,
};

const innerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '12px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
    '@media (max-width: 960px)': {
        flexDirection: 'column',
        alignItems: 'stretch',
    },
};

const logoLinkStyles = {
    display: 'inline-flex',
    alignItems: 'center',
};

const logoStyles = {
    width: '184px',
    height: '35px',
    display: 'block',
};

const navStyles = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    gap: '22px',
    '@media (max-width: 960px)': {
        justifyContent: 'space-between',
    },
    '@media (max-width: 640px)': {
        gap: '14px',
    },
};

const navLinkStyles = {
    textDecoration: 'none',
    color: colors.black,
    fontSize: '15px',
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: '0.01em',
};

const trialButtonStyles = {
    padding: '16px 32px',
    borderRadius: '999px',
    fontSize: '15px',
    fontWeight: '900',
};

export default function MarketingHeader() {
    return (
        <header css={headerStyles}>
            <div css={innerStyles}>
                <Link to="/blog" css={logoLinkStyles} aria-label="Frontend Mentor Hiring">
                    <img src={hiringLogo} alt="Frontend Mentor Hiring" css={logoStyles} />
                </Link>

                <nav css={navStyles}>
                    <a  css={navLinkStyles}>
                        WHY US
                    </a>
                    <DropDownMenu
                        trigger={<span css={navLinkStyles}>USE CASES</span>}
                        items={useCasesItems}
                    />
                    <a  css={navLinkStyles}>
                        PRICING
                    </a>
                    <Link to="/blog" css={navLinkStyles}>
                        BLOG
                    </Link>
                    <span css={{ fontSize: '18px', lineHeight: 1, color: colors.black }}>•</span>
                    <Link to="/register" css={navLinkStyles}>
                        SIGN IN
                    </Link>
                    <Link to="/register" css={{ textDecoration: 'none' }}>
                        <Button variant="purpleButton" style={trialButtonStyles}>
                            START FREE TRIAL
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
