import axios, { AxiosResponse } from 'axios'
import { Tquestions } from 'components/Quiz/Quiz';

export const fetchQuestions = async (url: string):Promise<Tquestions[]> => {
    // try {
        const response:AxiosResponse = await axios.get(url)
        return response.data.results;
    // }
    // catch(err) {
    //     console.log(err);
    //     return []
    // }
  }