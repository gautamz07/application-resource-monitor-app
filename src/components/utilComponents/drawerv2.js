import react from "react";
import { 
  AiFillDollarCircle,
  AiTwotoneEnvironment, 
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

const DrawerDetails = (props) => {
  if(props.loading) {
    return (<Drawer 
      width='40vw'
      title="Application - Detailed View"
      placement="right"
      onClose={
        () => props.onClickClose()
      } 
      open={props.ACTION_UI_DRAWER}>
        <Spin />
    </Drawer>
    )
  }
  return (<Drawer 
    width='40vw'
    title="Application - Detailed View"
    placement="right"
    onClose={
      () => props.onClickClose()
    } 
    open={props.ACTION_UI_DRAWER}>
    <Space direction="vertical" size={30}>
    { props.resourseDetails.map((resourseDetailsInFo, index) => 
      <Card 
        key={index}
        title={ (<span>{`InstanceId - ${resourseDetailsInFo.InstanceId}`}&nbsp;<AiOutlineBlock /></span>)} 
        style={{ width: '100%' }}>
        <ul
          className="cardGranularDetails"
        >
          <li>
            <Tooltip placement="topRight" title='ConsumedQuantity'>
              <AiFillDatabase />
            </Tooltip>
            <span>{resourseDetailsInFo.ConsumedQuantity}</span>
          </li>
          <li>
            <Tooltip placement="topRight" title='Cost'>
              <AiFillDollarCircle />
            </Tooltip>
            <span>{resourseDetailsInFo.Cost}</span>
          </li>
          <li>
            <Tooltip placement="topRight" title='Location'>
              <AiTwotoneEnvironment />
            </Tooltip>
            <span>{resourseDetailsInFo.ResourceLocation}</span>
          </li>
        </ul>
        { resourseDetailsInFo.Tags && Object.values(resourseDetailsInFo.Tags).map(tag => <Tag color="#87d068">{tag}</Tag>) } 
      </Card>)}
    </Space>
  </Drawer>
)}

export default DrawerDetails;