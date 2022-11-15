class GetApiRepo {
	_apiKey = 'https://api.github.com/users/fotzeold/repos';

	async getResours() {
		const result = await fetch(this._apiKey);

		if (!result.ok) throw new Error(result.status);

		return await result.json();
	}

}

export default GetApiRepo;
