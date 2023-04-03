import react, { Component } from "react";
import { IconName, AiOutlineCloud, AiTwotoneEnvironment, AiOutlineBarChart, AiFillDatabase, AiOutlineBlock } from "react-icons/ai";
import { Card, Space, Drawer, Button, Tag, Statistic } from 'antd';
import axiosLib from '../utils/axios' 

class Applications extends Component {
  constructor() {
    super()
    this.state = {
      applications: [],
      ACTION_UI_DRAWER: false,
      applicationDetails: []
    }
  }

  componentDidMount() {
    axiosLib.get('/applications')
      .then((response) => {
        this.setState({
          applications: [...response.data]
        })
      })
  }

  getAdditionalApplicationInfo(slug) {
    axiosLib.get(`/applications/${slug}`)
      .then((response) => {
        debugger
        this.setState({
          applicationDetails: [...response.data],
          ACTION_UI_DRAWER: true,
        })
      })
  }

  renderApplications(data = []) {
    return (
      <Space className='dataWrapper'
      direction="horizontal" size={16}
      >
        { data.map(el => 
          <Card title={el} style={{ width: 300 }}>
             {/* <AiOutlineCloud />  */}
             <Button
              type="primary"
              icon={<AiOutlineCloud style={{ fontSize: '1rem', marginRight: '0.25rem' }}/>} 
              onClick={() => this.getAdditionalApplicationInfo(el)}
              >
                Get More Info
              </Button>
          </Card>
          )}
          <Drawer 
            width='50vw'
            title="Basic Drawer"
            placement="right"
            onClose={
            () => this.setState({
              ACTION_UI_DRAWER: false
            })
          } open={this.state.ACTION_UI_DRAWER}>
            <Space direction="vertical" size={16}>
            { this.state.applicationDetails.map( appDetailedInFo => 
              <Card title={ (<span>{`InstanceId - ${appDetailedInFo.InstanceId}`}&nbsp;<AiOutlineBlock /></span>)} style={{ width: '100%' }}>
                <ul
                  className="cardGranularDetails"
                >
                  {/* <li>
                    <span>InstanceId :- </span>
                    <span>{appDetailedInFo.InstanceId}</span>
                  </li> */}
                  <li>
                    <span><AiFillDatabase /> :-</span>
                    <span>{appDetailedInFo.MeterCategory}</span>
                  </li>
                  <li>
                    <span><AiOutlineBarChart /> :-</span>
                    <span>{appDetailedInFo.UnitOfMeasure}</span>
                  </li>
                  <li>
                    <span><AiTwotoneEnvironment /> :-</span>
                    <span>{appDetailedInFo.Location}</span>
                    {/* <Statistic
                      title={<AiTwotoneEnvironment />}
                      value={appDetailedInFo.Location}
                      // precision={2}
                      valueStyle={{ color: '#cf1322' }}
                      // prefix={<AiTwotoneEnvironment />}
                      // suffix="%"
                    /> */}
                  </li>
                </ul>
                { appDetailedInFo.Tags && Object.values(appDetailedInFo.Tags).map(tag => <Tag color="#87d068">{tag}</Tag>) }
              </Card>)}
            </Space>
          </Drawer>
      </Space>
    )
  }
  render() {
    const { applications } = this.state



    return applications.length ? this.renderApplications(applications) : <div>No Applications</div>
  }
}

export default Applications