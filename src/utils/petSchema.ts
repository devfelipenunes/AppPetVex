import * as yup from "yup";

const petSchema = yup.object({
  name: yup
    .string()
    .required("Necessário preencher o seu nome.")
    .min(3, "Digite um nome válido."),
  species: yup.string().required("Necessário preencher o seu sobrenome."),
  race: yup.string().required("Necessário preencher o seu apelido."),
  microchip: yup.string().required("Necessário preencher o seu gênero."),
  microchipDate: yup.string().required("Necessário preencher o seu gênero."),
  sex: yup.string().required("Necessário preencher o seu gênero."),
  weight: yup.string().required("Necessário preencher o seu gênero."),
  coatColor: yup.string().required("Necessário preencher o seu gênero."),
  birthDate: yup
    .string()
    .required("Necessário preencher a sua data de nascimento."),
});

const petOwnerSchema = yup.object({
  name: yup
    .string()
    .required("Necessário preencher o seu nome.")
    .min(3, "Digite um nome válido."),
  cpf: yup.string().required("Necessário preencher o seu cpf."),
  endereco: yup.string().required("Necessário preencher o seu Endereço."),
  cidade: yup.string().required("Necessário preencher o seu cidade."),
  telefone: yup.string().required("Necessário preencher o seu telefone."),
});

const vaccine = yup.object({
  name: yup
    .string()
    .required("Necessário preencher o seu nome.")
    .min(3, "Digite um nome válido."),
  date: yup.string().required("Necessário preencher o seu nome."),
  lab: yup.string().required("Necessário preencher o seu nome."),
  comercialName: yup.string().required("Necessário preencher o seu nome."),
  activos: yup.string().required("Necessário preencher o seu nome."),
});

const vet = yup.object({
  name: yup
    .string()
    .required("Necessário preencher o seu nome.")
    .min(3, "Digite um nome válido."),
  crm: yup.string().required("Necessário preencher o seu nome."),
  endereco: yup.string().required("Necessário preencher o seu nome."),
  telefone: yup.string().required("Necessário preencher o seu nome."),
  cidade: yup.string().required("Necessário preencher o seu nome."),
  email: yup.string().required("Necessário preencher o seu nome."),
});

type RegisterFormData = yup.InferType<
  typeof petSchema | typeof petOwnerSchema | typeof vaccine | typeof vet
>;

export { petSchema, RegisterFormData, petOwnerSchema, vaccine, vet };
