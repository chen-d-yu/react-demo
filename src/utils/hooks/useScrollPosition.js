import {useEffect, useState} from "react";

/**
 * 当前滚动位置
 * @returns {number}
 */
export default function (){
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollPosition;
}