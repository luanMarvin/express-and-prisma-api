import bcrypt from 'bcrypt';

const saltRounds = process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS, 10) : 10;

const cryptPass = async (senha: string): Promise<string> => {
  try {
    const hash = await bcrypt.hash(senha, saltRounds);
    return hash;
  } catch (error) {
    throw new Error('Erro ao gerar hash da senha');
  }
};

export { cryptPass };
