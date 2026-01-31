import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
            {/* Radial Gradient overlay */}
            <div className="absolute inset-0 parallax-bg opacity-50" />

            {/* Animated Grid */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            {/* Floating Blobs (2D Parallax) */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
            />

            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary-dark/10 rounded-full blur-[150px]"
            />

            {/* Subtle Scanlines effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>
    );
};

export default Background;
