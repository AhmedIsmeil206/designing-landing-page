
/** @jsxImportSource @emotion/react */
import { colors } from "./shared/colors"
import frontendMasterLogo from '../assets/logos/frontend-master.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDiscord,
    faXTwitter,
    faLinkedin,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';
import Button from './shared/button';

const socialIconStyles = {
    width: '30px',
    height: '30px',
    color: colors.babyBlue
}
const colTitle = {
    fontSize: "13px",
    fontWeight: "700",
    letterSpacing: "0.6px",
    textTransform: "uppercase",
    marginBottom: "12px",
    color: colors.black,
};
const list = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
};
const link = {
    color: colors.darkGrey,
    textDecoration: "none",
    fontSize: "14px",
    '&:hover': {
        textDecoration: "underline",
    }
};

const divider = {
    marginTop: "40px",
    borderTop: `1px solid ${colors.grey}`,
    paddingTop: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "13px",
    color: colors.darkGrey,
};
const legalLinks = {
    display: "flex",
    gap: "18px",
};
export default function Footer()  {

    return (
        <footer css={{paddingBlockEnd: "32px", justifyContent: "space-between", alignItems: "center", gap:"3.75rem",backgroundColor: colors.Main_white, paddingBlockStart: '40px', paddingInline: '2rem',}}>
            <div css={{display: 'flex', alignItems: 'center', flexDirection:"row"}}>
                <div css={{display: 'flex', alignItems: 'center',paddingInlineEnd:'40%', justifyContent:'space-between' }}>
                    <a href="https://www.frontendmentor.io" aria-label="Frontend Mentor">
                        <img
                            src={frontendMasterLogo}
                            alt="Frontend Mentor"
                        />
                    </a>
                </div>

                <div css={{display: 'flex', alignItems: 'center', gap:'16px'}}>
                    <FontAwesomeIcon icon={faDiscord} css={socialIconStyles} />
                    <FontAwesomeIcon icon={faXTwitter} css={socialIconStyles} />
                    <FontAwesomeIcon icon={faLinkedin} css={socialIconStyles} />
                    <FontAwesomeIcon icon={faFacebook} css={socialIconStyles} />
                </div>
            </div>

            <div
                css={{display: 'flex', flexDirection:'row', marginBlockStart:"40px", gap:'3.75rem' }}
            >
                <div css={{display: 'flex', alignItems: 'start', flexDirection:'column' }}>
                    <span>Stay up to date</span>
                    <span>with new challenges, featured solutions, selected articles, and our latest news</span>
                    <div css={{display: 'flex', alignItems: 'center', gap:'8px', flexDirection:'row' }}>
                        <input type="text" placeholder="email@example.com"/>
                        <Button variant="redButton">Subscribe</Button>
                    </div>
                </div>

                <div css={{ display: 'flex', alignItems: 'start', flexDirection:'column' }}>
                    <span css={colTitle}>Frontend Mentor</span>
                    <ul css={list}> 
                    <li ><a css={link} href="#">Unlock Pro</a></li>
                    <li><a css={link} href="#">Contact us</a></li>
                    <li><a css={link} href="#">FAQs</a></li>
                    <li><a css={link} href="#">Become a partner</a></li>
                    <li><a css={link} href="#">Use cases</a></li>
                    </ul>
                </div>

                <div css={{display: 'flex', alignItems: 'start', flexDirection:'column' }}>
                    <span css={colTitle}>Explore</span>
                    <ul css={list}>
                    <li><a css={link} href="#">Learning Paths</a></li>
                    <li><a css={link} href="#">Challenges</a></li>
                    <li><a css={link} href="#">Solutions</a></li>
                    <li><a css={link} href="#">Articles</a></li>
                    </ul>
                </div>

                <div css={{display: 'flex', alignItems: 'start', flexDirection:'column' }}>
                    <span css={colTitle}>Community</span>
                    <ul css={list}>
                    <li><a css={link} href="#">Discord</a></li>
                    <li><a css={link} href="#">Guidelines</a></li>
                    </ul>
                </div>

                <div css={{display: 'flex', alignItems: 'start', flexDirection:'column' }}>
                    <span css={colTitle}>For companies</span>
                    <ul css={list}>
                    <li><a css={link} href="#">Hire Developers</a></li>
                    <li><a css={link} href="#">Train Developers</a></li>
                    </ul>
                </div>
            </div>

            <div css={divider}>
                <div>© Frontend Mentor 2019 - 2026</div>
                <div css={legalLinks}>
                    <a css={link} href="#">Terms</a>
                    <a css={link} href="#">Cookie Policy</a>
                    <a css={link} href="#">Privacy Policy</a>
                    <a css={link} href="#">License</a>
                </div>
            </div>

        </footer>
    )
}