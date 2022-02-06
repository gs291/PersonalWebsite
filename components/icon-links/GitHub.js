import {styled} from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';

import IconLink from './IconLink';
import Tooltip from '../tooltip/Tooltip';


const GH = styled(GitHubIcon)`
  width: 100%;
  height: 100%;
`;

export default function GitHub({href}) {

    return (
        <>
            <Tooltip title="GitHub">
                <IconLink href={href}>
                    <GH />
                </IconLink>
            </Tooltip>
        </>
    );
}