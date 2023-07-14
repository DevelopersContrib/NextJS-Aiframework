import axios from 'axios'

export const POST = async (request) => {
	const data = await request.json();
	const domain = data.domain;

	try {
		const params = new URLSearchParams();
			
			params.append('email', data.email);
			const account = await axios.post('https://www.contrib.com/signup2/checkemailexists', params);
			console.log(account)
			if(account.data.exists){
				return new Response(JSON.stringify({status:false, error:"Account already exists"}), { status: 201 })
			}else{
                params.append('password', data.password);
                params.append('domain', domain);
                params.append('is_developer', '0');
                params.append('name', data.name);
                const save_account = await axios.post('https://www.contrib.com/api/aisignup', params);
                console.log(save_account)
				return new Response(JSON.stringify({status:true,memberId:save_account.data.data}), { status: 201 });
			}

	} catch (error) {
			console.log('error',error)
			return new Response("An error occurred", { status: 500 });
	}
}