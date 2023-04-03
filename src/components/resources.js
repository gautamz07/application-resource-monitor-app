import react, { Component } from "react";

import axiosLib from '../utils/axios' 

class Resources extends Component {
  constructor() {
    super()
    this.state = {
      resources: []
    }
  }

  componentDidMount() {
    axiosLib.get('/resources')
      .then((response) => {
        debugger
        this.setState({
          resources: response.data
        })
      })
  }

  renderApplications(data = []) {
    return (
      <section className='dataWrapper'>
        { data.map(el => <span
            className='dataBlock'
            style={{
              display: 'inline-block',
              margin: '1rem',
              padding: '1rem',
              boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 2px 2px'
            }}
          >{el}</span>) }
      </section>
    )
  }

  render() {
    const { resources } = this.state



    return resources.length ? this.renderApplications(resources) : <div>No Resources</div>
  }
}

export default Resources