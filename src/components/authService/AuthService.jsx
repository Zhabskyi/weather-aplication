class AuthService {
	constructor() {
		this.domain = 'https://rest-node-course-api.herokuapp.com'

	}

	signIn = (state) => {
		return fetch(`${this.domain}/auth/signup`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(state),
		}).then((resp) => {
			console.log(resp)
		}).catch(e => {
			console.log(e);
		});
	}

	login = (state) => {
		return fetch(`${this.domain}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(state),
		})
		.then(resp => resp.json())
		.then(resp => { 
			console.log(resp);
			this.setToken(resp.token);
		})
		.catch(e => {
			console.log(e);
		});
	}

	getPosts = () => {
		fetch(`${this.domain}/feed/posts`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${this.getToken()}`,
				'Content-Type': 'application/json'
			},
		})
		.then(resp => resp.json())
		.then(resp => { 
			console.log(resp);
		})
		.catch(e => {
			console.log(e);
		}); 
	}

	setToken(token) {
		localStorage.setItem('token', token)
	}

	getToken() {
		return localStorage.getItem('token')
	}

	loggedIn() {
		const token = this.getToken();
		return !!token;
}

}

export default AuthService;