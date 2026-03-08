import { colors } from '@shared/colors';
import Info from '@footer/info';
import Rights from '@footer/rights';

const Footer = () => {
return (
    <footer css={{width:'100%', backgroundColor: colors.Main_white,}}>
        <Info />
        <Rights />
    </footer>
)
}

export default Footer
