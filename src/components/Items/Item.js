import { useDispatch } from "react-redux"
import { removeItem, swapItems } from "../../reducers/itemsSlice"
import { useDrag, useDrop } from "react-dnd"
import { useRef } from 'react'

const Item = ({ name, date, image, rank, shape }) => {


    const dispatch = useDispatch()

    const remove = () => {
        dispatch(removeItem(rank))
    }

    const [, drop] = useDrop({
        accept: 'object',
        drop: (item) => {
            if (item.rank !== rank){
                dispatch(swapItems([item.rank, rank]))
            }
        }
    })
      
    const [, drag] = useDrag({
        type: 'object',
        item: { rank },
    })

    const ref = useRef(null)
    const dndRef = drag(drop(ref))

    return(
        <div className="item" ref={dndRef}>

            {image !== "" ? 
                <>
                    <button
                        className={`remove-${shape}`}
                        onClick={remove}>
                            remove
                    </button>

                    <div>
                        <h1 className="rank">{rank}</h1>
                        <img 
                            src={image} 
                            alt=""
                            className={shape} />
                    </div>
                    <div className="item-info">
                        <h2>{`${name}`} {date !== "" ? `(${date})` : ""}</h2>
                    </div>
                </> : 
                <h2 className="imageless">
                    {`${rank}.${name}`} {date !== "" ? `(${date})` : ""}
                    <button onClick={remove}>remove</button>
                </h2>
            }

        </div>
    )
}
