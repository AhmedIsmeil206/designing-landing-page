import { colors } from '@shared/colors';
import { proFeedbackIcon, proPortfolioIcon, proWorkflowIcon } from '@shared/icons';

interface ProBenefit {
    id: string;
    iconPath: string;
    title: string;
    description: string;
}

const general = {
    maxWidth: "1120px",
    margin: "0 auto",
    textAlign: "center",
    paddingBlockStart: "80px",
    '@media (max-width: 768px)': {
        paddingBlockStart: "32px",
        paddingInline: "20px"
    }
}

const heading = {
    fontSize:'36px',
    lineHeight: "1.2",
    fontWeight: 700,
    color: colors.black,
    marginInlineStart: "20%",
    width: "55%",
    paddingInlineStart: "116px",
    letterSpacing: "0.5px",
    '@media (max-width: 768px)': {
        fontSize: '22px',
        marginInlineStart: '0',
        width: '100%',
        paddingInlineStart: '0',
        lineHeight: '1.3'
    }
}

const article = {
    fontSize: "21px",
    lineHeight: "1.6",
    color: colors.darkGrey,
    maxWidth: "770px",
    margin: "0 auto 56px",
    width: "100%",
    textStyle: "bold",
    fontWeight: '500',
    '@media (max-width: 768px)': {
        fontSize: '15px',
        margin: '0 auto 24px',
        lineHeight: '1.5'
    }
}

const cardsRow = {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "20px",
    alignItems: "stretch",
    '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '20px'
    }
}

const card = {
    background: colors.Mainwhite,
    border: `1px solid ${colors.grey} !important`,
    borderRadius: "20px",
    padding: "28px",
    textAlign: "left",
    width: "100%",
    height: "90%",
    '@media (max-width: 768px)': {
        width: '100%',
        height: 'auto',
        padding: '20px'
    }
}

const iconWrap = {
    width: "72px",
    height: "72px",
    borderRadius: "12px",
    display: "grid",
    placeItems: "center",
    color: colors.purple,
    marginBottom: "18px",
    backgroundColor: colors.lightPurple,
}

const cardHeader = {
    fontSize: "22px",
    fontWeight: 700,
    color: colors.black,
}

const cardContext = {
    fontSize: "18px",
    fontWeight:'400',
    color: colors.darkGrey,
    marginBlockEnd:'30px',
}
const proBadgeStyles = {
    backgroundColor: colors.purple,
    color: colors.Mainwhite,
    padding: '3px 8px',
    borderRadius: '4px',
    marginBlockStart: '10px',
    position: 'relative',
}

const proBenefits: ProBenefit[] = [
    {
        id: 'ai-feedback',
        iconPath: proFeedbackIcon,
        title: 'Level up faster with AI-powered feedback',
        description:
            'Our AI-enhanced reports spot up to 3x more improvement opportunities on every submission, giving you personalized insights that help you level up faster.',
    },
    {
        id: 'portfolio-projects',
        iconPath: proPortfolioIcon,
        title: 'Build portfolio projects that get you hired',
        description:
            'Create multi-page websites, interactive dashboards, and full-stack applications with premium challenges that make your portfolio stand out to employers.',
    },
    {
        id: 'workflow',
        iconPath: proWorkflowIcon,
        title: 'Master the design-to-code workflow pros use',
        description:
            'Learn to translate Figma designs into pixel-perfect code using the same detailed specs and professional workflow that developers use in real teams.',
    },
];

function ProBenefitCard({ benefit }: { benefit: ProBenefit }) {
    return (
        <div css={card}>
            <div css={iconWrap}>
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d={benefit.iconPath} stroke="currentColor" strokeWidth="2"/>
                </svg>
            </div>
            <h3 css={cardHeader}>{benefit.title}</h3>
            <p css={cardContext}>{benefit.description}</p>
        </div>
    );
}

export default function ProCards() {
    return (
    <section css={general}>
        <p css={heading}>Fast-track your developer career with <span css={proBadgeStyles}>PRO</span></p>
        <p css={article}>
            Get AI-powered feedback on every solution, build portfolio-worthy projects, and master professional
            workflows with complete Figma files—everything you need to level up faster.
        </p>

        <div css={cardsRow}>
            {proBenefits.map((benefit) => (
                <ProBenefitCard key={benefit.id} benefit={benefit} />
            ))}
        </div>
    </section>
    )
}