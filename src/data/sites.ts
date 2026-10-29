
export interface Site {
  cliente: string;
  descricao: string;
  ano?: string;
  url?: string;
  publish: boolean;
}

export const sites: Site[] = [
  {
    cliente: '[Nome do cliente]',
    descricao: '[O que foi feito]',
    ano: '[ano]',
    url: '',
    publish: false,
  },
  {
    cliente: '[Nome do cliente]',
    descricao: '[O que foi feito]',
    ano: '[ano]',
    url: '',
    publish: false,
  },
  {
    cliente: 'Novo site',
    descricao: 'Em breve.',
    publish: false,
  },
];
