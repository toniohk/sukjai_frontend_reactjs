import api from './api';

const login = (password) => {
  return new Promise((resolve, reject) => {
    api.post('/auth/login', { email: 'test@test.com', password }).then(response => {
      if (response.data.code === 200) {
        resolve(response.data.data);
      } else {
        reject(response);
      }
    }).catch(error => {
      console.log(error);
      reject(error);
    });
  });
};

const resetPassword = (oldpassword, newpassword) => {
  return new Promise((resolve, reject) => {
    api.post('/auth/resetpassword', {email: 'test@test.com', oldpassword, newpassword}).then(response => {
      if (response.data.code === 200) {
        resolve(response.data.data);
      } else {
        reject(response);
      }
    }).catch(error => {
      console.log(error);
      reject(error);
    });
  });
};

export { login, resetPassword };