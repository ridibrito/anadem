export default function Video() {
  return (
    <>
      <section className="">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0 justify-center">
            <h2 className="mb-4 text-2xl text-center px-12 tracking-tight font-extrabold text-green-900 ">
              A MAIOR REDE DE BLINDAGEM PROFISSIONAL DO PAÍS
            </h2>
            <p className="mb-6 font-light text-gray-500 px-4">
              A Anadem é uma S.A. (Sociedade Anônima) que promove o debate sobre
              problemas relacionados ao exercício profissional da medicina e da
              odontologia. Além disso, oferece blindagem jurídica para
              profissionais da Saúde, por meio de escritórios de advocacia
              credenciados especializados em Direito Médico e Odontológico.
            </p>
          </div>
          <div className="mx-auto mt-12 ">
            <iframe
              src="https://www.youtube.com/embed/g_2wZ4_kjE4?si=mD5JWbYa8HjijhAn"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="mx-auto w-full h-full px-2 lg:w-[484px] lg:h-[262px]"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
