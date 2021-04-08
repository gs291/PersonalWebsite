import {useEffect} from "react";
import styled from "@emotion/styled";
import {useMediaQuery} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import Header from "./Header";
import Footer from "../footer/Footer";
import Introduction from "./Introduction";
import siteColors from "../../lib/utils/siteColors";
import {updateMobile} from "../../lib/redux/actions";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Foot = styled(Footer)`
  justify-content: center;
  align-items: center;
`;

export default function Page(props) {
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);
    const screen = useMediaQuery('(max-width: 960px)');
    useEffect(() => {
        dispatch(updateMobile(screen));
    }, [screen]);

    const Main = styled.main`
      flex: 1;
      background-color: ${darkMode ? siteColors.background.main.dark : siteColors.background.main.light};
      padding-bottom: 30px;
      
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    return (
        <>
            <Header />
            <PageContainer>
                <Introduction />
                <Main>
                    {props.children}
                </Main>
                <Foot />
            </PageContainer>
        </>
    );
}