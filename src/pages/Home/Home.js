import Box from '@mui/material/Box';
import UpBar from '../../components/UpBar/UpBar'
import './index.css';
export default function Home(){

    return(
        <Box >
            <UpBar />
            <Box id="template-areas"className="main-cointainer" sx={{width:'100%', height:'2000px'}}>
                <Box className="content" id="banner">
                    <Box className="slider">

                    </Box>
                </Box>
                <Box className="content"id="cards">
                    <p>
                        Cards
                    </p>
                </Box>
                <Box className="content"id="servicos">
                    <p>Serviços</p>
                </Box>
                <Box className="content"id="footer">
                    <p>Footer</p>
                </Box>
            </Box>
        </Box>
    )
}