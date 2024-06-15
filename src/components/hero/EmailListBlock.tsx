import { useState } from 'react'
import Block from "./Block";
import axios from 'axios'
import { getI18N } from '@/i18n/index'
const EmailListBlock: React.FC<{ currentLocale: string | undefined }> = ({ currentLocale }) => {
  const i18n = getI18N({ currentLocale });

  const [formData, setFormData] = useState({ email: '' });
  const [error, setError] = useState({ error: false, message: '' });
  const [success, setSuccess] = useState({ success: false, message: '' });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data, error }: any = await axios.post('/api/email', formData);
      if (!data.success) return setError({ error: true, message: data.message })
      if (error) return console.log("TRY ERROR", error)
      await handleSendMail(formData)
      return setSuccess({ success: true, message: i18n.SUCCESS.EMAIL_SUCCESS })
    } catch (error: any) {
      console.log("CATCH", error)
      parseInt(error.response.data.data?.code) === 23505 && setSuccess({ success: true, message: i18n.ERROR.EMAIL_EXISTS })
      console.log({ error: error, message: error.response.data.message })
    }
  }

  const handleSendMail = async (formData: { email: string }) => {
    try {
      const { data, error }: any = await axios.post('/api/sendEmail', formData);
      data.success ? console.log(data.message) : console.error(error.message)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ email: value });
  };
  return (
    <>
      <Block className="col-span-12 md:col-span-9">

        <div className="flex flex-col gap-y-2">

          <p className="mb-3 base-text text-sm underline underline-offset-1 lg:text-lg">{i18n.CONTACT_ME.TITLE}</p>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex items-center gap-2 "
          >
            <input
              value={formData.email}
              onChange={(e) => { handleChange(e), setError({ error: false, message: '' }), setSuccess({ success: false, message: '' }) }}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="input input-sm bg-transparent input-secondary w-full max-w-xs lg:max-w-full"
            />
            <button
              type="submit"
              className="btn btn-sm btn-accent btn-outline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail-forward"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" /><path d="M3 6l9 6l9 -6" /><path d="M15 18h6" /><path d="M18 15l3 3l-3 3" /></svg>
              {i18n.CONTACT_ME.BUTTON}
            </button>
          </form>
          <div className="h-5">
            {error.error && <p className="text-error">{error.message}</p>}
            {success.success && <div className="flex items-start justify-center h-full gap-x-2"> <p className="text-success text-sm">{success.message} </p><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile-message text-secondary"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11 3h10v8h-3l-4 2v-2h-3z" /><path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2" /><path d="M10 18v.01" /></svg></div>}

          </div>
        </div>
      </Block >
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-primary">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
};
export default EmailListBlock