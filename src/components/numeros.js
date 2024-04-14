export default function Numeros() {
  return (
    <>
      <section class="bg-white w-full">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3">
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-green-900 text-3xl md:text-4xl font-extrabold">
                20M+
              </dt>
              <dd class="font-light text-green-900 ">Clientes</dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-green-900 text-3xl md:text-4xl font-extrabold">
                1400+
              </dt>
              <dd class="font-light text-green-900 ">Parceiros</dd>
            </div>
            <div class="flex flex-col items-center justify-center">
              <dt class="mb-2 text-green-900 text-3xl md:text-4xl font-extrabold">
                5M+
              </dt>
              <dd class="font-light text-green-900 ">Pontos conveniados</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
