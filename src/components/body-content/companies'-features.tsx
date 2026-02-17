import { colors } from "../shared/colors"
import choice1 from '../../assets/images/home-why-1.webp'
import choice2 from '../../assets/images/home-why-2.webp'
import Button from "../shared/button"

const general = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "120px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const title = {
    display: "flex",
    alignItems: 'center',
    textAlign: "center",
    fontSize: "36px",
    lineHeight: "1.2",
    marginBlock: "32px",
    marginInlineStart: "50px",
    height: "80px",
    width: '50%'
};

const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "64px",
    marginBottom: "96px",
};

const imageWrap = {
    borderRadius: "20px",
    padding: "32px",
    maxWidth: "560px",
};




export default function DevFeatures() {
    return (
        <div css={general}>
                <h1 css={title}>for companies</h1>
                <div css={row}>
                    <div css={{maxWidth: "420px"}}>
                        <h3>Engineering teams</h3>
                        <h1>Train junior developers with real projects</h1>
                        <p>Skip theoretical tutorials. Give your junior developers 100+ real-world challenges that build practical skills faster than traditional training programs.</p>
                        <Button css={{marginTop: "32px", color: colors.Main_white}}>EXPLORE TEAMS</Button>
                    </div>

                    <div css={imageWrap}>
                        <img
                        src={choice1}
                        alt="How it works preview"
                        css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'550px', maxHeight:'400px'}}
                        />
                    </div>
                </div>

                <div css={row}>
                    <div css={imageWrap}>
                        <img
                        src={choice2}
                        alt="How it works preview"
                        css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'550px', maxHeight:'400px'}}
                        />
                    </div>
                    <div css={{maxWidth: "420px"}}>
                        <h3>Hiring teams</h3>
                        <h1>Discover junior talent through skills, not resumes</h1>
                        <p>See real code and live projects upfront, then connect directly with developers who've demonstrated the skills and passion you need.</p>
                        <Button css={{marginTop: "32px", color: colors.Main_white}}>EXPLORE HIRING</Button>
                    </div>
                </div>
        </div>
    )
}