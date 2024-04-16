import Image from "next/image";
import Link from "next/link";

export default function Fumdap() {
  return (
    <>
      <section class="bg-green-900 w-screen mx-auto text-center ">
        <div className=" w-screen py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-green-200 sm:text-4xl mb-10">
                O que é o FUMDAP?
              </p>
            </div>
            <p class="mb-4 text-gray-300">
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
              class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 text-gray-300 border rounded px-3 py-2 hover:text-primary-700"
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
