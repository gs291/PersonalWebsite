import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";
import FixedDivider from "../divider/FixedDivider";
import siteColors from "../../lib/utils/siteColors";

const Text = styled(Typography)`
  width: max-content;
  color: white;
  border-bottom: 6px solid ${siteColors.background.border.dark};
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 30px;
`;

export default function TitleDivider({className, title}) {

    return (
        <>
            <TextContainer className={className}>
                <Text variant="h2">
                    {title}
                </Text>
            </TextContainer>
            <FixedDivider width={100} backgroundColor={siteColors.background.divider.dark}/>
        </>
    );
}