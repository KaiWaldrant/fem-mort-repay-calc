import { useForm } from "react-hook-form"
import IconCalculator from "../assets/images/icon-calculator"

interface InputFormProps {
	calcMortgage: (data: IFormInputs) => void
	clearAll: () => void
}

export type IFormInputs = {
	mortgageAmount: number
	interestRate: number
	mortgageTerm: number
	mortgageType: "repayment" | "interest-only"
}

export default function InputForm({ calcMortgage, clearAll }: InputFormProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormInputs>()
	const onSubmit = (data: IFormInputs) => {
		calcMortgage(data)
	}

	const onClear = () => {
		clearAll()
		reset()
	}

	return (
		<form className="input-form" onSubmit={handleSubmit(onSubmit)}>
			<div className="form-header">
				<h1 className="form-title">Mortgage Calculator</h1>
				<button className="clear-btn" type="button" onClick={() => onClear()}>
					Clear All
				</button>
			</div>
			<div className="form-content">
				<label>
					Mortgage Amount
					<div className="input-group input-left">
						<p className="input-unit">£</p>
						<input
							id="mortgageAmount"
							type="number"
							{...register("mortgageAmount", { required: true })}
							aria-invalid={errors.mortgageAmount ? "true" : "false"}
						/>
					</div>
					{errors.mortgageAmount?.type === "required" && (
						<span className="error-message">This field is required</span>
					)}
				</label>
				<div className="grouped">
					<label>
						Mortgage Term
						<div className="input-group input-right">
							<input
								id="mortgageTerm"
								type="number"
								{...register("mortgageTerm", { required: true })}
								aria-invalid={errors.mortgageTerm ? "true" : "false"}
							/>
							<p className="input-unit">years</p>
						</div>
						{errors.mortgageTerm?.type === "required" && (
							<span className="error-message">This field is required</span>
						)}
					</label>
					<label>
						Interest Rate
						<div className="input-group input-right">
							<input
								id="interestRate"
								type="number"
								step="0.01"
								{...register("interestRate", { required: true })}
								aria-invalid={errors.interestRate ? "true" : "false"}
							/>
							<p className="input-unit">%</p>
						</div>
						{errors.interestRate?.type === "required" && (
							<span className="error-message">This field is required</span>
						)}
					</label>
				</div>
				<div className="radio-group">
					<p className="label">Mortgage Type</p>
					<label>
						<input
							type="radio"
							value="repayment"
							{...register("mortgageType", { required: true })}
							aria-invalid={errors.mortgageType ? "true" : "false"}
						/>
						Repayment
					</label>
					<label>
						<input
							type="radio"
							value="interest-only"
							{...register("mortgageType", { required: true })}
							aria-invalid={errors.mortgageType ? "true" : "false"}
						/>
						Interest Only
					</label>
					{errors.mortgageType?.type === "required" && (
						<span className="error-message">This field is required</span>
					)}
				</div>
			</div>
			<button className="form-btn" type="submit">
				<IconCalculator />
				<p>Calculate Repayment</p>
			</button>
		</form>
	)
}
