const express = require('express');
const router = express.Router();
const Actions = require('./actionModel');
const Projects = require('./projectModel');

const restricted = (req, res, next) => {
    const { project_id } = req.body;

    Projects.get(project_id)
    .then(response => {
        console.log('inside middleware', response);
        response !== null ? next() : res.status(404).json({ message: 'Project ID does not exist '})
    })
    .catch(error => console.log(error))
}

router.post('/', restricted, (req, res) => {
    const { description, notes, project_id } = req.body;
    console.log("made it here");
    Actions.insert({ description, notes, project_id })
    .then(response2 => {
        res.status(200).json({ message: "Action inserted!" });
    })
    .catch(error2 => {
        res.status(500).json({ message: '!Server Error!' });
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Actions.get(id)
    .then(response => {
        console.log(response);
        response !== undefined ? res.status(200).json({ message: 'Got it!', data: response }) : null;
    })
    .catch(error => res.status(500).json({ message: 'Server Error!' }));
})

router.put("/", (req, res) => {
    const {id, project_id, description, notes } = req.body;
    console.log(id, {project_id, description, notes})
    Actions.update(id, {project_id, description, notes})
    .then(response => {
        console.log(response);
        response != null ? res.status(200).json({message: "Up date em!"}) : res.status(404).json({message: "Project Id does not exist!"});
    })
    .catch(error => res.status(500).json({message: "Server Error"}));
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Actions.remove(id)
    .then(response => {
        console.log(reponse);
        res.status(200).json({ message: 'Removed!' })
    })
    .catch(error => res.status(500).json({ message: 'Server error!' }));
})

module.exports = router;