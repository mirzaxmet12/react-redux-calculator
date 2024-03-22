import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addValue } from './store/CalculatorSlice'


const btn = [
  '7', '8', '9', '+',
  '4', '5', '6', '-',
  '1', '2', '3', '*',
  '.', '0', 'del', '/',
  'reset', '='
]



function App() {
  const dispatch = useDispatch()
  const currentValue = useSelector((state: any) => state.number.numbers)



  return (
    <div className='box'>
      <p>{currentValue.length?currentValue:'0' }</p>
      <div className='button-block'>
        {btn.map(val => (
          <button key={val} onClick={() => dispatch(addValue({ val: val }))}>{val}</button>
        ))}
      </div>
    </div >
  )
}

export default App
