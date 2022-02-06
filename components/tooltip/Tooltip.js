import {styled} from '@mui/material/styles';
import {Tooltip as MUITooltip} from '@mui/material';

const TooltipWrapper = styled('div')`
  display: flex;
`;

export default function Tooltip({children, title, ...rest}) {

    return (
        <>
            <MUITooltip
                title={title}
                placement="top"
                arrow
                disableInteractive
                {...rest}
            >
                <TooltipWrapper>
                    {children}
                </TooltipWrapper>
            </MUITooltip>
        </>
    );
}