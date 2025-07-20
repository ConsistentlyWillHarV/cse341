const router = require('express').Router();

// ✅ Swagger UI at /api-docs
router.use('/api-docs', require('./swagger'));

// ✅ Test route
router.get('/', (req, res) => {
    res.send('Hello World');
});

// ✅ Users API
router.use('/users', require('./users'));

module.exports = router;