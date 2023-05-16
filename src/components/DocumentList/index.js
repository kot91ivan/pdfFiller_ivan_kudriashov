import s from "./DocumentList.module.scss"
import DocumentListItem from "./DocumentListItem"

const DocumentList = ({ list }) => {
  return (
    <div className={s.document_list}>
      {list &&
        list.map((item, index) => {
          const isLastItem = index === list.length - 1
          return (
            <DocumentListItem
              name={item.name}
              date={item.date}
              isLast={isLastItem}
              key={item.id}
            />
          )
        })}

      {!list && <div className={s.document_list__empty_list}>Empty list</div>}
    </div>
  )
}

export default DocumentList
