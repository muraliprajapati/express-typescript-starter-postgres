import 'reflect-metadata';
import sinon from 'sinon';
import supertestRequest from 'supertest';
import app from '../src/config/express';
import { MongoClient } from '../src/api/repository';

const request = supertestRequest.agent(app);

export { app, request, MongoClient };
