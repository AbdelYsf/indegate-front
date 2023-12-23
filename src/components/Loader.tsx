
import { Spinner } from "@material-tailwind/react";

export function CustomSpinner() {

    return <>
        <div className="relative">
            <Spinner className="h-16 w-16 text-gray-900/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="text-xl font-bold text-center">Please wait...</div>
        </div>
    </>

}