import styled from "@emotion/styled";
import {Button, Tooltip} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';

import siteColors from "../../lib/utils/siteColors";
import {getDarkMode} from "../../lib/redux/selectors";
import {toggleDarkMode} from "../../lib/redux/actions";

const DarkModeButton = styled(Button)`
  padding: 0;
  width: 64px;
  height: 64px;
  background-color: ${props => props["data-dm"] ? siteColors.background.card.dark : siteColors.background.card.light};
  
  &:hover {
    background-color: ${props => props["data-dm"] ? siteColors.hover.darkMode.dark : siteColors.hover.darkMode.light};
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
            <Tooltip title={darkMode ? "Enable Light Mode" : "Enable Dark Mode"} placement="top">
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