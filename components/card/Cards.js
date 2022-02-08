import {Grid} from '@mui/material';
import {useSelector} from 'react-redux';

import {getMobile} from '../../lib/redux/selectors';


export default function Cards({children}) {
    const mobile = useSelector(getMobile);

    return (
        <>
            <Grid container
                  spacing={mobile ? 4 : 6}
                  direction="column"
                  alignItems="center"
            >
                {children}
            </Grid>
        </>
    );
}