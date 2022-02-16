import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import GitHub from '../icon-links/GitHub';
import Reddit from '../icon-links/Reddit';
import Website from '../icon-links/Website';
import {getMobile} from '../../lib/redux/selectors';
import CardDefaultInfo from '../card/CardDefaultInfo';
import {globalOptions} from '../../lib/utils/emotionStyled';


const ProjectContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Detail = styled(Typography)`
  font-size: 1.25em;
`;

const LinksAndLanguages = styled('div', globalOptions)`
  display: flex;
  flex-direction: ${props => props['data-m'] ? 'column' : 'row'};
  width: 100%;
  
  gap: ${props => props['data-m'] ? '20px' : '0'} 0;
`;

const SpacedFlex = styled('div', globalOptions)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0 20px;
  
  width: ${props => props['data-m'] ? '100' : props['data-w']}%;
`;

export default function Project({project}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <ProjectContainer>
                <CardDefaultInfo item={project} />

                <LinksAndLanguages data-m={mobile}>
                    <SpacedFlex data-w={30} data-m={mobile}>
                        {project.locate !== undefined && (<Website href={project.locate} />)}
                        {project.github !== undefined && (<GitHub href={project.github} />)}
                        {project.reddit !== undefined && (<Reddit href={project.reddit} />)}
                    </SpacedFlex>
                    <SpacedFlex data-w={70} data-m={mobile}>
                        {project.services.map((language, idx) => (
                            <div key={idx}>
                                <Detail variant="body2">
                                    {language}
                                </Detail>
                            </div>
                        ))}
                    </SpacedFlex>
                </LinksAndLanguages>
            </ProjectContainer>
        </>
    );
}