/** @jsxImportSource @emotion/react */
import { colors } from "@shared/colors"
import { type ReactNode } from 'react'
import choice1 from '@assets/images/home-why-1.webp'
import choice2 from '@assets/images/home-why-2.webp'
import choice3 from '@assets/images/home-why-3.webp'
import choice4 from '@assets/images/home-why-4.webp'
interface FeatureRowProps {
    reversed?: boolean;
    contentMaxWidth?: string;
    contentMarginEnd?: string;
    imageSrc: string;
    imageAlt: string;
    heading: string;
    body: string;
    children?: ReactNode;
}

const general = {
    maxWidth: "1120px",
    margin: "0 auto",
    paddingBlockStart: "120px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    '@media (max-width: 768px)': {
        paddingBlockStart: "32px",
        paddingInline: "20px"
    }
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
    width: '50%',
    '@media (max-width: 768px)': {
        fontSize: "22px",
        width: "100%",
        marginInlineStart: "0",
        height: "auto",
        marginBlock: "16px"
    }
};

const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap:'30px',
    '@media (max-width: 768px)': {
        flexDirection: "column",
        gap: "20px"
    }
};

const imageWrap = {
    borderRadius: "20px",
    padding: "32px",
    maxWidth: "560px",
    '@media (max-width: 768px)': {
        padding: "12px",
        width: "100%",
        maxWidth: "100%"
    }
};

const contentHeading = {
    fontSize: "28px",
    fontWeight: "700",
    '@media (max-width: 768px)': { fontSize: '20px' }
};

const contentBody = {
    color: colors.darkGrey,
    fontSize: '20px',
    '@media (max-width: 768px)': { fontSize: '15px' }
};

const imgStyle = {
    width: "100%",
    height: '100%',
    display: "block",
    borderRadius: "12px",
    maxWidth: '600px',
    maxHeight: '700px',
    '@media (max-width: 768px)': { maxWidth: '100%', height: 'auto' }
};


function FeatureRow({
    reversed = false,
    contentMaxWidth = "480px",
    contentMarginEnd,
    imageSrc,
    imageAlt,
    heading,
    body,
}: FeatureRowProps) {
    return (
        <div css={{
            ...row,
            flexDirection: reversed ? 'row-reverse' : 'row',
            '@media (max-width: 768px)': {
                flexDirection: 'column',
                gap: '20px'
            }
        }}>
            <div css={{
                flex: '1 1 45%',
                maxWidth: contentMaxWidth,
                textAlign: 'left',
                marginInlineStart: '50px',
                ...(contentMarginEnd ? { marginInlineEnd: contentMarginEnd } : {}),
                '@media (max-width: 768px)': { maxWidth: '100%', marginInlineEnd: '0', flex: '1 1 auto' }
            }}>
                <h3 css={contentHeading}>{heading}</h3>
                <p css={contentBody}>{body}</p>
            </div>
            <div css={{ ...imageWrap, flex: '1 1 50%', '@media (max-width: 768px)': { flex: '1 1 auto', padding: '12px', width: '100%', maxWidth: '100%' } }}>
                <img src={imageSrc} alt={imageAlt} css={imgStyle} />
            </div>
        </div>
    );
}

export default function DevFeatures() {
    return (
        <section css={general}>
                <h2 css={title}>Why developers choose Frontend Mentor</h2>

                <FeatureRow
                    imageSrc={choice1}
                    imageAlt=""
                    heading="Move beyond passive learning"
                    body="Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice."
                    contentMaxWidth="480px"
                    contentMarginEnd="50px"
                />

                <FeatureRow
                    reversed
                    imageSrc={choice2}
                    imageAlt=''
                    heading="Create a portfolio that gets you hired"
                    body='Build impressive projects with professional designs. Recruiters tell us these portfolio pieces consistently "wow" them in interviews by demonstrating real-world capabilities.'
                    contentMaxWidth="420px"
                />

                <FeatureRow
                    imageSrc={choice3}
                    imageAlt=""
                    heading="Master AI-powered development workflows"
                    body="Practice with AI tools that 76% of developers use daily. Learn to work effectively with Cursor, GitHub Copilot, ChatGPT, and other assistants while maintaining code quality and problem-solving skills."
                    contentMaxWidth="420px"
                    contentMarginEnd="110px"
                />

                <FeatureRow
                    reversed
                    imageSrc={choice4}
                    imageAlt=""
                    heading="Join a supportive developer community"
                    body="Connect with peers for code reviews, career advice, and friendship. Beat imposter syndrome alongside developers who understand your journey, guided by mentors who've walked this path."
                    contentMaxWidth="420px"
                />
        </section>
    )
}