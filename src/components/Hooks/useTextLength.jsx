import React, { useState, useEffect } from 'react';

const useTextLength = (text, threshold = 35) => {
    const [className, setClassName] = useState('');

    useEffect(() => {
        if (text.length > threshold) {
            setClassName('desc-line2');
        } else {
            setClassName('desc-line1');
        }
    }, [text, threshold]);

    return className;
};

export default useTextLength;