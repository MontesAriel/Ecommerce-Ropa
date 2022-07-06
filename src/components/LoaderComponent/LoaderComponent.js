import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useState } from 'react';

const LoaderComponent = () => {

    const [loader, setLoader] = useState(false)

    return(
        <Box sx={{ display: 'flex' }}>
            <CircularProgress color='success' />
        </Box>
    )
}

export default LoaderComponent