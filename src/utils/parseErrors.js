import _ from 'lodash';

export default function(errors) {
	const result = {};
	_.forEach(errors, (value, key) => {
		result[key] = value.message;
	});
	return result;
};