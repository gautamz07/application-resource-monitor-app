import react, { Component } from "react";
import { 
  AiOutlineBug,
} from "react-icons/ai";
import { Card,
  Space,
  Button,
  Spin,
  Tooltip,
} from 'antd';
import axiosLib from '../utils/axios' 
import DrawerDetails from './utilComponents/drawer'

class Applications extends Component {
  constructor() {
    super()
    this.state = {
      applications: [],
      ACTION_UI_DRAWER: false,
      applicationDetails: [],
      loading: false,
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

  closeDrawer() {
    this.setState({
      ACTION_UI_DRAWER: false,
    })
  }

  renderApplications(data = []) {
    return (<Space className='dataWrapper'
      direction="horizontal" size={16}
      >
        { data.map(el => 
          <Card title={
            <Tooltip placement="top" title={el}>
                {el}
            </Tooltip>
          } style={{ width: 250 }}>
             <Button
              className="fetchDetailsBtn"
              icon={<AiOutlineBug style={{ fontSize: '1rem', marginRight: '0.25rem' }} />}
              onClick={() => this.getAdditionalApplicationInfo(el)}
              >
                More info
              </Button>
          </Card>
          )}
          <DrawerDetails
            {...this.state}
            onClick={() => this.closeDrawer()}
          />
      </Space>
    )
  }
  render() {
    const { applications } = this.state
    return applications.length ? this.renderApplications(applications) : <Spin className='loadingResource' size='large' />
  }
}

export default Applications