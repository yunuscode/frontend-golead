import { Button } from "../ui/button";

export default function GetStarted() {
  return (
    <div className="w-full mx-auto min-h-1/2 mt-5 border bg-white dark:bg-gray-900 flex flex-col justify-start items-center p-5">
      <div className="mt-8 max-w-xxl px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Everything is ready to start!
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 w-3/4 mx-auto">
          Our goal is helping people to grow in X (formerly still Twitter). We
          have a lot of features and we are adding new features every week. We
          use modern security standarts and your data and account safe. If you
          have any feature request, you can contact us through Telegram or
          Discord. We are happy to see you there! Good luck!
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row justify-center">
          <Button variant="secondary">Watch lessons</Button>
          <Button>Start growing!</Button>
        </div>
      </div>
    </div>
  );
}
