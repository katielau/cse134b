import delay from './delay';

const users = [
  {
    username: "catlover99",
    password: "artist"
  },
  {
    username: "buyer",
    password: "buyer"
  }
];

class UserApi {
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveUser(user) {

    //user = Object.assign({}, user); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        // Simulate server-side validation
        const minUsernameLength = 1;
        if (user.username.length < minUsernameLength) {
          reject(`Username must be at least ${minUsernameLength} characters.`);
        }

        //if (user.username) {
          //const existingUserIndex = users.findIndex(a => a.username == user.username);
          //users.splice(existingUserIndex, 1, user);
        //} else {
          users.push(user);
        //}

        resolve(user);
      }, delay);
    });
  }
}

export default UserApi;
