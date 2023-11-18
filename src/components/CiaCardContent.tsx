

interface Props {
    title: string
    content:string
}

export function CiaCardContent(props: Props) {


    return (
       <>
           <div className="mx-auto font-extrabold w-3/5 p-8">

               <h6 className="pt-4 pb-5 capitalize">{props.title}</h6>
               <p className="font-thin">{props.content}</p>
           </div>

       </>
    );
}