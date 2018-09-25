import React, { Component } from 'react';
import { Tabs } from 'antd';

import City from './City';

import '../css/CityList.css'

const TabPane     = Tabs.TabPane;

class CityList extends Component {

  constructor(props) {
    super(props);

    this.state = { ...this.props };
    this.removeCity  = this.removeCity.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ cities: [...nextProps.cities] });
  }

  removeCity = (targetKey) => {
    this.props.removeCity(this.state.cities[targetKey]);
  }

  renderTabs() {
    return this.state.cities.map((name, i) => (
      <TabPane tab={name} key={i}>
        <City
        name={name}
        key={i}
        />
      </TabPane>
    ))
  }

  render() {
    return (
      <div className='CityList'>
        <Tabs
          type="editable-card"
          onEdit={this.removeCity}
          className='TabMain'
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
