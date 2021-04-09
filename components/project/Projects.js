import styled from "@emotion/styled";
import {Grid} from "@material-ui/core";
import {useSelector} from "react-redux";

import Project from "./Project";
import PageInfo from "../page/PageInfo";
import {getMobile} from "../../lib/redux/selectors";
import siteProjects from "../../lib/utils/siteProjects";


const Proj = styled(Grid)`
    width: 100%;
`;

export default function Projects() {
    const mobile = useSelector(getMobile);
    return (
        <>
            <Grid container
                  spacing={mobile ? 4 : 6}
                  direction="column"
                  alignItems="center"
            >
                { siteProjects.map(proj => (
                    <Proj item key={proj.id}>
                        <PageInfo>
                            <Project project={proj} />
                        </PageInfo>
                    </Proj>
                ))}
            </Grid>
        </>
    );
}