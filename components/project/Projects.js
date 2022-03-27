import {useState} from 'react';
import {Grid} from '@mui/material';
import {styled} from '@mui/material/styles';

import Project from './Project';
import Card from '../card/Card';
import Cards from '../card/Cards';
import SortProjects from './SortProjects';
import siteProjects from '../../lib/utils/siteProjects';


const ProjectsWrapper = styled('div')`
  padding: 2em 0;
  
  border-radius: 20px;
  border: 1px solid ${props => props.theme.palette.primary.main};
`;

const ProjectsScrollable = styled('div')`
  max-height: 80vh;
  overflow-y: scroll;
  overscroll-behavior-y: auto;
  padding: 1em 0.5em;
`;


const Proj = styled(Grid)`
  width: 100%;
`;

export default function Projects() {
    const [sortBy, setSortBy] = useState("");

    return (
        <>
            <SortProjects sortBy={sortBy} setSortBy={setSortBy}/>
            <ProjectsWrapper>
                <ProjectsScrollable>
                    <Cards>
                        { siteProjects
                            .filter(proj => sortBy === "" || proj.language.includes(sortBy))
                            .map(proj => (
                                <Proj item key={proj.id}>
                                    <Card>
                                        <Project project={proj} />
                                    </Card>
                                </Proj>
                            ))}
                    </Cards>
                </ProjectsScrollable>
            </ProjectsWrapper>
        </>
    );
}