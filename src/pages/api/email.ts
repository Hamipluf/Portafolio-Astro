import { supabase } from '@/lib/supabase'
import type { APIRoute } from 'astro'
import customResponses from '../../utils/customResponse'
export const POST: APIRoute = async ({ request }) => {
  const { email } = await request.json()
  const regexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
  if (!regexEmail.test(email)) {
    const res = JSON.stringify(customResponses.badResponse(400, 'Ingrese un email valido'))
    return new Response(res, { status: 400 })
  }
  try {
    const { data, error } = await supabase.from('email_list').insert({ email: email }).select()
    if (error) {
      const badRes = JSON.stringify(customResponses.badResponse(400, error.message, error))
      return new Response((badRes), { status: 400 })
    }
    const res = JSON.stringify(customResponses.responseOk(200, 'Email Guardado', data[0]))
    return new Response(res)
  } catch (error) {
    const badRres = JSON.stringify(customResponses.badResponse(500, 'Error en el servidor', error))
    return new Response(badRres, { status: 500 })

  }

}




