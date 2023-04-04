import renderer from 'react-test-renderer';
import OfferItem from './OfferItem';

test('Offer Item renders correctly', () => {
  const tree = renderer
  .create(<OfferItem image='./tipo-cross.jpeg' name='test' engine='test-engine' fuel='test-fuel' price='test-price' id='1'></OfferItem>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});