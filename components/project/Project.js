import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled, alpha} from '@mui/material/styles';
import ScheduleIcon from '@mui/icons-material/Schedule';

import GitHub from '../icon-links/GitHub';
import Reddit from '../icon-links/Reddit';
import Website from '../icon-links/Website';
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
  width: 100%;
  
  text-align: center;
`;

const Description = styled(Typography, globalOptions)`
  width: ${props => props['data-m'] ? 100 : 80}%;
  text-align: center;
  font-size: 1.25em;
  color: ${props => alpha(props.theme.palette.text.primary, 0.5)};
`;

const DateContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Date = styled(Typography)`
  
`;

const DateIcon = styled(ScheduleIcon)`
  margin-right: 5px;
`;

const Detail = styled(Typography)`
  font-size: 1.25em;
`;

const ProjectDetailsList = styled('ul', globalOptions)`
  padding-left: ${props => props['data-m'] ? 20 : 40}px;
`;

const DetailItem = styled('li')`
  margin-bottom: 7.5px;
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
                <Title variant="h3">
                    {project.name}
                </Title>
                <DateContainer>
                    <DateIcon />
                    <Date variant="h5">
                        {project.date}
                    </Date>
                </DateContainer>
                <Description variant="body1" data-m={mobile}>
                    {project.description}
                </Description>
                <ProjectDetailsList data-m={mobile}>
                    {project.details.map((detail, idx) => (
                        <DetailItem key={idx}>
                            <Detail variant="body2">
                                {detail}
                            </Detail>
                        </DetailItem>
                    ))}
                </ProjectDetailsList>
                <LinksAndLanguages data-m={mobile}>
                    <SpacedFlex data-w={30} data-m={mobile}>
                        {project.locate !== undefined && (<Website href={project.locate} />)}
                        {project.github !== undefined && (<GitHub href={project.github} />)}
                        {project.reddit !== undefined && (<Reddit href={project.reddit} />)}
                    </SpacedFlex>
                    <SpacedFlex data-w={70} data-m={mobile}>
                        {project.language.map((language, idx) => (
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