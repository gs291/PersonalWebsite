import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled, alpha} from '@mui/material/styles';

import {getMobile} from '../../lib/redux/selectors';
import {globalOptions} from '../../lib/utils/emotionStyled';

const ProjectContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled(Typography)`
  width: max-content;
  border-bottom: 6px solid ${props => props.theme.palette.border.main};
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;

const Description = styled(Typography, globalOptions)`
  width: ${props => props['data-m'] ? 100 : 80}%;
  text-align: center;
  font-size: 1.25em;
  color: ${props => alpha(props.theme.palette.text.primary, 0.5)};
`;

const Detail = styled(Typography)`
  font-size: 1.25em;
`;

export default function Project({project}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <ProjectContainer>
                <Title variant="h3">
                    {project.name}
                </Title>
                <Description variant="body1" data-m={mobile}>
                    {project.description}
                </Description>
                <ul>
                    {project.details.map((detail, idx) => (
                        <li key={idx}>
                            <Detail variant="body2">
                                {detail}
                            </Detail>
                        </li>
                    ))}
                </ul>
            </ProjectContainer>
        </>
    );
}