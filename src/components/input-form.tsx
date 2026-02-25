import {useForm} from "react-hook-form";

// interface InputFormProps {}

type IFormInputs = {
  mortgageAmount: number;
  interestRate: number;
  mortgageTerm: number;
  mortgageType: "repayment" | "interest-only";
}

export default function InputForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IFormInputs>();
  

  return (
    <form onSubmit={handleSubmit()} >
      <button type="button" onClick={() => reset()}>Clear All</button>
      <label htmlFor="mortgage-amount">
        Mortgage Amount
        <input id="mortgage-amount" {...register("mortgageAmount", {required: true})} aria-invalid={errors.mortgageAmount ? "true" : "false"} />
      </label>
      {errors.mortgageAmount?.type === "required" && <span>This field is required</span>}
      <label htmlFor="mortgage-term">
        Mortgage Term
        <input id="mortgage-term" {...register("mortgageTerm", {required: true})} aria-invalid={errors.mortgageTerm ? "true" : "false"} />
      </label>
      {errors.mortgageTerm?.type === "required" && <span>This field is required</span>}
      <label htmlFor="interest-rate">
        Interest Rate
        <input id="interest-rate" {...register("interestRate", {required: true})} aria-invalid={errors.interestRate ? "true" : "false"} />
      </label>
      {errors.interestRate?.type === "required" && <span>This field is required</span>}
      <label htmlFor="">
        Mortgage Type 
      </label>
        <label htmlFor="repayment"><input id="repayment" type="radio" name="mortgage-type" value="repayment" {...register("mortgageType", {required: true})} aria-invalid={errors.mortgageType ? "true" : "false"} />
        Repayment</label>
        <label htmlFor= "interest-only"><input id="interest-only" type="radio" name="mortgage-type" value="interest-only" {...register("mortgageType", {required: true})} aria-invalid={errors.mortgageType ? "true" : "false"} />
        Interest Only</label>
      
      {errors.mortgageType?.type === "required" && <span>This field is required</span>}
      <button type="submit">Calculate Repayments</button>

    </form>
  )
}