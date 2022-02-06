import {styled} from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';

import IconLink from './IconLink';
import Tooltip from '../tooltip/Tooltip';


const WEB = styled(LanguageIcon)`
  width: 100%;
  height: 100%;
`;

export default function Website({href}) {

    return (
        <>
            <Tooltip title="Website">
                <IconLink href={href}>
                    <WEB />
                </IconLink>
            </Tooltip>
        </>
    );
}