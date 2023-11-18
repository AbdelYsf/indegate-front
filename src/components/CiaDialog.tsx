import {
    Dialog,
    DialogHeader,
    DialogBody,
    Button,
} from "@material-tailwind/react";
import {CiaCardContent} from "./CiaCardContent.tsx";


interface Props {
    open: boolean;
    closeDialog: () => void
    content:Record<string, any>
}

export const CiaDialog =  (props: Props) => {


    return (
        <>
            <Dialog open={props.open} handler={props.closeDialog} size="xxl">
                <DialogHeader className="p-0">
                    <Button size="sm" variant="text" className="flex items-center" onClick={props.closeDialog}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="#000000"  version="1.1" id="Layer_1"
                             viewBox="0 0 476.213 476.213"  className="h-8 w-8">
                            <polygon
                            points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5   57.427,253.107 476.213,253.107 "/>
                        </svg>
                    </Button>
                </DialogHeader>
                <DialogBody className="p-0 overflow-y-auto">
                    {
                        Object.keys(props.content).map((key: string) => (
                            <CiaCardContent title={key} content={props.content[key]} key={key}/>
                        ))
                    }
                </DialogBody>
            </Dialog>
        </>
    );
}