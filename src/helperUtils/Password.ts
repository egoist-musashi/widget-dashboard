import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = 10; // Number of salt rounds for bcrypt
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};