import React, {useRef} from 'react'
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'
import {useDrag, useDrop} from 'react-dnd'

const SelectedIngredient = ({index, text, thumbnail, price, handleClose, moveIngredient}) => {
  const ref = useRef(null)

  const [{isDrag}, drag] = useDrag({
    type: 'constructorElement',
    item: () => {
      return {index}
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  })

  const [, drop] = useDrop({
    accept: 'constructorElement',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },

    hover(item, monitor) {
      if (!ref.current) return
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) return

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top


      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

      moveIngredient(dragIndex, hoverIndex)

      item.index = hoverIndex
    }
  })

  const opacity = isDrag ? 0 : 1

  drag(drop(ref))

  return (
    <div
      ref={ref}
      style={{opacity}}>
      <ConstructorElement
        text={text}
        thumbnail={thumbnail}
        price={price}
        handleClose={handleClose}/>
    </div>
  )
}

export default SelectedIngredient