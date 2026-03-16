import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { colors } from '@shared/colors';
import Button from '@shared/button';
import { githubMark } from '@shared/icons';
import DropDownMenu from '@header/drop-down-menu';
import frontendMasterLogo from '@assets/logos/frontend-master.png';
import {
    faRoad,
    faDesktop,
    faCode,
    faNewspaper,
    faBook,
    faUser,
    faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import path from 'path-browserify';

interface NavItem {
    label: string;
    href: string;
    icon: any;
}

interface MobileMenuSectionProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    items: NavItem[];
}

const exploreItems: NavItem[] = [
    { label: 'Learning Paths', href: '#learning-paths', icon: faRoad },
    { label: 'Challenges', href: '#challenges', icon: faDesktop },
    { label: 'Solutions', href: '#solutions', icon: faCode },
    { label: 'Articles', href: '#articles', icon: faNewspaper },
    { label: 'Guides', href: '#guides', icon: faBook },
];
const forCompaniesItems: NavItem[] = [
    { label: 'Hire Developers', href: '#hiring', icon: faUser },
    { label: 'Train Developers', href: '#team-plans', icon: faChalkboardTeacher },
];
const navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    position: 'relative',
    paddingInline: '200px',

    '@media (max-width: 1024px)': {
        padding: '0px',
        margin: '0',
    },
    '@media (max-width: 768px)': {
        padding: '8px 20px',
    },
};
const leftSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
};
const hamburgerButtonStyles = {
    display: 'none',
    flexDirection: 'column',
    gap: '4px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '8px',
    '@media (max-width: 1024px)': {
        display: 'flex',
    },
};
const hamburgerLineStyles = {
    width: '24px',
    height: '3px',
    backgroundColor: colors.black,
    borderRadius: '2px',
};
const logoLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
};
const logoImageStyles = {
    height: '32px',
    width: 'auto',
};
const rightSectionStyles = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    fontStyle: 'italic',
    '@media (max-width: 1024px)': {
        '& > *:not(:last-child)': {
            display: 'none',
        },
        gap: '0',
    },
};
const unlockProStyles = {
    textDecoration: 'none',
    color: colors.black,
    padding: '8px 12px',
    fontSize: '14px',
    fontWeight: '700',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    textTransform: 'uppercase',
};
const proBadgeStyles = {
    backgroundColor: colors.purple,
    color: colors.Main_white,
    padding: '1px 6px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '700',
};
const dropdownTriggerStyles = {
    textDecoration: 'italic',
    fontSize: '14px',
    fontWeight: '900',
    color: colors.black,
    textTransform: 'uppercase',
};
const githubIconStyles = {
    width: '22px',
    height: '22px',
    fill: colors.Main_white,
    marginLeft: '6px',
};
const mobileMenuOverlayStyles = (isOpen: boolean) => ({
    display: 'none',
    '@media (max-width: 1024px)': {
        display: 'block',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: colors.Main_white,
        zIndex: 1000,
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        overflowY: 'auto',
    },
});
const mobileMenuHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    borderBottom: `1px solid ${colors.grey}`,
};
const closeButtonStyles = {
    background: 'transparent',
    border: 'none',
    fontSize: '28px',
    cursor: 'pointer',
    padding: '8px',
    color: colors.black,
    fontWeight: '300',
};
const mobileMenuContentStyles = {
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
};
const mobileMenuSectionStyles = {
    borderBottom: `1px solid ${colors.grey}`,
    paddingBottom: '0',
};
const mobileMenuTitleStyles = {
    fontSize: '15px',
    fontWeight: '700',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    padding: '16px',
    color: colors.black,
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.Main_white,
};
const mobileMenuItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    paddingLeft: '32px',
    textDecoration: 'none',
    color: colors.black,
    fontSize: '15px',
    fontWeight: '500',
    '&:hover': {
        backgroundColor: colors.Main_whiteHover,
    },
};
const mobileUnlockProStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px',
    fontSize: '15px',
    fontWeight: '700',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    color: colors.black,
    textDecoration: 'none',
    borderBottom: `1px solid ${colors.grey}`,
};

const desktopLoginTextStyles = {
    padding: '4px 8px',
    fontSize: '14px',
    fontWeight: '900',
    fontStyle: 'italic',
    '@media (max-width: 768px)': {
        fontSize: '11px',
    },
};

const desktopLoginWrapStyles = {
    '@media (max-width: 1024px)': {
        marginLeft: '0',
    },
};

function GithubLoginButton({ withStyledText = false }: { withStyledText?: boolean }) {
    return (
        <Button variant="BlackButton">
            {withStyledText ? (
                <span css={desktopLoginTextStyles}>LOG IN WITH GITHUB</span>
            ) : (
                'LOG IN WITH GITHUB'
            )}
            <svg css={githubIconStyles} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d={githubMark} />
            </svg>
        </Button>
    );
}

function MobileMenuSection({ title, isOpen, onToggle, items }: MobileMenuSectionProps) {
    return (
        <div css={mobileMenuSectionStyles}>
            <div css={mobileMenuTitleStyles} onClick={onToggle}>
                <span>{title}</span>
                <span css={{ fontSize: '18px' }}>{isOpen ? '∨' : '›'}</span>
            </div>
            {isOpen && (
                <div>
                    {items.map((item) => (
                        <a key={item.label} href={item.href} css={mobileMenuItemStyles}>
                            <FontAwesomeIcon
                                icon={item.icon}
                                css={{ width: '16px', color: colors.black }}
                            />
                            <span>{item.label}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);

    return (
        <>
            <nav css={navStyles}>
                <div css={leftSectionStyles}>
                    <button
                        css={hamburgerButtonStyles}
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <span css={hamburgerLineStyles}></span>
                        <span css={hamburgerLineStyles}></span>
                        <span css={hamburgerLineStyles}></span>
                    </button>
                    <a href="#" css={logoLinkStyles}>
                        <img src={frontendMasterLogo} alt="Frontend Mentor" css={logoImageStyles} />
                    </a>
                </div>

                <div css={rightSectionStyles}>
                    <DropDownMenu
                        trigger={<span css={dropdownTriggerStyles}>EXPLORE</span>}
                        items={exploreItems}
                    />

                    <DropDownMenu
                        trigger={<span css={dropdownTriggerStyles}>FOR COMPANIES</span>}
                        items={forCompaniesItems}
                    />
                    <a href="#unlock-pro" css={unlockProStyles}>
                        UNLOCK <span css={proBadgeStyles}>PRO</span>
                    </a>

                    <Link to="/register" css={unlockProStyles}>
                        REGISTER
                    </Link>

                    <div css={desktopLoginWrapStyles}>
                        <GithubLoginButton withStyledText />
                    </div>
                </div>
            </nav>

            <div css={mobileMenuOverlayStyles(isMenuOpen)}>
                <div css={mobileMenuHeaderStyles}>
                    <button
                        css={closeButtonStyles}
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>

                    <a href="#" css={logoLinkStyles}>
                        <img
                            src={frontendMasterLogo}
                            alt="Frontend Mentor"
                            css={{ ...logoImageStyles, height: '28px' }}
                        />
                    </a>

                    <GithubLoginButton />
                </div>

                <div css={mobileMenuContentStyles}>
                    <MobileMenuSection
                        title="EXPLORE"
                        isOpen={isExploreOpen}
                        onToggle={() => setIsExploreOpen(!isExploreOpen)}
                        items={exploreItems}
                    />
                    <MobileMenuSection
                        title="FOR COMPANIES"
                        isOpen={isCompaniesOpen}
                        onToggle={() => setIsCompaniesOpen(!isCompaniesOpen)}
                        items={forCompaniesItems}
                    />
                    <a href="#unlock-pro" css={mobileUnlockProStyles}>
                        <span css={{ fontSize: '16px' }}>🔒</span>
                        <span>UNLOCK</span>
                        <span css={proBadgeStyles}>PRO</span>
                    </a>

                    <Link to="/register" css={mobileUnlockProStyles}>
                        <span css={{ fontSize: '16px' }}></span>
                        <span>REGISTER</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
