import {styled} from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import IconLink from './IconLink';
import Tooltip from '../tooltip/Tooltip';


const LN = styled(LinkedInIcon)`
  width: 100%;
  height: 100%;
`;

export default function Linkedin({href}) {

    return (
        <>
            <Tooltip title="Linkedin">
                <IconLink href={href}>
                    <LN />
                </IconLink>
            </Tooltip>
        </>
    );
}