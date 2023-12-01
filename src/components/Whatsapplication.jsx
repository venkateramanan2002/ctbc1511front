import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import TitleLogo2 from '../images/TitleLogo2.png'
function Whatsapplication() {
  return (
    <div className='Whatsapp-icon'>
    <FloatingWhatsApp 
    phoneNumber='+916383848810'
    accountName='CTBC'
    allowClickAway='true'
    notification='true' 
    notificationDelay='60'
    avatar={TitleLogo2} 
    
     />
    
      </div>
  )
}

export default Whatsapplication
