import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="bg-green-50   w-screen">
        <div className=" grid lg:bg-[url('/capa6.png')]  bg-contain bg-no-repeat bg-right max-w-screen-xl px-4 pt-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:mr-auto mx-auto -ml-3 lg:w-4/5 w-auto px-5 lg:px-0 place-self-center lg:col-span-7">
            <div className="flex mx-auto justify-center lg:justify-start">
              <Image
                src="/anadem.png"
                alt="logo anadem"
                width={250}
                height={100}
              />
            </div>
            <h1 className="max-w-2xl px-2 lg:px-0 text-center lg:text-left mt-4 mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl ">
              Seu Maior Patrimômio é sua carreira!{" "}
              <span className="text-green-900 font-extrabold">Proteja-se</span>
            </h1>
            <p className="max-w-2xl mb-6 text-center lg:text-left font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              Faça parte da maior e melhor rede de Blindagem profissional e
              Jurídica do Brasil
            </p>

            <a
              href="https://anadem.lojavirtualnuvem.com.br/"
              className="bg-green-900 inline-flex w-full lg:w-2/3 items-center justify-center mx-auto px-5 py-3 text-base font-medium text-center text-white border border-green-900 rounded-lg hover:bg-green-950 focus:ring-4 "
            >
              Faça sua adesão online
            </a>
          </div>
          <div className="lg:hidden w-screen -ml-4 mt-3">
            <Image
              src="/capa_mobile.png"
              alt="capa"
              width={1000}
              height={600}
            />
          </div>
        </div>
      </section>
    </>
  );
}
