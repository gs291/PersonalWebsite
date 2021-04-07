import styled from "@emotion/styled";
import {AppBar} from "@material-ui/core";

import siteSizes from "../../lib/utils/siteSizes";

const Nav = styled(AppBar)`
  display: flex;
  flex-direction: row;
  height: ${siteSizes.nav.height};
  align-items: center;
  justify-content: center;
`;

export default function Navbar({className}) {

    return (
      <>
          <Nav position="static" className={className} >
              App Bar
          </Nav>
      </>
    );
}