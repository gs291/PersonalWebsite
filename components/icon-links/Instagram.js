import {styled} from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';

import IconLink from './IconLink';
import Tooltip from '../tooltip/Tooltip';


const INS = styled(InstagramIcon)`
  width: 100%;
  height: 100%;
`;

export default function Instagram({href}) {

    return (
        <>
            <Tooltip title="Instagram">
                <IconLink href={href}>
                    <INS />
                </IconLink>
            </Tooltip>
        </>
    );
}