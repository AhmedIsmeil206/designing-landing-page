import { useMemo, useState } from 'react';
import { colors } from '@shared/colors';
import Button from '@shared/button';
import MarketingFooter from '@shared/marketing-footer';
import MarketingHeader from '@components/shared/marketing-nav-bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleInfo, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import visaLogo from '@assets/logos/purchase/visa.webp';
import mastercardLogo from '@assets/logos/purchase/mastercard.webp';
import amexLogo from '@assets/logos/purchase/amex.webp';
import maestroLogo from '@assets/logos/purchase/maestro.webp';

type BillingCycle = 'monthly' | 'yearly';

interface FeatureRow {
    id: string;
    name: string;
    starter: string;
    growth: string;
    business: string;
    boldInBusiness?: boolean;
}

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}
interface Plan {
    id: string;
    name: string;
    oldPrice: string;
    price: string;
    discountLabel: string;
    monthlyLabel: string;
}

const monthlyPlans: Plan[] = [
    {
        id: 'starter',
        name: 'Starter',
        oldPrice: '49 US$/mo',
        price: '١٩,٦ US$/mo',
        discountLabel: '60% OFF',
        monthlyLabel: 'Billed monthly',
    },
    {
        id: 'growth',
        name: 'Growth',
        oldPrice: '99 US$/mo',
        price: '٣٩,٦ US$/mo',
        discountLabel: '60% OFF',
        monthlyLabel: 'Billed monthly',
    },
    {
        id: 'business',
        name: 'Business',
        oldPrice: '179 US$/mo',
        price: '٧١,٦ US$/mo',
        discountLabel: '60% OFF',
        monthlyLabel: 'Billed monthly',
    },
];

const yearlyPlans: Plan[] = [
    {
        id: 'starter',
        name: 'Starter',
        oldPrice: '14 US$/mo',
        price: '١١,٦ US$/mo',
        discountLabel: '60% OFF',
        monthlyLabel: '١٣٩,٢ US$ billed yearly',
    },
    {
        id: 'growth',
        name: 'Growth',
        oldPrice: '8 US$/mo',
        price: '٢٣,٦ US$/mo',
        discountLabel: '60% OFF',
        monthlyLabel: '٢٨٣,٢ US$ billed yearly',
    },
    {
        id: 'business',
        name: 'Business',
        oldPrice: '18 US$/mo',
        price: '٤٧,٦ US$/mo',
        discountLabel: '60% OFF',
        monthlyLabel: '٥٧١,٢ US$ billed yearly',
    },
];

const featureRows: FeatureRow[] = [
    {
        id: 'team-members',
        name: 'Team members',
        starter: '1 member',
        growth: '5 members',
        business: '10 members',
        boldInBusiness: true,
    },
    {
        id: 'message-candidates',
        name: 'Message candidates',
        starter: '20 per month',
        growth: '50 per month',
        business: '100 per month',
        boldInBusiness: true,
    },
    {
        id: 'high-intent',
        name: 'Access a high-intent talent pool',
        starter: 'check',
        growth: 'check',
        business: 'check',
    },
    {
        id: 'searches',
        name: 'Unlimited searches',
        starter: 'check',
        growth: 'check',
        business: 'check',
    },
    {
        id: 'featured-projects',
        name: 'Review featured projects',
        starter: 'check',
        growth: 'check',
        business: 'check',
    },
    {
        id: 'salary',
        name: 'Transparent salary expectations',
        starter: 'check',
        growth: 'check',
        business: 'check',
    },
    {
        id: 'hires',
        name: 'Unlimited hires',
        starter: 'check',
        growth: 'check',
        business: 'check',
    },
];

const accountBillingFaqs: FaqItem[] = [
    {
        id: 'trial',
        question: 'How does the free trial work?',
        answer: 'You get full access for 14 days with 10 message credits. You can cancel anytime before renewal.',
    },
    {
        id: 'upgrade',
        question: 'How do I upgrade or downgrade my plan?',
        answer: 'Switching plans is available from billing settings, and your balance is prorated automatically.',
    },
    {
        id: 'renew',
        question: 'Does the subscription auto-renew?',
        answer: 'Yes, subscriptions renew automatically at the end of each cycle unless canceled beforehand.',
    },
    {
        id: 'refund',
        question: 'Do you offer refunds?',
        answer: 'Refund requests are reviewed case-by-case according to billing terms and local payment regulations.',
    },
    {
        id: 'cancel',
        question: 'How do I cancel my subscription?',
        answer: 'Open your account billing section and use the cancel action. Access remains active until period end.',
    },
    {
        id: 'expires',
        question: 'What happens when my subscription expires?',
        answer: 'Your account remains accessible with reduced limits until you reactivate a paid subscription.',
    },
    {
        id: 'payment-fail',
        question: 'What happens if my payment fails?',
        answer: 'We retry the charge and notify account owners so they can update payment details before suspension.',
    },
];

const teamFaqs: FaqItem[] = [
    {
        id: 'invite-team',
        question: 'Can I invite the rest of my hiring team to collaborate with me?',
        answer: 'Yes. Invite teammates by role and share candidate pipelines across your workspace.',
    },
    {
        id: 'ownership',
        question: 'Can I transfer ownership of the team to another member?',
        answer: 'Owners can transfer ownership to another admin at any time from the team settings panel.',
    },
    {
        id: 'roles',
        question: 'What are the roles within a team, and what do they do?',
        answer: 'Owner and admin roles manage billing and members, while recruiters can review and message candidates.',
    },
];

const creditsFaqs: FaqItem[] = [
    {
        id: 'credits-work',
        question: 'How do message credits work?',
        answer: 'Each outbound first contact to a candidate uses one credit. Replies in the same thread do not.',
    },
    {
        id: 'credits-out',
        question: 'What happens when I run out of credits?',
        answer: 'You can upgrade your plan or wait until the next billing cycle when credits reset.',
    },
];

const paymentLogos = [
    { src: visaLogo, alt: 'Visa' },
    { src: mastercardLogo, alt: 'Mastercard' },
    { src: amexLogo, alt: 'American Express' },
    { src: maestroLogo, alt: 'Maestro' },
];

const pageStyles = {
    minHeight: '100vh',
    backgroundColor: colors.MainwhiteHover,
};

const tabBarStyles = {
    borderBottom: `1px solid ${colors.grey}`,
    backgroundColor: colors.Mainwhite,
};

const tabInnerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    paddingInline: '24px',
};

const tabStyles = {
    padding: '14px 20px',
    width: 'fit-content',
    borderLeft: `1px solid ${colors.grey}`,
    borderRight: `1px solid ${colors.grey}`,
    borderBottom: `1px solid ${colors.grey}`,
    fontSize: '16px',
    fontWeight: '900',
    textTransform: 'uppercase',
    color: colors.black,
};

const sectionStyles = {
    maxWidth: '1060px',
    margin: '0 auto',
    padding: '56px 24px 36px',
    '@media (max-width: 768px)': {
        padding: '34px 20px 28px',
    },
};

const headingStyles = {
    margin: 0,
    fontSize: '34px',
    color: colors.purple,
    textAlign: 'center',
    '@media (max-width: 768px)': {
        fontSize: '34px',
    },
};

const subtitleStyles = {
    margin: '18px 0 0',
    textAlign: 'center',
    color: colors.black,
    fontSize: '14px',
    fontWeight: '700',
    '@media (max-width: 768px)': {
        fontSize: '16px',
    },
};

const discountBannerStyles = {
    margin: '32px auto 0',
    maxWidth: '560px',
    backgroundColor: colors.purple,
    color: colors.Mainwhite,
    borderRadius: '10px',
    padding: '18px 20px',
    textAlign: 'center',
};

const billingWrapStyles = {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12px',
    fontWeight: '900',
    color: colors.black,
    textTransform: 'capitalize',
};

const switchButtonStyles = {
    width: '42px',
    height: '24px',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: colors.grey,
    cursor: 'pointer',
    padding: '2px',
    transition: 'background-color 0.2s ease',
};

const switchDotStyles = (isYearly: boolean) => ({
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    backgroundColor: colors.Mainwhite,
    transform: isYearly ? 'translateX(18px)' : 'translateX(0)',
    transition: 'transform 0.2s ease',
});

const saveBadgeStyles = {
    fontSize: '11px',
    fontWeight: '900',
    color: colors.Mainwhite,
    backgroundColor: colors.purple,
    borderRadius: '4px',
    padding: '3px 8px',
};

const comparisonWrapStyles = {
    marginBlockStart: '26px',
    display: 'grid',
    gap: '10px',
};

const rowCardStyles = {
    backgroundColor: colors.Mainwhite,
    border: `1px solid ${colors.grey}`,
    borderRadius: '8px',
    overflow: 'hidden',
};

const plansGridStyles = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    minHeight: '180px',
    '@media (max-width: 900px)': {
        gridTemplateColumns: '1fr',
        minHeight: 'unset',
    },
};

const planCellStyles = {
    padding: '20px 14px',
    textAlign: 'center',
};

const planNameStyles = {
    fontSize: '14px',
    fontWeight: '900',
    color: colors.darkGrey,
    textTransform: 'capitalize',
};

const oldPriceStyles = {
    marginBlockStart: '6px',
    color: colors.purple,
    fontSize: '14px',
    textDecoration: 'line-through',
    fontWeight: '500',
    '@media (max-width: 768px)': {
        fontSize: '18px',
    },
};

const currentPriceStyles = {
    marginBlockStart: '8px',
    color: colors.black,
    fontSize: '24px',
    fontWeight: '900',
    width:'100%',
    '@media (max-width: 768px)': {
        fontSize: '34px',
    },
};

const discountPillStyles = {
    marginBlockStart: '6px',
    display: 'inline-block',
    borderRadius: '999px',
    backgroundColor: colors.purple,
    color: colors.Mainwhite,
    fontSize: '11px',
    fontWeight: '800',
    padding: '4px 8px',
};

const billedStyles = {
    marginBlockStart: '6px',
    fontSize: '14px',
    fontWeight: '500',
    color: colors.darkGrey,
    lineHeight: 1.3,
    '@media (max-width: 768px)': {
        fontSize: '13px',
    },
};

const tableRowStyles = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    alignItems: 'center',
    '@media (max-width: 900px)': {
        gridTemplateColumns: '1fr 1fr',
    },
};

const rowTitleStyles = {
    padding: '12px 14px',
    color: colors.black,
    fontWeight: '700',
    fontSize: '13px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
};

const rowValueStyles = {
    padding: '12px 14px',
    color: colors.darkGrey,
    textAlign: 'center',
    fontSize: '13px',
    fontWeight: '600',
};

const ctaRowStyles = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    backgroundColor: colors.Mainwhite,
    '@media (max-width: 900px)': {
        gridTemplateColumns: '1fr',
    },
};

const ctaCellStyles = {
    padding: '12px',
};

const ctaButtonStyles = {
    width: '85%',
    borderRadius: '999px',
    height: '38px',
    fontSize: '11px',
    fontWeight: '900',
};

const paymentLogosWrapStyles = {
    marginBlockStart: '18px',
    marginInline: 'auto',
    width: 'fit-content',
    backgroundColor: colors.lightGray,
    border: `1px solid ${colors.grey}`,
    borderRadius: '8px',
    padding: '14px 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '18px',
    flexWrap: 'wrap',
};

const faqSectionStyles = {
    maxWidth: '760px',
    margin: '68px auto 0',
    padding: '0 24px 70px',
    '@media (max-width: 768px)': {
        marginBlockStart: '44px',
        padding: '0 20px 50px',
    },
};

const faqHeadingStyles = {
    margin: 0,
    textAlign: 'center',
    color: colors.purple,
    fontSize: '46px',
    '@media (max-width: 768px)': {
        fontSize: '32px',
    },
};

const faqGroupTitleStyles = {
    margin: '26px 0 12px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
    fontSize: '14px',
    color: colors.black,
    fontWeight: '900',
};

const faqCardStyles = {
    border: `1px solid ${colors.grey}`,
    borderRadius: '6px',
    backgroundColor: colors.Mainwhite,
};

const faqButtonStyles = {
    width: '100%',
    padding: '12px 14px',
    border: 'none',
    backgroundColor: colors.Mainwhite,
    color: colors.black,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
};

const faqAnswerStyles = {
    padding: '0 14px 14px',
    color: colors.darkGrey,
    fontSize: '14px',
    lineHeight: 1.55,
};

function PlanCell({ plan }: { plan: Plan }) {
    return (
        <div css={planCellStyles}>
            <div css={planNameStyles}>{plan.name}</div>
            <div css={oldPriceStyles}>{plan.oldPrice}</div>
            <div css={currentPriceStyles}>{plan.price}</div>
            <span css={discountPillStyles}>{plan.discountLabel}</span>
            <div css={billedStyles}>{plan.monthlyLabel}</div>
        </div>
    );
}

function FeatureValue({ value, isBold = false }: { value: string; isBold?: boolean }) {
    if (value === 'check') {
        return (
            <FontAwesomeIcon
                icon={faCircleCheck}
                css={{ color: colors.purple, fontSize: '16px' }}
            />
        );
    }

    return (
        <span css={{ fontWeight: isBold ? '900' : '600', color: colors.darkGrey }}>{value}</span>
    );
}

function FaqGroup({ title, items }: { title: string; items: FaqItem[] }) {
    const [openItem, setOpenItem] = useState<string | null>(null);

    return (
        <section>
            <h3 css={faqGroupTitleStyles}>{title}</h3>
            <div css={{ display: 'grid', gap: '8px' }}>
                {items.map((item) => {
                    const isOpen = openItem === item.id;

                    return (
                        <div key={item.id} css={faqCardStyles}>
                            <button
                                type="button"
                                css={faqButtonStyles}
                                onClick={() => setOpenItem(isOpen ? null : item.id)}
                                aria-expanded={isOpen}
                            >
                                <span>{item.question}</span>
                                <FontAwesomeIcon
                                    icon={isOpen ? faMinus : faPlus}
                                    css={{ color: colors.black }}
                                />
                            </button>
                            {isOpen ? <p css={faqAnswerStyles}>{item.answer}</p> : null}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default function PricingPage() {
    const [cycle, setCycle] = useState<BillingCycle>('monthly');

    const plans = useMemo(() => {
        return cycle === 'yearly' ? yearlyPlans : monthlyPlans;
    }, [cycle]);

    const isYearly = cycle === 'yearly';

    return (
        <div css={pageStyles}>
            <MarketingHeader />

            <div css={tabBarStyles}>
                <div css={tabInnerStyles}>
                    <div css={tabStyles}>Pricing</div>
                </div>
            </div>

            <main>
                <section css={sectionStyles}>
                    <h1 css={headingStyles}>Start discovering developers today</h1>
                    <p css={subtitleStyles}>
                        Start a 14-day free trial with 10 message credits. No credit card required.
                    </p>

                    <div css={discountBannerStyles}>
                        <div css={{ fontSize: '24px' }}>🇪🇬</div>
                        <div css={{ fontWeight: '900', fontSize: '18px', marginTop: '4px' }}>
                            Hey! It looks like you are based in Egypt
                        </div>
                        <div css={{ marginTop: '6px', fontSize: '14px', opacity: 0.95 }}>
                            We support Purchasing Power Parity, so a <span css={{ fontWeight: '900' }}>60% discount</span> will be applied
                            automatically at checkout.
                        </div>
                    </div>

                    <div css={billingWrapStyles}>
                        <span>Monthly Billing</span>
                        <button
                            type="button"
                            css={{
                                ...switchButtonStyles,
                                backgroundColor: isYearly ? colors.purple : colors.white,
                            }}
                            onClick={() => setCycle(isYearly ? 'monthly' : 'yearly')}
                            aria-label="Toggle billing cycle"
                        >
                            <div css={switchDotStyles(isYearly)} />
                        </button>
                        <span>Yearly Billing</span>
                        <span css={saveBadgeStyles}>SAVE UP TO 40%</span>
                    </div>

                    <div css={comparisonWrapStyles}>
                        <div css={rowCardStyles}>
                            <div css={plansGridStyles}>
                                <div css={{ padding: '16px 14px' }} />
                                {plans.map((plan) => (
                                    <PlanCell key={plan.id} plan={plan} />
                                ))}
                            </div>
                        </div>

                        {featureRows.map((row) => (
                            <div key={row.id} css={rowCardStyles}>
                                <div css={tableRowStyles}>
                                    <div css={rowTitleStyles}>
                                        <span>{row.name}</span>
                                        <FontAwesomeIcon
                                            icon={faCircleInfo}
                                            css={{ color: colors.darkGrey, fontSize: '11px' }}
                                        />
                                    </div>
                                    <div css={rowValueStyles}>
                                        <FeatureValue value={row.starter} />
                                    </div>
                                    <div css={rowValueStyles}>
                                        <FeatureValue value={row.growth} />
                                    </div>
                                    <div css={rowValueStyles}>
                                        <FeatureValue
                                            value={row.business}
                                            isBold={row.boldInBusiness}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div css={rowCardStyles}>
                            <div css={ctaRowStyles}>
                                <div css={{ padding: '12px 14px' }} />
                                <div css={ctaCellStyles}>
                                    <Button variant="redButton" style={ctaButtonStyles}>
                                        Start Free Trial
                                    </Button>
                                </div>
                                <div css={ctaCellStyles}>
                                    <Button variant="redButton" style={ctaButtonStyles}>
                                        Start Free Trial
                                    </Button>
                                </div>
                                <div css={ctaCellStyles}>
                                    <Button variant="redButton" style={ctaButtonStyles}>
                                        Start Free Trial
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div css={paymentLogosWrapStyles}>
                        {paymentLogos.map((logo) => (
                            <img
                                key={logo.alt}
                                src={logo.src}
                                alt={logo.alt}
                                css={{ height: '22px', objectFit: 'contain' }}
                            />
                        ))}
                    </div>
                </section>

                <section css={faqSectionStyles}>
                    <h2 css={faqHeadingStyles}>Frequently Asked Questions</h2>
                    <FaqGroup title="Account / Billing" items={accountBillingFaqs} />
                    <FaqGroup title="Team" items={teamFaqs} />
                    <FaqGroup title="Message Credits" items={creditsFaqs} />
                </section>
            </main>

            <MarketingFooter />
        </div>
    );
}
