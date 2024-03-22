import { createSlice, PayloadAction } from "@reduxjs/toolkit/react"


const element = ['+', '-', '.', '*', '/']
const calculator = createSlice({
    name: 'numbers',
    initialState: {
        numbers: '0'
    },
    reducers: {
        addValue(state, action: PayloadAction<{ val: string }>) {
            const value = action.payload.val
            if (state.numbers == '0') {
                state.numbers = value
            }
            else if (element.includes(value)) {
                const num = state.numbers.split('')
                if (element.includes(num[num.length - 1])) {
                    num[num.length - 1] = value
                    state.numbers = num.join('')
                }
                else state.numbers += value
            }
            else if (value == 'del') {
                state.numbers = state.numbers.substring(0, state.numbers.length - 1)
            }
            else if (value == 'reset') {
                state.numbers = '0'
            }
            else if (value == '=') {
                const num = state.numbers.split('')
                if (element.includes(num[num.length - 1])) {
                    num.pop()
                    state.numbers = num.join('')
                }

                try {
                    const num = eval(state.numbers)
                    state.numbers = num.toString()
                }
                catch {
                    state.numbers = 'error'
                }
            }
            else{
                state.numbers += value
            }


        },

    }
})

export const { addValue } = calculator.actions;

export default calculator.reducer;