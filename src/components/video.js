export default function Video() {
  return (
    <>
      <section class="">
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div class="mt-4 md:mt-0 justify-center">
            <h2 class="mb-4 text-2xl text-center px-12 tracking-tight font-extrabold text-green-900 ">
              A MAIOR REDE DE BLINDAGEM PROFISSIONAL DO PAÍS
            </h2>
            <p class="mb-6 font-light text-gray-500 px-4">
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
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="mx-auto w-full h-full px-2 lg:w-[484px] lg:h-[262px]"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
