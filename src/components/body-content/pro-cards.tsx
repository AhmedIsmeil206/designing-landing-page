import {colors} from "../shared/colors"

const general = {
    maxWidth: "1120px",
    margin: "0 auto",
    textAlign: "center",
}

const heading = {
    lineHeight: "1.2",
    fontWeight: 700,
    color: colors.black,
    marginInlineStart: "20%",
    width: "40%",
    paddingInlineStart: "116px",
}

const article = {
    fontSize: "16px",
    lineHeight: "1.6",
    color: colors.darkGrey,
    maxWidth: "640px",
    margin: "0 auto 56px",
}

const cardsRow = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "28px",
    alignItems: "stretch",
}

const card = {
    background: colors.Main_white,
    border: `1px solid ${colors.lightGray}`,
    borderRadius: "20px",
    padding: "28px",
    textAlign: "left",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
}

const iconWrap = {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    backgroundColor: colors.lightPurple,
    display: "grid",
    placeItems: "center",
    color: colors.purple,
    marginBottom: "18px",
}

const cardHeader = {
    fontSize: "18px",
    fontWeight: 700,
    color: colors.black,
}

const cardContext = {
    fontSize: "14px",
    lineHeight: "1.6",
    color: colors.darkGrey,
    margin: 0,
}
const proBadgeStyles = {
    backgroundColor: colors.purple,
    color: colors.Main_white,
    padding: '3px 8px',
    borderRadius: '4px',
    marginBlockStart: '10px',
    position: 'relative',
}

export default function ProCards() {
    return (
    <section css={general}>
        <h1 css={heading}>Fast-track your developer career with <span css={proBadgeStyles}>PRO</span></h1>
        <p css={article}>
            Get AI-powered feedback on every solution, build portfolio-worthy projects, and master professional
            workflows with complete Figma files—everything you need to level up faster.
        </p>

        <div css={cardsRow}>
            <div css={card}>
                <div css={iconWrap}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 8h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9l-5 3V11a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </div>
                <h3 css={cardHeader}>Level up faster with AI-powered feedback</h3>
                <p css={cardContext}>
                    Our AI-enhanced reports spot up to 3x more improvement opportunities on every submission, giving
                    you personalized insights that help you level up faster.
                </p>
            </div>

            <div css={card}>
                <div css={iconWrap}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 8h10v10H7zM9 6h6v2H9z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </div>
                <h3 css={cardHeader}>Build portfolio projects that get you hired</h3>
                <p css={cardContext}>
                    Create multi-page websites, interactive dashboards, and full-stack applications with premium
                    challenges that make your portfolio stand out to employers.
                </p>
            </div>

            <div css={card}>
                <div css={iconWrap}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 7l-3 5 3 5M18 7l3 5-3 5M10 5l4 14" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                </div>
                <h3 css={cardHeader}>Master the design-to-code workflow pros use</h3>
                <p css={cardContext}>
                    Learn to translate Figma designs into pixel-perfect code using the same detailed specs and
                    professional workflow that developers use in real teams.
                </p>
            </div>
        </div>
    </section>
    )
}