import { MailComponent } from "@/components/mail/mail";
import { mails } from "@/components/mail/data";

export default function MailPage() {
  return (
    <div className="container pt-7">
      <MailComponent
        mails={mails}
        defaultLayout={undefined}
        accounts={[]}
        navCollapsedSize={4}
      />
    </div>
  );
}
