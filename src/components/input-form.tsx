import { useForm } from "react-hook-form"

interface InputFormProps {
	calcMortgage: (data: IFormInputs) => void
}

export type IFormInputs = {
	mortgageAmount: number
	interestRate: number
	mortgageTerm: number
	mortgageType: "repayment" | "interest-only"
}

export default function InputForm({ calcMortgage }: InputFormProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormInputs>()
	const onSubmit = (data: IFormInputs) => {
		calcMortgage(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<button type="button" onClick={() => reset()}>
				Clear All
			</button>
			<label htmlFor="mortgage-amount">
				Mortgage Amount
				<input
					type="number"
					{...register("mortgageAmount", { required: true })}
					aria-invalid={errors.mortgageAmount ? "true" : "false"}
				/>
			</label>
			{errors.mortgageAmount?.type === "required" && (
				<span>This field is required</span>
			)}
			<label htmlFor="mortgage-term">
				Mortgage Term
				<input
					type="number"
					{...register("mortgageTerm", { required: true })}
					aria-invalid={errors.mortgageTerm ? "true" : "false"}
				/>
			</label>
			{errors.mortgageTerm?.type === "required" && (
				<span>This field is required</span>
			)}
			<label htmlFor="interest-rate">
				Interest Rate
				<input
					type="number"
					step="0.01"
					{...register("interestRate", { required: true })}
					aria-invalid={errors.interestRate ? "true" : "false"}
				/>
			</label>
			{errors.interestRate?.type === "required" && (
				<span>This field is required</span>
			)}
			<label htmlFor="">Mortgage Type</label>
			<label htmlFor="repayment">
				<input
					type="radio"
					value="repayment"
					{...register("mortgageType", { required: true })}
					aria-invalid={errors.mortgageType ? "true" : "false"}
				/>
				Repayment
			</label>
			<label htmlFor="interest-only">
				<input
					type="radio"
					value="interest-only"
					{...register("mortgageType", { required: true })}
					aria-invalid={errors.mortgageType ? "true" : "false"}
				/>
				Interest Only
			</label>

			{errors.mortgageType?.type === "required" && (
				<span>This field is required</span>
			)}
			<button type="submit">Calculate Repayments</button>
		</form>
	)
}
