import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Missions from '../components/missions/missions';
import store from '../redux/store';

describe('Missions component', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
