import bcrypt from 'bcrypt';

class PasswordManager{
    static async hashPassword(password: string){
        return await bcrypt.hash(password, 9);
    }
    
    static async comparePassword(password: string, hashedPassword: string){
        return await bcrypt.compare(password, hashedPassword);
    }
}

export default PasswordManager;