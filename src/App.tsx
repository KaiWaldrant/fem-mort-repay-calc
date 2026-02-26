import "./App.css"
import { useState } from "react"
import type { IFormInputs } from "./components/input-form"
import InputForm from "./components/input-form"
import type { Results } from "./components/result"
import Result from "./components/result"
import calculateMortgage from "./helpers/calculateMortgage"

function App() {
	const [result, setResult] = useState<Results>({
		monthlyPayment: 0,
		totalPayment: 0,
	})

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

	return (
		<main>
			<section>
				<h1>Mortgage Repayment Calculator</h1>
				<InputForm calcMortgage={calcMort} />
			</section>
			<section>
				<Result result={result} />
			</section>
		</main>
	)
}

export default App
