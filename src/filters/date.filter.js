import moment from 'moment';

export default (value) => {
  if (!value) {
    return 'No date value informed';
  }
  return moment(value).format('MM/DD/YYYY');
};
