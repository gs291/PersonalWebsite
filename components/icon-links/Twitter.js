import {styled} from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';

import IconLink from './IconLink';
import Tooltip from '../tooltip/Tooltip';


const TW = styled(TwitterIcon)`
  width: 100%;
  height: 100%;
`;

export default function Twitter({href}) {

    return (
        <>
            <Tooltip title="Twitter">
                <IconLink href={href}>
                    <TW />
                </IconLink>
            </Tooltip>
        </>
    );
}