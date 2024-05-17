import { Step, Stepper, type StepItem } from "@/components/stepper";
import NoAccount from "../onboarding/no-account";
import Pricing from "../onboarding/pricing";

const steps = [
  {
    description: "Choose a plan",
    label: "Choose a plan",
    id: "plan",
  },
  {
    description: "Connect account",
    label: "Connect account",
    id: "account",
  },
  {
    description: "Get started",
    label: "Get started",
    id: "goals",
  },
] satisfies StepItem[];

export default function Onboarding() {
  return (
    <div className="flex flex-col items-center h-screen w-4/5 mx-auto">
      <div className="mt-16 w-full">
        <Stepper initialStep={0} steps={steps}>
          {steps.map(({ label, id }) => {
            return (
              <Step key={label} label={label}>
                {id == "plan" && <Pricing />}
                {id == "account" && <NoAccount />}
              </Step>
            );
          })}
        </Stepper>
      </div>
    </div>
  );
}
