import {css} from '@emotion/react';
import {styled} from '@mui/material/styles';
import {Button, Paper, Tooltip} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';

import {getDarkMode} from '../../lib/redux/selectors';
import {toggleDarkMode} from '../../lib/redux/actions';

const Background = styled(Paper)`
  transition: 0.3s;
  
  &:hover {
    background-color: ${props => props.theme.palette.hover.main};
  }
`;

const DarkModeButton = styled(Button)`
  padding: 0;
  width: 64px;
  height: 64px;
`;

const iconSize = css`
  width: 2em;
  height: 2em;
`;

const LightOn = styled(WbIncandescentIcon)`${iconSize}`;
const LightOff = styled(WbIncandescentOutlinedIcon)`${iconSize}`;


export default function DarkMode() {
    const dispatch = useDispatch();
    const darkMode = useSelector(getDarkMode);

    return (
        <>
            <Tooltip
                title={darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
                placement="top"
                arrow
                disableInteractive
            >
                <div>
                    <Background>
                        <DarkModeButton
                            onClick={() => dispatch(toggleDarkMode())}
                        >
                            {darkMode ? (
                                <LightOn />
                            ) : (
                                <LightOff />
                            )}
                        </DarkModeButton>
                    </Background>
                </div>
            </Tooltip>
        </>
    );
}