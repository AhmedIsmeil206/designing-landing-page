/** @jsxImportSource @emotion/react */
import { colors } from "../shared/colors"
import choice1 from '../../assets/images/home-why-1.webp'
import choice2 from '../../assets/images/home-why-2.webp'
import choice3 from '../../assets/images/home-why-3.webp'
import choice4 from '../../assets/images/home-why-4.webp'

const general = {
    maxWidth: "1120px",
    margin: "0 auto",
    paddingBlockStart: "120px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    '@media (max-width: 768px)': {
        paddingBlockStart: "32px",
        paddingInline: "20px"
    }
};

const title = {
    display: "flex",
    alignItems: 'center',
    textAlign: "center",
    fontSize: "36px",
    lineHeight: "1.2",
    marginBlock: "32px",
    marginInlineStart: "50px",
    height: "80px",
    width: '50%',
    '@media (max-width: 768px)': {
        fontSize: "22px",
        width: "100%",
        marginInlineStart: "0",
        height: "auto",
        marginBlock: "16px"
    }
};

const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    '@media (max-width: 768px)': {
        flexDirection: "column",
        gap: "20px"
    }
};

const imageWrap = {
    borderRadius: "20px",
    padding: "32px",
    maxWidth: "560px",
    '@media (max-width: 768px)': {
        padding: "12px",
        width: "100%",
        maxWidth: "100%"
    }
};

export default function DevFeatures() {
    return (
        <div css={general}>
                <h1 css={title}>Why developers choose Frontend Mentor</h1>
                <div css={row}>
                    <div css={{maxWidth: "480px", textAlign: "left", marginInlineEnd: "50px", '@media (max-width: 768px)': { maxWidth: '100%', marginInlineEnd: '0' }}}>
                        <h3 css={{fontSize: "28px", fontWeight: "700", '@media (max-width: 768px)': { fontSize: '20px' }}}>Move beyond passive learning</h3>
                        <p css={{color:colors.darkGrey, fontSize:'20px', '@media (max-width: 768px)': { fontSize: '15px' }}}>Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice.</p>
                    </div>

                    <div css={imageWrap}>
                        <img
                        src={choice1}
                        alt="How it works preview"
                        css={{ width: "100%", height:'100%', display: "block", borderRadius: "12px", maxWidth:'600px', maxHeight:'700px', '@media (max-width: 768px)': { maxWidth: '100%', height: 'auto' }}}
                        />
                    </div>
                </div>

                <div css={row}>
                    <div css={{...imageWrap, marginInlineEnd: "110px", '@media (max-width: 768px)': { marginInlineEnd: '0', order: 2 }}}>
                        <img
                        src={choice2}
                        alt="How it works preview"
                        css={{ width: "100%", height:'100%', display: "block", borderRadius: "12px", maxWidth:'600px', maxHeight:'700px', '@media (max-width: 768px)': { maxWidth: '100%', height: 'auto' }}}
                        />
                    </div>
                    <div css={{maxWidth: "420px", textAlign: "left", '@media (max-width: 768px)': { maxWidth: '100%', order: 1 }}}>
                        <h3 css={{fontSize: "28px", fontWeight: "700", '@media (max-width: 768px)': { fontSize: '20px' }}}>Move beyond passive learning</h3>
                        <p css={{color:colors.darkGrey, fontSize:'20px', '@media (max-width: 768px)': { fontSize: '15px' }}}>Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice.</p>
                    </div>
                </div>

                <div css={row}>
                    <div css={{maxWidth: "420px", marginInlineEnd: "110px", textAlign: "left", '@media (max-width: 768px)': { maxWidth: '100%', marginInlineEnd: '0' }}}>
                        <h3 css={{fontSize: "28px", fontWeight: "700", '@media (max-width: 768px)': { fontSize: '20px' }}}>Move beyond passive learning</h3>
                        <p css={{color:colors.darkGrey, fontSize:'20px', '@media (max-width: 768px)': { fontSize: '15px' }}}>Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice.</p>
                    </div>
                    <div css={imageWrap}>
                        <img
                        src={choice3}
                        alt="How it works preview"
                        css={{ width: "100%", height:'100%', display: "block", borderRadius: "12px", maxWidth:'600px', maxHeight:'700px', '@media (max-width: 768px)': { maxWidth: '100%', height: 'auto' }}}
                        />
                    </div>
                </div>

                <div css={row}>
                    <div css={{...imageWrap, marginInlineEnd: "110px", '@media (max-width: 768px)': { marginInlineEnd: '0', order: 2 }}}>
                        <img
                        src={choice4}
                        alt="How it works preview"
                        css={{ width: "100%", height:'100%', display: "block", borderRadius: "12px", maxWidth:'600px', maxHeight:'700px', '@media (max-width: 768px)': { maxWidth: '100%', height: 'auto' }}}
                        />
                    </div>
                    <div css={{maxWidth: "420px", textAlign: "start", '@media (max-width: 768px)': { maxWidth: '100%', order: 1 }}}>
                        <h3 css={{fontSize: "28px", fontWeight: "700", '@media (max-width: 768px)': { fontSize: '20px' }}}>Move beyond passive learning</h3>
                        <p css={{color:colors.darkGrey, fontSize:'20px', '@media (max-width: 768px)': { fontSize: '15px' }}}>Stop watching and start creating. Build professional-quality projects that develop genuine coding skills through hands-on practice.</p>
                    </div>
            </div>
        </div>
    )
}