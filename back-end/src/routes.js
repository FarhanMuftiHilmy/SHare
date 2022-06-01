const { addResumeHandler, getAllResumeHandler, getResumeByIdHandler, editResumeByIdHandler, deleteResumeByIdHandler, 
} = require('./handler');
  
  const routes = [
    {
      method: 'POST',
      path: '/resume',
      handler: addResumeHandler,
    },
    {
      method: 'GET',
      path: '/resume',
      handler: getAllResumeHandler,
    },
    {
      method: 'GET',
      path: '/resume/{id}',
      handler: getResumeByIdHandler,
    },
    {
      method: 'PUT',
      path: '/resume/{id}',
      handler: editResumeByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/resume/{id}',
      handler: deleteResumeByIdHandler,
    },
  ];
  
  module.exports = routes;