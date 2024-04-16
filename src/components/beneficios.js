import { FaCheck } from "react-icons/fa";

const features = [
  {
    name: "Indenização de até R$ 500 mil pessoa física e R$ 1 milhão pessoa jurídica",
    description:
      "por sentenças judiciais, acordos judiciais ou extrajudiciais mediante acordo da Seguradora.",
    icon: FaCheck,
  },
  {
    name: "Blindagem Jurídica permanente",
    description:
      "Plantão 24hrs através do 0800 com Advogados Especialistas em direito médico.",
    icon: FaCheck,
  },
  {
    name: "Assistência Jurídica",
    description:
      "preventiva e consultiva. Possibilitando que seja minimizado o risco antes mesmo que aconteça um evento judicial.",
    icon: FaCheck,
  },
  {
    name: "Cobertura",
    description:
      "para danos morais, materiais, corporais, estéticos e existenciais em decorrência do ato médico praticado.",
    icon: FaCheck,
  },
  {
    name: "ZERO ",
    description:
      "custo adicional em caso de demanda judicial, ou seja, todos os custos com advogados, peritos e especialistas em direito médico não são descontados de sua apólice. ",
    icon: FaCheck,
  },
  {
    name: "88% de absolvição ",
    description:
      "é o índice em favor dos associados Anadem. A média brasileira é de 47% de condenações dos processos que tramitam na área da saúde.",
    icon: FaCheck,
  },
  {
    name: "Gerenciamento de Crise de Imagem",
    description:
      " por problemas com qualquer veículo da mídia envolvendo o ato da profissão.",
    icon: FaCheck,
  },
  {
    name: "Clube de Benefícios ",
    description:
      "com descontos exclusivos e dedução de até 25% da declaração de imposto de renda do médico no livro caixa.",
    icon: FaCheck,
  },
  {
    name: "Cursos ",
    description: " e plataformas telemedicina gratuitas.",
    icon: FaCheck,
  },
  {
    name: "Assistência Funeral. ",
    description: "",
    icon: FaCheck,
  },
];

export default function Beneficios() {
  return (
    <div className="bg-green-50 w-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Vantagens na Contratação do FUMDAP
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-700">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
