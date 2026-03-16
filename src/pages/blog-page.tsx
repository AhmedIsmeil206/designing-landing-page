import { colors } from '@shared/colors';
import MarketingFooter from '@shared/marketing-footer';
import MarketingHeader from '@components/shared/marketing-nav-bar';

import evaluateImage from '@assets/blogs/evaluate.png';
import hireDevelopersImage from '@assets/blogs/hire-developers.png';
import hiringPlatformImage from '@assets/blogs/hiring-platform.png';
import implementImage from '@assets/blogs/implement.png';
import recruitImage from '@assets/blogs/recruit.png';
import authorAvatar from '@assets/logos/home-avatar-kevin.webp';
import { Trans } from 'react-i18next';

interface BlogArticle {
    id: string;
    category: string;
    title: string;
    excerpt: string;
    image: string;
    imageAlt: string;
    authorName: string;
    authorAvatar: string;
    publishedAt: string;
}

const pillStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '999px',
    padding: '6px 10px',
    backgroundColor: colors.babyPurple,
    color: colors.purple,
    fontSize: '13px',
    fontWeight: '800',
};

const authorRowStyles = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '14px',
    color: colors.black,
    fontSize: '15px',
    fontWeight: '700',
};

const authorAvatarStyles = {
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: `2px solid ${colors.Main_white}`,
    boxShadow: `0 6px 18px ${colors.white}`,
};

const cardStyles = {
    display: 'grid',
    gap: '30px',
    alignItems: 'center',
    color: colors.black,
};

const cardImageStyles = {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    borderRadius: '26px',
    boxShadow: `0 18px 48px ${colors.lightPurple}`,
};

const featuredImageWrapStyles = {
    minHeight: '320px',
    '@media (max-width: 768px)': {
        minHeight: '240px',
    },
};

const regularImageWrapStyles = {
    Height: '250px',
    cursor: 'pointer',
};

const contentStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    gap: '18px',
};

const featuredTitleStyles = {
    margin: 0,
    fontSize: 'clamp(36px, 3.8vw, 60px)',
    color: colors.purple,
};

const regularTitleStyles = {
    margin: 0,
    fontSize: 'clamp(26px, 2vw, 37px)',
    color: colors.black,
};

const excerptStyles = {
    margin: 0,
    fontSize: 'clamp(16px, 1.4vw, 22px)',
    color: colors.black,
    maxWidth: '576px',
};

function CategoryPill({ label }: { label: string }) {
    return <span css={pillStyles}>{label}</span>;
}

function AuthorMeta({ avatar, name, date }: { avatar: string; name: string; date: string }) {
    return (
        <div css={authorRowStyles}>
            <img src={avatar} alt={name} css={authorAvatarStyles} />
            <span>{name}</span>
            <span css={{ color: colors.black, opacity: 0.8 }}>{date}</span>
        </div>
    );
}

function BlogArticleCard({
    article,
    featured = false,
}: {
    article: BlogArticle;
    featured?: boolean;
}) {
    return (
        <article
            css={{
                ...cardStyles,
                gridTemplateColumns: featured ? 'minmax(0, 1.15fr) minmax(0, 1fr)' : '1fr',
                '@media (max-width: 960px)': {
                    gridTemplateColumns: '1fr',
                },
            }}
        >
            <div css={featured ? featuredImageWrapStyles : regularImageWrapStyles}>
                <img src={article.image} alt={article.imageAlt} css={cardImageStyles} />
            </div>

            <div css={contentStyles}>
                <CategoryPill label={article.category} />
                <h2 css={featured ? featuredTitleStyles : regularTitleStyles}>{article.title}</h2>
                <p css={excerptStyles}>{article.excerpt}</p>
                <AuthorMeta
                    avatar={article.authorAvatar}
                    name={article.authorName}
                    date={article.publishedAt}
                />
            </div>
        </article>
    );
}

const featuredArticle: BlogArticle = {
    id: 'evaluate-developers',
    category: 'Hiring',
    title: 'How to evaluate developers in the vibe coding era',
    excerpt:
        "AI lets candidates submit working code without understanding it. Here's how to update your hiring process to test what vibe coding can't fake.",
    image: evaluateImage,
    imageAlt: 'How to evaluate developers in the vibe coding era',
    authorName: 'Matt Studdert',
    authorAvatar,
    publishedAt: '17 Dec 2025',
};

const articleCards: BlogArticle[] = [
    {
        id: 'recruit-tech-talent',
        category: 'Hiring',
        title: 'How to recruit tech talent (7 strategies and best practices)',
        excerpt:
            'A practical breakdown of the sourcing, screening, and process design tactics strong hiring teams use to reach better developer candidates.',
        image: recruitImage,
        imageAlt: 'How to recruit tech talent',
        authorName: 'Matt Studdert',
        authorAvatar,
        publishedAt: '31 Oct 2024',
    },
    {
        id: 'best-tech-hiring-platforms',
        category: 'Hiring',
        title: '8 best tech hiring platforms today',
        excerpt:
            'A side-by-side look at the platforms teams use to reach vetted engineering talent faster without sacrificing screening quality.',
        image: hiringPlatformImage,
        imageAlt: '8 best tech hiring platforms today',
        authorName: 'Matt Studdert',
        authorAvatar,
        publishedAt: '15 Aug 2024',
    },
    {
        id: 'skills-based-hiring',
        category: 'Hiring',
        title: 'How to implement skills-based hiring in tech',
        excerpt:
            'Move from credential filters to evidence-based evaluation with a process that tests real capability and reduces hiring noise.',
        image: implementImage,
        imageAlt: 'How to implement skills-based hiring in tech',
        authorName: 'Matt Studdert',
        authorAvatar,
        publishedAt: '4 Jul 2024',
    },
    {
        id: 'where-to-hire-developers',
        category: 'Hiring',
        title: 'Where to hire developers: 11 best platforms to try',
        excerpt:
            'Discover the best developer hiring platforms on the market today. Learn what are the best platforms to hire developers.',
        image: hireDevelopersImage,
        imageAlt: 'Where to hire developers: 11 best platforms to try',
        authorName: 'Matt Studdert',
        authorAvatar,
        publishedAt: '4 Jul 2024',
    },
];

const pageStyles = {
    minHeight: '100vh',
    backgroundColor: colors.Main_white,
};

const heroSectionStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '56px 24px 88px',
    '@media (max-width: 768px)': {
        padding: '34px 20px 56px',
    },
};

const gridSectionStyles = {
    backgroundColor: colors.Main_whiteHover,
    borderBlockStart: `1px solid ${colors.grey}`,
    borderBlockEnd: `1px solid ${colors.grey}`,
};

const gridInnerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '72px 24px 90px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '56px 34px',
    '@media (max-width: 1120px)': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        padding: '48px 20px 64px',
        gap: '42px',
    },
};

export default function BlogPage() {
    return (
        <div css={pageStyles}>
            <MarketingHeader />

            <main>
                <section css={heroSectionStyles}>
                    <BlogArticleCard article={featuredArticle} featured />
                </section>

                <section css={gridSectionStyles}>
                    <div css={gridInnerStyles}>
                        {articleCards.map((article) => (
                            <BlogArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </section>
            </main>

            <MarketingFooter />
        </div>
    );
}
