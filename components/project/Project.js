import styled from "@emotion/styled";
import {Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${siteColors.text.dark};
`;

export default function Project({project}) {
    return (
        <>
            <ProjectContainer>
                <Typography variant="h4">
                    {project.name}
                </Typography>
                <Typography variant="body1">
                    {project.description}
                </Typography>
                <ul>
                    {project.details.map((detail, idx) => (
                        <li key={idx}>
                            <Typography variant="body2">
                                {detail}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </ProjectContainer>
        </>
    );
}