import axios, { AxiosResponse } from 'axios'
import { Tquestion } from 'features/questions/AppSlice';

export const fetchQuestions = async (url: string): Promise<Tquestion[]> => {
    const response: AxiosResponse = await axios.get(url)
    return response.data.results;
}