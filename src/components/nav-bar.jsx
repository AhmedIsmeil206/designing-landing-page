/** @jsxImportSource @emotion/react */
import { colors } from '../assets/colors';
import Button from './button';
import DropDownMenu from './drop-down-menu';
import frontendMasterLogo from '../assets/logos/frontend-master.png';

export default function NavBar() {
    const exploreItems = [
        { label: 'Learning Paths', href: '#learning-paths' },
        { label: 'Challenges', href: '#challenges' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Articles', href: '#articles' }
    ];

    const forCompaniesItems = [
        { label: 'Hiring', href: '#hiring' },
        { label: 'Team Plans', href: '#team-plans' },
        { label: 'Resources', href: '#resources' }
    ];

    const navStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 64px',
        position: 'relative',
    };

    const leftSectionStyles = {
        display: 'flex',
        alignItems: 'center'
    };

    const logoLinkStyles = {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none'
    };

    const logoImageStyles = {
        height: '32px',
        width: 'auto'
    };

    const centerSectionStyles = {
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
    };

    const rightSectionStyles = {
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
    };

    const unlockProStyles = {
        color: colors.black,
        padding: '8px 12px',
        fontSize: '13px',
        fontWeight: '700',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
    };

    const proBadgeStyles = {
        backgroundColor: colors.purple,
        color: colors.white,
        padding: '3px 8px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: '700'
    };

    const dropdownTriggerStyles = {
        fontSize: '13px',
        fontWeight: '700',
        color: colors.black,
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    };

    const githubIconStyles = {
        width: '18px',
        height: '18px',
        fill: colors.white,
        marginLeft: '10px'
    };

    const buttonContainerStyles = {
        marginLeft: '24px'
    };

    return (
        <nav css={navStyles}>
            <div css={leftSectionStyles}>
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

                <div css={buttonContainerStyles}>
                    <Button variant="BlackButton" onClick={() => console.log('Login with GitHub')}>
                        LOG IN WITH GITHUB
                        <svg css={githubIconStyles} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
