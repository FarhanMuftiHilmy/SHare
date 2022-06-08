const express = require('express');
const {addReport, 
       getReport,
       getAllReport,
       updateReport,
       deleteReport
      } = require('../controllers/ReportController');

const router = express.Router();

router.post('/report', addReport);
router.get('/reports', getAllReport);
router.get('/report/:id', getReport);
router.put('/report/:id', updateReport);
router.delete('/report/:id', deleteReport);


module.exports = {
    routes: router
}