import IllustrationEmpty from "../assets/images/illustration-empty"

export type Results = {
	monthlyPayment: number
	totalPayment: number
}

interface ResultProps {
	result: Results | null
}

export default function Result({ result }: ResultProps) {
	const f = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	})
	return (
		<>
			{result !== null ? (
				<>
					<div className="results-header">
						<h2 className="results__heading">Your results</h2>
						<p className="results__text">
							Your results are shown below based on the information you
							provided. To adjust the results, edit the form and click
							“calculate repayments” again.
						</p>
					</div>
					<div className="results-card">
						<div className="result-group">
							<p className="result-group__label">Your Monthly repayments</p>
							<p className="result__monthly">
								{f.format(result.monthlyPayment)}
							</p>
						</div>
						<hr />
						<div className="result-group">
							<p className="result-group__label">
								Total you'll repay over the term
							</p>
							<p className="result__yearly">{f.format(result.totalPayment)}</p>
						</div>
					</div>
				</>
			) : (
				<>
					<IllustrationEmpty />
					<h2 className="results__heading text-center">Results shown here</h2>
					<p className="results__text text-center">
						Complete the form and click “calculate repayments” to see what your
						monthly repayments would be.
					</p>
				</>
			)}
		</>
	)
}
