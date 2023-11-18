
export const FullScreenLoader = ()=>{

    return <>
        <div id="loader-container"
             className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="200" width="200">
                <circle fill="none" strokeOpacity="1" stroke="#83C186" strokeWidth=".5" cx="100" cy="100"
                        r="0">
                    <animate attributeName="r" calcMode="spline" dur="2" values="1;80" keyTimes="0;1"
                             keySplines="0 .2 .5 1" repeatCount="indefinite"></animate>
                    <animate attributeName="stroke-width" calcMode="spline" dur="2" values="0;25" keyTimes="0;1"
                             keySplines="0 .2 .5 1" repeatCount="indefinite"></animate>
                    <animate attributeName="stroke-opacity" calcMode="spline" dur="2" values="1;0"
                             keyTimes="0;1" keySplines="0 .2 .5 1" repeatCount="indefinite"></animate>
                </circle>
            </svg>

        </div>
    </>
}