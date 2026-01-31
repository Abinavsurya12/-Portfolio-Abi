import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div className="hidden lg:block fixed inset-0 pointer-events-none z-[9999]">
            {/* Outer Ring */}
            <motion.div
                animate={{
                    x: mousePos.x - 20,
                    y: mousePos.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? 'rgba(6, 182, 212, 0.8)' : 'rgba(6, 182, 212, 0.3)',
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.5 }}
                className="absolute w-10 h-10 border-2 rounded-full"
            />
            {/* Inner Dot */}
            <motion.div
                animate={{
                    x: mousePos.x - 4,
                    y: mousePos.y - 4,
                    scale: isHovering ? 0 : 1,
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.2 }}
                className="absolute w-2 h-2 bg-primary rounded-full shadow-neon"
            />
        </div>
    );
};

export default CustomCursor;
