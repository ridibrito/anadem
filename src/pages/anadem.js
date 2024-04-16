import Image from "next/image";
import Link from "next/link";

export default function Politicas() {
  return (
    <>
      <div className="">
        <Image
          src="/anadem.png"
          alt="anadem"
          width={300}
          height={100}
          className="text-center justify-center mx-auto mt-12"
        />
        <h1 className="text-2xl font-extrabold text-center lg:py-6 py-6">
          Sociedade Brasileira de Direito Médico e Bioética
        </h1>
        <p className="lg:w-2/3 px-6 mx-auto text-center">
          Anadem é uma Sociedade Civil instituída nos moldes do art. 53 do
          Código Civil Brasileiro, combinado com o inciso 17 do art. 5º da
          Constituição Federal, criada em 1998, que promove o debate sobre
          problemas relacionados ao exercício profissional da medicina e da
          odontologia.
        </p>
      </div>
      <div className="mx-auto max-w-6xl pb-24 p-8 lg:p-0 lg:pb-24">
        <h2 className="font-bold mt-3">Política da Qualidade</h2>
        <p className="mt-2">
          A Anadem – Sociedade Brasileira de Direito Médico e Bioética, através
          da busca constante pela excelência na prestação de serviços no setor
          de saúde, declara seu compromisso em:
        </p>
        <ul className="mt-2 list-disc pl-5">
          <li>
            atender seus associados disponibilizando produtos e serviços de
            proteção profissional e de gestão de riscos institucionais e da
            atividade do médico, cirurgião-dentista, empreendedores e empresas
            que atuam no setor da saúde, visando, através da excelência na
            prestação dos serviços, a satisfação dos clientes e partes
            interessadas, atuando com qualidade, confiabilidade, ética e
            transparência;
          </li>
          <li>
            atender aos requisitos legais, estatutários e outros aplicáveis ao
            negócio; promover a melhoria contínua e eficácia do Sistema de
            Gestão através de um direcionamento estratégico, visando inovação e
            reconhecimento nacional; e
          </li>
          <li>
            incentivar o bem-estar e o aprimoramento pessoal e profissional,
            visando a retenção de talentos e desenvolvimento de competências.
          </li>
        </ul>
        <h2 className="font-bold mt-3 ">Política Antissuborno</h2>
        <p className="mt-2">
          A Anadem – Sociedade Brasileira de Direito Médico e Bioética, declara
          em sua Política Antissuborno, inequivocamente sua posição perante atos
          de suborno, ofertas ou aceitação de presentes e/ou hospitalidade, e
          determina que:
        </p>
        <ul className="mt-2 list-disc pl-5">
          <li>
            é proibido o pagamento e recebimento de suborno, bem como qualquer
            prática que leve ao entendimento de suborno na condução de serviços
            de blindagem Jurídica;
          </li>
          <li>
            todos os colaboradores se orientem pelo Código de Conduta Ética e as
            políticas estabelecidas no Sistema de Gestão Antissuborno;
          </li>
          <li>
            cumprir leis anticorrupção aplicáveis e outros requisitos que são
            aplicáveis à organização;
          </li>
          <li>
            atender aos requisitos do Sistema de Gestão Antissuborno e promover
            a melhoria contínua;
          </li>
          <li>
            todo e qualquer levantamento de preocupação antissuborno relatado
            será investigado, tratado e o denunciante não sofrerá qualquer
            represália;
          </li>
          <li>
            o Compliance Officer – Antissuborno da ANADEM possui total
            independência e autoridade para supervisionar a concepção e a
            implementação do Sistema de Gestão Antissuborno, inclusive para
            supervisionar serviços prestados por terceiros;
          </li>
          <li>
            o não cumprimento da política Antissuborno e dos requisitos do
            Sistema de Gestão acarretará ações disciplinares por leis vigentes;
            e
          </li>
          <li>
            cumprir toda a legislação aplicável em relação a dados pessoais e
            assegurar que os dados pessoais sejam coletados e processados ​​de
            acordo com as disposições da lei 13.709 de 14 de agosto de 2018.
          </li>
        </ul>
        <h2 className="font-bold mt-3 ">Política de Segurança da Informação</h2>
        <p className="mt-2">
          A Anadem (Sociedade Brasileira de Direito Médico e Bioética), declara
          em sua Política de Segurança da Informação, as seguintes diretrizes:
        </p>
        <ul className="mt-2 list-disc pl-5">
          <li>
            Compromisso em aprovar, implantar e atualizar constantemente
            políticas, instruções e procedimentos de segurança da informação;
          </li>
          <li>
            Propor iniciativas visando a proteção de dados, implantando soluções
            e controles que minimizem os riscos relacionados à segurança da
            informação;
          </li>
          <li>
            Conscientizar todas as partes interessadas sobre a importância das
            informações coletadas, armazenadas e sobre o risco da sua
            vulnerabilidade; e
          </li>
          <li>
            Proteger os ativos contra todas as ameaças internas e externas.
          </li>
        </ul>
        <h2 className="font-bold mt-3 ">Missão</h2>
        <p className="mt-2">
          Atender com excelência às demandas de nossos associados, zelar pelo
          exercício ético da Medicina e da Odontologia, fortalecer os
          fundamentos do Direito Médico e criar medidas para Segurança do
          Paciente.
        </p>
        <h2 className="font-bold mt-3">Visão</h2>
        <p className="mt-2">
          Ser instituição de referência, reconhecida como a melhor opção por
          associados, colaboradores, comunidade científica, parceiros e
          fornecedores, em razão da excelência de nossos serviços, seriedade de
          nossa atuação e políticas de relacionamento.
        </p>
        <h2 className="font-bold mt-3 ">Valores</h2>
        <ul className="mt-2 list-disc pl-5">
          <li>Ética.</li>
          <li>Integridade.</li>
          <li>Comprometimento.</li>
          <li>Valorização Humana.</li>
          <li>Superação de Resultados.</li>
          <li>Melhoria contínua.</li>
          <li>Inovação.</li>
          <li>Sustentabilidade.</li>
        </ul>

        <div class="bg-yellow-500 rounded-lg shadow text-center mt-24 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="max-w-screen-lg  sm:text-lg text-gray-400">
            <h2 class="mb-4 text-3xl tracking-tight font-bold  text-white">
              Não perca tempo, não fique vulnerável.
            </h2>
            <h2 class="mb-4 lg:text-5xl text-xl tracking-tight font-bold  text-white">
              Faça sua adesão agora mesmo!
            </h2>

            <Link
              href="/anadem"
              class="inline-flex bg-gray-300 items-center font-medium rounded-lg px-3 py-2 text-white hover:text-gray-800 text-primary-500 hover:text-primary-700"
            >
              Fazer adesão
              <svg
                class="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
