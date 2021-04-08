import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode, getMobile} from "../../lib/redux/selectors";

const Info = styled.div`
  width: ${props => props.mobile ? 95 : 80}%;
  background-color: ${props => props.dark ? siteColors.background.card.dark : siteColors.background.card.light};
  padding: 3em 2em;
  border-radius: 5px;
  color: ${props => props.dark ? siteColors.text.dark : siteColors.text.light};
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
                <Info dark={darkMode ? 1 : 0} mobile={mobile ? 1 : 0}>
                    {children}
                </Info>
            </InfoContainer>
        </>
    );
}