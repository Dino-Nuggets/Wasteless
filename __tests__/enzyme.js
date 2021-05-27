import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';




import SideNavBar from '../components/SideNavBar';
import Item from '../components/Item';
//configure  for new for newer react versions

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });

describe('React unit tests', ()=>{
  describe('SideNavBar', () =>{
    let wrapper;
    const props ={};


    beforeAll(()=>{
        wrapper = shallow(<SideNavBar{...props}/>);
      });

      it('Renders an H3', () => {
        expect(wrapper.type()).toEqual('div');
        expect(wrapper.text()).toEqual('Navigation  To Buy  Current Pantry Stock Eaten Disposed');
        expect(wrapper.type()).toEqual('div');
        expect(wrapper.text()).toEqual('Navigation  To Buy  Current Pantry Stock Eaten Disposed');
      });



  })
});
