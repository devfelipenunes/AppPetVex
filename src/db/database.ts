import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para criar as tabelas
export const createTables = async () => {
  try {
    await AsyncStorage.setItem("pets", JSON.stringify([]));
    await AsyncStorage.setItem("vacinas", JSON.stringify([]));
    await AsyncStorage.setItem("veterinarios", JSON.stringify([]));
    await AsyncStorage.setItem("tutores", JSON.stringify([]));
  } catch (error) {
    console.error("Erro ao criar tabelas:", error);
  }
};

// Chame createTables uma vez para criar as tabelas
// createTables();
// Função para inserir um novo registro em uma tabela
export const insertRecord = async (tableName, record) => {
  try {
    const tableData = await AsyncStorage.getItem(tableName);
    let data = JSON.parse(tableData) || [];
    data.push(record);
    await AsyncStorage.setItem(tableName, JSON.stringify(data));
    console.log("Registro inserido com sucesso em", tableName);
  } catch (error) {
    console.error("Erro ao inserir registro em", tableName, ":", error);
  }
};

// Exemplo de inserção de um pet
// const petData = {
//   nome: "Rex",
//   especie: "Cachorro",
//   raca: "Golden Retriever",
// };
// insertRecord("pets", petData);

// Função para recuperar todos os registros de uma tabela
export const getAllRecords = async (tableName) => {
  try {
    const tableData = await AsyncStorage.getItem(tableName);
    return JSON.parse(tableData) || [];
  } catch (error) {
    console.error("Erro ao recuperar registros de", tableName, ":", error);
    return [];
  }
};

const getTableData = async (tableName) => {
  try {
    const tableData = await AsyncStorage.getItem(tableName);
    return JSON.parse(tableData) || [];
  } catch (error) {
    console.error("Erro ao recuperar dados de", tableName, ":", error);
    return [];
  }
};

// Exemplo de recuperação dos dados da tabela "pets"
//   const petsData = await getTableData('pets');

export const modifyPet = async (table, petId, modifiedPetData) => {
  try {
    const petsData = await getTableData(table);
    const modifiedPetsData = petsData.map((pet) => {
      if (pet.id === petId) {
        // Atualize o registro desejado
        return { ...pet, ...modifiedPetData };
      }
      return pet;
    });
    await AsyncStorage.setItem(table, JSON.stringify(modifiedPetsData));
    console.log("Registro de pet modificado com sucesso.");
  } catch (error) {
    console.error("Erro ao modificar registro de pet:", error);
  }
};

// Exemplo de modificação de um pet com id 1
//   const modifiedPetData = {
//     nome: 'Novo Nome',
//     idade: 'Nova Idade',
//   };
//   await modifyPet(1, modifiedPetData);

// Exemplo de recuperação de todos os pets
// const allPets = await getAllRecords("pets");
// console.log("Todos os pets:", allPets);

export const deleteRecordById = async (tableName, recordId) => {
  try {
    const currentData = await AsyncStorage.getItem(tableName);
    if (!currentData) {
      console.warn(`Tabela ${tableName} não encontrada.`);
      return;
    }

    const records = JSON.parse(currentData);
    const updatedRecords = records.filter((record) => record.id !== recordId);

    await AsyncStorage.setItem(tableName, JSON.stringify(updatedRecords));
    console.log(`Registro excluído da tabela ${tableName} com sucesso.`);
  } catch (error) {
    console.error(`Erro ao excluir registro da tabela ${tableName}:`, error);
  }
};

//   // Exemplo de uso para excluir um registro de uma tabela específica
//   const tableNameToDeleteFrom = 'pets'; // Substitua pelo nome da tabela desejada
//   const recordIdToDelete = 'id-do-registro-a-ser-excluido'; // Substitua pelo ID do registro a ser excluído

//   deleteRecordById(tableNameToDeleteFrom, recordIdToDelete);

export const generateUniqueId = () => {
  const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 1000); // Altere o intervalo conforme necessário
  return `${timestamp}-${randomNumber}`;
};
