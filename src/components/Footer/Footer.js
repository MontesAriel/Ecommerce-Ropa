import './Footer.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {


    const [value, setValue] = useState(0);

    return ( 
        <Box sx={{ width: 500 }} className="footer-container">
        <BottomNavigation
        className='footer'
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            
          }}
        >
          <Link to='/contacto'>
                <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
          </Link>

          <Link to='/contacto'>
                <BottomNavigationAction label="Gmail" icon={<EmailIcon />} />
          </Link>
          
          <Link to='/contacto'>
                <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
          </Link>

        </BottomNavigation>
      </Box>
    )
}

export default Footer