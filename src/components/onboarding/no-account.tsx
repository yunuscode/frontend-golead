import { Button } from "../ui/button";

export default function NoAccount() {
  return (
    <div className="w-full mx-auto min-h-1/2 mt-5 border bg-white dark:bg-gray-900 flex flex-col justify-start items-center p-5">
      <div className="mt-8 max-w-md px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Connect your account!
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          You have to connect your Twitter account to see your stats. It works
          realtime.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row justify-center">
          <Button variant="secondary">Skip for now</Button>
          <Button>Install Chrome Extension</Button>
        </div>
      </div>
    </div>
  );
}
