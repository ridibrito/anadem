import Image from "next/image";
import Link from "next/link";

export default function Obrigado() {
  return (
    <>
      <section class="bg-[#F0FDF4] p-24">
        <div class="block h-screen mx-auto center justify-center py-8 px-4 max-w-screen-md text-center lg:py-16 lg:px-12 space-y-6">
          <Link href="/">
            <Image
              src="/anadem.png"
              alt="logo anadem"
              width={300}
              height={100}
              className="mx-auto"
            />
          </Link>
          <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl ">
            Parabéns pela decisão!
          </h1>
          <p class="font-bold text-gray-500 md:text-lg xl:text-3xl ">
            Esse é o primeiro passo para a segurança da sua carreira.
          </p>
          <p class="font-bold text-gray-500 md:text-lg xl:text-xl ">
            Nossa equipe vai entrar em contato o mais rápido possível!
          </p>
          <div className="mt-6">
            <p className="mb-4">Para iniciar seu atendimento imediatamente.</p>
            <Link
              href="https://api.whatsapp.com/send?phone=5561983551955&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Anadem..."
              className="bg-green-700 font-bold text-white rounded-3xl px-6 py-3 -pb-2"
            >
              Fale conosco via WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
