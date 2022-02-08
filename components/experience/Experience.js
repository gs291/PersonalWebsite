import {styled} from '@mui/material/styles';

import CardDefaultInfo from '../card/CardDefaultInfo';


const ExperienceContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default function Experience({experience}) {

    return (
        <>
            <ExperienceContainer>
                <CardDefaultInfo item={experience} />
            </ExperienceContainer>
        </>
    );
}