import clsx from "clsx";
export default function Card (props) {

    function clickHandler () {
        alert("hola")
    }

    return (
        <article 
            onClick={clickHandler}   
            onMouseEnter={() => console.log("Mouse over")}

            className={clsx("bg-[rgb(32_33_39)] p-6 rounded-xl space-y-4",
            props.className,
            {
                "border border-yellow-400": props.isNew 
            })}
        >
            <figure className= "bg-neutral-50/5 p-3 size-fit rounded-lg text-lg"> 
                {props.emoji  || "💩"}
            </figure>
            <h2 className="font-semibold">
            {props.feature || "Feature"}
            </h2>
            <p className="text-neutral-50/50">
            {props.description || "Description"}
            </p>
            {/*Conditional Rendering */}
            {props.isNew === true && <p>Esto es nuevo</p>} {/*evalua si es nuevo con boolean*/}
            {props.isNew !== true && <p>Esto no es nuevo</p>} {/*Evalua si no es nuevo con el boolean*/}

            {/*Este condicional rendering evalua con ternario
            {props.isNew === true 
                ? <p>Esto es nuevo</p>
                : <p>Esto no es nuevo</p>
            }
            */}
        </article>
            
    );

}

{/* className ={"bg-[rgb(32_33_39)] p-6 rounded-xl space-y-4" + " " + props.className + " " + (props.isNew === true && "border2 border-yellow-400" !== " ")} */}