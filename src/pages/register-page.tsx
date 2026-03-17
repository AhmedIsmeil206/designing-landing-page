import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { colors } from '@shared/colors';
import Button from '@shared/button';
import MarketingFooter from '@shared/marketing-footer';
import MarketingHeader from '@components/shared/marketing-nav-bar';

const pageStyles = {
    minHeight: '100vh',
    backgroundColor: colors.Mainwhite,
};

const tabBarStyles = {
    borderBlockEnd: `1px solid ${colors.grey}`,
    backgroundColor: colors.Mainwhite,
};

const tabInnerStyles = {
    maxWidth: '1280px',
    margin: '0 auto',
    paddingInline: '24px',
    display: 'flex',
};

const tabStyles = {
    padding: '22px 26px',
    border: `1px solid ${colors.grey}`,
    fontSize: '15px',
    fontWeight: '900',
    color: colors.black,
};

const mainStyles = {
    position: 'relative',
    margin: '0 auto',
    padding: '82px 24px 100px',
    minHeight: '680px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    '@media (max-width: 768px)': {
        padding: '40px 20px 64px',
        minHeight: 'auto',
    },
};

const formCardStyles = {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '584px',
    padding: '30px 28px 26px',
    borderRadius: '20px',
    border: `1px solid ${colors.grey}`,
    backgroundColor: colors.Mainwhite,
    boxShadow: `0 26px 70px ${colors.white}`,
};

const titleStyles = {
    margin: '0 0 22px',
    fontSize: '52px',
    color: colors.black,
    '@media (max-width: 768px)': {
        textAlign: 'center',
    },
};

const fieldStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    marginBlockEnd: '18px',
};

const labelStyles = {
    fontSize: '16px',
    fontWeight: '700',
    color: colors.black,
};

const inputStyles = {
    width: '100%',
    height: '54px',
    borderRadius: '6px',
    border: `1px solid ${colors.grey}`,
    padding: '0 16px',
    fontSize: '17px',
    color: colors.black,
    outline: 'none',
    '&:focus': {
        borderColor: colors.babyBlue,
    },
};

const submitButtonStyles = {
    width: '100%',
    height: '56px',
    borderRadius: '999px',
    fontSize: '17px',
    fontWeight: '900',
    marginBlockStart: '8px',
};

const helperTextStyles = {
    margin: '26px 0 0',
    textAlign: 'center',
    fontSize: '18px',
    color: colors.black,
};

const mutedTextStyles = {
    maxWidth: '420px',
    textAlign: 'center',
    color: colors.darkGrey,
    fontSize: '14px',
};

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data: any) {
        console.log(data);
    }

    return (
        <div css={pageStyles}>
            <MarketingHeader />

            <div css={tabBarStyles}>
                <div css={tabInnerStyles}>
                    <div css={tabStyles}>REGISTER</div>
                </div>
            </div>

            <main css={mainStyles}>
                <form css={formCardStyles} onSubmit={handleSubmit(onSubmit)}>
                    <h1 css={titleStyles}>Register</h1>

                    <div css={fieldStyles}>
                        <label htmlFor="register-name" css={labelStyles}>
                            Name<span css={{ color: colors.red }}>*</span>
                        </label>
                        <input
                            id="register-name"
                            type="text"
                            placeholder="John Appleseed"
                            css={inputStyles}
                            {...register('name', { required: 'Name is required' })}
                        />
                        {errors.name && (
                            <span css={{ color: colors.red, fontSize: '13px' }}>
                                {typeof errors.name.message === 'string' ? errors.name.message : 'Invalid input'}
                            </span>
                        )}
                    </div>

                    <div css={fieldStyles}>
                        <label htmlFor="register-email" css={labelStyles}>
                            Email<span css={{ color: colors.red }}>*</span>
                        </label>
                        <input
                            id="register-email"
                            type="email"
                            placeholder="email@work.com"
                            css={inputStyles}
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter a valid email address',
                                },
                            })}
                        />
                        {errors.email && (
                            <span css={{ color: colors.red, fontSize: '13px' }}>
                                {typeof errors.email.message === 'string' ? errors.email.message : 'Invalid input'}
                            </span>
                        )}
                    </div>

                    <Button variant="redButton" style={submitButtonStyles}>
                        Create Account
                    </Button>

                    <p css={helperTextStyles}>
                        Already have an account?{' '}
                        <Link to="/register" css={{ color: colors.black, fontWeight: '800' }}>
                            Sign in
                        </Link>
                    </p>

                    <p css={mutedTextStyles}>
                        By proceeding, you agree to our{' '}
                        <a css={{ color: colors.darkGrey }}>Terms</a> and{' '}
                        <a css={{ color: colors.darkGrey }}>Privacy Policy</a>.
                    </p>
                </form>
            </main>

            <MarketingFooter />
        </div>
    );
}
