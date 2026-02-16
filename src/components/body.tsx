
import Introduction from './body-content/hero'
import Explaination from './body-content/explaination'
import DevFeatures from './body-content/developers\'-features'
import ProCards from './body-content/pro-cards'

export default function Body() {
    return (
        <div css={{ height: '100%', width:'100%', margin: 'auto',overflow:'hidden' }}>
            <Introduction />
            <Explaination />
            <DevFeatures />
            <ProCards />
        </div>
    )
}