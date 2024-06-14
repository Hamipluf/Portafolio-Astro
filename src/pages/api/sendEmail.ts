import type { APIRoute } from 'astro'
// import { EmailTemplate } from '@/components/email-template';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);


export const POST: APIRoute = async ({ request, cookies, redirect }) => {
    const body = await request.json();
    const email = body.email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        return new Response(
            JSON.stringify({
                success: false,
                message: 'Ingrese un email valido'
            }), { status: 400 })
    }
    const msg = {
        to: email,
        from: 'ramirogumma@hotmail.com',
        bcc: 'ramirogumma@hotmail.com',
        subject: "¡Pronto me pondré en contacto contigo!",
        templateId: import.meta.env.TEMPLATE_ID,
    };
    try {
        const email = await sgMail.send(msg);
        return email[0].statusCode === 202 ? new Response(
            JSON.stringify({
                success: true,
                message: 'E-mail enviado',
            }, { status: 204 })) : new Response(
                JSON.stringify({
                    success: false,
                    message: 'Error enviando el mail',
                }, { status: 404 }))
    } catch (error) {
        return new Response(
            JSON.stringify({
                success: false,
                message: 'Error en el servidor',
                data: error
            }, { status: 500 })
        )
    }

}




