import { expect, test } from "vitest"
import { render } from "vitest-browser-react"
import InputForm from "./input-form"

test("renders", async () => {
	const screen = await render(<InputForm calcMortgage={() => {}} clearAll={() => {}} />)

	await expect.element(screen.getByText("Mortgage Amount")).toBeVisible()
})
