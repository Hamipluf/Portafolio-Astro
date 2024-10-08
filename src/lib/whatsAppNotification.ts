import twilio from 'twilio';
async function sendWhatsAppNotification(email: string) {
    if (!email) {
        return { error: true, message: "Falta el email del contacto.", data: null }
    }
    const twilioAccountSid = import.meta.env.TWILIO_SID;
    const twilioAuthToken = import.meta.env.TWILIO_AUTH_TOKEN
    const twilioWhatsAppNumber = import.meta.env.TWILIO_NUM;
    const myWhatsAppNumber = '+542901449363';
    const message = `Has recibido un contacto por correo de ${email}`;
    const client = twilio(twilioAccountSid, twilioAuthToken);
    const wap = await client.messages.create({
        from: twilioWhatsAppNumber,
        to: myWhatsAppNumber,
        body: message,
    });
    return { error: false, message: "Whatsapp enviado", data: wap }
}

export { sendWhatsAppNotification }