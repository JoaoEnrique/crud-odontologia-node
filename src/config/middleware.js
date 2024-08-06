import express from 'express';
import path from 'path';

const setupMiddleware = (app) => {
    app.use(express.static(path.join('public')));
    app.use(express.urlencoded({ extended: true }));
};

export default setupMiddleware;
