import Box from '@mui/material/Box';
import UpBar from '../../components/UpBar/UpBar'
import Slider from '../../components/Slider/Slider';
import Card from '../../components/Card/Card';
import './index.css';
export default function Home(){

    return(
        <Box className="main" >
            <UpBar />
            <Box id="template-areas"className="main-cointainer" sx={{width:'100%', height:'2000px'}}>
                <Box className="content" id="banner">
                        {/* <Slider/> */}
                    <Box className="slider">
                        <Slider/>
                    </Box>
                </Box>
                <Box className="content"id="cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
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