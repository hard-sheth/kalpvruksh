"use server";
import { sendMail } from "@/lib/mail";

export const send = async () => {
  await sendMail(
    "hard.sheth.sa@gmail.com",
    "hard sheth",
    "Test Mail",
    "Hello test mail"
  );
};
