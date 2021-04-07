
module.exports = app =>{



const tutorials = require('../controllers/tutorial.controller');

const router = require("express").Router();

router.post('/',tutorials.create); // Create Tutorial
router.get('/',tutorials.findAll); // Retrieve Tutorials
router.get('/published',tutorials.findAllPublished); // Retrieve all published Tutorials
router.get('/:id',tutorials.findOne); // Find Tutorials by id
router.put('/:id',tutorials.update); // Update Tutorial
router.delete('/:id',tutorials.delete); // Delete Tutorial with id
router.delete('/',tutorials.deleteAll); // Delete all Tutorials

app.use('/api/tutorials',router);

};
