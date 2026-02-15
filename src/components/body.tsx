
import Introduction from './body-content/hero'
import Explaination from './body-content/explaination'
import DevFeatures from './body-content/developers\'-features'
export default function Body() {
    return (
        <div css={{ height: '100%', width:'100%', margin: 'auto',overflow:'hidden' }}>
            <Introduction />
            <Explaination />
            <DevFeatures />
        </div>
    )
}