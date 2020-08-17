const router = require('express');

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');


router.use('/users', userRoutes);
router.use('/posts', postRoutes);