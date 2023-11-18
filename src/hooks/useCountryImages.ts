import {useQuery} from 'react-query';
import {httpClient} from '../services/httpClient.ts';
import {ENDPOINTS, HTTP_METHOD} from "../utils/constants";

interface ParamsType {
    country_name: string;
}
const useCountryImages = (params: ParamsType, config = {}) => {
    const {
        data = Array<string>
           ,
    } = useQuery({
        queryKey: ['images',params],
        queryFn: ({queryKey}) =>
            httpClient.request({
                method: HTTP_METHOD.GET,
                url: ENDPOINTS.COUNTRY_IMAGES,
                params: queryKey[1],
            }),
        ...config,
    });

    return {data: data as any};
};
export {useCountryImages};
