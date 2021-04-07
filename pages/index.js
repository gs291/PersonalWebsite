import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

const Text = styled(Typography)`
  color: white;
`;

export default function Home() {
    return (
        <>
            <Text variant="h1">
                Home
            </Text>
        </>
    )
}
