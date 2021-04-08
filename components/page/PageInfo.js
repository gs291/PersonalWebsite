import styled from "@emotion/styled";
import {useSelector} from "react-redux";

import siteColors from "../../lib/utils/siteColors";
import {getMobile} from "../../lib/redux/selectors";

const Info = styled.div`
  width: 80%;
  background-color: ${siteColors.background.card.dark};
  padding: 3em 2em;
  border-radius: 5px;
  color: ${siteColors.text.dark};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function PageInfo({ className, children }) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <InfoContainer className={className}>
                <Info>
                    {children}
                </Info>
            </InfoContainer>
        </>
    );
}