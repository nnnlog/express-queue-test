const axios = require("axios");
let reqs = [];
for (let i = 0; i < 1000; i++) reqs.push(axios.get("http://127.0.0.1/api/queued"));
Promise.all(reqs).then(res => {
	console.log(res.map(d => d.data));
});
