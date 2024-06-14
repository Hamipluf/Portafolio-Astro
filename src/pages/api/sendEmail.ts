import type { APIRoute } from 'astro'
import sgMail from '@sendgrid/mail';
import customResponses from '../../utils/customResponse';
sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);


export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();
    const email = body.email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        const badRes = JSON.stringify(customResponses.badResponse(400, 'Ingrese un email valido'))
        return new Response(badRes, { status: 400 })
    }
    const msg = {
        to: email,
        from: 'ramirogumma@hotmail.com',
        bcc: 'ramirogumma@hotmail.com',
        subject: "¡Gracias por Unirte a Mi Lista de Correo!",
        templateId: import.meta.env.TEMPLATE_ID,
        dynamic_template_data: {
            wathsapp_link: "https://w.app/RamaDev",
            wathsapp_icon_url: "http://cdn.mcauto-images-production.sendgrid.net/2005f7d5f3ced0d0/d0d8f410-17c2-4ddf-959b-4e56aa17a179/27x27.png",
            github_link: "https://github.com/Hamipluf",
            github_icon_url: "http://cdn.mcauto-images-production.sendgrid.net/2005f7d5f3ced0d0/9810df7d-bbcd-4a77-8f9a-5d1e5dee0e88/27x27.png",
            linkedin_link: "https://www.linkedin.com/in/ramirogumma-fullstackdev/",
            linkedin_icon_url: "http://cdn.mcauto-images-production.sendgrid.net/2005f7d5f3ced0d0/ee5df574-ac12-42f6-9d42-e6cfa93901d7/27x27.png",
            briefcase_link: "https://portafolio-astro-mocha.vercel.app/",
            briefcase_icon_url: "http://cdn.mcauto-images-production.sendgrid.net/2005f7d5f3ced0d0/2c2dc9ad-2084-4b95-be60-4740bf6f9b13/27x28.png"
        },
    };
    try {
        const email = await sgMail.send(msg);
        const res = JSON.stringify({
            success: true,
            message: 'E-mail enviado',
        });
        const badRes = JSON.stringify(customResponses.badResponse(400, 'Error enviando el mail'))
        return email[0].statusCode === 202 ? new Response(res, { status: 204 }) : new Response(badRes, { status: 404 })
    } catch (error) {
        const badRes = JSON.stringify(customResponses.badResponse(500, 'Error en el servidor', error))

        return new Response(badRes, { status: 500 })
    }

}




