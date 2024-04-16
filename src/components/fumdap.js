import Image from "next/image";
import Link from "next/link";

export default function Fumdap() {
  return (
    <>
      <section class="bg-green-900 w-screen text-center">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="max-w-screen-lg  sm:text-lg text-gray-400">
            <h2 class="mb-4 text-3xl tracking-tight font-bold  text-white">
              O QUE É O FUMDAP?
            </h2>
            <p class="mb-4 font-light">
              O FUMDAP (Fundo Prestamista de Defesa Profissional), mantido pela
              Anadem, não é um simples seguro de responsabilidade civil
              profissional, mas sim um sistema de segurança e proteção jurídica
              e patrimonial e gestão do risco da atividade médica e hospitalar,
              que dispõe, também, de uma apólice coletiva por adesão, pactuada
              com a Chubb Seguros Brasil S.A., com cobertura de até R$
              500.000,00 em eventual condenação judicial.
            </p>

            <Link
              href="/anadem"
              class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 text-primary-500 hover:text-primary-700"
            >
              Saiba mais
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
            <div className="flex justify-center py-5">
              <Image src="/selo.png" alt="selo" width={300} height={50} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
