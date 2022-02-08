import {styled} from '@mui/material/styles';
import RedditIcon from '@mui/icons-material/Reddit';

import IconLink from './IconLink';
import Tooltip from '../tooltip/Tooltip';


const RT = styled(RedditIcon)`
  width: 100%;
  height: 100%;
`;

export default function Reddit({href}) {

    return (
        <>
            <Tooltip title="Reddit">
                <IconLink href={href}>
                    <RT />
                </IconLink>
            </Tooltip>
        </>
    );
}