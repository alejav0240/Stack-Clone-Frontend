import { useQuery } from "@tanstack/react-query";
import {getProfile} from "@/modulos/users/userApi";
import {User} from "@/modulos/users/userType";

export function useProfile() {
    return useQuery<User>({
        queryKey: ["profile"],
        queryFn: getProfile,
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 5 * 60 * 1000,
    });
}
