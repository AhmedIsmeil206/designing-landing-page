import { colors } from "../shared/colors"
import choice1 from '../../assets/images/home-why-1.webp'
import choice2 from '../../assets/images/home-why-2.webp'
import Button from "../shared/button"

const general = {
    margin: "0 auto",
    paddingBlockStart:'60px',
    paddingInlineStart: "-250px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width:window.innerWidth,

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
};

const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "64px",
    marginBlockEnd: "16px",
    textAlign:'left'
};

const imageWrap = {
    borderRadius: "20px",
    padding: "32px",
    maxWidth: "800px",
    width: "100%",
};




export default function DevFeatures() {
    return (
        <div css={general}>
                <h1 css={title}>for companies</h1>
                <div css={row}>
                    <div css={{maxWidth: "620px"}}>
                        <h2 css={{color: colors.purple, fontStyle:'italic'}}>Engineering teams</h2>
                        <h1>Train junior developers with real projects</h1>
                        <p css={{color: colors.darkGrey,fontWeight: '500', paddingBlockEnd: '24px'}}>Skip theoretical tutorials. Give your junior developers 100+ real-world challenges that build practical skills faster than traditional training programs.</p>
                        <Button style={{width:'40%', color: colors.Main_white, fontSize:'16px', padding:'16px 28px'}}>EXPLORE TEAMS</Button>
                    </div>

                    <div css={imageWrap}>
                        <img
                        src={choice1}
                        alt="How it works preview"
                        css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'600px', maxHeight:'450px'}}
                        />
                    </div>
                </div>

                <div css={{...row, marginInlineStart: "-100px"}}>
                    <div css={imageWrap}>
                        <img
                        src={choice2}
                        alt="How it works preview"
                        css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'600px', maxHeight:'450px', display:'flex', alignContent: "flex-start" }}
                        />
                    </div>
                    <div css={{maxWidth: "620px", textAlign:'left', marginInlineStart: "-80px"}}>
                        <h2 css={{color: colors.purple, fontStyle:'italic'}}>HIRING TEAMS</h2>
                        <h1>Discover junior talent through skills, not resumes</h1>
                        <p css={{color: colors.darkGrey,fontWeight: '500', paddingBlockEnd: '24px'}}>See real code and live projects upfront, then connect directly with developers who've demonstrated the skills and passion you need.</p>
                        <Button style={{width:'40%', color: colors.Main_white, fontSize:'16px', padding:'16px 28px'}}>EXPLORE HIRING</Button>
                    </div>
                </div>
        </div>
    )
}