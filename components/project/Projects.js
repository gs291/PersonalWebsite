import {Grid} from '@mui/material';
import {styled} from '@mui/material/styles';

import Project from './Project';
import Card from '../card/Card';
import Cards from '../card/Cards';
import siteProjects from '../../lib/utils/siteProjects';


const Proj = styled(Grid)`
  width: 100%;
`;

export default function Projects() {

    return (
        <>
            <Cards>
                { siteProjects.map(proj => (
                    <Proj item key={proj.id}>
                        <Card>
                            <Project project={proj} />
                        </Card>
                    </Proj>
                ))}
            </Cards>
        </>
    );
}