import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const resendApiKey = process.env.RESEND_API_KEY;
const contactReceiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

if (!resendApiKey || !contactReceiverEmail) {
    throw new Error("A variável de ambiente RESEND_API_KEY ou CONTACT_RECEIVER_EMAIL não está definida.");
}

const resend = new Resend(resendApiKey);

export const sendContactEmail = async (name: string, email: string, message: string) => {
    const { data, error } = await resend.emails.send({
        from: "PluriMentes <" + process.env.EMAIL_FROM + ">",
        to: contactReceiverEmail,
        replyTo: email,
        subject: `Novo contato de ${name}`,
        text: message,
    });

    if (error) {
        throw new Error("Erro ao enviar email de contato.");
    }

    return data;
}
