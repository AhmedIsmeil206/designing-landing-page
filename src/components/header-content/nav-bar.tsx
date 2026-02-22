import { useState } from 'react';
import { colors } from '../shared/colors';
import Button from '../shared/button';
import DropDownMenu from '../header-content/drop-down-menu';
import frontendMasterLogo from '../../assets/logos/frontend-master.png';
import {
    faRoad,
    faDesktop,
    faCode,
    faNewspaper,
    faBook,
    faUser,
    faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const exploreItems = [
    { label: 'Learning Paths', href: '#learning-paths', icon: faRoad },
    { label: 'Challenges', href: '#challenges', icon: faDesktop },
    { label: 'Solutions', href: '#solutions', icon: faCode },
    { label: 'Articles', href: '#articles', icon: faNewspaper },
    { label: 'Guides', href: '#guides', icon: faBook }
]
const forCompaniesItems = [
    { label: 'Hire Developers', href: '#hiring', icon: faUser },
    { label: 'Train Developers', href: '#team-plans', icon: faChalkboardTeacher }
]
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
}
const leftSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
}
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
    }
}
const hamburgerLineStyles = {
    width: '24px',
    height: '3px',
    backgroundColor: colors.black,
    borderRadius: '2px',
}
const logoLinkStyles = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
}
const logoImageStyles = {
    height: '32px',
    width: 'auto'
}
const rightSectionStyles = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    fontStyle: 'italic',
    '@media (max-width: 1024px)': {
        '& > *:not(:last-child)': {
            display: 'none'
        },
        gap: '0'
    },
}
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
}
const proBadgeStyles = {
    backgroundColor: colors.purple,
    color: colors.Main_white,
    padding: '1px 6px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '700'
}
const dropdownTriggerStyles = {
    textDecoration: 'italic',
    fontSize: '14px',
    fontWeight: '900',
    color: colors.black,
    textTransform: 'uppercase',
}
const githubIconStyles = {
    width: '22px',
    height: '22px',
    fill: colors.Main_white,
    marginLeft: '6px'
}
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
    }
})
const mobileMenuHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    borderBottom: `1px solid ${colors.grey}`,
}
const closeButtonStyles = {
    background: 'transparent',
    border: 'none',
    fontSize: '28px',
    cursor: 'pointer',
    padding: '8px',
    color: colors.black,
    fontWeight: '300',
}
const mobileMenuContentStyles = {
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
}
const mobileMenuSectionStyles = {
    borderBottom: `1px solid ${colors.grey}`,
    paddingBottom: '0',
}
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
}
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
    }
}
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
                        <img
                            src={frontendMasterLogo}
                            alt="Frontend Mentor"
                            css={logoImageStyles}
                        />
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
                    <a
                        href="#unlock-pro"
                        css={unlockProStyles}
                    >
                        UNLOCK <span css={proBadgeStyles}>PRO</span>
                    </a>

                    <div css={{
                        '@media (max-width: 1024px)': {
                            marginLeft: '0'
                        }
                    }}>
                        <Button variant="BlackButton">
                            <span css={{
                                padding: '4px 8px',
                                fontSize: '14px',
                                fontWeight: '900',
                                fontStyle: 'italic',
                                '@media (max-width: 768px)': {
                                    fontSize: '11px'
                                }
                            }}>LOG IN WITH GITHUB</span>
                            <svg css={githubIconStyles} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </Button>
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
                            css={{...logoImageStyles, height: '28px'}}
                        />
                    </a>

                    <Button variant="BlackButton">
                        LOG IN WITH GITHUB
                        <svg css={githubIconStyles} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </Button>
                </div>

                <div css={mobileMenuContentStyles}>
                    <div css={mobileMenuSectionStyles}>
                        <div
                            css={mobileMenuTitleStyles}
                            onClick={() => setIsExploreOpen(!isExploreOpen)}
                        >
                            <span>EXPLORE</span>
                            <span css={{ fontSize: '18px' }}>{isExploreOpen ? '∨' : '›'}</span>
                        </div>
                        {isExploreOpen && (
                            <div>
                                {exploreItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        css={mobileMenuItemStyles}
                                    >
                                        <FontAwesomeIcon icon={item.icon} css={{ width: '16px', color: colors.black }} />
                                        <span>{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <div css={mobileMenuSectionStyles}>
                        <div
                            css={mobileMenuTitleStyles}
                            onClick={() => setIsCompaniesOpen(!isCompaniesOpen)}
                        >
                            <span>FOR COMPANIES</span>
                            <span css={{ fontSize: '18px' }}>{isCompaniesOpen ? '∨' : '›'}</span>
                        </div>
                        {isCompaniesOpen && (
                            <div>
                                {forCompaniesItems.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        css={mobileMenuItemStyles}
                                    >
                                        <FontAwesomeIcon icon={item.icon} css={{ width: '16px', color: colors.black }} />
                                        <span>{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    <a href="#unlock-pro" css={mobileUnlockProStyles}>
                        <span css={{ fontSize: '16px' }}>🔒</span>
                        <span>UNLOCK</span>
                        <span css={proBadgeStyles}>PRO</span>
                    </a>
                </div>
            </div>
        </>
    );
}