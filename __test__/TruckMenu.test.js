import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../client/src/store/configureStore.js';
import { TruckMenuComponent } from '../client/src/components/TruckMenu';

describe('TruckMenu Component Test', () => {
  let truckMenu;
  const item = {}
  const menu = [
    { title: 'apps',
      items: []
    },
    { title: 'salads',
      items: []
    },
    { title: 'mains',
      items: []
    }
  ];

  beforeEach(() => {
    truckMenu = shallow(
      <TruckMenuComponent menu={menu} />
    );
  });

  it('should create a TruckMenu component', () => {
    expect(truckMenu.exists()).toBe(true);
  });

  // it('should create provided number of truck menu groups', () => {
  //   const menugroups = truckMenu.find('TruckMenuGroup');
  //   expect(menugroups.length).toBe(3);
  // });
});
