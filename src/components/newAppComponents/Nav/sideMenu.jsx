import React, { useContext, useEffect} from 'react';
import sideMenuStyle from './sideMenu.module.css'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import navheader from '../../../elements-Data/navheader/navheader'
import { LanguageContext } from '../../../context/languageContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

import homeStyle from '../Home/home.module.css'
import aboutStyle from '../About/about.module.css'
import contactStyle from '../contact/contact.module.css'
import navStyler from './nav.module.css'

export default function SwipeableTemporaryDrawer() {
  const { Language, SetLanguage } = useContext(LanguageContext)
  const [state, setState] = React.useState({left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={sideMenuStyle.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
            <div className={sideMenuStyle.SideNav}>
                <span> <a></a></span>

                <span> <a href={"#"+homeStyle.Home}>{navheader[Language].home}</a></span>
                <span> <a href={"#"+aboutStyle.About}>{navheader[Language].about}</a></span>
                <span> <a href={"#"+contactStyle.Contact}>{navheader[Language].contact}</a> </span>
            {/* </div> */}
            </div>
      </List>
      <Divider />

    </div>
  );


  return (
    <div className="bars">
        
          <Button onClick={toggleDrawer('left', true)} aria-label={navheader[Language].ariaLabel} >
          <FontAwesomeIcon icon={faBars} color="white" />

          </Button>
          <SwipeableDrawer
            
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
      
    </div>
  );
}
