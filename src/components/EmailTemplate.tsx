import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>name: {name}!</h1>
      <p>email: {email}</p>
      <p>message: {message}</p>
    </div>
  );
}
