import { DATA_LIST } from '../../utils/Accordion_data'
import Accordion from './Accordion/Accordion'
import './App.scss'
import CustomAccordion from './CustomAccordion/CustomAccordion'
export default function App() {
  return (
    <div className='App'>
      {
        DATA_LIST.map(elem => {
          return (
            <Accordion key={elem.id} title={elem.title}>
              <p>{elem.body}</p>
            </Accordion>
          )
        })
      }
      <hr />
      <CustomAccordion />
    </div>
  )
}