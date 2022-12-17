const GetApiRepo = () => {
	const _apiKey = 'https://api.github.com/users/fotzeold/repos';

	const getResours = async () => {
		const result = await fetch(_apiKey);

		if (!result.ok) throw new Error(result.status);

		return await result.json();
	}

	const getRepoInfo = async () => {
		const result = await getResours();
		return result.map(_transformData);
	}

	const _transformData = (data) => {
		return {
			id: data.id,
			name: data.name,
			description: data.description,
			url: data.html_url
		}
	}

	return { getRepoInfo }
}

export default GetApiRepo;
