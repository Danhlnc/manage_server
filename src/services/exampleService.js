import { Apierr } from "Apierr";
const create_New = async (reqbody) => {
    try {
        const newBoard = {
            ...reqbody
        }

        return newBoard
    } catch (error) {
        throw error;
    }
}
export const exampleService = {
    create_New
}