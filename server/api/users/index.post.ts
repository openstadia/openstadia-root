import {users} from "../../dbModels";

interface IRequestBody {
    email: string;
    name: string;
}

export default defineEventHandler(async (event) => {
    console.log("POST /api/users");
    const {email, name} = await readBody<IRequestBody>(event);
    try {
        const userData = await users.findOne({
            email,
        });
        if (userData) {
            console.log(`User with email ${email} already exists`);
            setResponseStatus(event, 409)
            return {
                code: "USER_EXISTS",
                message: "User with given email already exists.",
            };
        } else {
            console.log("Create user");
            const newUserData = await users.create({
                email,
                name,
            });
            return {
                id: newUserData._id,
                name: newUserData.name,
            };
        }
    } catch (err) {
        console.dir(err);
        setResponseStatus(event, 500)
        return {
            code: "ERROR",
            message: "Something wrong.",
        };
    }
});
