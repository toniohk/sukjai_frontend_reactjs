import api from './api';

const getCategories = () => {
  return new Promise((resolve, reject) => {
    api.get('/category/list').then(response => {
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

const getCategory = (id) => {
  return new Promise((resolve, reject) => {
    api.get(`/category/${id}`).then(response => {
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

const createCategory = (data) => {
  return new Promise((resolve, reject) => {
    api.post('/category/create', data).then(response => {
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

const updateCategory = (id, data) => {
  return new Promise((resolve, reject) => {
    api.post(`/category/update/${id}`, data).then(response => {
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

const deleteCategory = (id) => {
  return new Promise((resolve, reject) => {
    api.delete(`/category/${id}`).then(response => {
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

export { getCategories, getCategory, createCategory, updateCategory, deleteCategory };