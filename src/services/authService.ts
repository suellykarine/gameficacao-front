export const loginUser = async (email: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user/statistics?email=${email}`
    );
    if (!response.ok) {
      throw new Error("Falha ao autenticar o usuário");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao conectar com a API:", error);
    throw error;
  }
};
