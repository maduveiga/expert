/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is the manually maintained route tree (TanStack Router - file-based).
// Updated to include suporte-mei, login, talentos, and admin routes.

import { Route as rootRouteImport } from './routes/__root'
import { Route as SolucoesRouteImport } from './routes/solucoes'
import { Route as SuporteMeiRouteImport } from './routes/suporte-mei'
import { Route as TalentosRouteImport } from './routes/talentos'
import { Route as LoginRouteImport } from './routes/login'
import { Route as AdminRouteImport } from './routes/admin'
import { Route as AdminPortalRouteImport } from './routes/admin-portal'
import { Route as MaisQueContabilidadeRouteImport } from './routes/mais-que-contabilidade'
import { Route as IrpfRouteImport } from './routes/irpf'
import { Route as CrescimentoRouteImport } from './routes/crescimento'
import { Route as ConteudosRouteImport } from './routes/conteudos'
import { Route as ContatoRouteImport } from './routes/contato'
import { Route as IndexRouteImport } from './routes/index'
import { Route as LgpdRouteImport } from './routes/lgpd'
import { Route as PoliticaDePrivacidadeRouteImport } from './routes/politica-de-privacidade'
import { Route as TermosDeUsoRouteImport } from './routes/termos-de-uso'

const SolucoesRoute = SolucoesRouteImport.update({ id: '/solucoes', path: '/solucoes', getParentRoute: () => rootRouteImport } as any)
const SuporteMeiRoute = SuporteMeiRouteImport.update({ id: '/suporte-mei', path: '/suporte-mei', getParentRoute: () => rootRouteImport } as any)
const TalentosRoute = TalentosRouteImport.update({ id: '/talentos', path: '/talentos', getParentRoute: () => rootRouteImport } as any)
const LoginRoute = LoginRouteImport.update({ id: '/login', path: '/login', getParentRoute: () => rootRouteImport } as any)
const AdminRoute = AdminRouteImport.update({ id: '/admin', path: '/admin', getParentRoute: () => rootRouteImport } as any)
const AdminPortalRoute = AdminPortalRouteImport.update({ id: '/admin-portal', path: '/admin-portal', getParentRoute: () => rootRouteImport } as any)
const MaisQueContabilidadeRoute = MaisQueContabilidadeRouteImport.update({ id: '/mais-que-contabilidade', path: '/mais-que-contabilidade', getParentRoute: () => rootRouteImport } as any)
const IrpfRoute = IrpfRouteImport.update({ id: '/irpf', path: '/irpf', getParentRoute: () => rootRouteImport } as any)
const CrescimentoRoute = CrescimentoRouteImport.update({ id: '/crescimento', path: '/crescimento', getParentRoute: () => rootRouteImport } as any)
const ConteudosRoute = ConteudosRouteImport.update({ id: '/conteudos', path: '/conteudos', getParentRoute: () => rootRouteImport } as any)
const ContatoRoute = ContatoRouteImport.update({ id: '/contato', path: '/contato', getParentRoute: () => rootRouteImport } as any)
const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const LgpdRoute = LgpdRouteImport.update({ id: '/lgpd', path: '/lgpd', getParentRoute: () => rootRouteImport } as any)
const PoliticaDePrivacidadeRoute = PoliticaDePrivacidadeRouteImport.update({ id: '/politica-de-privacidade', path: '/politica-de-privacidade', getParentRoute: () => rootRouteImport } as any)
const TermosDeUsoRoute = TermosDeUsoRouteImport.update({ id: '/termos-de-uso', path: '/termos-de-uso', getParentRoute: () => rootRouteImport } as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/contato': typeof ContatoRoute
  '/conteudos': typeof ConteudosRoute
  '/crescimento': typeof CrescimentoRoute
  '/irpf': typeof IrpfRoute
  '/mais-que-contabilidade': typeof MaisQueContabilidadeRoute
  '/solucoes': typeof SolucoesRoute
  '/suporte-mei': typeof SuporteMeiRoute
  '/talentos': typeof TalentosRoute
  '/login': typeof LoginRoute
  '/admin': typeof AdminRoute
  '/admin-portal': typeof AdminPortalRoute
  '/lgpd': typeof LgpdRoute
  '/politica-de-privacidade': typeof PoliticaDePrivacidadeRoute
  '/termos-de-uso': typeof TermosDeUsoRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/contato': typeof ContatoRoute
  '/conteudos': typeof ConteudosRoute
  '/crescimento': typeof CrescimentoRoute
  '/irpf': typeof IrpfRoute
  '/mais-que-contabilidade': typeof MaisQueContabilidadeRoute
  '/solucoes': typeof SolucoesRoute
  '/suporte-mei': typeof SuporteMeiRoute
  '/talentos': typeof TalentosRoute
  '/login': typeof LoginRoute
  '/admin': typeof AdminRoute
  '/admin-portal': typeof AdminPortalRoute
  '/lgpd': typeof LgpdRoute
  '/politica-de-privacidade': typeof PoliticaDePrivacidadeRoute
  '/termos-de-uso': typeof TermosDeUsoRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/contato': typeof ContatoRoute
  '/conteudos': typeof ConteudosRoute
  '/crescimento': typeof CrescimentoRoute
  '/irpf': typeof IrpfRoute
  '/mais-que-contabilidade': typeof MaisQueContabilidadeRoute
  '/solucoes': typeof SolucoesRoute
  '/suporte-mei': typeof SuporteMeiRoute
  '/talentos': typeof TalentosRoute
  '/login': typeof LoginRoute
  '/admin': typeof AdminRoute
  '/admin-portal': typeof AdminPortalRoute
  '/lgpd': typeof LgpdRoute
  '/politica-de-privacidade': typeof PoliticaDePrivacidadeRoute
  '/termos-de-uso': typeof TermosDeUsoRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
  | '/'
  | '/contato'
  | '/conteudos'
  | '/crescimento'
  | '/irpf'
  | '/mais-que-contabilidade'
  | '/solucoes'
  | '/suporte-mei'
  | '/talentos'
  | '/login'
  | '/admin'
  | '/admin-portal'
  | '/lgpd'
  | '/politica-de-privacidade'
  | '/termos-de-uso'
  fileRoutesByTo: FileRoutesByTo
  to:
  | '/'
  | '/contato'
  | '/conteudos'
  | '/crescimento'
  | '/irpf'
  | '/mais-que-contabilidade'
  | '/solucoes'
  | '/suporte-mei'
  | '/talentos'
  | '/login'
  | '/admin'
  | '/admin-portal'
  | '/lgpd'
  | '/politica-de-privacidade'
  | '/termos-de-uso'
  id:
  | '__root__'
  | '/'
  | '/contato'
  | '/conteudos'
  | '/crescimento'
  | '/irpf'
  | '/mais-que-contabilidade'
  | '/solucoes'
  | '/suporte-mei'
  | '/talentos'
  | '/login'
  | '/admin'
  | '/admin-portal'
  | '/lgpd'
  | '/politica-de-privacidade'
  | '/termos-de-uso'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ContatoRoute: typeof ContatoRoute
  ConteudosRoute: typeof ConteudosRoute
  CrescimentoRoute: typeof CrescimentoRoute
  IrpfRoute: typeof IrpfRoute
  MaisQueContabilidadeRoute: typeof MaisQueContabilidadeRoute
  SolucoesRoute: typeof SolucoesRoute
  SuporteMeiRoute: typeof SuporteMeiRoute
  TalentosRoute: typeof TalentosRoute
  LoginRoute: typeof LoginRoute
  AdminRoute: typeof AdminRoute
  AdminPortalRoute: typeof AdminPortalRoute
  LgpdRoute: typeof LgpdRoute
  PoliticaDePrivacidadeRoute: typeof PoliticaDePrivacidadeRoute
  TermosDeUsoRoute: typeof TermosDeUsoRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/solucoes': {
      id: '/solucoes'
      path: '/solucoes'
      fullPath: '/solucoes'
      preLoaderRoute: typeof SolucoesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/suporte-mei': {
      id: '/suporte-mei'
      path: '/suporte-mei'
      fullPath: '/suporte-mei'
      preLoaderRoute: typeof SuporteMeiRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/talentos': {
      id: '/talentos'
      path: '/talentos'
      fullPath: '/talentos'
      preLoaderRoute: typeof TalentosRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin-portal': {
      id: '/admin-portal'
      path: '/admin-portal'
      fullPath: '/admin-portal'
      preLoaderRoute: typeof AdminPortalRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/mais-que-contabilidade': {
      id: '/mais-que-contabilidade'
      path: '/mais-que-contabilidade'
      fullPath: '/mais-que-contabilidade'
      preLoaderRoute: typeof MaisQueContabilidadeRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/irpf': {
      id: '/irpf'
      path: '/irpf'
      fullPath: '/irpf'
      preLoaderRoute: typeof IrpfRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/crescimento': {
      id: '/crescimento'
      path: '/crescimento'
      fullPath: '/crescimento'
      preLoaderRoute: typeof CrescimentoRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/conteudos': {
      id: '/conteudos'
      path: '/conteudos'
      fullPath: '/conteudos'
      preLoaderRoute: typeof ConteudosRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contato': {
      id: '/contato'
      path: '/contato'
      fullPath: '/contato'
      preLoaderRoute: typeof ContatoRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/lgpd': {
      id: '/lgpd'
      path: '/lgpd'
      fullPath: '/lgpd'
      preLoaderRoute: typeof LgpdRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/politica-de-privacidade': {
      id: '/politica-de-privacidade'
      path: '/politica-de-privacidade'
      fullPath: '/politica-de-privacidade'
      preLoaderRoute: typeof PoliticaDePrivacidadeRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/termos-de-uso': {
      id: '/termos-de-uso'
      path: '/termos-de-uso'
      fullPath: '/termos-de-uso'
      preLoaderRoute: typeof TermosDeUsoRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ContatoRoute: ContatoRoute,
  ConteudosRoute: ConteudosRoute,
  CrescimentoRoute: CrescimentoRoute,
  IrpfRoute: IrpfRoute,
  MaisQueContabilidadeRoute: MaisQueContabilidadeRoute,
  SolucoesRoute: SolucoesRoute,
  SuporteMeiRoute: SuporteMeiRoute,
  TalentosRoute: TalentosRoute,
  LoginRoute: LoginRoute,
  AdminRoute: AdminRoute,
  AdminPortalRoute: AdminPortalRoute,
  LgpdRoute: LgpdRoute,
  PoliticaDePrivacidadeRoute: PoliticaDePrivacidadeRoute,
  TermosDeUsoRoute: TermosDeUsoRoute,
}

export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()