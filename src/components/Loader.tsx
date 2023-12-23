
import { Spinner } from "@material-tailwind/react";

export function CustomSpinner() {

    return <>
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
    </>

}