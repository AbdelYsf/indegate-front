import {useQuery} from 'react-query';
import {httpClient} from '../services/httpClient.ts';
import {ENDPOINTS, HTTP_METHOD} from "../utils/constants";

interface ParamsType {
    country_name: string;
}
const useCountryInsights = (params: ParamsType, config = {}) => {
    const {
        data = Array<any>
           ,
    } = useQuery({
        queryKey: ['insights',params],
        queryFn: ({queryKey}) =>
            httpClient.request({
                method: HTTP_METHOD.GET,
                url: ENDPOINTS.COUNTRY_INSIGHTS,
                params: queryKey[1],
            }),
        ...config,
    });

    return {insights: data as any};
};
export {useCountryInsights};
