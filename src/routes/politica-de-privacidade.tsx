import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Expert Contabilidade" },
      { name: "description", content: "Nossa política oficial de privacidade e proteção de dados." },
    ],
  }),
  component: Page,
});

export function Page() {
  return (
    <PageShell flush>
      <div className="container-tight py-32 md:py-48 min-h-screen">
        <div className="max-w-3xl mx-auto glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[color:var(--orange-premium)]/5 blur-[120px] rounded-full pointer-events-none" />
          
          <span className="eyebrow">Transparência Expert</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-medium text-gradient mb-8">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-invert prose-p:text-foreground/80 prose-headings:text-foreground max-w-none">
            <p>
              A <strong>Expert Contabilidade</strong> tem compromisso inegociável com a sua privacidade. Esta política descreve como nós coletamos, utilizamos, protegemos e armazenamos as informações e dados pessoais que você fornece em nosso site ou por meio de nossos serviços.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-4">1. Coleta de Informações</h3>
            <p>
              Podemos coletar dados pessoais (como nome, endereço de e-mail, telefone e informações financeiras ou corporativas) estritamente durante interações diretas e consentidas, tais como: pré-orçamentos, envios de currículo em nosso portal "Trabalhe Conosco", ou na assinatura de serviços de terceirização contábil.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-4">2. Uso e Compartilhamento de Dados</h3>
            <p>Os dados coletados são usados exclusivamente para:</p>
            <ul>
              <li>Cumprimento da prestação de nossos serviços e de obrigações legais, fiscais e trabalhistas inerentes à nossa atividade contábil;</li>
              <li>Aprimoramento contínuo das plataformas e ferramentas disponibilizadas para nossos clientes e colaboradores;</li>
              <li>Prevenção de fraudes e manutenção da segurança da plataforma;</li>
              <li>Envio de comunicações importantes apenas quando expressamente autorizado e se for do legitimo interesse.</li>
            </ul>
            <p>
              Jamais comercializamos ou divulgamos suas informações pessoais e de negócios para terceiros para fins de marketing sem o seu consentimento. Seu negócio é mantido sob sigilo.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-4">3. Proteção e Segurança</h3>
            <p>
              Implementamos robustas plataformas, servidores blindados e métodos administrativos reconhecidos pelo mercado para proteger suas informações contra acessos não autorizados, perdas ou adulterações. Nossos colaboradores estão sujeitos a rígidos Códigos de Conduta abordando também a salvaguarda de Sigilo Profissional Contábil.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-4">4. Retenção de Dados</h3>
            <p>
              Conservamos os dados coletados enquanto o seu relacionamento comercial e de prestação de serviços estiver ativo, além dos períodos exigidos pela legislação contábil, tributária e previdenciária nacional para a guarda obrigatória de informações.
            </p>

            <h3 className="text-xl font-medium mt-8 mb-4">5. Alterações nesta Política</h3>
            <p>
              Reservamo-nos o direito de atualizar este documento periodicamente para alinhar com desenvolvimentos tecnológicos, operacionais, ou alterações na lei. A versão mais recente será sempre publicada nesta página.
            </p>

            <p className="mt-8">
              Em caso de dúvidas a respeito das nossas políticas de privacidade, entre em contato via <strong>contador.expert01@gmail.com</strong>.
            </p>
            
            <p className="text-sm mt-8 opacity-60">Página atualizada em Junho 2026</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
