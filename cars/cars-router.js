const express = require('express');
const knex = require('../data/db-config');

const validate = require('./cars-middleware');


const router = express.Router();

router.post('/', validate.content, (req, res) => {

    knex('cars')
        .insert(req.body, 'id')
        .then(ids => {
            const id = ids[0]
            return knex('cars')
            .where({ id })
            .first()
            .then(car => {
                res.status(201).json(car)
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error adding car.' })
        })
})

router.get('/', validate.id, (req, res) => {

    knex
        .select('*')
        .from('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error getting cars.'})
        });
});

router.get('/:id', validate.id, (req, res) =>{
    
    knex
        .select('*')
        .from('cars')
        .where({ id: req.params.id })
        .first()
        .then(car => {
            console.log(car)
            res.status(200).json(car)
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ errorMessage: 'Error obtaining car.'})
        });

});


module.exports = router;