import { colors } from "../shared/colors"
import { useState } from "react"
import choice1 from '../../assets/images/home-how-it-works-1.webp'
import choice2 from '../../assets/images/home-how-it-works-2.webp'
import choice3 from '../../assets/images/home-how-it-works-3.webp'
import choice4 from '../../assets/images/home-how-it-works-4.webp'

const wrapper = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
    padding: "72px",
    alignItems: "center",
    rowGap: "48px",
    background: colors.grey,
    width:'100%'
}

const imageWrap = {
    background: colors.grey,
    borderRadius: "16px",
    padding: "28px",
    marginBlockStart: "100px",
    position: "relative",
    width:'100%'
}

const numberPill = (active) => ({
    width: "32px",
    height: "32px",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: active ? colors.Main_white : colors.babyBlue,
    color: active ? colors.purple : colors.Main_white,
    fontWeight: "700",
    marginRight: "14px",
})

const stepCard = (active) => ({
    background: active ? colors.purple : colors.Main_white,
    color: active ? colors.Main_white : colors.black,
    borderRadius: "12px",
    padding: "20px 24px",
    border: `1px solid ${colors.grey}`,
    cursor: "pointer",
    transition: "all 0.2s ease",

})

const steps = [
    {
        id: 1,
        title: 'choose your challenge',
        description: ' Pick from 100+ professionally designed projects across five skill levels—from HTML/CSS basics to full-stack applications.'

    },
    {
        id: 2,
        title: 'Code the design',
        description: 'Build responsive websites and web apps using the provided designs as your guide. Practice with any tools, frameworks, or AI assistants you want to master.'
    },
    {
        id: 3,
        title: 'Submit and improve',
            description: 'Get automated feedback, community code reviews, and compare your solution to the design. Refine your approach and level up with each project.'
    },
    {
        id: 4,
        title: 'Help others grow',
        description: ' Review other developers’ code to sharpen your skills and build connections in our supportive community.'
    }
]
export default function Explaination () {
    const [active, setActive] = useState(1)

return (
    <div css={wrapper}>
        <div css={{display: "flex", flexDirection: "column", gap: "20px", width:'100%', maxWidth:'540px'}}>
            <h2 css={{
                fontSize: "40px",
                fontWeight: "700",
                marginBottom: "24px",
                color: colors.black,
                lineHeight: "1.2"
            }}>
                How it works
            </h2>

            {steps.map((step) => {
                const isActive = step.id === active;
                return (
                    <div
                        key={step.id}
                        css={stepCard(isActive)}
                        onClick={() => setActive(step.id)}
                    >
                        <div css={{ display: "flex", alignItems: "center" }}>
                            <span css={numberPill(isActive)}>{step.id}</span>
                            <span css={{
                                fontSize: "18px", 
                                fontWeight: "700",
                                letterSpacing: "-0.2px"
                            }}>
                                {step.title}
                            </span>
                        </div>

                        {isActive && (
                            <p css={{
                                marginTop: "16px", 
                                marginLeft: "56px",
                                fontSize: "15px", 
                                lineHeight: "1.7",
                                opacity: 0.95
                            }}>
                                {step.description}
                            </p>
                        )}
                    </div>
                );
            })}
        </div>

        {
            active === 1 && (
                <div css={imageWrap}>
                    <img
                    src={choice1}
                    alt="How it works preview"
                    css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'550px', maxHeight:'400px'}}
                    />
                </div>
            )
        }
        {
            active === 2 && (
                <div css={imageWrap}>
                    <img
                    src={choice2}
                    alt="How it works preview"
                    css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'550px', maxHeight:'400px'}}
                />
                </div>
            )
        }

        {
            active === 3 && (
                <div css={imageWrap}>
                    <img
                    src={choice3}
                    alt="How it works preview"
                    css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'550px', maxHeight:'400px'}}
                />
                </div>
            )
        }

        {
            active === 4 && (
                <div css={imageWrap}>
                    <img
                    src={choice4}
                    alt="How it works preview"
                    css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'550px', maxHeight:'500px'}}
                    />
                </div>
            )
        }
    </div>
);
}