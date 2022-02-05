import {Divider} from '@mui/material';
import {styled} from '@mui/material/styles';

const FDivider = styled(Divider)`
  width: ${props => props['data-w']}%;
  margin-bottom: 30px;
  transition: 0.3s;
`;

export default function FixedDivider({className, width}) {
    if (!width){ width = 100; }

    return (
      <>
          <FDivider className={className} data-w={width}/>
      </>
    );
}