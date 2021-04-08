import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import FixedDivider from "../divider/FixedDivider";
import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const Text = styled(Typography)`
  width: max-content;
  color: ${props => props["data-dm"] ? siteColors.text.dark : siteColors.text.light};
  border-bottom: 6px solid ${props => props["data-dm"] ? siteColors.background.border.dark : siteColors.background.border.light};
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 30px;
`;

export default function TitleDivider({className, title}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <TextContainer className={className}>
                <Text variant="h2" data-dm={darkMode}>
                    {title}
                </Text>
            </TextContainer>
            <FixedDivider width={100} backgroundColor={darkMode ? siteColors.background.divider.dark : siteColors.background.divider.light}/>
        </>
    );
}