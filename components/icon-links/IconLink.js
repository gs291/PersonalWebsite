import {Link} from '@mui/material';
import {styled} from '@mui/material/styles';

const LinkWrapper = styled(Link)`
  width: 50px;
  height: 50px;

  border-radius: 20%;
  transition: 0.3s;

  &:hover {
    background-color: ${props => props.theme.palette.border.main};
    color: ${props => props.theme.palette.textOpposite.primary};
  }
`;

export default function IconLink({children, href, ...rest}) {

    return (
        <>
            <LinkWrapper
                color="inherit"
                href={href}
                {...rest}
            >
                {children}
            </LinkWrapper>
        </>
    );
}