
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

const divider = {
    marginBlockStart: "40px",
    paddingInline: "24px",
    borderTop: `1px solid ${colors.grey}`,
    paddingBlockStart: "24px",
    paddingBlockEnd: "-280px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "14px",
    fontWeight: "400",
    color: colors.darkGrey,
    '@media (max-width: 768px)': {
        flexDirection: 'column' ,
        gap: '16px',
        alignItems: 'flex-start',
        paddingInline: "16px"
    }
};

const legalLinks = {
    display: "flex",
    gap: "18px",
    '@media (max-width: 768px)': {
        flexWrap: 'wrap' ,
        gap: '12px'
    }
};

const footerStyles = {
    paddingBlock: "48px",
    paddingInlineEnd: "330px",
    paddingInlineStart: "350px",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: colors.Main_white,
    '@media (max-width: 1024px)': {
        paddingInline: '32px'
    },
    '@media (max-width: 768px)': {
        paddingInline: '150px',
        paddingBlock: '32px'
    }
}
export default function Footer()  {

    return (
        <footer css={footerStyles}>
            <div css={{display: 'flex', alignItems: 'center', flexDirection:"row" ,  justifyContent:'space-between', width: '100%', marginBlock:'32px',
                '@media (max-width: 768px)': {
                    flexDirection: 'column' ,
                    gap: '24px',
                    alignItems: 'flex-start',
                    marginBlock: '24px'
                }
            }}>
                <div css={{display: 'flex', alignItems: 'center', '@media (max-width: 768px)': { marginInlineStart: '0' }}}>
                    <a href="https://www.frontendmentor.io" aria-label="Frontend Mentor">
                        <img
                            src={frontendMasterLogo}
                            alt="Frontend Mentor"
                            css={{ width: '200px', height: '32px', '@media (max-width: 768px)': { width: '150px', height: '24px' } }}
                        />
                    </a>
                </div>

                <div css={{display: 'flex', gap:'24px', '@media (max-width: 768px)': { marginInlineEnd: '0' }}}>
                    <FontAwesomeIcon icon={faDiscord} css={socialIconStyles} />
                    <FontAwesomeIcon icon={faXTwitter} css={socialIconStyles} />
                    <FontAwesomeIcon icon={faLinkedin} css={socialIconStyles} />
                    <FontAwesomeIcon icon={faFacebook} css={socialIconStyles} />
                </div>
            </div>

            <div
                css={{display: 'flex', flexDirection:'row' , marginBlockStart:"40px", gap:'2rem',
                    '@media (max-width: 768px)': {
                        flexDirection: 'column' ,
                        gap: '24px',
                        alignItems: 'flex-start'
                    }
                }}
            >
                <div css={{display: 'flex', alignItems: 'start', flexDirection:'column' , flex: 1, marginInlineEnd:'100px',
                        '@media (max-width: 1024px)': {
                            marginInlineEnd: '0',
                            marginInlineStart: '0'
                        },
                        '@media (max-width: 768px)': {
                            width: '100%',
                            marginInlineEnd: '0',
                            marginInlineStart: '0'
                        }
                    }}>
                    <span css={{color:colors.darkPurple, fontSize:'24px',fontWeight:'500',marginBlock:'12px', '@media (max-width: 768px)': { fontSize: '20px' }}}>Stay up to date</span>
                    <span css={{color:colors.black, fontSize:'16px',fontWeight:'600',maxWidth:'400px',textAlign:'left' ,marginBlock:'12px', '@media (max-width: 768px)': { fontSize: '14px' }}}>with new challenges, featured solutions, selected articles, and our latest news</span>
                    <div css={{display: 'flex', alignItems: 'center', gap:'16px', flexDirection:'row' , width:'100%',
                        '@media (max-width: 768px)': {
                            flexDirection: 'column' ,
                            alignItems: 'stretch'
                        }
                    }}>
                        <input type="text" placeholder="email@example.com" css={{border: `1px solid ${colors.grey}`, borderRadius: '4px', padding: '8px', width: '250px', height: '25px',fontSize:'18px',
                            '@media (max-width: 768px)': {
                                width: '100%'
                            }
                        }}/>
                        <div>
                            <Button variant="redButton" style={{fontSize: '16px', padding: '16px 36px', fontStyle: 'italic', fontWeight: '900'}}>Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div css={{ display: 'flex', alignItems: 'start', flexDirection:'column', width:'220px', }}>
                    <span css={colTitle}>Frontend Mentor</span>
                    <ul css={list}>
                    <li ><a css={link} href="#">Unlock Pro</a></li>
                    <li><a css={link} href="#">Contact us</a></li>
                    <li><a css={link} href="#">FAQs</a></li>
                    <li><a css={link} href="#">Become a partner</a></li>
                    <li><a css={link} href="#">Use cases</a></li>
                    </ul>
                </div>
                <div css={{display: 'flex', alignItems: 'start', flexDirection:'column', width:'120px'}}>
                    <span css={colTitle}>Explore</span>
                    <ul css={list}>
                    <li><a css={link} href="#">Learning Paths</a></li>
                    <li><a css={link} href="#">Challenges</a></li>
                    <li><a css={link} href="#">Solutions</a></li>
                    <li><a css={link} href="#">Articles</a></li>
                    </ul>
                </div>

                <div css={{display: 'flex', alignItems: 'start', flexDirection:'column', width:'120px'}}>
                    <span css={colTitle}>Community</span>
                    <ul css={list}>
                    <li><a css={link} href="#">Discord</a></li>
                    <li><a css={link} href="#">Guidelines</a></li>
                    </ul>
                </div>

                <div css={{display: 'flex', alignItems: 'start', flexDirection:'column', width:'180px' }}>
                    <span css={colTitle}>For companies</span>
                    <ul css={list}>
                    <li><a css={link} href="#">Hire Developers</a></li>
                    <li><a css={link} href="#">Train Developers</a></li>
                    </ul>
                </div>
            </div>

            <div css={divider}>
                <div css={{'@media (max-width: 768px)': { marginInlineStart: '0' }}}> © Frontend Mentor 2019 - 2026</div>
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