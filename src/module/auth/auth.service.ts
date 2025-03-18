import config from "../../config";
import { ILoginUser } from "./auth.interface";
import jwt from "jsonwebtoken"


const userLogin = (user: ILoginUser) => {
    const { email, password, confirmPassword } = user;
    if (email !== config.login_email) {
        throw new Error("You are not authorized!")
    }
    if (password !== config.login_password) {
        throw new Error("You are not authorized!")
    }
    if (password !== confirmPassword) {
        throw new Error("Password doesn't matched!")
    }

    const jwtPayload = {
        email : user?.email
    }

    const accessToken = jwt.sign(jwtPayload, config.access_token_secret as string, { expiresIn: '1d' });

    return {
        accessToken
    }
}

export const AuthServices = {
    userLogin
}