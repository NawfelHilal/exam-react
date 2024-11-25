import { rootUrl } from "./posts";

export const usersUrl = `${rootUrl}/users`;

export const fetchUser = async (userId: string) => {
    const response = await fetch(`${usersUrl}/${userId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }
    return response.json();
};
