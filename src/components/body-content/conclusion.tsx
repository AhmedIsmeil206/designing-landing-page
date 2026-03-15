import { colors } from '@shared/colors';
import Button from '@shared/button';
import { githubMark } from '@shared/icons';

interface CtaBlockProps {
    heading: string;
    description: string;
    buttonLabel: string;
}

const githubIconStyles = {
    width: '18px',
    height: '18px',
    fill: colors.Main_white,
    marginLeft: '10px'
};
const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colors.lightGray,
    paddingBlock: '80px',
    paddingInline: '40px',
    marginInline: '56px',
    width: '65%',
    borderRadius: '16px',
    '@media (max-width: 768px)': {
        width: '90%',
        marginInline: '20px',
        paddingBlock: '32px',
        paddingInline: '20px'
    }
}
const contentStyle = {
    width: '50%',
    fontSize: '36px',
    fontWeight: '600',
    marginBottom: '24px',
    textAlign: 'center',
    '@media (max-width: 768px)': {
        width: '100%',
        fontSize: '22px',
        marginBottom: '12px'
    }
}
const paragraphStyle = {
    width: '60%',
    fontSize: '18px',
    fontWeight: '400',
    marginBottom: '40px',
    color: colors.darkGrey,
    textAlign: 'center',
    '@media (max-width: 768px)': {
        width: '100%',
        fontSize: '15px',
        marginBottom: '20px'
    }
}

const outerWrapStyle = {
    padding: '80px 30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 768px)': { padding: '32px 20px' },
};

const buttonStyle = {
    fontSize: '16px',
    padding: '16px 28px',
    fontStyle: 'italic',
    fontWeight: '700',
    '@media (max-width: 768px)': { fontSize: '14px', padding: '13px 22px' },
    '@media (max-width: 480px)': { fontSize: '12px', padding: '11px 18px' },
};

const conclusionContent: CtaBlockProps = {
    heading: 'Join 1,137,529 people building portfolio-worthy projects',
    description:
        'Our highly supportive, positive community is here to help you improve your skills. We all try to help each other out wherever possible. We\'d love to welcome you to our community!',
    buttonLabel: 'LOG IN WITH GITHUB',
};

function ConclusionCtaBlock({ heading, description, buttonLabel }: CtaBlockProps) {
    return (
        <div css={containerStyle}>
            <h2 css={contentStyle}>{heading}</h2>
            <p css={paragraphStyle}>{description}</p>
            <Button variant="redButton" style={buttonStyle}>
                {buttonLabel}
                <svg css={githubIconStyles} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={githubMark}/>
                </svg>
            </Button>
        </div>
    );
}

export default function ConclusionPart() {
    return (
        <div css={outerWrapStyle}>
            <ConclusionCtaBlock
                heading={conclusionContent.heading}
                description={conclusionContent.description}
                buttonLabel={conclusionContent.buttonLabel}
            />
        </div>
    )
}