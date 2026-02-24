/** @jsxImportSource @emotion/react */
import { colors } from "../shared/colors"
import Button from "../shared/button"
import choice1 from '../../assets/images/home-why-1.webp'
import choice2 from '../../assets/images/home-why-2.webp'

const general = {
    margin: "0 auto",
    paddingBlockStart:'60px',
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: '100%',
    maxWidth: '1200px',
    '@media (max-width: 768px)': {
        paddingBlockStart: '24px',
        paddingInline: '20px',
        width: '100%'
    }
};

const title = {
    display: "flex",
    alignItems: 'center',
    textAlign: "center",
    fontSize: "32px",
    marginBlock: "32px",
    height: "80px",
    width: '100%',
    justifyContent: "center",
    '@media (max-width: 768px)': {
        fontSize: '22px',
        height: 'auto',
        marginBlock: '16px'
    }
};

const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "64px",
    marginBlockEnd: "16px",
    textAlign:'left',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '20px'
    }
};

const imageWrap = {
    borderRadius: "20px",
    padding: "32px",
    maxWidth: "800px",
    width: "100%",
    '@media (max-width: 768px)': {
        padding: '12px'
    }
};




export default function DevFeatures() {
    return (
        <div css={general}>
                <h1 css={title}>for companies</h1>
                <div css={row}>
                    <div css={{maxWidth: "620px", '@media (max-width: 768px)': { maxWidth: '100%' }}}>
                        <h2 css={{color: colors.purple, fontStyle:'italic', '@media (max-width: 768px)': { fontSize: '16px' }}}>Engineering teams</h2>
                        <h1 css={{'@media (max-width: 768px)': { fontSize: '22px' }}}>Train junior developers with real projects</h1>
                        <p css={{color: colors.darkGrey,fontWeight: '500', paddingBlockEnd: '24px', '@media (max-width: 768px)': { fontSize: '15px', paddingBlockEnd: '16px' }}}>Skip theoretical tutorials. Give your junior developers 100+ real-world challenges that build practical skills faster than traditional training programs.</p>
                        <Button style={{width:'40%', color: colors.Main_white, fontSize:'16px', padding:'16px 28px', '@media (max-width: 768px)': { width: '100%' }}}>EXPLORE TEAMS</Button>
                    </div>

                    <div css={imageWrap}>
                        <img
                        src={choice1}
                        alt="How it works preview"
                        css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'600px', maxHeight:'450px', '@media (max-width: 768px)': { maxWidth: '100%', height: 'auto' }}}
                        />
                    </div>
                </div>

                <div css={{...row, marginInlineStart: "-100px", '@media (max-width: 768px)': { marginInlineStart: '0' }}}>
                    <div css={{...imageWrap, '@media (max-width: 768px)': { order: 2 }}}>
                        <img
                        src={choice2}
                        alt="How it works preview"
                        css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'600px', maxHeight:'450px', '@media (max-width: 768px)': { maxWidth: '100%', height: 'auto' }}}
                        />
                    </div>
                    <div css={{maxWidth: "620px", textAlign:'left', marginInlineStart: "-80px", '@media (max-width: 768px)': { maxWidth: '100%', marginInlineStart: '0', order: 1 }}}>
                        <h2 css={{color: colors.purple, fontStyle:'italic', '@media (max-width: 768px)': { fontSize: '16px' }}}>HIRING TEAMS</h2>
                        <h1 css={{'@media (max-width: 768px)': { fontSize: '22px' }}}>Discover junior talent through skills, not resumes</h1>
                        <p css={{color: colors.darkGrey,fontWeight: '500', paddingBlockEnd: '24px', '@media (max-width: 768px)': { fontSize: '15px', paddingBlockEnd: '16px' }}}>See real code and live projects upfront, then connect directly with developers who've demonstrated the skills and passion you need.</p>
                        <Button style={{width:'40%', color: colors.Main_white, fontSize:'16px', padding:'16px 28px', '@media (max-width: 768px)': { width: '100%' }}}>EXPLORE HIRING</Button>
                    </div>
                </div>
        </div>
    )
}