import {css} from '@emotion/react';
import {styled} from '@mui/material/styles';
import {Button, Paper} from '@mui/material';
import {useDispatch, useSelector} from 'react-redux';
import WbIncandescentIcon from '@mui/icons-material/WbIncandescent';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';

import Tooltip from '../tooltip/Tooltip';
import {getDarkMode} from '../../lib/redux/selectors';
import {toggleDarkMode} from '../../lib/redux/actions';
import {BUTTON_PREFIX, SELECT_CONTENT_BUTTON, ga4SendSelectContent} from '../../lib/utils/ga4';

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

const GA4_DARK_MODE_ID = "DARK_MODE";

export default function DarkMode() {
    const dispatch = useDispatch();
    const darkMode = useSelector(getDarkMode);

    const changeDarkMode = () => {
        dispatch(toggleDarkMode());
        ga4SendSelectContent(SELECT_CONTENT_BUTTON, {item_id: `${BUTTON_PREFIX}${GA4_DARK_MODE_ID}`});
    }

    return (
        <>
            <Tooltip title={darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'} >
                <Background>
                    <DarkModeButton onClick={changeDarkMode}>
                        {darkMode ? (
                            <LightOn />
                        ) : (
                            <LightOff />
                        )}
                    </DarkModeButton>
                </Background>
            </Tooltip>
        </>
    );
}