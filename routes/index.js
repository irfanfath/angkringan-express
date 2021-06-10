const router = require('express').Router();
// const userRoutes = require('./user');
const menu = require('./menu');

router.get('/', (req,res) => {
  res.send('Welcome to Angkringan API 🚀');
});
// router.use('/users', userRoutes);
router.use('/menu', menu);

module.exports = router;
