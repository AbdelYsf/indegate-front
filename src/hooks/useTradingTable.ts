import {useQuery} from 'react-query';
import {httpClient} from '../services/httpClient.ts';
import {ENDPOINTS, HTTP_METHOD} from "../utils/constants";

interface ParamsType {
    exporting_country: string;
    destination_country: string;
    product: string;
}
const useTradingTable = (params: ParamsType, config = {}) => {
    const {
        data = String,
         isLoading    ,
    } = useQuery({
        queryKey: ['table',params],
        queryFn: ({queryKey}) =>
            httpClient.request({
                method: HTTP_METHOD.GET,
                url: ENDPOINTS.TRADING_TABLE,
                params: queryKey[1],
            }),
        ...config,
    });

    return {data: data as any, isLoading};
};
export {useTradingTable};
