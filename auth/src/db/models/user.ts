import mongoose, {Schema, Document, Model} from "mongoose";
import PasswordManager from "../../controllers/password_manager";
interface UserAttrs{
    email: string;
    password: string
}

interface UserDoc extends Document{
    email: string;
    password: string;
}
interface UserModel extends Model<UserDoc>{
    buildUser(attrs: UserAttrs): UserDoc;
}

const userSchema = new Schema({
    email: {type: String, required:true},
    password: {type: String, required:true},
    },
    {
        toJSON: {
            transform: function(doc, ret){
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        }
    }
    
)

userSchema.statics.buildUser = (attrs: UserAttrs) => {
    return new User(attrs);  
}
userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await PasswordManager.hashPassword(this.password);
    }

    next();
})
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);


export default User;