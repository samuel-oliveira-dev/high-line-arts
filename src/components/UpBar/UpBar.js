import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'; 
import SearchField from '../SearchField.js/SearchField';
import logo from './images/logo.png';
import IconButton from '@mui/material/IconButton';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import StoreIcon from '@mui/icons-material/Store';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PhoneIcon from '@mui/icons-material/Phone';
import './index.css'
const menuItems = [
    <IconButton>
        <StoreIcon style={{color:'white'}} sx={{paddingRight:1}}color='white'/>
        <Typography id="menu-items">Produtos</Typography>
    </IconButton>,
    <IconButton>
        <ColorLensIcon style={{color:'white'}} sx={{paddingRight:1}}/>
        <Typography id="menu-items">Serviços</Typography>
    </IconButton>,
    <IconButton>
        <PhoneIcon style={{color:'white'}} sx={{paddingRight:1}}/>
        <Typography id="menu-items">Contato</Typography>
    </IconButton>,
    <IconButton>
        <FmdGoodIcon style={{color:'white'}} sx={{paddingRight:1}}/>
        <Typography id="menu-items">Localização</Typography>

    </IconButton>
];
export default function UpBar (){
    return (
        <Box className="container" id="template-areas" sx={{width:'100%', height:'20vh'}}>
            <AppBar id="header" position="fixed" color="default" className="bar">
               <Box className="container-bar" id="template-areas">
                    <Box className="item-bar" >
                        <img className="logo" src={logo}></img>
                    </Box>
                    <Box className="item-bar">
                        <SearchField className ="center" placeholder="Busque em Produtos"/>
                    </Box>
                    <Box className="item-bar" sx={{display:'flex', justifyContent:'space-around', flexDirection:'row'}}>
                        {menuItems.map(item=><Typography id="menu-items"> {item}</Typography>)}
                    </Box>
               </Box>
            </AppBar>
        </Box>
      );
}
 
