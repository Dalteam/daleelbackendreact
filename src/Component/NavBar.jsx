
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`

    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;


const NavBar = () => {
    return (
        
        <Header position="static">
            <h1 align="center">Daleel</h1>
            <Toolbar>
                
                <Tabs to="all" exact>عرض جميع السجلات</Tabs>
                
                <Tabs to="add" exact>إضافة سجل جديد</Tabs> 
                
                
            </Toolbar>
            
        </Header>
        
         
    )
  
}
//<Tabs to="./" exact>دليل</Tabs>
export default NavBar;