import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const Info = styled.div`
  width: ${props => props["data-m"] ? 95 : 80}%;
  background-color: ${props => props["data-dm"] ? siteColors.background.card.dark : siteColors.background.card.light};
  padding: 3em ${props => props["data-m"] ? 0.5 : 2 }em;
  border-radius: 20px;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  filter: drop-shadow(10px 10px 5px #0000007e);
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function PageInfo({ className, children }) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <InfoContainer className={className}>
                <Info data-dm={darkMode} data-m={mobile}>
                    {children}
                </Info>
            </InfoContainer>
        </>
    );
}