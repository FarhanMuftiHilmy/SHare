const { nanoid } = require('nanoid');
const share = require('./resume')

const addResumeHandler = (request, h) => {
    const {
      id,name,age,email,passwoed,gender,
    } = request.payload;

    //material1
    if (id === undefined) {
        const response = h.response({
          status: 'Gagal',
          message: 'Gagal Menambahkan Id',
        });
        response.code(400);
        return response;
      }
    
      