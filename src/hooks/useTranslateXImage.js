import useScrollHandling from '@/hooks/useScrollHandling';
import { useEffect, useState } from 'react';

const useTranslateXImage = () => {
    const { scrollPosition, scrollDriction } = useScrollHandling();
    const [translateXPosition, setTranslateXPosition] = useState(80);

    const handleTranslateX = () => {
        if (scrollDriction === 'down' && scrollPosition >= 1500) {
            setTranslateXPosition(prev => (prev <= 0 ? 0 : prev - 10));
        } else if (scrollDriction === 'up') {
            setTranslateXPosition(prev => (prev >= 80 ? 80 : prev + 10));
        }
    };

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition, scrollDriction]);

    return {
        translateXPosition
    };
};

export default useTranslateXImage;
