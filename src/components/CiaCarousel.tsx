
import { Carousel } from "@material-tailwind/react";

interface Props {
    images:Array<string>

}
export function CiaCarousel(props:Props) {

    if (!props.images || props.images.length === 0) {
        return null;
    }


    return (
        <>
            <Carousel className="rounded-xl h-1/2 w-3/5 mx-auto my-auto">
                {props.images.map((url,index:number)=> {
                    return(<img
                        src={url}
                        alt="image 1"
                        className="h-full w-full object-cover"
                        key={index}
                    />)
                })}
            </Carousel>

        </>

    );
}