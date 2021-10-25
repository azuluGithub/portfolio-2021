//npm packages
import React from 'react';
import Typewriter from 'typewriter-effect';

/**
 * #is a child of Banner Component
 */
const TypeWriterEffect = ({ text }) => {
    return (
        <Typewriter
            options={{
                strings: text,
                autoStart: true,
                loop: true
            }}
        />
    )
}

export default TypeWriterEffect;