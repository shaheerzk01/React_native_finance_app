import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const useOrientation = () => {
    const [isLandscape, setLandscape] = useState(Dimensions.get('window').width > Dimensions.get('window').height);

    useEffect(() => {
        const handleOrientationsChange = () => {
            const {width, height} = Dimensions.get("window");
            setLandscape(width > height);
        };

        const subscription = Dimensions.addEventListener("change", handleOrientationsChange);
        return () => {
            subscription.remove();
        };
    }, []);

    return isLandscape;
}

export default useOrientation;