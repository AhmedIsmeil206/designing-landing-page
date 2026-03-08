
import Introduction from '@body/hero';
import Explaination from '@body/explaination';
import DevFeatures from '@body/developers-features';
import ProCards from '@body/pro-cards';
import SubscriptionCards from '@body/subscription-cards';
import CompaniesFeatures from '@body/companies-features';
import CommunityComments from '@body/community-comments';
import ConclusionPart from '@body/conclusion';

export default function Body() {
    return (
        <div css={{ width: '100%', overflowX: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <Introduction />
            <Explaination />
            <DevFeatures />
            <ProCards />
            <SubscriptionCards />
            <CompaniesFeatures />
            <CommunityComments />
            <ConclusionPart />
        </div>
    )
}