import api from './api';

const getAllMedias = () => {
  return new Promise((resolve, reject) => {
    api.get('/media/list').then(response => {
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

const getMedias = (category_id) => {
  return new Promise((resolve, reject) => {
    api.get(`/media/category/${category_id}`).then(response => {
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

const createMedia = (data) => {
  return new Promise((resolve, reject) => {
    api.post('/media/create', data).then(response => {
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

const updateMedia = (id, data) => {
  return new Promise((resolve, reject) => {
    api.post(`/media/update/${id}`, data).then(response => {
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

const deleteMedia = (id) => {
  return new Promise((resolve, reject) => {
    api.delete(`/media/${id}`).then(response => {
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

export { getAllMedias, getMedias, createMedia, updateMedia, deleteMedia };