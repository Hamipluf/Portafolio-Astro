import { sendWhatsAppNotification } from '@/lib/whatsAppNotification';
import customResponses from '@/utils/customResponse';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    const event = await request.json();
    if (event[0].event === 'processed') {
        const { error, message } = await sendWhatsAppNotification(event[0].email);
        if (error) {
            const badRes = JSON.stringify(customResponses.badResponse(400, message));
            return new Response(badRes, { status: 400 });
        }
    }
    const okRes = JSON.stringify(customResponses.responseOk(200));
    return new Response(okRes, { status: 200 });
};


