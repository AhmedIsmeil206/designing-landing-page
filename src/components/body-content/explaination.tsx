/** @jsxImportSource @emotion/react */
import { colors } from "../shared/colors"
import { useState } from "react"
import choice1 from '../../assets/images/home-how-it-works-1.webp'
import choice2 from '../../assets/images/home-how-it-works-2.webp'
import choice3 from '../../assets/images/home-how-it-works-3.webp'
import choice4 from '../../assets/images/home-how-it-works-4.webp'

const wrapper = {
    display: "grid",
    gridTemplateColumns: "0.85fr 1fr",
    padding: "72px",
    alignItems: "start",
    background: colors.lightGray,
    width: "100%",
    borderRadius: "20px",
    paddingBlock: "120px",
    '@media (max-width: 768px)': {
        gridTemplateColumns: "1fr",
        padding: "24px 20px",
        paddingBlock: "32px",
        gap: "24px"
    }
}

const imageWrap = {
    background: colors.lightGray,
    borderRadius: "20px",
    marginBlockStart: "124px",
    position: "relative",
    '@media (max-width: 768px)': {
        marginBlockStart: "0",
        width: "100%"
    }
}

const numberPill = (active) => ({
    width: "30px",
    height: "30px",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: active ? colors.Main_white : colors.babyBlue,
    color: active ? colors.purple : colors.Main_white,
    fontWeight: "700",
    marginRight: "16px",
})

const stepCard = (active) => ({
    background: active ? colors.purple : colors.Main_white,
    color: active ? colors.Main_white : colors.black,
    borderRadius: "12px",
    padding: active ? "30px 24px" : "16px 24px",
    border: active ? "1px solid transparent" : `1px solid ${colors.lightGray}`,
    boxShadow: active ? "0 14px 30px rgba(51, 69, 167, 0.18)" : "0 2px 8px rgba(15, 23, 42, 0.06)",
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
        <div css={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "540px", marginInline:'240px', '@media (max-width: 768px)': { marginInline: '0', maxWidth: '100%', gap: '12px' } }}>
            <h2 css={{
                fontSize: "40px",
                textAlign: "left",
                fontWeight: "700",
                marginBottom: "16px",
                color: colors.black,
                '@media (max-width: 768px)': {
                    fontSize: "24px",
                    marginBottom: "12px"
                }
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
                                fontSize: "20px",
                                fontWeight: "700",
                                padding: "8px",
                                textTransform: "capitalize"
                            }}>
                                {step.title}
                            </span>
                        </div>

                        {isActive && (
                            <p css={{
                                marginTop: "12px",
                                marginLeft: "46px", 
                                fontSize: "14px",
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
                        css={{  display: "flex", alignItems: "left", borderRadius: "14px", maxWidth: "560px", maxHeight: "450px", '@media (max-width: 768px)': { maxWidth: '100%', width: '100%', height: 'auto' } }}
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
                        css={{  display: "flex", alignItems: "left", borderRadius: "14px", maxWidth: "560px", maxHeight: "450px", '@media (max-width: 768px)': { maxWidth: '100%', width: '100%', height: 'auto' } }}
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
                        css={{  display: "flex", alignItems: "left", borderRadius: "14px", maxWidth: "560px", maxHeight: "450px", '@media (max-width: 768px)': { maxWidth: '100%', width: '100%', height: 'auto' } }}
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
                        css={{  display: "flex", alignItems: "left", borderRadius: "14px", maxWidth: "560px", maxHeight: "450px", '@media (max-width: 768px)': { maxWidth: '100%', width: '100%', height: 'auto' } }}
                    />
                </div>
            )
        }
    </div>
);
}