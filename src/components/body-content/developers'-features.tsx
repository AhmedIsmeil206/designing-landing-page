import { colors } from "../shared/colors"
import { useState } from "react"
import choice1 from '../../assets/images/home-why-1.webp'
import choice2 from '../../assets/images/home-why-2.webp'
import choice3 from '../../assets/images/home-why-3.webp'
import choice4 from '../../assets/images/home-why-4.webp'

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
            <h1 css={title}>Why developers choose Frontend Mentor</h1>
            <div css={row}>
                <div css={{maxWidth: "420px"}}>
                    <h3>Move beyond passive learning</h3>
                    <p>Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice.</p>
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
                    <h3>Move beyond passive learning</h3>
                    <p>Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice.</p>
                </div>
            </div>

            <div css={row}>
                <div css={{maxWidth: "420px"}}>
                    <h3>Move beyond passive learning</h3>
                    <p>Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice.</p>
                </div>
                <div css={imageWrap}>
                    <img
                    src={choice3}
                    alt="How it works preview"
                    css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'550px', maxHeight:'400px'}}
                    />
                </div>
            </div>

            <div css={row}>
                <div css={imageWrap}>
                    <img
                    src={choice4}
                    alt="How it works preview"
                    css={{ width: "100%", display: "block", borderRadius: "12px", maxWidth:'550px', maxHeight:'400px'}}
                    />
                </div>
                <div css={{maxWidth: "420px"}}>
                    <h3>Move beyond passive learning</h3>
                    <p>Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice.</p>
                </div>
            </div>

        </div>
    )
}