import { useQuery } from '@tanstack/react-query';
import API from '@/lib/api';

export const useQuestions = () => {
    return useQuery({
        queryKey: ['questions'],
        queryFn: async () => {
            const res = await API.get('/questions/');
            return res.data;
        }
    });
};
