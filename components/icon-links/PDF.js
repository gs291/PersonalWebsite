import {styled} from '@mui/material/styles';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import IconLink from './IconLink';
import Tooltip from '../tooltip/Tooltip';


const PF = styled(PictureAsPdfIcon)`
  width: 100%;
  height: 100%;
`;

export default function PDF({href}) {

    return (
        <>
            <Tooltip title="Download PDF">
                <IconLink href={href}>
                    <PF />
                </IconLink>
            </Tooltip>
        </>
    );
}