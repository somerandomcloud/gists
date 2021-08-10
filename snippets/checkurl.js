/* With slash at the end */

const checkUrl = (url) => {
	return new Promise((resolve) => {
		const res = String(url).match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)[/]/gi);
		resolve(res !== null);
	});
};

/* How to use */

console.log(checkUrl('https://google.com')) // false
console.log(checkUrl('https://google.com/')) // true

/* Without slash at the end */

const checkUrl = (url) => {
	return new Promise((resolve) => {
		const res = String(url).match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi);
		resolve(res !== null);
	});
};

/* How to use */

console.log(checkUrl('google.com')) // true
console.log(checkUrl('https://google.com')) // true
console.log(checkUrl('https://google.com/')) // true