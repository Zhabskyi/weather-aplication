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
  /**
   * @param {Object} credentials 
   * @param {string} credentials.email
   * @param {string} credentials.password
   * */
  login = credentials => {
    return new Promise((resolve, reject) => {
      fetch(`${this.domain}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(resp => resp.json())
        .then(resp => {
          if(resp.token) {
            this.setToken(resp.token);
            resolve();
          }
          reject(new Error(resp.message));
        })
        .catch(e => {
          reject(new Error(e));
        });
    })
  };



  setToken(token) {
    console.log("SET TOKEN TO STORAGE");
    localStorage.setItem("token", token);
  }

  getToken = () => localStorage.getItem("token");

  loggedIn = () => !!this.getToken();
}

export default AuthService;
