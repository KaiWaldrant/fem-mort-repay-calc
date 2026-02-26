import IllustrationEmpty from "../assets/images/illustration-empty"

interface ResultProps {
	monthlyPayment: number
	totalPayment: number
}

export default function Result(result: ResultProps) {
	return (
		<>
			{Object.entries(result)?.length > 0 ? (
				<>
					<div className="result__header">
						<h2>Your results</h2>
						<p>
							Your results are shown below based on the information you
							provided. To adjust the results, edit the form and click
							“calculate repayments” again.
						</p>
					</div>
					<div className="results-card">
						<div className="results-card__monthly">
							<p>Your Monthly repayments</p>
							<p>{result.monthlyPayment}</p>
						</div>
						<div className="results-card__total">
							<p>Total you'll repay over the term</p>
							<p>{result.totalPayment}</p>
						</div>
					</div>
				</>
			) : (
				<>
					<IllustrationEmpty />
					<h2>Results shown here</h2>
					<p>
						Complete the form and click “calculate repayments” to see what your
						monthly repayments would be.
					</p>
				</>
			)}
		</>
	)
}
