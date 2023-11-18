import {CiaCard} from "./CiaCard.tsx";
import {Geography} from "../icons/Geography.tsx";
import {Introduction} from "../icons/Introduction.tsx";
import {People} from "../icons/People.tsx";
import {Government} from "../icons/Government.tsx";
import {Economy} from "../icons/Economy.tsx";
import {Energy} from "../icons/Energy.tsx";
import {Communications} from "../icons/Communications.tsx";
import {Transportation} from "../icons/Transportation.tsx";
import {Terrorism} from "../icons/Terrorism.tsx";
import {TransnationalIssues} from "../icons/TransnationalIssues.tsx";
import {Environment} from "../icons/Environment.tsx";
import {Military} from "../icons/Military.tsx";



interface Props {
    insights: Record<string, any>;
}
export const CiaCards = (props: Props) => {
    const Icons:Record<string, any>= {
        'introduction': <Introduction />,
        'geography': <Geography />,
        'people-and-society': <People />,
        'environment': <Environment />,
        'government': <Government />,
        'economy': <Economy />,
        'energy': <Energy />,
        'communications': <Communications />,
        'transportation': <Transportation />,
        'military-and-security': <Military />,
        'terrorism': <Terrorism />,
        'transnational-issues': <TransnationalIssues />,
    };

    if (!props.insights ) {
        return null;
    }


    return(

        <div className="w-full h-full flex justify-center items-center flex-wrap gap-4">

            {
                Object.keys(props.insights).map((key: string) => (
                    <CiaCard title={key} key={key} icon={Icons[key]}  content={props.insights[key]}/>
                ))
            }
        </div>
    )
}