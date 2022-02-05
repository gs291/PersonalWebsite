import {styled} from '@mui/material/styles';
import {Button, Tooltip} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';

import {getDarkMode} from '../../lib/redux/selectors';
import {toggleDarkMode} from '../../lib/redux/actions';

const DarkModeButton = styled(Button)`
  padding: 0;
  width: 64px;
  height: 64px;
  background-color: ${props => props.theme.palette.background.paper};
  
  &:hover {
    background-color: ${props => props.theme.palette.hover.main};
  }
  
  & .MuiSvgIcon-root {
    width: 2em;
    height: 2em;
  }
`;


export default function DarkMode({className}) {
    const dispatch = useDispatch();
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Tooltip title={darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'} placement="top">
                <div>
                    <DarkModeButton
                        onClick={() => dispatch(toggleDarkMode())}
                        data-dm={darkMode}
                        className={className}
                    >
                        {darkMode ? (
                            <WbIncandescentIcon />
                        ) : (
                            <WbIncandescentOutlinedIcon />
                        )}
                    </DarkModeButton>
                </div>
            </Tooltip>
        </>
    );
}