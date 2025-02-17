export default function sendFetch(
	route: string,
	method: string,
	cookie: string,
	data: Object
) {
	return new Promise((resolve, reject) => {
		fetch(route, {
			method: method,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Credentials": "true",
				Accept: "application/json",
				Cookie: cookie,
			},
			credentials: "include",
			body: JSON.stringify(data),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				resolve(data);
			});
	});
}

interface ApiResponse {
	prompt: string;
	input: string;
	answer: string;
}

export type { ApiResponse };
