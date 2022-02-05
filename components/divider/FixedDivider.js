import {Divider} from '@mui/material';
import {styled} from '@mui/material/styles';

import siteColors from '../../lib/utils/siteColors';

const FDivider = styled(Divider)`
  width: ${props => props['data-w']}%;
  margin-bottom: 30px;
  transition: 0.3s;

  background-color: ${props => props['data-bc'] ? props['data-bc'] : siteColors.text.dark};
`;

export default function FixedDivider({className, width, backgroundColor}) {
    if (!width){ width = 100; }

    return (
      <>
          <FDivider className={className} data-w={width} data-bc={backgroundColor}/>
      </>
    );
}