
export interface Experiencia {
  periodo: string;
  atual?: boolean;
  cargo: string;
  descricao: string;
  empresa: string;
  detalheEmpresa: string;
}

export const experiences: Experiencia[] = [
  {
    periodo: '05/2026 — atual',
    atual: true,
    cargo: 'Estagiário — Dados e Análise de Indicadores',
    descricao:
      'Extração e tratamento de dados com SQL para indicadores processuais (acervo, processos paralisados, metas do CNJ); apoio na validação de painéis no Qlik Sense e em relatórios para a gestão.',
    empresa: 'TJRJ',
    detalheEmpresa: 'Tribunal de Justiça do Estado do Rio de Janeiro',
  },
  {
    periodo: '02/2026 — atual',
    atual: true,
    cargo: 'Jovem Aprendiz — Administrativo',
    descricao:
      'Acompanhamento diário do indicador de pacientes com mais de 5 dias de internação; desenvolvimento de KPIs e levantamentos por setor (enxoval, insumos, plantões extras).',
    empresa: 'Hospital Icaraí',
    detalheEmpresa: 'Niterói, RJ',
  },
  {
    periodo: '08/2025 — 01/2026',
    cargo: 'Jovem Aprendiz — Administrativo PCP',
    descricao: 'Relatórios semanais de produção, apoio no desenvolvimento de KPIs e programação de ordens de produção.',
    empresa: 'Jobal',
    detalheEmpresa: 'Rio de Janeiro, RJ',
  },
  {
    periodo: '09/2024 — 11/2024',
    cargo: 'Desenvolvedor Fullstack',
    descricao:
      'Protótipos no Figma e sistemas web em HTML, CSS, JavaScript, Node.js, TypeScript e Python; banco PostgreSQL e análise de dados com Python.',
    empresa: 'QueroQuero',
    detalheEmpresa: 'Remoto',
  },
  {
    periodo: '11/2022 — 05/2023',
    cargo: 'Desenvolvedor Web',
    descricao: 'Sites em WordPress e Elementor: landing pages, formulários e interfaces.',
    empresa: 'Cal Marketing Digital',
    detalheEmpresa: 'Rio de Janeiro, RJ',
  },
];
