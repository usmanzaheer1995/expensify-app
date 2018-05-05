// in testing, a fixture is just a test dummy data
import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 5,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 6000,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'Credit card',
    note: '',
    amount: 4500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];
