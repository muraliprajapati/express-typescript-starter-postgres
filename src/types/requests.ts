import { Request } from 'express';

export interface AuthRequest extends Request {
  user: any;
}

export interface FileRequest extends AuthRequest {
  file: any;
}
