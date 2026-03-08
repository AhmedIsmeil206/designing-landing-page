import { forwardRef, type DetailedHTMLProps, type HTMLAttributes } from 'react';

export interface IconProps {
    name: string;
    size?: number;
    viewBox?: number;
    color?: string;
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(
    ({ name, size = 24, viewBox = 24, color = 'currentColor', style, ...rest }, ref) => (
        <span
            ref={ref}
            style={{
                display: 'inline-flex',
                lineHeight: '1em',
                width: size,
                height: size,
                flexShrink: 0,
                ...style,
            }}
            {...rest}
        >
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${viewBox} ${viewBox}`}
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
            >
                <path fill={color} d={name} />
            </svg>
        </span>
    )
);

Icon.displayName = 'Icon';

export default Icon;
