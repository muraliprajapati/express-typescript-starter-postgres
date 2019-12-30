import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import logger from '@logger';
import { AuthRequest } from '@appTypes/requests';
import responses from '@services/response.service';

export default (req: AuthRequest, res: Response, next: NextFunction) => {
  // const idToken: string = <string>req.headers['x-id-token'];
  // if (!idToken) {
  //   // prettier-ignore
  //   logger.debug('[authenticated-middleware] required header x-id-token not found. request is unauthorized');
  //   return res.status(httpStatus.UNAUTHORIZED).json(responses.unAuthorized());
  // }
  // write authorization logic here and call next() or send 401 based on that.
  return next();
};
