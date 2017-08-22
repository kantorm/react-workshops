import React from 'react';
import { shallow } from "enzyme";
import ReactDOM from 'react-dom';
import App, { TodoList, TodoAdd } from './App';


it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it("renders TodoList", () => {
  const wrapper = shallow(<TodoList />);
  expect(wrapper).toMatchSnapshot();
});
