import { render, screen } from '@testing-library/react';
import React from 'react';
// import { getQueriesForElement } from '@testing-library/dom'; // needed for test not useing react library
import * as ReactDOM from 'react-dom';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('ToDo', () => {
//   const root = document.createElement('div');
//   ReactDOM.render(<App />, root);
//   const { getByText, getByLabelText } = getQueriesForElement(root); //Queries are the methods that Testing Library gives you to find elements on the page. See https://testing-library.com/docs/queries/about/#

//   //after rendering <App> component
//   //use DOM APIs (query selector) to make assertions
//   expect(root.querySelector('h1').textContent).toBe('TODO'); // more a progamatic test
//   expect(getByText('TODO')).not.toBeNull(); // use this to look for 'TODO' anywhere in root element not referring to the element <h1> on the page. Its a more functional test
//   expect(root.querySelector('label').textContent).toBe('Add todo: ');
//   expect(getByLabelText('Add todo:')).not.toBeNull(); //functional test
//   expect(root.querySelector('button').textContent).toBe('Add #1');
//   expect(getByText('Add #1')).not.toBeNull(); // functional test
// });

// function render(component) {
//   const root = document.createElement('div');
//   ReactDOM.render(component, root);
//   return getQueriesForElement(root);
// }

test('ToDo', () => {
  const { getByText, getByLabelText } = render(<App />);

  //after rendering our component
  getByText('TODO');
  getByLabelText('Add todo:');
  getByText('Add #1');
});
