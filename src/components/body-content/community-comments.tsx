import { useState } from 'react';
import { colors } from '@shared/colors';
import { carouselArrowLeft, carouselArrowRight } from '@shared/icons';

interface CommunityMembersProps {
    id: number;
    name: string;
    handle: string;
    avatar: string;
    comment: string;
}

interface NavArrowButtonProps {
    onClick: () => void;
    disabled: boolean;
    path: string;
}

const communityCommentsStyle = {
    backgroundColor: colors.lightGray,
    padding: '64px 20px',
    width: '100%',
    '@media (max-width: 768px)': {
        padding: '32px 20px'
    }
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '48px',
    paddingInline: '0',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '24px'
    }
};

const titleStyle = {
    fontSize: '36px',
    fontWeight: '800',
    color: colors.black,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '@media (max-width: 768px)': {
        fontSize: '20px',
        textAlign: 'center',
        paddingInlineStart: '0'
    }
};

const getNavButtonStyle = (isDisabled: boolean) => ({
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: isDisabled ? colors.darkGrey : colors.purple,
    color: colors.Mainwhite,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: isDisabled ? colors.darkGrey : colors.darkPurple
    }
})

const getCarouselTrackStyle = (currentIndex: number) => ({
    display: 'flex',
    gap: '24px',
    transition: 'transform 0.5s ease-in-out',
    transform: `translateX(calc(-${currentIndex} * (calc(33.333% + 16px))))`
})

const cardCommentStyle = {
    flex: '0 0 calc(33.333% - 16px)',
    backgroundColor: colors.Mainwhite,
    borderRadius: '12px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '340px',
    '@media (max-width: 768px)': {
        flex: '0 0 100%',
        minHeight: 'auto',
        padding: '20px'
    }
};

const commentTextStyle = {
    fontSize: '18px',
    color: colors.darkGrey,
    margin: '0 0 24px 0',
    fontWeight: '500',
    textAlign:'left',
    lineHeight: '1.6',
    '@media (max-width: 768px)': {
        fontSize: '16px'
    }
};

const imgStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover'
};

const userNameStyle = {
    margin: 0,
    fontSize: '16px',
    fontWeight: '700',
    color: colors.purple,
    marginBottom: '2px'
};

const headerActionsStyle = {
    display: 'flex',
    gap: '12px',
    '@media (max-width: 768px)': { marginInlineEnd: '0' }
};

const sectionContainerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    paddingInline: 'clamp(20px, 5%, 80px)'
};

const carouselViewportStyle = {
    overflow: 'hidden',
    '@media (max-width: 768px)': { paddingInline: '0' }
};

const cardFooterStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
};

const memberHandleStyle = {
    margin: 0,
    fontSize: '14px',
    color: colors.darkGrey,
    fontWeight: '400'
};

function NavArrowButton({ onClick, disabled, path }: NavArrowButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} css={getNavButtonStyle(disabled)}>
            <svg width="40" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d={path} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    );
}

function CommunityMemberCard({ member }: { member: CommunityMembersProps }) {
    return (
        <div css={cardCommentStyle}>
            <p css={commentTextStyle}>{member.comment}</p>
            <div css={cardFooterStyle}>
                <img src={member.avatar} alt={`${member.name}'s avatar`} css={imgStyle} />
                <div>
                    <h3 css={userNameStyle}>{member.name}</h3>
                    <p css={memberHandleStyle}>{member.handle}</p>
                </div>
            </div>
        </div>
    );
}

const members: CommunityMembersProps[] = [
    {
        id: 1,
        name: 'Francesca',
        handle: '@frrann',
        avatar: '/src/assets/community-avatars/home-avatar-francesca.webp',
        comment: 'This platform provides everything developers need to improve their skills. The community is great, and the challenges keep me motivated, instill accountability through regular submissions, and allow me to build a professional portfolio by showcasing diverse projects.'
    },
    {
        id: 2,
        name: 'Alfie',
        handle: '@alfiemitchell123',
        avatar: '/src/assets/community-avatars/home-avatar-alfie.webp',
        comment: 'Frontend Mentor eliminated the hurdle of sourcing designs, letting me focus on development. Their professional projects, especially in the Pro subscription, challenge me to create complex, multi-page websites. With a supportive community and feedback from advanced programmers, my skills have been elevated to new heights.'
    },
    {
        id: 3,
        name: 'Hikmah',
        handle: '@Hikmahx',
        avatar: '/src/assets/community-avatars/home-avatar-hikmah.webp',
        comment: 'Frontend Mentor transformed me from a newbie to a professional developer, enabling me to create flawless, responsive, accessible websites. It\'s a superb platform for feedback with a supportive community backing your growth. Through it, I evolved from a frontend to a full-stack developer.'
    },
    {
        id: 4,
        name: 'Nuel',
        handle: '@ijklmopffs',
        avatar: '/src/assets/community-avatars/home-avatar-nuel.webp',
        comment: 'Frontend Mentor has helped tremendously. Working on the newbie challenges really helped me get better at building layouts. Also, it increased my JavaScript skills. Working with APIs, DOM manipulation, and so on greatly increased my knowledge. Would totally recommend it.'
    },
    {
        id: 5,
        name: 'Michelle',
        handle: '@maberizk',
        avatar: '/src/assets/community-avatars/home-avatar-michelle.webp',
        comment: 'After completing a software bootcamp, Frontend Mentor let me build real-world projects, strengthening my developer skills. I wouldn\'t be where I am today without it.'
    },
    {
        id: 6,
        name: 'Arturo',
        handle: '@artimys',
        avatar: '/src/assets/community-avatars/home-avatar-arturo.webp',
        comment: 'As a backend developer, I sought to improve my frontend skills. Frontend Mentor provided beautifully designed challenges, allowing me to progress from simple components to advanced responsive web pages. Enough can\'t be said about the community members. Their feedback has been invaluable in my journey to becoming a better developer.'
    },
    {
        id: 7,
        name: 'Shashikant',
        handle: '@shashikantdev3',
        avatar: '/src/assets/community-avatars/home-avatar-shashikant.webp',
        comment: 'Frontend Mentor offers invaluable real-world web development challenges, sharpening my HTML, CSS, and JavaScript skills. The structured feedback, solutions, and vibrant community have significantly impacted my learning and growth. It\'s both a skill-building platform and a community hub for web developers.'
    },
    {
        id: 8,
        name: 'Marit',
        handle: '@Maritxx',
        avatar: '/src/assets/community-avatars/home-avatar-marit.webp',
        comment: 'I began my frontend journey with Frontend Mentor\'s newbie challenges and progressed to more complex projects. Some of the complex ones are now even in my portfolio! The supportive community and the dedication of the Frontend Mentor team are unmatched. I highly recommend it for newcomers and those keen on improving their skills.'
    }
];

export default function CommunityComments() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerView = 3;
    const maxIndex = members.length - cardsPerView;
    const isAtStart = currentIndex === 0;
    const isAtEnd = currentIndex >= maxIndex;

    const handlePrev = () => {
        setCurrentIndex((prev) => prev === 0 ? 0 : prev - 1);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => prev >= maxIndex ? maxIndex : prev + 1);
    };

    return (
        <section css={communityCommentsStyle}>
            <div css={sectionContainerStyle}>
                <div css={headerStyle}>
                    <h2 css={titleStyle}>A little <span css={{fontSize: '40px', '@media (max-width: 768px)': { fontSize: '20px' }}}>❤️</span> from our community</h2>
                    <div css={headerActionsStyle}>
                        <NavArrowButton onClick={handlePrev} disabled={isAtStart} path={carouselArrowLeft} />
                        <NavArrowButton onClick={handleNext} disabled={isAtEnd} path={carouselArrowRight} />
                    </div>
                </div>

                <div css={carouselViewportStyle}>
                    <div css={getCarouselTrackStyle(currentIndex)}>
                        {members.map((member) => (
                            <CommunityMemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}