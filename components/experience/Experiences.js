import {Grid} from '@mui/material';
import {styled} from '@mui/material/styles';

import Card from '../card/Card';
import Cards from '../card/Cards';
import Experience from './Experience';
import siteExperiences from '../../lib/utils/siteExperiences';


const Exp = styled(Grid)`
  width: 100%;
`;

export default function Experiences() {

    return (
        <>
            <Cards>
                { siteExperiences.map(exp => (
                    <Exp item key={exp.id}>
                        <Card>
                            <Experience experience={exp} />
                        </Card>
                    </Exp>
                ))}
            </Cards>
        </>
    );
}