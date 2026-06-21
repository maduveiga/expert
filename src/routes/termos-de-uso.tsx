import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Expert Contabilidade" },
      { name: "description", content: "Termos de Uso do site da Expert Contabilidade." },
    ],
  }),
  component: Page,
});

export function Page() {
  return (
    <PageShell flush>
      <div className="container-tight py-32 md:py-48 min-h-screen">
        <div className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-[color:var(--neon)]/5 blur-[100px] rounded-full pointer-events-none" />
          
          <span className="eyebrow">Aviso Legal</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-medium text-gradient mb-8">
            Termos de Uso
          </h1>
          
          <div className="prose prose-invert prose-p:text-foreground/80 prose-headings:text-foreground max-w-none">
            <p>
              Bem-vindo ao portal eletrônico da <strong>Expert Contabilidade</strong>. Ao acessar este website, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso, em acordo rigoroso com a legislação brasileira.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-4">1. Uso das Informações e Propriedade Intelectual</h3>
            <p>
              Todo o conteúdo, layout, logotipos, imagens exclusivas, manuais e estrutura descritiva presentes neste website são propriedades exclusivas da Expert Contabilidade, exceto eventuais materiais de parceiros que possuam devidos créditos. A reprodução total ou parcial destes materiais sem autorização prévia por escrito é estritamente proibida e sujeita às sanções penais previstas em leis de direitos autorais.
            </p>
            <p>
              Os materiais educativos, conteúdos de blog ("Conteúdos Inteligentes") ou materiais de leitura possuem o objetivo meramente informativo para auxiliar empreendedores no entendimento da esfera administrativa e contábil, e jamais substituem um estudo técnico, consultoria especializada sobre demandas específicas ou serviço de compliance por parte da nossa equipe.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-4">2. Área do Colaborador (Painel Privado)</h3>
            <p>
              O sistema de login e <em>Painel Operacional</em> e de documentos destina-se <strong>estrita e exclusivamente</strong> aos colaboradores credenciados da Expert Contabilidade. Qualquer tentativa de acesso indevido, burla de senhas ou exploração que coloque em risco a integridade dos nossos servidores será mapeada e denunciada às autoridades competentes por crime de invasão de dispositivo e espionagem corporativa.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-4">3. Limitação de Responsabilidade</h3>
            <p>
              A Expert Contabilidade atua para manter o site atualizado e com excelente disponibilidade. No entanto, não garantimos o acesso contínuo e sem eventuais interrupções ao tráfego devido a atualizações na infraestrutura. Não nos responsabilizamos por perdas financeiras advindas exclusivamente do uso de informações genéricas expostas no portal, devendo qualquer atitude burocrática ter respaldo oficial de um de nossos contadores através dos canais de atendimento direto.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-4">4. Plataformas Terceirizadas</h3>
            <p>
              A utilização de serviços que integrem outras plataformas (sistemas financeiros e de ERP fornecidos e citados em nosso portal) são governados por licenças e termos próprios de serviço expedidos pelas software-houses de origem.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-4">5. Legislação Aplicável e Foro</h3>
            <p>
              Estes Termos de Uso são regidos pelas leis vigentes na República Federativa do Brasil. Para a resolução de eventuais controvérsias e conflitos relacionados a este instrumento, elege-se prioritariamente o Foro da Comarca de Araquari - SC.
            </p>

            <p className="text-sm mt-8 opacity-60">Última revisão: Junho 2026</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
