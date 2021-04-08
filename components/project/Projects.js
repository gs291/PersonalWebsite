import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import Project from "./Project";
import {getMobile} from "../../lib/redux/selectors";
import siteProjects from "../../lib/utils/siteProjects";


export default function Projects() {
    const mobile = useSelector(getMobile);
    return (
        <>
            <Grid container
                  spacing={mobile ? 2 : 6}
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