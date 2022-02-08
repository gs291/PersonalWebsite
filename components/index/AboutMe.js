import {Typography} from '@mui/material';

import Card from "../card/Card";

export default function AboutMe() {
    return (
        <>
            <Card>
                <Typography variant="h4">
                    Hello
                </Typography>
                <Typography variant="body1">
                    This is all about me and me and me.
                </Typography>
            </Card>
        </>
    );
}