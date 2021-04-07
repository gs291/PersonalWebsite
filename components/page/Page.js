import {useEffect} from "react";
import styled from "@emotion/styled";
import { useMediaQuery } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";
import {updateMobile} from "../../lib/redux/actions";
import Header from "./Header";

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Nav = styled(Navbar)`
  background-image: linear-gradient(${ siteColors.nav.dark }, ${ siteColors.background.main.dark });
  box-shadow: none;
`;

const Foot = styled(Footer)`
  background-image: linear-gradient(${ siteColors.background.main.dark }, ${ siteColors.nav.dark });
  justify-content: center;
  align-items: center;
  color: ${siteColors.text.dark};
`;

export default function Page(props) {
    const dispatch = useDispatch();
    const mobile = useSelector(getMobile);
    const screen = useMediaQuery('(max-width: 960px)');
    useEffect(() => {
        dispatch(updateMobile(screen));
    }, [screen]);

    const Main = styled.main`
      flex: 1;
      background-color: ${ siteColors.background.main.dark };
      padding-top: 15px;
      ${!mobile ? "padding-right: 10px;" : ""}
      padding-bottom: 30px;
      
      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    return (
        <>
            <Header />
            <PageContainer>
                <Nav />

                <Main>
                    { props.children }
                </Main>

                <Foot />
            </PageContainer>
        </>
    );
}