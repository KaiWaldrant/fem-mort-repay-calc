import { expect, test } from "vitest"
import calculateMortgage from "./calculateMortgage"

const mortgageAmount = 300000
const interestRate = 5.25
const mortgageTerm = 25
const mortgageType = "repayment"

test("calculates monthly repayment", () => {
	const { monthlyPayment, totalPayment } = calculateMortgage({
		mortgageAmount,
		interestRate,
		mortgageTerm,
		mortgageType,
	})

	expect(monthlyPayment).toBe(1797.7431455138244)
	expect(totalPayment).toBe(539322.9436541473)
})

test("calculates interest only repaymet", () => {
	const { monthlyPayment, totalPayment } = calculateMortgage({
		mortgageAmount,
		interestRate,
		mortgageTerm,
		mortgageType: "interest-only",
	})

	expect(monthlyPayment).toBe(1312.4999999999998)
	expect(totalPayment).toBe(393749.9999999999)
})
