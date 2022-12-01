import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Addons } from './Addons';
import { Cateogry } from './Cateogry';

import './InventoryList.css'
import { Items } from './Items';

export default () => (
    <div className='container' id='InventoryBg'>
        <Tabs>
            <TabList className="Inventory" >
                <Tab>Items</Tab>
                <Tab>Addons</Tab>
                <Tab>Category</Tab>

            </TabList>

            <TabPanel>
                <Items />
            </TabPanel>
            <TabPanel>
                <Addons />
            </TabPanel>
            <TabPanel>
                <Cateogry />
            </TabPanel>

        </Tabs> 
    </div>

);