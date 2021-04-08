import styled from "@emotion/styled";
import {useSelector} from "react-redux";
import {Typography} from "@material-ui/core";

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.dark ? siteColors.text.dark : siteColors.text.light};
`;

export default function Project({project}) {
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <ProjectContainer dark={darkMode ? 1 : 0}>
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