/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from 'react';
import { colors } from '../assets/colors';

interface DropdownItem {
    label: string;
    href?: string;
    onClick?: () => void;
}

interface DropDownMenuProps {
    trigger: React.ReactNode;
    items: DropdownItem[];
}

export default function DropDownMenu({ trigger, items }: DropDownMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const containerStyles = {
        position: 'relative' as const
    };

    const triggerStyles = {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
    };

    const menuStyles = {
        position: 'absolute' as const,
        top: '100%',
        left: '0',
        marginTop: '8px',
        backgroundColor: colors.white,
        border: `1px solid ${colors.grey}`,
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        minWidth: '180px',
        zIndex: 1000,
        overflow: 'hidden' as const
    };

    const itemStyles = {
        display: 'block',
        padding: '12px 16px',
        color: colors.black,
        textDecoration: 'none',
        fontSize: '14px',
        transition: 'background-color 0.2s ease'
    };

    return (
        <div ref={dropdownRef} css={containerStyles}>
            <div onClick={() => setIsOpen(!isOpen)} css={triggerStyles}>
                {trigger}
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    css={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                    }}
                >
                    <path d="M2 4L6 8L10 4" stroke={colors.black} strokeWidth="2" fill="none" />
                </svg>
            </div>

            {isOpen && (
                <div css={menuStyles}>
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href={item.href || '#'}
                            onClick={(e) => {
                                if (item.onClick) {
                                    e.preventDefault();
                                    item.onClick();
                                }
                                setIsOpen(false);
                            }}
                            css={{
                                ...itemStyles,
                                '&:hover': {
                                    backgroundColor: colors.grey
                                }
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}