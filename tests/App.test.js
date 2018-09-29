import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-static';
import './testsConfig';

import * as App from '../src/App';
import * as Containers from '../src/containers';

describe('App Component', () => {
  it('will match snapshot', () => {
    const component = renderer.create(<App.App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('will provide 404 page for bad path', () => {
    console.log(App);
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App.App />
      </MemoryRouter>,
    );
    expect(wrapper.find(Containers.FourOhFour)).toHaveLength(1);
  });
});
