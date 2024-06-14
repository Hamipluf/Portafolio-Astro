import { supabase } from '@/lib/supabase'
import type { APIRoute } from 'astro'
import { EmailTemplate } from '@/components/email-template';


export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const { email } = await request.json()
  const regexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  if (!regexEmail.test(email)) {
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Ingrese un email valido'
      }), { status: 400 })
  }
  try {
    const { data, error } = await supabase.from('email_list').insert({ email: email }).select()
    if (error) {
      return new Response(
        JSON.stringify({
          success: false,
          message: error.message,
          data: error
        }), { status: 400 }
      )
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email Guardado',
        data: data[0]
      })
    )
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




