import {useQuery} from 'react-query';
import {httpClient} from '../services/httpClient.ts';
import {ENDPOINTS, HTTP_METHOD} from "../utils/constants";
import {HsCodes} from "../utils/types";


const useHsCodes = ( config = {}) => {
    const {
        data = Array<HsCodes>,
        isLoading = true
           ,
    } = useQuery({
        queryKey: ['hscodes'],
        queryFn: ({queryKey}) =>
            httpClient.request({
                method: HTTP_METHOD.GET,
                url: ENDPOINTS.HSCODES,
                params: queryKey[1],
            }),
        ...config,
    });

    return {data: data as any, isLoading };
};
export {useHsCodes};
