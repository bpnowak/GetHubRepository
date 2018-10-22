var express = require('express'),
    router = express.Router(),
    logger = require('../../config/logger');

module.exports = function (app, config) {
    app.use('/api', router);

    router.route('/users').get(function (req, res, next) {
        logger.log('info', 'Get all users');
        res.status(200).json({ message: 'get all users' });
    });

    router.route('/users/:id').get(function (req, res, next) {
        logger.log('info', 'Get user %s', req.params.id);
        res.status(200).json({ message: 'Get user ' + req.params.id });
    });

    router.route('/users').post(function (req, res, next) {
        logger.log('info', 'Create a user');
        res.status(200).json({ message: 'Create a user' });
    });

    router.route('/users').put(function (req, res, next) {
        logger.log('info', 'Update user');
        res.status(200).json({ message: 'Update user' });
    });

    router.route('/users/password/:id').put(function (req, res, next) {
        logger.log('info', 'Update user password for user with id %s', req.params.id);
        res.status(200).json({ message: 'Update user password for user with id ' + req.params.id });
    });

    router.route('/users/:id').delete(function (req, res, next) {
        logger.log('info', 'Delete user %s', req.params.id);
        res.status(200).json({ message: 'Delete user ' + req.params.id });
    });

    router.route('/login').post(function(req, res, next) {
        console.log(req.body);
        var email = req.body.email
        var password = req.body.password;

        var obj = { 'email': email, 'password': password };
        res.status(201).json(obj);
    });


};

