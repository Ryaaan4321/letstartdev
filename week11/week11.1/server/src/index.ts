export default {
	async fetch(request, env, ctx): Promise<Response> {
		console.log(request.body);
		if(request.method=="GET"){
			return Response.json({
				msg:"this is get request"
			})
		}else{
			return Response.json({
				msg:"there is not a get request"
			})
		}
	
	},
} satisfies ExportedHandler<Env>;
