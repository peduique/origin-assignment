import { shallow } from 'enzyme';
import { App } from './App';
import { render } from '@testing-library/react';
import Content from './components/templates/Content';

describe('App', () => {
  describe('using enzyme', () => {
    it('returns the text', () => {
      const component = shallow(<App />);
      expect(
        component
          .find(Content)
          .dive()
          .find('[data-testid="greetings-container"]')
          .text()
      ).toEqual("Let's plan your saving goal.");
    });
  });
  describe('using testing library', () => {
    it('returns the text', () => {
      const component = render(<App />);
      expect(component.getByTestId('greetings-container').textContent).toBe(
        "Let's plan your saving goal."
      );
    });
  });
});
