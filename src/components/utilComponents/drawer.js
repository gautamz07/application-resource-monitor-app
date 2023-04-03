import react from "react";
import { 
  AiTwotoneEnvironment, 
  AiOutlineBarChart,
  AiFillDatabase,
  AiOutlineBlock
} from "react-icons/ai";
import { Card,
  Space,
  Drawer,
  Tag,
  Spin,
  Tooltip,
} from 'antd';

const DrawerDetails = props => <Drawer 
    width='40vw'
    title="Application - Detailed View"
    placement="right"
    onClose={
      () => props.onClick()
    } 
    open={props.ACTION_UI_DRAWER}>
    <Space direction="vertical" size={30}>
    { props.applicationDetails.map((appDetailedInFo, index) => 
      <Card 
        key={index}
        title={ (<span>{`InstanceId - ${appDetailedInFo.InstanceId}`}&nbsp;<AiOutlineBlock /></span>)} 
        style={{ width: '100%' }}>
        <ul
          className="cardGranularDetails"
        >
          <li>
            <Tooltip placement="topRight" title='MeterCategory'>
              <AiFillDatabase />
            </Tooltip>
            <span>{appDetailedInFo.MeterCategory}</span>
          </li>
          <li>
            <Tooltip placement="topRight" title='UnitOfMeasure'>
              <AiOutlineBarChart />
            </Tooltip>
            <span>{appDetailedInFo.UnitOfMeasure}</span>
          </li>
          <li>
            <Tooltip placement="topRight" title='Location'>
              <AiTwotoneEnvironment />
            </Tooltip>
            <span>{appDetailedInFo.Location}</span>
          </li>
        </ul>
        { appDetailedInFo.Tags && Object.values(appDetailedInFo.Tags).map(tag => <Tag color="#87d068">{tag}</Tag>) }
      </Card>)}
    </Space>
  </Drawer>

export default DrawerDetails;