/** @jsxImportSource @emotion/react */
import Button from "../button";
import { colors } from "../../assets/colors";
import homeHero from "../../assets/logos/home-hero.webp";
import kevinAvatar from "../../assets/logos/home-avatar-kevin.webp";
import jessicaAvatar from "../../assets/logos/home-avatar-jessica.webp";
import cssTricksLogo from "../../assets/logos/css-tricks.png";
import stackOverflowLogo from "../../assets/logos/stack-over-flow.png";
import productHuntLogo from "../../assets/logos/product-hunt.png";

const githubIconStyles = {
    width: "18px",
    height: "18px",
    fill: colors.white,
    marginLeft: "10px",
};

const div = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "72px",
};
const header = {
    fontSize: "12px",
    fontWeight: "700",
    fontStyle: "italic",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    marginBottom: "16px",
};

const title = {
    fontSize: "48px",
    lineHeight: "1.15",
    color: colors.purple,
    fontWeight: "700",
    marginBottom: "18px",
};

const description = {
    fontSize: "16px",
    lineHeight: "1.65",
    color: colors.darkGrey,
    marginBottom: "28px",
};
const heroImage = {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: "22px",
};

const proBannerdiv = {
    background: colors.purple,
    paddingInline: "30px ",
    borderRadius: "16px",
    marginInlineStart: "11%",
    maxWidth:"75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
};

const testimonialsGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
    maxWidth: "1000px",
    margin: "0 auto",
};

const testimonialCard = {
    background: colors.Main_white,
    padding: "0px 32px",
    borderRadius: "12px",
    border: `1px solid ${colors.grey}`,
    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.05)",
};

const testimonialAvatar = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
};

const featuredGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap:"32px",
    marginInline:"250px",
    maxWidth: "1000px",
    margin: "0 auto",
};

const featuredCard = {
    background: colors.Main_white,
    borderRadius: "12px",
    border:`1px solid ${colors.grey}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "120px",
    fontSize: "14px",
}

export default function Introduction() {

return (
    <>
        <div css={div}>
            <div css={{maxWidth: "600px"}}>
                <div css={header}>For learners</div>
                <h1 css={title}>
                    Front-end and full-stack coding challenges that build real skills and
                    help get you hired
                </h1>
                <p css={description}>
                    Frontend Mentor provides professional design-to-code challenges that
                    mirror real-world development work. Join{" "}
                    <span css={{color: colors.purple, fontWeight: "700"}}>1,137,036</span> developers building portfolio
                    projects that impress employers.
                </p>
                <div css={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "center"
                    }}
                >
                    <Button variant="redButton" onClick={() => {}}>
                        START BUILDING FREE
                        <svg
                        css={githubIconStyles}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </Button>

                    <Button variant="Main_whiteButton" onClick={() => {}}>BROWSE CHALLENGES</Button>
                </div>
            </div>

            <div css={{ flex: "0 0 520px"}}>
                <img src={homeHero} alt="Frontend Mentor hero" css={heroImage} />
            </div>
        </div>

        <div css={proBannerdiv}>
            <div>
                <h2 css={{fontSize: "24px", fontWeight: "700", color: colors.Main_white, marginBottom: "12px"}}>
                    Get AI-powered feedback on every solution submission
                </h2>
                <p css={{fontSize: "16px", color: colors.Main_white, lineHeight: "1.6"}}>
                    Join thousands of developers getting personalized insights to elevate your front-end and full-stack skills.
                </p>
            </div>
            <Button variant="Main_whiteButton" onClick={() => {}}>
                <span css={{color: colors.purple, fontWeight: "700"}}>LEARN ABOUT PRO</span>
            </Button>
        </div>

        <div css={{padding: "64px 72px", background: colors.Main_whiteHover}}>
            <h2 css={{fontSize: "28px", fontWeight: "700", color: colors.black, marginBottom: "48px", textAlign: "center"}}>
                What people are saying
            </h2>
            <div css={testimonialsGrid}>
                <div css={testimonialCard}>
                    <p css={{fontSize: "16px", lineHeight: "1.6", color: colors.black, marginBottom: "24px", fontStyle: "italic"}}>
                        "Frontend Mentor is the perfect way to learn real-world development workflows. The challenges are genuinely helpful and the community is supportive."
                    </p>
                    <div css={{display: "flex", alignItems: "center", gap: "12px", paddingBlockEnd: "16px"}}>
                        <img src={kevinAvatar} alt="Kevin Powell" css={testimonialAvatar} />
                        <div css={{display: "flex", flexDirection: "column", gap: "4px", justifyContent:"center", alignItems:"flex-start"}}>
                            <div css={{fontSize: "14px", fontWeight: "700", color: colors.purple}}>Kevin Powell</div>
                            <div css={{fontSize: "13px", color: colors.darkGrey}}>Web Developer & YouTuber</div>
                        </div>
                    </div>
                </div>

                <div css={testimonialCard}>
                    <p css={{fontSize: "16px", lineHeight: "1.6", color: colors.black, marginBottom: "24px", fontStyle: "italic"}}>
                        "Frontend Mentor is a win-win. You can sharpen your skills building websites and add finished projects to your portfolio to help land a job!"
                    </p>
                    <div css={{display: "flex", alignItems: "center", gap: "12px", paddingBlockEnd: "16px"}}>
                        <img src={jessicaAvatar} alt="Jessica Chan" css={testimonialAvatar} />
                        <div css={{display: "flex", flexDirection: "column", gap: "4px", justifyContent:"center", alignItems:"flex-start"}}>
                            <div css={{fontSize: "14px", fontWeight: "700", color: colors.purple}}>Jessica Chan</div>
                            <div css={{fontSize: "13px", color: colors.darkGrey}}>Web Developer & YouTuber</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div css={{padding: "64px 72px", background: colors.Main_whiteHover}}>
            <h2 css={{fontSize: "24px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", color: colors.black, marginBottom: "48px", textAlign: "center", textStyle:'bold'}}>
                As featured on ...
            </h2>
            <div css={featuredGrid}>
                <div css={featuredCard}>
                    <img src={cssTricksLogo} alt="CSS-Tricks" css={{maxWidth: "100%", height: "auto"}} />
                </div>
                <div css={featuredCard}>
                    <img src={stackOverflowLogo} alt="Stack Overflow" css={{maxWidth: "100%", height: "auto"}} />
                </div>
                <div css={featuredCard}>
                    <img src={productHuntLogo} alt="Product Hunt" css={{maxWidth: "100%", height: "auto"}} />
                </div>
            </div>
        </div>
    </>
)
}