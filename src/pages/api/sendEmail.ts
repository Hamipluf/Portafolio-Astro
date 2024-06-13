import type { APIRoute } from 'astro'
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
const resend = new Resend(import.meta.env.RESEND_API_KEY);


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
    try {

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['ramirogumma@gmail.com'],
            subject: 'Hello world',
            html: "<p>Hi</p>"
        });

        if (error) {
            console.log(error)
            return new Response(
                JSON.stringify({
                    success: false,
                    message: error.message,
                    data: error
                }), { status: 400 }
            )
        }
        console.log(data)
        return new Response(
            JSON.stringify({
                success: true,
                message: 'Email enviado',
                data: data
            })
        )
    } catch (error) {
        return new Response(
            JSON.stringify({
                success: false,
                message: 'Error en el servidor',
                data: data
            },{ status: 500})
        )
    }

}




