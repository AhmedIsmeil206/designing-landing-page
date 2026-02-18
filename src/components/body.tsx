
import Introduction from './body-content/hero'
import Explaination from './body-content/explaination'
import DevFeatures from './body-content/developers\'-features'
import ProCards from './body-content/pro-cards'
import SubscriptionCards from './body-content/subscription-cards'
import CompaniesFeatures from './body-content/companies\'-features'
import CommunityComments from './body-content/community-comments'
import ConclusionPart from './body-content/conclusion'

export default function Body() {
    return (
        <div css={{ height: '100%', width:'100%', margin: 'auto',overflow:'hidden' }}>
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