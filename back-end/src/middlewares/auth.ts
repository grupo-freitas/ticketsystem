import secret from '../config/secret'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export default function auth (req: Request, res: Response, next: any) {
  // Armazenando os valores que estão no cabeçalho de autenticação
  const authHeader: string | any = req.headers.authentication

  // Se não existir nenhum valor no cabeçalho de autenticação, retorna o status 403 e a mensagem "Não autorizado"
  if (!authHeader) res.status(403).json({ mensagem: 'Not authorized' })

  // Verificando se a sessão do token informado é válida,
  jwt.verify(authHeader, secret, (err: any, data: any) => {
    // Se não for válida, retorna o status 401 e a mensagem "Sessão Inválida"
    if (err) res.status(401).json({ mensagem: 'Invalid token' })

    // Se for válida, guarda o id do usuário no req.userId e procede com a requisição
    req.user = data

    return next()
  })
}
