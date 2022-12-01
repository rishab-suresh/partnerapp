import React from 'react'
import AppsandSettings from '../Components/MoreComponents/AppsandSettings'
import Contact from '../Components/MoreComponents/Contact'
import Helpcenter from '../Components/MoreComponents/Helpcenter'
import Logout from '../Components/MoreComponents/Logout'
import MoreHeader from '../Components/MoreComponents/MoreHeader'
import OutletOpen from '../Components/MoreComponents/OutletOpen'
import RecievingOrders from '../Components/MoreComponents/RecievingOrders'
import "./More.css"

export const More = () => {
  return (
    <div>
        <MoreHeader/>
        <RecievingOrders/>
        <OutletOpen/>
        <AppsandSettings/>
        <Helpcenter/>
        <Contact/>
        <Logout/>
    </div>
  )
}
