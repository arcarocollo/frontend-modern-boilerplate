import '../src/index';
import { render } from 'lit-html';

jest.mock('lit-html');

describe('index.ts', () => {
  it('should render the application', () => {
    expect(render).toHaveBeenCalled();
  });
});