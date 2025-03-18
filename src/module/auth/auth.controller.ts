import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";


const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServices.userLogin(req.body)
    const { accessToken } = result;
    res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
            accessToken
        }
    })
})

export const AuthControllers = {
    loginUser
}