import Info from "./footer-content/info"
import Rights from "./footer-content/rights"
import { colors } from "./shared/colors"

const Footer = () => {
return (
    <footer css={{width:'100%', backgroundColor: colors.Main_white,}}>
        <Info />
        <Rights />
    </footer>
)
}

export default Footer
