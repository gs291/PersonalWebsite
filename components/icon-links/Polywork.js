import {styled} from '@mui/material/styles';

import IconLink from './IconLink';
import Tooltip from '../tooltip/Tooltip';
import PolyworkIcon from '../icons/PolyworkIcon';


const PolyworkLink = styled(PolyworkIcon)`
  user-select: none;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  padding: 4px;
`;

export default function Polywork({href}) {

    return (
        <>
            <Tooltip title="Polywork">
                <IconLink href={href}>
                    <PolyworkLink />
                </IconLink>
            </Tooltip>
        </>
    );
}