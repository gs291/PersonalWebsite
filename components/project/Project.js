import {useSelector} from 'react-redux';
import {Typography} from '@mui/material';
import {styled, alpha} from '@mui/material/styles';
import ScheduleIcon from '@mui/icons-material/Schedule';

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
            </ProjectContainer>
        </>
    );
}