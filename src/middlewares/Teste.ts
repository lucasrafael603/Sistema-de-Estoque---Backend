import {Request, Response, NextFunction} from 'express'
//import { verify } from 'jsonwebtoken'

//import AuthConfig from '../config/auth'
//import AppError from '../errors/AppError'

interface TokenPayload{
  iat: number
  exp: number
  sub: string

}

export default function Teste(request :Request, response :Response, next: NextFunction): void {

  const authHeader = request.headers.authorization

  if(!authHeader){//Verifica se o token não existe

    throw new Error('JWT token is missing')

  }



  try{

    console.log(request.method)
    return next()

  }



  catch {

    throw new Error('Invalid JWT Token')

  }



}
