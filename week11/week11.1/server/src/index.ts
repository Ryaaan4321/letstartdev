export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log(request.body);
		if (request.method == "GET") {
			sum(18, "ko birthday ").then(result => console.log(result));
			console.log(typeof(sum));
			return Response.json({
				msg: "this is get request"
			});
		} else {
			return Response.json({
				msg: "this is not a get request"
			});
		}
		async function sum(a: number, b: any) {
			return a + b;
		}
	},
} satisfies ExportedHandler<Env>;
