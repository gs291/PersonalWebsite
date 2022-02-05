import {Typography} from '@mui/material';

import PageInfo from './PageInfo';

export default function AboutMe() {
    return (
        <>
            <PageInfo>
                <Typography variant="h4">
                    Hello
                </Typography>
                <Typography variant="body1">
                    This is all about me and me and me.
                </Typography>
            </PageInfo>
        </>
    );
}