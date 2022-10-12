import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Settings from './Settings'
import { Provider } from 'react-redux'
import { store } from '../../store'

beforeAll(() => {
    console.log("<---------- Settings Tests Begin ---------->")
})

const SettingsTest = () => {
    return(
        <Provider store={store}>
            <Settings />
        </Provider>
    )
}

describe("unit tests", () => {
    it("should update order value", () => {
        render(<SettingsTest />)
        const element = screen.getByTestId('order')
        expect(element.value).toBe("asc")
        fireEvent.change(element, {target: {value: "desc"}})
        expect(element.value).toBe("desc")
        fireEvent.change(element, {target: {value: "rand"}})
        expect(element.value).toBe("rand")
        fireEvent.change(element, {target: {value: "something"}})
        expect(element.value).not.toBe("something")
    })

    it("should update the view value", () => {
        render(<SettingsTest />)
        const element = screen.getByTestId('view')
        expect(element.value).toBe("vertical")
        fireEvent.change(element, {target: {value: "horizontal"}})
        expect(element.value).toBe("horizontal")
        fireEvent.change(element, {target: {value: "something"}})
        expect(element.value).not.toBe("something")
    })

    it("should update the items per page number", () => {
        render(<SettingsTest />)
        const element = screen.getByTestId('itemsPerPage')
        expect(element.value).toBe("25")
        fireEvent.change(element, {target: {value: "50"}})
        expect(element.value).toBe("50")
        fireEvent.change(element, {target: {value: "100"}})
        expect(element.value).toBe("100")
        fireEvent.change(element, {target: {value: "999"}})
        expect(element.value).toBe("999")
        fireEvent.change(element, {target: {value: "abcd"}})
        expect(element.value).not.toBe("abcd")
    })

    it("should check the checkbox when clicked", () => {
        render(<SettingsTest />)
        const element = screen.getByTestId("darkMode")
        expect(element.checked).toBe(false)
        fireEvent.click(element)
        expect(element.checked).toBe(true)
    })
})

afterAll(() => {
    console.log("<---------- Settings Tests End ---------->")
})