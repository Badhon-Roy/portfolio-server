import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    login_email : process.env.LOGIN_EMAIL,
    login_password : process.env.LOGIN_PASSWORD,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    access_token_expire_in: process.env.ACCESS_TOKEN_EXPIRE_IN
};