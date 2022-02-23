const express = require('express');
const router = express.Router();
const asiakas = require('../services/asiakkaat');


// Hae yksi asiakas id:llä
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await asiakas.getOne(req.params.id));
  } catch (err) {
    console.error(`Error while getting client`, err.message);
    next(err);
  }
});


/* GET asiakkaat. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await asiakas.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting asiakkaat `, err.message);
    next(err);
  }
});

 
/* Luo asiakas */
router.post('/', async function(req, res, next) {
    try {
      res.json(await asiakas.create(req.body));
    } catch (err) {
      console.error(`Error while creating client`, err.message);
      next(err);
    }
  });

  /* Päivitä asiakas */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await asiakas.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating client`, err.message);
      next(err);
    }
  });

  /* DELETE asiakas */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await asiakas.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting client`, err.message);
      next(err);
    }
  });

module.exports = router;