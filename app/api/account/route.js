import axios from 'axios'

export const POST = async (request) => {
	const data = await request.json();
	const code = data.code;
	try {
		const params = new URLSearchParams();
		params.append('code', code);
		const account = await axios.post(process.env.CONTRIB_API+'/account/GetUserInfo', params);

		return new Response(JSON.stringify(account.data), { status: 201 });
	} catch (error) {
		console.log('error',error)
		return new Response("An error occurred", { status: 500 });
	}
}