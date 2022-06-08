const express = require('express');
const {addResume, 
       getAllResume,
       getResume,
       updateResume,
       deleteResume
      } = require('../controllers/ResumeController');

const router = express.Router();

router.post('/resume', addResume);
router.get('/resumes', getAllResume);
router.get('/resume/:id', getResume);
router.put('/resume/:id', updateResume);
router.delete('/resume/:id', deleteResume);


module.exports = {
    routes: router
}