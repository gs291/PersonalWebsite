import {Grid} from "@material-ui/core";

import Project from "./Project";
import siteProjects from "../../lib/utils/siteProjects";


export default function Projects() {
    return (
        <>
            <Grid container
                  spacing={6}
                  direction="column"
                  alignItems="center"
            >
                { siteProjects.map(proj => (
                    <Grid item key={proj.id}>
                        <Project project={proj} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
}