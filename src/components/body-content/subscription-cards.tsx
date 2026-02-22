import { useState } from 'react';
import { colors} from '../shared/colors';
import Button from '../shared/button';

import visaLogo from '../../assets/logos/purchase/visa.webp';
import mastercardLogo from '../../assets/logos/purchase/mastercard.webp';
import amexLogo from '../../assets/logos/purchase/amex.webp';
import maestroLogo from '../../assets/logos/purchase/maestro.webp';
import paypalLogo from '../../assets/logos/purchase/paypal.webp';
import gpayLogo from '../../assets/logos/purchase/gpay.webp';
import { width } from '@fortawesome/free-brands-svg-icons/fa11ty';
import { text } from '@fortawesome/fontawesome-svg-core';

const container = {
    width: '100%',
    padding: '50px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBlockStart: '64px',
    '@media (max-width: 768px)': {
        padding: '24px 20px',
        marginBlockStart: '24px'
    }
}
const ContainerContext = {
    display: 'flex',
    gap: '16px',
    marginBlockEnd: '72px',
    backgroundColor: colors.Main_white,
    borderRadius: '50px',
    padding: '8px',
    border:`1px solid ${colors.grey}`,
    '@media (max-width: 768px)': {
        marginBlockEnd: '24px',
        width: '100%',
        justifyContent: 'center'
    }
}
const context = {
    padding: '16px 24px',
    borderRadius: '50px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '700',
    fontStyle: 'italic',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    '@media (max-width: 768px)': {
        padding: '12px 16px',
        fontSize: '14px'
    }
}
const individualCards = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '32px',
    maxWidth: '1200px',
    width: '100%',
    marginBlockEnd: '64px',
    '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        marginBlockEnd: '24px',
        gap: '20px'
    }
}
const card = {
    backgroundColor: colors.Main_white,
    border: `2px solid ${colors.grey}`,
    borderRadius: '24px',
    paddingInline: '32px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '60%',
    paddingBlockEnd: '20px',
    '@media (max-width: 768px)': {
        width: '100%',
        paddingInline: '24px'
    }
}
const bestValueBadge = {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    backgroundColor: colors.purple,
    color: colors.Main_white,
    padding: '8px',
    borderRadius: '20px 20px 0 0',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '14px',
    fontStyle: 'italic',
    textTransform: 'uppercase',
}
const cardTitle = {
    fontSize: '22px',
    fontWeight: '700',
    marginBlockEnd: '24px',
    textAlign: 'center',
    color: colors.black,
}

const priceOld = {
    fontSize: '18px',
    color: colors.darkGrey,
    textDecoration: 'line-through',
    display: 'block',
    marginBottom: '8px',
    opacity: 0.4,
    fontStyle:'bold',
    fontWeight: '900',
}
const priceNew = {
    fontSize: '24px',
    fontWeight: '700',
    color: colors.black,
    marginBottom: '4px',
}
const priceSub = {
    fontSize: '14px',
    color: colors.darkGrey,
    display: 'block',
    marginBottom: '24px',
}
const discountBadge = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    backgroundColor: colors.babyPurple,
    padding: '8px 12px 18px 12px',
    borderRadius: '12px',
    marginBlockEnd: '16px',
    border:`1px solid ${colors.lightPurple}`,
}
const discountText = {
    fontSize: '16px',
    fontWeight: '700',
    color: colors.black,
}
const discountPercent = {
    fontSize: '18px',
    fontWeight: '700',
    color: colors.darkPurple,
    fontStyle:'bold'
}
const appliedBadge = {
    fontSize: '12px',
    fontWeight: '600',
    color: colors.darkGreen,
    backgroundColor: colors.lightGreen,
    padding: '4px 12px',
    borderRadius: '6px',
}
const featuresList = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
}
const checkmark = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: colors.purple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
}
const teamsCard = {
    backgroundColor: colors.Main_white,
    border: `2px solid ${colors.grey}`,
    borderRadius: '24px',
    padding: '36px',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '48px',
    alignItems: 'start',
    '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '24px',
        padding: '24px'
    }
}
const teamsTitle = {
    display:'flex',
    alignItems:'flex-start',
    textAlign:'start',
    fontSize: '24px',
    fontWeight: '700',
    color: colors.black,
}
const PaymentLogos = {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: colors.lightGray,
    padding: '32px',
    '@media (max-width: 768px)': {
        gap: '12px',
        padding: '20px 16px'
    }
}

const SubscriptionCards = () => {
    const [activeTab, setActiveTab] = useState('individuals');

    const paymentLogos = [
        { src: visaLogo, alt: 'VISA' },
        { src: mastercardLogo, alt: 'Mastercard' },
        { src: amexLogo, alt: 'American Express' },
        { src: maestroLogo, alt: 'Maestro' },
        { src: paypalLogo, alt: 'PayPal' },
        { src: gpayLogo, alt: 'Google Pay' },
    ];

    const monthlyFeatures = [
        'Free challenges',
        { text: 'AI-powered solution feedback', bold: true },
        { text: '5 Figma design files/month', bold: true },
        { text: '2 premium challenges/month', bold: true },
        'Unlimited solution screenshots',
        'Private solutions',
        'Custom solution domains',
        'View challenges solutions early',
    ];

    const yearlyFeatures = [
        'Free challenges',
        { text: 'AI-powered solution feedback', bold: true },
        { text: 'Unlimited Figma design files', bold: true },
        { text: 'Unlimited premium challenges', bold: true },
        'Unlimited solution screenshots',
        'Private solutions',
        'Custom solution domains',
        'View challenges solutions early',
    ];

    const teamFeatures = [
        'Unlimited Pro access for team members',
        'Unified billing',
        'Team management',
        'Team branding',
        'Bulk discount',
    ];

    const renderFeature = (feature: string | { text: string; bold: boolean }, index: number) => {
        const text = typeof feature === 'string' ? feature : feature.text;
        const isBold = typeof feature === 'object' && feature.bold;

        return (
        <div key={index} css={{display: 'flex', alignItems: 'center', gap: '12px'}}>
            <div css={checkmark}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
            <span css={{ lineHeight: '27px', fontSize: '18px', color: colors.black, fontWeight: isBold ? '700' : '400' }}>{text}</span>
        </div>
        );
    };

    const renderDiscountBadge = () => (
        <div css={discountBadge}>
            <span css={{ fontSize: '18px' }}>🇪🇬</span>
            <span css={discountText}>Country Discount</span>
            <span css={discountPercent}>60% off</span>
            <span css={appliedBadge}>Applied</span>
        </div>
    );

    return (
        <div css={container}>
            <div css={ContainerContext}>
                {(['individuals', 'teams']).map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    css={{
                    ...context,
                    backgroundColor: activeTab === tab ? colors.purple : colors.Main_white,
                    color: activeTab === tab ? colors.Main_white : colors.black,
                    }}
                >
                    For {tab === 'individuals' ? 'Individuals' : 'Teams'}
                </button>
                ))}
            </div>


            {activeTab === 'individuals' ? (
                <div css={individualCards}>
                    <div css={{ ...card, marginInlineStart:'180px', '@media (max-width: 768px)': { marginInlineStart: '0' } }}>
                        <h3 css={cardTitle}>Monthly</h3>
                        <div css={{ textAlign: 'center' }}>
                            <span css={priceOld}>۱۲ US$/month</span>
                            <div css={priceNew}>۴,۸ US$/mo</div>
                            <span css={priceSub}>Billed monthly</span>
                        </div>
                        {renderDiscountBadge()}
                        <div css={{paddingBlockEnd:'10px', width:'100%', marginBlockEnd:'16px'}}>
                            <Button variant="redButton" style={{height:'48px', width:'100%', fontSize:'16px'}}>
                                Learn More
                            </Button>
                        </div>
                        <div css={featuresList}>{monthlyFeatures.map(renderFeature)}</div>
                    </div>

                    <div css={{ ...card, border: `3px solid ${colors.purple}`, marginBlockStart: '-40px', marginInlineStart:'0px', '@media (max-width: 768px)': { marginBlockStart: '0' } }}>
                        <div css={bestValueBadge}>Best Value</div>
                        <div css={{ marginTop: '24px' }}>
                            <h3 css={{...cardTitle,marginBlockStart: '36px',}}>Yearly</h3>
                            <div css={{ textAlign: 'center' }}>
                                <span css={priceOld}>۸ US$ /month</span>
                                <div css={priceNew}>۳,۲ US$/mo</div>
                                <span css={priceSub}>۳۸,۴ US$ billed yearly (save 33% vs monthly)</span>
                            </div>
                            {renderDiscountBadge()}
                            <div css={{paddingBlockEnd:'10px', width:'100%', marginBlockEnd:'16px'}}>
                                <Button variant="redButton" style={{height:'48px', width:'100%', fontSize:'16px'}}>
                                    Learn More
                                </Button>
                            </div>
                            <div css={featuresList}>{yearlyFeatures.map(renderFeature)}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div css={{maxWidth: '800px', marginBlockEnd: '40px', '@media (max-width: 768px)': { maxWidth: '100%', width: '100%' }}}>
                    <div css={teamsCard}>
                        <div css={{display: 'flex',flexDirection: 'column', justifyContent: 'space-between', height: '500px', marginBlockStart:'-30px', '@media (max-width: 768px)': { height: 'auto', marginBlockStart: '0' }}}>
                            <div>
                                <h2 css={teamsTitle}>Frontend Mentor for Teams</h2>
                                <p css={{fontSize: '18px', color: colors.darkGrey, lineHeight: '1.6', marginBottom: '48px',textAlign: 'start', '@media (max-width: 768px)': { fontSize: '16px', marginBottom: '24px' }}}>
                                Onboard new hires faster and train team members more effectively through hands-on practice.
                                All team members gain unlimited Pro access, and admins can easily oversee and manage the team.
                                </p>
                            </div>
                            <Button variant="redButton" style={{height:'48px', width:'100%', fontSize:'16px',}}>
                                Learn More
                            </Button>
                        </div>

                        <div css={{minWidth: '340px',display:'flex', flexDirection:'column', textAlign: 'start', marginBlockStart:'-30px', '@media (max-width: 768px)': { minWidth: 'auto', width: '100%', marginBlockStart: '0' }}}>
                            <h3 css={{fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: colors.black}}>Teams</h3>
                            <span css={priceOld}>١٢٫٥٠ US$/seat/mo</span>
                            <div css={priceNew}>٥ US$/seat/mo</div>
                            <span css={priceSub}>٦٠ US$ per seat, billed yearly</span>
                            {renderDiscountBadge()}
                            <div css={featuresList}>{teamFeatures.map(renderFeature)}</div>
                        </div>
                    </div>
                </div>
            )}
            <div css={PaymentLogos}>
                {paymentLogos.map((logo, index) => (
                <img key={index} src={logo.src} alt={logo.alt} css={{height: '32px', objectFit: 'contain'}} />
                ))}
            </div>
        </div>
    );
};

export default SubscriptionCards;