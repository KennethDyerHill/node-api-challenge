const express = require('express');
const router = express.Router();
const Projects = require('./projectModel');

router.post('/', (req, res) => {
    const { name, description } = req.body;

    Projects.insert({name, description})
    .then(response => {
        res.status(500).json({message: 'Server Error'});
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.get(id)
    .then(response => {
        res.status(200).json({message: 'Got it!', data: response});
    })
    .catch(error => {
        res.status(500).json({message: 'Server Error'});
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    Projects.update(id, {name, description})
    .then(response => res.status(200).json({message: 'Updated', data: response}))
    .catch(error => res.status(500).json({message: 'Server Error'}));
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Projects.remove(id)
    .then(response => res.status(200).json({message: 'Removed!'}))
    .catch(error => res.status(500).json({message: 'Server Error'}));
})

router.get('/getActions/:project_id', (req, res) => {
    const { project_id } = req.params;

    Projects.getProjectActions(project_id)
    .then(response => res.status(200).json({message: 'Got it!', data: response}))
    .catch(error => res.status(500).json({message: 'Server Error'}))
})

module.exports = router;