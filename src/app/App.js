import DocumentList from "../components/DocumentList"

import s from "./App.module.scss"

const documents = [
  {
    name: "Rundofase",
    date: "08/08/2020",
    id: 1
  },
  {
    name: "Genco Pura Olive Oil Company",
    date: "08/08/2020",
    id: 2
  },
  {
    name: "Bubba Gump",
    date: "08/08/2020",
    id: 3
  }
]

function App() {
  return (
    <div className={s.root}>
      <DocumentList list={documents} />
    </div>
  )
}

export default App
