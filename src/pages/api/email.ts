import type { APIRoute } from 'astro'
import { pool } from '@/lib/configDB'
import customResponses from '../../utils/customResponse'
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const { email } = await request.json()
  const regexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  if (!regexEmail.test(email)) {
    const res = JSON.stringify(customResponses.badResponse(400, 'Ingrese un email valido'))
    return new Response(res, { status: 400 })
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
    const query = `INSERT INTO email (email) VALUES ($1) RETURNING id, email, created_at`
    const result = await pool.query(query, [email])

    if (result.rowCount && result.rowCount > 0) {
      const resEmail = await sgMail.send(msg);
      if (resEmail[0].statusCode === 202) {
        const res = JSON.stringify(customResponses.responseOk(200, "Email guardado y notificado correctamente.", result.rows[0]));
        return new Response(res);
      } else {
        const badResEmail = JSON.stringify(customResponses.badResponse(resEmail[0].statusCode, 'Error al enviar el correo'));
        return new Response(badResEmail, { status: resEmail[0].statusCode });
      }
    }

    const res = JSON.stringify(customResponses.responseOk(200, "Email guardado correctamente.", result.rows[0]));
    return new Response(res)
  } catch (error) {
    const badRres = JSON.stringify(customResponses.badResponse(500, 'Error en el servidor', error))
    return new Response(badRres, { status: 500 })
  }
}





