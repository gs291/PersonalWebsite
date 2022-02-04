import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import RightToLeft from './RightToLeft';
import LeftToRight from './LeftToRight';
import {randomColor} from '../../lib/utils/utils';
import siteColors from '../../lib/utils/siteColors';
import {getDarkMode} from '../../lib/redux/selectors';

export default function Animator({direction, top, delay}) {
    const darkMode = useSelector(getDarkMode);
    const [backgroundColor, setBackgroundColor] = useState(siteColors.background.splash[0]);

    // Updating the background color with Math.random requires it to be in a
    //   useEffect/Function so only the Client renders it (server/client class mismatch error)
    useEffect(() => {
        setBackgroundColor(randomColor(darkMode));
    }, []);

    const updateBackgroundColor = (_) => setBackgroundColor(randomColor(darkMode));

    return (
        <>
            {direction === 'R2L' && (
                <RightToLeft top={top} delay={delay} backgroundColor={backgroundColor} updateBackgroundColor={updateBackgroundColor}/>
            )}
            {direction === 'L2R' && (
                <LeftToRight top={top} delay={delay} backgroundColor={backgroundColor} updateBackgroundColor={updateBackgroundColor}/>
            )}
        </>
    );
}