import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import emailjs from "emailjs-com";

export default function Form() {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [especialidades, setEspecialidades] = useState("");

  const options = [
    { value: "", label: "Especialidades" },
    { value: "", label: "---" },
    { value: "", label: "Dentistas" },
    { value: "", label: "" },
    {
      value:
        "Odontologia com implante e/ou cirurgia, ortodontia e demais especialidades",
      label:
        "Odontologia com implante e/ou cirurgia, ortodontia e demais especialidades",
    },
    { value: "Procedimentos Estéticos", label: "Procedimentos Estéticos" },
    {
      value: "Cirurgia Bucomaxilo ",
      label: "Cirurgia Bucomaxilo ",
    },
    { value: "", label: "---" },
    { value: "", label: "Médicos" },
    { value: "", label: "" },
    { value: "ACUPUNTURA", label: "Acupuntura" },
    { value: "ALERGIA E IMUNOLOGIA", label: "Alergia e Imunologia" },
    { value: "ANESTESIOLOGIA", label: "Anestesiologia" },
    { value: "ANGIOLOGIA", label: "Angiologia" },
    { value: "CANCEROLOGIA", label: "Cancerologia" },
    { value: "CARDIOLOGIA", label: "Cardiologia" },
    { value: "CIRURGIA CARDIOVASCULAR", label: "Cirurgia Cardiovascular" },
    {
      value: "CIRURGIA DE CABEÇA E PESCOÇO",
      label: "Cirurgia de Cabeça e Pescoço",
    },
    { value: "CIRURGIA DE MÃO", label: "Cirurgia de Mão" },
    {
      value: "CIRURGIA DO APARELHO DIGESTIVO",
      label: "Cirurgia do Aparelho Digestivo",
    },
    { value: "CIRURGIA ENDOVASCULAR", label: "Cirurgia Endovascular" },
    { value: "CIRURGIA GERAL", label: "Cirurgia Geral" },
    { value: "CIRURGIA ONCOLÓGICA", label: "Cirurgia Oncológica" },
    { value: "CIRURGIA PLÁSTICA", label: "Cirurgia Plástica" },
    { value: "CIRURGIA TORÁCICA", label: "Cirurgia Torácica" },
    { value: "CIRURGIA VASCULAR", label: "Cirurgia Vascular" },
    { value: "CLÍNICA MÉDICA", label: "Clínica Médica" },
    { value: "COLOPROCTOLOGIA", label: "Coloproctologia" },
    { value: "DERMATOLOGIA INVASIVA", label: "Dermatologia Invasiva" },
    { value: "DERMATOLOGIA NÃO INVASIVA", label: "Dermatologia Não Invasiva" },
    {
      value: "ENDOCRINOLOGIA E METABOLOGIA",
      label: "Endocrinologia e Metabologia",
    },
    { value: "ENDOSCOPIA", label: "Endoscopia" },
    { value: "GASTROENTEROLOGIA", label: "Gastroenterologia" },
    { value: "GENÉTICA MÉDICA", label: "Genética Médica" },
    { value: "GERIATRA", label: "Geriatra" },
    { value: "GINECOLOGIA E OBSTETRÍCIA", label: "Ginecologia e Obstetrícia" },
    {
      value: "GINECOLOGIA SEM OBSTETRÍCIA",
      label: "Ginecologia sem Obstetrícia",
    },
    { value: "HEMATOLOGIA E HEMOTERAPIA", label: "Hematologia e Hemoterapia" },
    { value: "HOMEOPATIA", label: "Homeopatia" },
    { value: "INFECTOLOGIA", label: "Infectologia" },
    { value: "MASTOLOGIA", label: "Mastologia" },
    {
      value: "MEDICINA DA FAMÍLIA E COMUNIDADE",
      label: "Medicina da Família e Comunidade",
    },
    { value: "MEDICINA DE URGÊNCIA", label: "Medicina de Urgência" },
    { value: "MEDICINA DO TRABALHO", label: "Medicina do Trabalho" },
    { value: "MEDICINA DO TRÁFEGO", label: "Medicina do Tráfego" },
    { value: "MEDICINA ESPORTIVA", label: "Medicina Esportiva" },
    {
      value: "MEDICINA FÍSICA E REABILITAÇÃO",
      label: "Medicina Física e Reabilitação",
    },
    { value: "MEDICINA INTENSIVA", label: "Medicina Intensiva" },
    {
      value: "MEDICINA LEGAL E PERÍCIA MÉDICA",
      label: "Medicina Legal e Perícia Médica",
    },
    { value: "MEDICINA NUCLEAR", label: "Medicina Nuclear" },
    {
      value: "MEDICINA PREVENTIVA E SOCIAL",
      label: "Medicina Preventiva e Social",
    },
    { value: "NEFROLOGIA", label: "Nefrologia" },
    { value: "NEUROCIRURGIA", label: "Neurocirurgia" },
    { value: "NEUROLOGIA", label: "Neurologia" },
    { value: "NUTROLOGIA", label: "Nutrologia" },
    { value: "OFTALMOLOGIA", label: "Oftalmologia" },
    { value: "OTORRINOLARINGOLOGIA", label: "Otorrinolaringologia" },
    { value: "PATOLOGIA", label: "Patologia" },
    {
      value: "PATOLOGIA CLÍNICA MEDICINA LABORATORIAL",
      label: "Patologia Clínica / Medicina Laboratorial",
    },
    { value: "PEDIATRIA", label: "Pediatria" },
    { value: "PEDIATRIA INTENSIVA", label: "Pediatria Intensiva" },
    { value: "PNEUMOLOGIA", label: "Pneumologia" },
    { value: "PSIQUIATRIA", label: "Psiquiatria" },
    {
      value: "RADIOLOGIA E DIAGNÓSTICO POR IMAGEM",
      label: "Radiologia e Diagnóstico por Imagem",
    },
    { value: "RADIOTERAPIA", label: "Radioterapia" },
    { value: "REUMATOLOGIA", label: "Reumatologia" },
    { value: "UROLOGIA", label: "Urologia" },
    { value: "TRAUMATOLOGIA E ORTOPEDIA", label: "Traumatologia e Ortopedia" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isChecked && selectedOption && name && email && phone) {
      // Aqui você pode adicionar a lógica para enviar o formulário usando EmailJS
      // Substitua os valores abaixo pelos IDs do seu serviço, modelo e usuário do EmailJS
      const serviceID = "service_2q77j18";
      const templateID = "template_z8l4fvs";
      const userID = "l2zyFhkURDWq9aGoY";
      const templateParams = {
        name,
        email,
        phone,
        especialidades: selectedOption,
      };
      emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then((result) => {
          console.log("Email enviado com sucesso!", result.text);
          // Redirecionar para a página de agradecimento
          router.push("/obrigado");
        })
        .catch((error) => {
          console.error("Erro ao enviar o email:", error);
        });
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <section className="bg-white w-screen px-3">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <div className="block mx-auto justify-center text-center mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-green-900 ">
              Entre em contato
            </h2>
            <p className="mb-2  font-light text-center text-gray-500  sm:text-xl">
              Solicite uma cotação do FUMDAP agora mesmo.
            </p>
            <span className="text-sm text-green-900 ">
              (Fique tranquilo, somos totalmente contra envios de spam)
            </span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Seu nome
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                placeholder="Digite seu nome..."
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Seu email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="seuemail@seuemail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Celular
              </label>
              <input
                type="tel"
                id="phone"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500   placeholder-gray-400  focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                placeholder="(xx) 9 999-9999"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Especialidade
              </label>
              <select
                id="especilidade"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3  placeholder-gray-400 focus:ring-green-900 focus:border-green-900"
                onChange={handleSelectChange}
                required
                value={selectedOption}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center ">
              <input
                checked={isChecked}
                onChange={handleCheckboxChange}
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Ao informar meus dados, concordo com a{" "}
                <Link href="/politicas">Política de Privacidade</Link> e
                concordo em receber comunicações.
              </label>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-white font-medium text-center  rounded-lg bg-green-900 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-800"
            >
              Solicitar minha cotação
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
