import React, { Component } from 'react';
import { Tabs } from 'antd';

import City from './City';

import '../css/CityList.css'

const TabPane     = Tabs.TabPane;

class CityList extends Component {

  constructor(props) {
    super(props);
    this.state = { cities: [...props.cities] };

    this.removeCity  = this.removeCity.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({ cities: [...nextProps.cities] });
  }


  removeCity(removeName) {
    this.props.removeCity(removeName);
  }

  renderTabs() {
    return this.state.cities.map((name, i) => (
      <TabPane tab={name} key={i}>
        <City
        name={name}
        removeCity={this.removeCity}
        key={i}
        />
      </TabPane>
    ))
  }

  render() {
    return (
      <div className='CityList'>
        <Tabs
          className='TabLarge'
          defaultActiveKey='0'
          tabPosition='left'
          style={{ height: '100%' }}
        >
          {this.renderTabs()}
        </Tabs>
        <Tabs
          className='TabSmall'
          defaultActiveKey='0'
          tabPosition='top'
          style={{ height: '100%' }}
        >
          {this.renderTabs()}
        </Tabs>
      </div>
    )
  }
}

export default CityList;
