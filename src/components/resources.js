import React, { useState, useEffect, Component, useCallback } from "react";
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
import DrawerDetails from './utilComponents/drawerv2';


const renderResources = (data = [], getAdditionalResourceInfo = () => {}, closeDrawer = () => {}, resourseDetails, ACTION_UI_DRAWER, loading) => {
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
            onClick={() => getAdditionalResourceInfo(el)}
            >
              More info
            </Button>
        </Card>
        )}
        <DrawerDetails
          resourseDetails={resourseDetails || []}
          onClick={() => () => {}}
          onClickClose={() => closeDrawer()}
          ACTION_UI_DRAWER={ACTION_UI_DRAWER}
          loading={loading}
        /> 
    </Space>
  )
}

function Resources() {
  const [ resources, setResources ] = useState([]);
  const [ ACTION_UI_DRAWER, setACTION_UI_DRAWER ] = useState(false);
  const [ resourseDetails, setResourseDetails ] = useState([]);
  const [ loading, setLoading ] = useState(false);


  useEffect(() => {
    let mounted = true;
    axiosLib.get('/resources')
      .then((response) => {
        setResources([...response.data])
      })
    return () => mounted = false;
  }, [])

  const getAdditionalResourceInfo = useCallback((slug) => {
    setLoading(true)
    setACTION_UI_DRAWER(true)
    axiosLib.get(`/resources/${slug}`)
      .then((response) => {
        setLoading(false)
        setResourseDetails([...response.data])
      })
  }, [])

  const closeDrawer = useCallback(() => {
    setACTION_UI_DRAWER(false)
    setResourseDetails([])
  }, [])

  return resources.length ? 
    renderResources.call(this, resources, getAdditionalResourceInfo, closeDrawer, resourseDetails, ACTION_UI_DRAWER, loading) 
    : <Spin className='loadingResource' size='large' />  
}

export default Resources