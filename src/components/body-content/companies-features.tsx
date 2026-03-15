import { colors } from '@shared/colors';
import Button from '@shared/button';
import { type ReactNode } from 'react';
import choice1 from '@assets/images/home-why-1.webp';
import choice2 from '@assets/images/home-why-2.webp';

interface CompanyFeatureItem {
    id: string;
    topic: string;
    heading: string;
    body: string;
    ctaLabel: string;
    imageSrc: string;
    imageAlt: string;
    reversed?: boolean;
}

interface CompanyFeatureRowProps {
    reversed?: boolean;
    children: ReactNode | ((props: { reversed: boolean }) => ReactNode);
}

interface CompanyFeatureContentProps {
    topic: string;
    heading: string;
    body: string;
    ctaLabel: string;
    renderAction?: (props: { ctaLabel: string }) => ReactNode;
}

interface CompanyFeatureImageProps {
    imageSrc: string;
    imageAlt: string;
}

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
}
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
}

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
}

const rowDirectionStyles = (reversed: boolean) => ({
    ...row,
    flexDirection: reversed ? ('row-reverse' ) : ('row' ),
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '20px'
    }
})

const imageWrap = {
    borderRadius: "20px",
    padding: "32px",
    maxWidth: "800px",
    width: "100%",
    '@media (max-width: 768px)': {
        padding: '12px'
    }
}

const kickerStyle = {
    color: colors.purple,
    fontStyle: 'italic',
    fontWeight:'700',
    fontSize:'28px',
    '@media (max-width: 768px)': { fontSize: '16px' }
}

const subHeadingStyle = {
    fontSize:'32px',
    '@media (max-width: 768px)': { fontSize: '22px' }
}

const bodyStyle = {
    color: colors.darkGrey,
    fontSize:'16px',
    fontWeight: '500',
    paddingBlockEnd: '24px',
    '@media (max-width: 768px)': { fontSize: '15px', paddingBlockEnd: '16px' }
}

const btnStyle = {
    width: '45%',
    color: colors.Main_white,
    fontSize: '16px',
    padding: '16px 28px',
    '@media (max-width: 768px)': { width: '100%' }
}

const contentWrap = {
    maxWidth: '620px',
    marginInlineStart: '20px',
    '@media (max-width: 768px)': { maxWidth: '100%' }
}

const imgStyle = {
    width: "100%",
    display: "block",
    borderRadius: "12px",
    maxWidth: '600px',
    maxHeight: '450px',
    '@media (max-width: 768px)': { maxWidth: '100%', height: 'auto' }
} 

const companyFeatures: CompanyFeatureItem[] = [
    {
        id: 'engineering-teams',
        imageSrc: choice1,
        imageAlt: '',
        topic: 'Engineering teams',
        heading: 'Train junior developers with real projects',
        body: 'Skip theoretical tutorials. Give your junior developers 100+ real-world challenges that build practical skills faster than traditional training programs.',
        ctaLabel: 'EXPLORE TEAMS',
    },
    {
        id: 'hiring-teams',
        reversed: true,
        imageSrc: choice2,
        imageAlt: '',
        topic: 'HIRING TEAMS',
        heading: 'Discover junior talent through skills, not resumes',
        body: "See real code and live projects upfront, then connect directly with developers who've demonstrated the skills and passion you need.",
        ctaLabel: 'EXPLORE HIRING',
    },
];

function CompanyFeatureRow({ reversed = false, children }: CompanyFeatureRowProps) {
    return <div css={rowDirectionStyles(reversed)}>{typeof children === 'function' ? children({ reversed }) : children}</div>;
}

function CompanyFeatureContent({
    topic,
    heading,
    body,
    ctaLabel,
    renderAction,
}: CompanyFeatureContentProps) {
    const defaultAction = <Button style={btnStyle}>{ctaLabel}</Button>;

    return (
        <div css={contentWrap}>
            <p css={kickerStyle}>{topic}</p>
            <h1 css={subHeadingStyle}>{heading}</h1>
            <p css={bodyStyle}>{body}</p>
            {renderAction ? renderAction({ ctaLabel }) : defaultAction}
        </div>
    );
}

function CompanyFeatureImage({ imageSrc, imageAlt }: CompanyFeatureImageProps) {
    return (
        <div css={imageWrap}>
            <img src={imageSrc} alt={imageAlt} css={imgStyle} />
        </div>
    );
}

const CompanyFeature = {
    Row: CompanyFeatureRow,
    Content: CompanyFeatureContent,
    Image: CompanyFeatureImage,
};

export default function CompaniesFeatures() {
    return (
        <section css={general}>
            <h2 css={title}>For companies</h2>

            {companyFeatures.map((feature) => (
                <CompanyFeature.Row key={feature.id} reversed={feature.reversed}>
                    {() => (
                        <>
                            <CompanyFeature.Content
                                topic={feature.topic}
                                heading={feature.heading}
                                body={feature.body}
                                ctaLabel={feature.ctaLabel}
                                renderAction={({ ctaLabel }) => <Button style={btnStyle}>{ctaLabel}</Button>}
                            />
                            <CompanyFeature.Image imageSrc={feature.imageSrc} imageAlt={feature.imageAlt} />
                        </>
                    )}
                </CompanyFeature.Row>
            ))}
        </section>
    );
}