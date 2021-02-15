const formatDate = (value: Date): string => {

const stringDate = value.toString();



return stringDate.substr(0,10).split('-').reverse().join('/');
} // TODO

export default formatDate;
