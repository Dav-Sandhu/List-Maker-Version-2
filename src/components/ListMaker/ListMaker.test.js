import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import ListMaker from './ListMaker'
import Items from "../Items/Items"
import { Provider } from 'react-redux'
import { store } from '../../store'

const ListMakerTest = () => {
    return(
        <Provider store={store}>
            <ListMaker />
            <Items />
        </Provider>
    )
}

beforeAll(() => {
    console.log('<---------- ListMaker Tests Begin ---------->')
})

describe("unit tests", () => {
    it("should update name input", () => {
        render(<ListMakerTest />)
        const element = screen.getByTestId("name-input")
        fireEvent.change(element, { target: { value: "hello world" } })
        expect(element.value).toBe("hello world")
    })

    it("should update date input", () => {
        render(<ListMakerTest />)
        const element = screen.getByTestId("date-input")
        fireEvent.change(element, { target: { value: "2020" } })
        expect(element.value).toBe("2020")
    })

    it("should update image input", () => {
        render(<ListMakerTest />)
        const element = screen.getByTestId("img-input")
        fireEvent.change(element, { target: { value: "test.png" } })
        expect(element.value).toBe("test.png")
    })

    it("should update shape radio buttons", () => {
        render(<ListMakerTest />)
        const squareElement = screen.getByTestId("square")
        const rectElement = screen.getByTestId("rect")

        expect(squareElement.checked).toBe(false)

        fireEvent.click(squareElement)
        
        expect(squareElement.checked).toBe(true)
        expect(rectElement.checked).toBe(false)

        fireEvent.click(rectElement)

        expect(squareElement.checked).toBe(false)
        expect(rectElement.checked).toBe(true)
    })

    it("should update rank input", () => {
        render(<ListMakerTest />)
        const element = screen.getByTestId("rank-input")
        expect(element.value).toBe("1")
        fireEvent.change(element, { target: { value: "10" } })
        expect(element.value).toBe("10")
    })
})

describe("integration tests", () => {
    it("should submit the item to the items list", () => {
        render(<ListMakerTest />)

        const nameElement = screen.getByTestId("name-input")
        const dateElement = screen.getByTestId("date-input")
        const imageElement = screen.getByTestId("img-input")
        const squareElement = screen.getByTestId("square")
        const rankElement = screen.getByTestId("rank-input")
        const submitElement = screen.getByTestId("submit-item")

        fireEvent.change(nameElement, { target: { value: "Avatar" } })
        fireEvent.change(dateElement, { target: { value: "2005" } })
        fireEvent.change(imageElement, { target: { value: "avatar.png" } })
        fireEvent.click(squareElement)
        fireEvent.change(rankElement, { target: { value: "5" } })
        fireEvent.click(submitElement)

        const itemElement = screen.queryAllByTestId("item")
        expect(itemElement.length).toBe(1)
    })
})

afterAll(() => {
    console.log('<---------- ListMaker Tests End ---------->')
})