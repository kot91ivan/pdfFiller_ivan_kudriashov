import classnames from "classnames"
import useWindowDimensions from "../../../utils/windowDimensions"
import Button from "../../Button"
import { ReactComponent as DocumentListItemLogo } from "./assets/document_icon.svg"

import s from "./DocumentListItem.module.scss"

const DocumentListItem = ({ name, date, isLast }) => {
  const { width } = useWindowDimensions()
  const isMobile = width < 600

  return (
    <div
      className={classnames(s.document_list__item, {
        [s.document_list__item__is_last]: isLast,
        [s.document_list__item__is_mobile]: isMobile
      })}
    >
      <div className={s.document_list__item__data}>
        <div className={s.document_list__item__data_icon}>
          <DocumentListItemLogo />
        </div>

        <div className={s.document_list__item__data__info}>
          <div
            className={s.document_list__item__data__info_name}
            aria-label={`Name document ${name}`}
          >
            {name ?? "Name Document"}
          </div>
          <div
            className={s.document_list__item__data__info_date}
            aria-label={`Date document ${date}`}
          >
            {date ? `Last Edited: ${date}` : "Date Document"}
          </div>
        </div>
      </div>

      <Button
        isPrimary
        isWide={isMobile}
        isMobile={isMobile}
        label={`View document ${name}`}
      >
        View document
      </Button>
    </div>
  )
}

export default DocumentListItem
