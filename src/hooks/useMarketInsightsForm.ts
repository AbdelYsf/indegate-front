/*import {useMutation} from 'react-query';
import {httpClient} from '../services/httpClient.ts';
import {ENDPOINTS, HTTP_HEADERS, HTTP_METHOD} from "../utils/constants";


interface MutationType {
    data: FormData;
}

const useMarketInsightsForm = (
    onSuccess: (data: any) => void,
    onError: (data: any) => void,
    config = {},
) =>
    useMutation({
        mutationFn: (param: MutationType) =>
            httpClient.request({
                method: HTTP_METHOD.POST,
                url: ENDPOINTS,
                data: param.data,
                headers: {
                    [HTTP_HEADERS.CONTENT_TYPE]: REQUEST_TYPES.FORM_DATA,
                },
            }),
        onSuccess: onSuccess,
        onError: onError,
        ...config,
    });
export {useMarketInsightsForm};*/
