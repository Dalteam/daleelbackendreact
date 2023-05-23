

import { Box, Typography, styled } from '@mui/material';

import Youtube from '../Assets/Images/youtube.png';
import InstaTele from '../Assets/Images/InstaTele.jpeg';

const Header = styled(Box)`
   q
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CodeForInterview = () => {

    return (
        <Header>
            <Typography variant="h4">Daleel</Typography>
           
        </Header>
    )
}

export default CodeForInterview;
/*<Image src={Youtube} />
                <Image src={InstaTele} />*/
                /* <Box style={{display: 'flex'}}>
                
            </Box>
            */