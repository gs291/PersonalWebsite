import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import siteColors from '../../lib/utils/siteColors';
import {getDarkMode, getMobile} from '../../lib/redux/selectors';

const ProjectContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props['data-dm'] ? siteColors.text.dark : siteColors.text.light};
`;

const Text = styled(Typography)`
  width: max-content;
  border-bottom: 6px solid ${props => props['data-dm'] ? siteColors.background.border.dark : siteColors.background.border.light};
`;

const Title = styled(Text)`
  margin-bottom: 20px;
`;

const Description = styled(Typography)`
  width: ${props => props.mobile ? 100 : 80}%;
  text-align: center;
  font-size: 1.25em;
  color: ${props => props['data-dm'] ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
`;

const Detail = styled(Typography)`
  font-size: 1.25em;
`;

export default function Project({project}) {
    const mobile = useSelector(getMobile);
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <ProjectContainer data-dm={darkMode}>
                <Title variant="h3" data-dm={darkMode}>
                    {project.name}
                </Title>
                <Description variant="body1" data-dm={darkMode} data-m={mobile}>
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