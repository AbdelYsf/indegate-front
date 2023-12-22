import {useQuery} from 'react-query';
import {httpClient} from '../services/httpClient.ts';
import {ENDPOINTS, HTTP_METHOD} from "../utils/constants";

interface ParamsType {
    exporting_country: string;
    destination_country: string;
    product: string;
}
const useImportRequirements = (params: ParamsType, config = {}) => {
    const {
        data = String,
         isLoading    ,
    } = useQuery({
        queryKey: ['import-req',params],
        queryFn: ({queryKey}) =>
            httpClient.request({
                method: HTTP_METHOD.GET,
                url: ENDPOINTS.IMPORT_REQUIREMENTS,
                params: queryKey[1],
            }),
        ...config,
    });

    return {importData: data as any, isImportLoading:isLoading};
};
export {useImportRequirements};
