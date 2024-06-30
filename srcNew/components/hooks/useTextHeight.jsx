import { useState, useEffect, useRef } from 'react';

const useTextHeight = () => {
    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    const [IsMax, setIsMax] = useState(false);

    useEffect(() => {
        const measureHeight = () => {
            if (ref.current) {
                const currentHeight = ref.current.clientHeight;
                setHeight(currentHeight);
                setIsMax(currentHeight > 18);
            }
        };

        const timeoutId = setTimeout(measureHeight, 10);

        return () => clearTimeout(timeoutId);
    }, []);

    return [ref, height, IsMax];
};

export default useTextHeight;