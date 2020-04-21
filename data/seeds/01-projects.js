const express = require('express');
const action = require('../helpers/actionModel.js');

exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Complete Node.js and Express Challenge',
      description:
        'Build and Awesome API Using Node.js and Express to Manage Projects and Actions GTD Style!',
    },
  ]);
};

server.get('/', (req, res) => {
  res.status(200).json();
});

server.put('/', (req, res) => {
  res.status(201).json();
});

server.post('/', (req, res) => {
  res.status()
});