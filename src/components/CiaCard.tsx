import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import {CiaDialog} from "./CiaDialog.tsx";
import {useState} from "react";

interface Props {
    title: string
    icon: any
    content:object
}


export function CiaCard(props: Props) {
    const [open, setOpen] = useState(false)
    const handleOpenDialog = ()=>setOpen(true)
    const handleCloseDialog = ()=>setOpen(false)


    return (
        <Card className="mt-6 w-95">
            <CardBody>
                {props.icon}
                <Typography variant="h5" color="blue-gray" className="mb-2 capitalize ">
                    {props.title}
                </Typography>

            </CardBody>
            <CardFooter className="pt-0">
                <a href="#" className="inline-block">
                    <Button size="sm" variant="text" className="flex items-center gap-2" onClick={handleOpenDialog}>
                        Explore
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                </a>
            </CardFooter>
            <CiaDialog content={props.content} open={open} closeDialog={handleCloseDialog}></CiaDialog>

        </Card>
    );
}