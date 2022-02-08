import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import PDF from '../icon-links/PDF';
import CardDefaultInfo from '../card/CardDefaultInfo';


const ExperienceContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PDFContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default function Experience({experience}) {

    return (
        <>
            <ExperienceContainer>
                <CardDefaultInfo item={experience} />

                {experience.pdf !== undefined && (
                    <PDFContainer>
                        <Typography variant="h6">
                            End of Internship Presentation
                        </Typography>
                        <PDF href={experience.pdf} />
                    </PDFContainer>
                )}
            </ExperienceContainer>
        </>
    );
}