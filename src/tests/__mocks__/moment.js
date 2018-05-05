// we cannot do -> import moment from 'moment';
// in our test because it will look for the mocked version
// so essentially we have a function that calls itself
// which will create a stack trace error

// this gives us the original version of moment:
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};
