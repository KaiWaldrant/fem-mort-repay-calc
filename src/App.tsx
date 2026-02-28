import "./App.css"
import { useState } from "react"
import type { IFormInputs } from "./components/input-form"
import InputForm from "./components/input-form"
import type { Results } from "./components/result"
import Result from "./components/result"
import calculateMortgage from "./helpers/calculateMortgage"

function App() {
	const [result, setResult] = useState<Results | null>(null)

	const calcMort = ({
		mortgageAmount,
		interestRate,
		mortgageTerm,
		mortgageType,
	}: IFormInputs) => {
		const { monthlyPayment, totalPayment } = calculateMortgage({
			mortgageAmount,
			interestRate,
			mortgageTerm,
			mortgageType,
		})

		setResult({ monthlyPayment, totalPayment })
	}

	const handleClear = () => {
		setResult(null)
	}

	return (
		<main>
			<section className="calculator">
				<InputForm calcMortgage={calcMort} clearAll={handleClear} />
			</section>
			<section className={`results ${result !== null ? "" : "empty"}`}>
				<Result result={result} />
			</section>
		</main>
	)
}

export default App
