import UsersModel from "../models/users.model.js";
import EnumErrors from '../../utils/errorHandler/enum.js';
import FloweryCustomError from '../../utils/errorHandler/FloweryCustomError.js';

class UserMongoManager {
    constructor() {
        this.usersModel = UsersModel;
    }
    getUserByEmail = async (email) => {
        try {
            const user = await this.usersModel.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
            return user;
        } catch (error) {
            FloweryCustomError.createError({
                name: 'getUserByEmail Error',
                message: `Failed to retrieve user: ${error.message}`,
                type: EnumErrors.DATABASE_ERROR.type,
                statusCode: EnumErrors.DATABASE_ERROR.statusCode
              });             
        }
    }

    updateUser = async (userId, updatedFields) => {
        try {
            const { role } = updatedFields;
            const updatedUser = await this.usersModel.findByIdAndUpdate(userId, {role: role}, {new: true});
            if (!updatedUser) {
                FloweryCustomError.createError({
                  name: 'updateUser Error',
                  message: 'User not found',
                  type: EnumErrors.DATABASE_ERROR.type,
                  statusCode: EnumErrors.DATABASE_ERROR.statusCode
                });        
              }
            return updatedUser;
        } catch (error) {
            FloweryCustomError.createError({
                name: 'updateUser Error',
                message: `Failed to update user: ${error.message}`,
                type: EnumErrors.DATABASE_ERROR.type,
                statusCode: EnumErrors.DATABASE_ERROR.statusCode
              });             
        }
    }

}

export default UserMongoManager;