import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import s from './Dropdown.module.scss';
import { IoIosArrowDown } from "react-icons/io";


const Dropdown = ({ mainLabel, mainHref, children, className }) => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const dropdown = dropdownRef.current;

        const handleMouseEnter = () => {
            clearTimeout(timeoutRef.current);
            setIsActive(true);
        };

        const handleMouseLeave = () => {
            timeoutRef.current = setTimeout(() => {
                setIsActive(false);
            }, 300);
        };

        if (dropdown) {
            dropdown.addEventListener('mouseenter', handleMouseEnter);
            dropdown.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (dropdown) {
                dropdown.removeEventListener('mouseenter', handleMouseEnter);
                dropdown.removeEventListener('mouseleave', handleMouseLeave);
            }
            clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div ref={dropdownRef} className={`${s.dropdown} ${className || ''}`}>
            <Link href={mainHref} className={s.link}>{mainLabel}</Link>
            <IoIosArrowDown className={s.arrow} />
            <div className={`${s.dropdownMenu} ${isActive ? s.active : ''}`}>
                {React.Children.map(children, (child, index) => (
                    <div className={s.dropdownItem} key={index}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
