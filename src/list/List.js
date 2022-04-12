import Item from './item/Item'
import './list.css'

const List = ({ listDeal, delelete}) => {
  const elems = listDeal.map(item=>{
    const {id, ...data} = item
    return <Item key={id} {...data} onDelete={()=>{delelete(id)}}/>
  })
  
  return (
    <div className="deal">
      <ul className="deal-list">
        {elems}
      </ul>
    </div>
  )
}


export default List