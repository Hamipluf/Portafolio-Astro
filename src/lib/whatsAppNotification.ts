async function sendWhatsAppNotification(email: string) {
    const twilioAccountSid = 'YOUR_TWILIO_ACCOUNT_SID';
    const twilioAuthToken = 'YOUR_TWILIO_AUTH_TOKEN';
    const twilioWhatsAppNumber = 'whatsapp:+14155238886';  // Número de Twilio
    const yourWhatsAppNumber = 'whatsapp:+1234567890';     // Tu número de WhatsApp
  
    const message = `Has recibido un contacto por correo de ${email}`;
  
    const client = require('twilio')(twilioAccountSid, twilioAuthToken);
  
    await client.messages.create({
      from: twilioWhatsAppNumber,
      to: yourWhatsAppNumber,
      body: message,
    });
  }