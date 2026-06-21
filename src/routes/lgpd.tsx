import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/lgpd")({
  head: () => ({
    meta: [
      { title: "LGPD — Expert Contabilidade" },
      { name: "description", content: "Portal de conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD) da Expert Contabilidade." },
    ],
  }),
  component: Page,
});

export function Page() {
  return (
    <PageShell flush>
      <div className="container-tight py-32 md:py-48 min-h-screen">
        <div className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[color:var(--neon)]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <span className="eyebrow">Conformidade e Segurança</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-medium text-gradient mb-8">
            Portal da Privacidade e LGPD
          </h1>
          
          <div className="prose prose-invert prose-p:text-foreground/80 prose-headings:text-foreground prose-a:text-[color:var(--orange-premium)] max-w-none">
            <p>
              A <strong>Expert Contabilidade</strong> tem como um de seus pilares fundamentais a SEGURANÇA e a TRANSPARÊNCIA no tratamento das informações. Sabemos que, por trás de cada CNPJ, existem pessoas físicas e dados sensíveis que exigem o mais alto padrão de proteção e ética.
            </p>
            <p>
              Estamos rigorosamente comprometidos com a <strong>Lei Geral de Proteção de Dados Pessoais (LGPD) - Lei nº 13.709/2018</strong>, adotando as melhores práticas operacionais e de tecnologia para assegurar a inviolabilidade, a confidencialidade e a privacidade de todos os dados sob nossa guarda.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-4">Nossas Diretrizes de Proteção</h3>
            <ul>
              <li><strong>Minimização:</strong> Coletamos e processamos apenas os dados estritamente necessários para a execução dos nossos serviços contábeis, fiscais, trabalhistas e previdenciários.</li>
              <li><strong>Finalidade e Adequação:</strong> Os dados de nossos clientes, fornecedores e colaboradores são tratados com objetivos claros, legítimos e inteiramente amparados pelas bases legais (como cumprimento de obrigação legal ou regulatória e execução de contrato).</li>
              <li><strong>Segurança da Informação:</strong> Investimos constantemente em infraestrutura tecnológica e rotinas de backup para prevenir incidentes de segurança, acessos não autorizados ou vazamentos.</li>
              <li><strong>Cultura de Privacidade:</strong> Nossos colaboradores são rotineiramente treinados e orientados através do nosso Manual de Cultura e Conduta para atuarem com total sigilo e aderência à LGPD em todos os processos.</li>
            </ul>

            <h3 className="text-xl font-medium mt-8 mb-4">Direitos do Titular dos Dados</h3>
            <p>Conforme previsto na legislação, garantimos a você (titular) os direitos de:</p>
            <ul>
              <li>Confirmar a existência de tratamento de dados;</li>
              <li>Acessar seus dados armazenados em nossos sistemas;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Revogar o consentimento, quando aplicável.</li>
            </ul>

            <h3 className="text-xl font-medium mt-8 mb-4">Canal de Atendimento ao Titular</h3>
            <p>
              Para elucidar dúvidas, exercer seus direitos descritos acima ou solicitar qualquer informação sobre como tratamos seus dados pessoais, nosso Encarregado pelo Tratamento de Dados Pessoais (DPO) está à sua disposição.
            </p>
            <p className="mt-4 p-4 rounded-xl border border-white/10 bg-white/5">
              <strong>E-mail:</strong> contador.expert01@gmail.com<br />
              <strong>Telefone/WhatsApp:</strong> (47) 99237-3196<br />
              <strong>Endereço:</strong> Av. Pref. Alberto Natalino Miquelute, 8239 sala 04, Itinga, Araquari SC
            </p>
            <p className="text-sm mt-8 opacity-60">Última atualização: Junho 2026</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
