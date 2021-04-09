import Head from "next/head";
import {useSelector} from "react-redux";

import {getDarkMode} from "../../lib/redux/selectors";
import siteColors from "../../lib/utils/siteColors";

export default function Header() {
    const darkMode = useSelector(getDarkMode);

    const barColor = darkMode ? siteColors.background.main.dark : siteColors.background.main.light;
    return (
        <>
            <Head>
                <title>Gregory Sanchez</title>
                <link rel="icon" href="/favicon.ico" />

                {/*// <!-- Chrome, Firefox OS and Opera -->*/}
                <meta name="theme-color" content={barColor} />
                {/*// <!-- Windows Phone -->*/}
                <meta name="msapplication-navbutton-color" content={barColor} />
                {/*// <!-- iOS Safari -->*/}
                <meta name="apple-mobile-web-app-status-bar-style" content={barColor} />
            </Head>
        </>
    );
}