import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'express-compression';

export default function configureMiddlewares(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }));
  app.use(cookieParser());
  app.use(compression({
    brotli: {enabled: true, zlib: {}}
  }));
}
