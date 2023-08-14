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
  birthdate: yup
    .string()
    .required("Necessário preencher a sua data de nascimento."),
});

type RegisterFormData = yup.InferType<typeof petSchema>;

export { petSchema, RegisterFormData };
