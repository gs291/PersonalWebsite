import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";
import FixedDivider from "../divider/FixedDivider";
import siteColors from "../../lib/utils/siteColors";
import {useSelector} from "react-redux";
import {getDarkMode} from "../../lib/redux/selectors";

const Text = styled(Typography)`
  width: max-content;
  color: ${props => props.dark ? siteColors.text.dark : siteColors.text.light};
  border-bottom: 6px solid ${props => props.dark ? siteColors.background.border.dark : siteColors.background.border.light};
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
                <Text variant="h2" dark={darkMode ? 1 : 0}>
                    {title}
                </Text>
            </TextContainer>
            <FixedDivider width={100} backgroundColor={darkMode ? siteColors.background.divider.dark : siteColors.background.divider.light}/>
        </>
    );
}