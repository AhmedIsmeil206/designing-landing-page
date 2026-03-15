import Button from '@shared/button';
import { colors } from '@shared/colors';
import { githubMark } from '@shared/icons';
import homeHero from '@assets/logos/home-hero.webp';
import kevinAvatar from '@assets/logos/home-avatar-kevin.webp';
import jessicaAvatar from '@assets/logos/home-avatar-jessica.webp';
import cssTricksLogo from '@assets/logos/css-tricks.png';
import stackOverflowLogo from '@assets/logos/stack-over-flow.png';
import productHuntLogo from '@assets/logos/product-hunt.png';

interface TestimonialItem {
    id: string;
    quote: string;
    name: string;
    role: string;
    avatar: string;
    quoteMarginBottom: string;
    nameGap: string;
}

interface FeaturedBrand {
    id: string;
    logo: string;
    alt: string;
}

const githubIconStyles = {
    width: "18px",
    height: "18px",
    fill: colors.Main_white,
    marginLeft: "10px",
};

const div = {
    padding: "48px clamp(20px, 6%, 120px)",
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "1480px",
    margin: "0 auto",
    justifyContent: "space-around",
    '@media (max-width: 1024px)': {
        padding: "48px 32px",
        flexDirection: "column",
        gap: "32px",
    },
    '@media (max-width: 768px)': {
        padding: "24px 20px",
        gap: "20px",
        flexDirection: "column"
    }
};
const header = {
    display:'flex',
    textAlign:"start",
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    marginBottom: "16px",
    color: colors.black,
    fontStyle: "italic",
};

const title = {
    fontSize: "48px",
    lineHeight: "1.15",
    color: colors.purple,
    fontWeight: "500",
    marginBottom: "18px",
    textAlign: "start",
    '@media (max-width: 768px)': {
        fontSize: "28px",
        lineHeight: "1.2",
        marginBottom: "12px"
    }
};
const description = {
    width: "100%",
    fontSize: "22px",
    lineHeight: "1.65",
    color: colors.darkGrey,
    marginBottom: "28px",
    textAlign: "start",
    '@media (max-width: 768px)': {
        fontSize: "16px",
        lineHeight: "1.5",
        marginBottom: "20px"
    }
};
const heroImage = {
    display: "block",
    borderRadius: "22px",
    width: "480px",
    height: "550px",
    '@media (max-width: 768px)': {
        width: "100%",
        height: "auto",
        maxWidth: "100%"
    }
};

const proBannerdiv = {
    background: colors.darkPurple,
    paddingInline: "30px",
    borderRadius: "16px",
    margin: "0 auto",
    maxWidth: "1200px",
    width: "calc(100% - 48px)",
    minHeight: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    '@media (max-width: 768px)': {
        flexDirection: "column",
        gap: "12px",
        width: "calc(100% - 40px)",
        paddingBlock: "20px",
        paddingInline: "20px",
        textAlign: "center"
    }
};

const testimonialsGrid = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
    maxWidth: "1150px",
    width: "100%",
    margin: "0 auto",
    '@media (max-width: 768px)': {
        gridTemplateColumns: "1fr",
        gap: "16px",
    }
};

const testimonialCard = {
    background: colors.Main_white,
    padding: "0px 16px",
    borderRadius: "12px",
    width: "100%",
    border: `1px solid ${colors.grey}`,
    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.05)",
};

const testimonialAvatar = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
};

const featuredGrid = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap:"32px",
    maxWidth: "100%",
    margin: "0 auto",
    '@media (max-width: 768px)': {
        gridTemplateColumns: "1fr",
        gap: "16px"
    }
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
    width: "400px",
    '@media (max-width: 768px)': {
        width: "100%",
        maxWidth: "100%"
    }
}

const heroActions = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    marginTop: '28px',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
        '& button': {
            width: '100%'
        }
    }
};

const primaryButtonStyle = {
    fontSize: '16px',
    padding: '16px 28px',
    fontStyle: 'italic',
    fontWeight: '700',
    '@media (max-width: 768px)': { fontSize: '14px', padding: '13px 22px' },
    '@media (max-width: 480px)': { fontSize: '12px', padding: '11px 18px' }
};

const secondaryButtonStyle = {
    fontSize: '16px',
    padding: '16px 28px',
    fontStyle: 'italic',
    fontWeight: '700',
    border:`2px solid ${colors.grey}`,
    '@media (max-width: 768px)': { fontSize: '14px', padding: '13px 22px' },
    '@media (max-width: 480px)': { fontSize: '12px', padding: '11px 18px' }
};

const featuredLogoImgStyle = { maxWidth: '100%', height: 'auto' };

const testimonials: TestimonialItem[] = [
    {
        id: 'kevin',
        quote:
            '"I highly recommend Frontend Mentor. Skip the search for project ideas and dive into ready-made challenges that help you level up as a developer."',
        name: 'Kevin Powell',
        role: 'Web Developer & YouTuber',
        avatar: kevinAvatar,
        quoteMarginBottom: '24px',
        nameGap: '4px',
    },
    {
        id: 'jessica',
        quote:
            '"Frontend Mentor is a win-win. You can sharpen your skills building websites and add finished projects to your portfolio to help land a job!"',
        name: 'Jessica Chan',
        role: 'Web Developer & YouTuber',
        avatar: jessicaAvatar,
        quoteMarginBottom: '10px',
        nameGap: '6px',
    },
];

const featuredBrands: FeaturedBrand[] = [
    { id: 'css-tricks', logo: cssTricksLogo, alt: 'CSS-Tricks' },
    { id: 'stack-overflow', logo: stackOverflowLogo, alt: 'Stack Overflow' },
    { id: 'product-hunt', logo: productHuntLogo, alt: 'Product Hunt' },
];

function HeroActions() {
    return (
        <div css={heroActions}>
            <Button variant="redButton" style={primaryButtonStyle} >
                START BUILDING FREE
                <svg css={githubIconStyles} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={githubMark} />
                </svg>
            </Button>

            <Button variant="Main_whiteButton" style={secondaryButtonStyle}>
                BROWSE CHALLENGES
            </Button>
        </div>
    );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
    return (
        <div css={testimonialCard}>
            <p css={{fontSize: '20px', lineHeight: '1.6', fontWeight:'500', textAlign:'left', color: colors.black, marginBottom: item.quoteMarginBottom}}>
                {item.quote}
            </p>
            <div css={{display: 'flex', alignItems: 'center', gap: '12px', paddingBlockEnd: '16px'}}>
                <img src={item.avatar} alt={item.name} css={testimonialAvatar} />
                <div css={{display: 'flex', flexDirection: 'column', gap: item.nameGap, justifyContent:'center', alignItems:'flex-start', paddingBlock: '18px'}}>
                    <div css={{fontSize: '18px', fontWeight: '900', color: colors.darkPurple, fontStyle:'bold'}}>{item.name}</div>
                    <div css={{fontSize: '12px', color: colors.darkGrey}}>{item.role}</div>
                </div>
            </div>
        </div>
    );
}

function FeaturedBrandCard({ item }: { item: FeaturedBrand }) {
    return (
        <div css={featuredCard}>
            <img src={item.logo} alt={item.alt} css={featuredLogoImgStyle} />
        </div>
    );
}

export default function Introduction() {

return (
    <>
        <div css={div}>
            <div css={{maxWidth: "600px" , padding:'80px 30px', '@media (max-width: 768px)': { padding: '24px 0', maxWidth: '100%' }}}>
                <div css={header}>For learners</div>
                <h1 css={title}>
                    Front-end and full-stack coding challenges that build real skills and
                    help get you hired
                </h1>
                <p css={description}>
                    Frontend Mentor provides professional design-to-code challenges that mirror real-world development work. Join <span css={{color: colors.purple, fontWeight: "700", fontStyle:'bold'}}>1,137,036</span> developers building portfolio projects that impress employers.
                </p>
                <HeroActions />
            </div>

            <div css={{ flex: "0 0 520px", '@media (max-width: 768px)': { flex: '1', width: '100%', maxWidth: '100%' }}}>
                <img src={homeHero} alt="Frontend Mentor hero" css={heroImage} />
            </div>
        </div>

        <div css={proBannerdiv}>
            <div css={{display: "flex", textAlign: "left", flexDirection: "column"}}>
                <h2 css={{fontSize: "24px", fontWeight: "700", color: colors.Main_white, marginBottom: "12px"}}>
                    Get AI-powered feedback on every solution submission
                </h2>
                <p css={{fontSize: "16px", color: colors.Main_white, marginBlockStart:'-8px'}}>
                    Join thousands of developers getting personalized insights to elevate your front-end and full-stack skills.
                </p>
            </div>
            <Button variant="Main_whiteButton">
                <span css={{color: colors.purple, fontWeight: "700", fontSize: "14px", fontStyle:'italic', padding: "4px 8px"}}>LEARN ABOUT PRO</span>
            </Button>
        </div>

        <div css={{padding: "34px 32px", background: colors.Main_whiteHover, '@media (max-width: 768px)': { padding: '24px 20px' }}}>
            <div css={testimonialsGrid}>
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} item={testimonial} />
                ))}
            </div>
        </div>

        <div css={{ background: colors.Main_whiteHover, marginBlockEnd: "112px", width: '100%', paddingBlock: '48px', paddingInline: '48px', '@media (max-width: 768px)': { marginBlockEnd: '32px', paddingInline: '20px', paddingBlock: '32px' }}}>
            <h2 css={{fontSize: "18px", fontWeight: "900",  textTransform: "uppercase", color: colors.black, marginBottom: "48px", textStyle:'bold'}}>
                As featured on ...
            </h2>
            <div css={featuredGrid}>
                {featuredBrands.map((brand) => (
                    <FeaturedBrandCard key={brand.id} item={brand} />
                ))}
            </div>
        </div>
    </>
)
}