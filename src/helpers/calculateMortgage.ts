interface calculateMortgageProps {
	mortgageAmount: number
	interestRate: number
	mortgageTerm: number
	mortgageType: "repayment" | "interest-only"
}

export default function calculateMortgage({
	mortgageAmount,
	interestRate,
	mortgageTerm,
	mortgageType,
}: calculateMortgageProps): { monthlyPayment: number; totalPayment: number } {
	let monthlyPayment: number
	let totalPayment: number

	// if full app: Add validation for mortgageAmount, interestRate, mortgageTerm, and mortgageType

	if (mortgageType === "repayment") {
		const monthlyInterestRate = interestRate / 12 / 100
		const numberOfPayments = mortgageTerm * 12
		monthlyPayment =
			(mortgageAmount * monthlyInterestRate) /
			(1 - (1 + monthlyInterestRate) ** -numberOfPayments)
		totalPayment = monthlyPayment * numberOfPayments
	} else {
		monthlyPayment = mortgageAmount * (interestRate / 100 / 12)
		totalPayment = monthlyPayment * mortgageTerm * 12
	}

	return { monthlyPayment, totalPayment }
}
