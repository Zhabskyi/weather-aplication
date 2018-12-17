class AuthService {
  constructor(domain) {
    this.domain = domain || "https://rest-node-course-api.herokuapp.com";
  }

  validateResponse = resp => {
    return resp.json().then(json => {
      if (resp.status !== 200 || resp.status !== 201) {
        const error = new Error();
        error.code = resp.status;
        error.message = json.message;
        error.payload = json.data;
        return Promise.reject(error);
      }
      return json;
    });
  };

  onValidationSuccess = jsonResponseData => {
    this.setToken(jsonResponseData.token);
    return jsonResponseData;
  };

  onValidationError = e => {
    console.log(e);
    throw e;
  };

  signIn = state => {
    return fetch(`${this.domain}/auth/signup`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then(this.validateResponse)
      .then(this.onValidationSuccess)
      .catch(this.onValidationError);
  };

  login = state => {
    return fetch(`${this.domain}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        this.setToken(resp.token);
      })
      .catch(e => {
        console.log(e);
      });
  };

  getPosts = () => {
    fetch(`${this.domain}/feed/posts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.getToken()}`,
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
      })
      .catch(e => {
        console.log(e);
      });
  };

  setToken(token) {
    console.log("SET TOKEN TO STORAGE");
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  loggedIn() {
    const token = this.getToken();
    return !!token;
  }
}

export default AuthService;
