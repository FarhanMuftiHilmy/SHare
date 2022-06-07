'use strict';

const firebase = require('../db');
const Resume = require('../models/resume');
const firestore = firebase.firestore();


const addResume = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('resume').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllResume = async (req, res, next) => {
    try {
        const resume = await firestore.collection('resume');
        const data = await resume.get();
        const resumeArray = [];
        if(data.empty) {
            res.status(404).send('No resume record found');
        }else {
            data.forEach(doc => {
                const resume = new Resume(
                    doc.id,
                    doc.data().userResume,
                    doc.data().titleResume,
                    doc.data().resume,
                    doc.data().createdResumeby
                );
                resumeArray.push(resume);
            });
            res.send(resumeArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getResume = async (req, res, next) => {
    try {
        const id = req.params.id;
        const resume = await firestore.collection('resume').doc(id);
        const data = await resume.get();
        if(!data.exists) {
            res.status(404).send('Users with the given ID not found');
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateResume = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const resume =  await firestore.collection('resume').doc(id);
        await resume.update(data);
        res.send('Resume record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteResume = async (req, res, next) => {
    try {
        const id = req.params.id;
        await firestore.collection('resume').doc(id).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addResume,
    getAllResume,
    getResume,
    updateResume,
    deleteResume
}