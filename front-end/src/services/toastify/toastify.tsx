import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ToastNotification = (
  type: 'success' | 'error',
  message: string,
  timer: number
) => {
  const colorClass = type === 'success' ? 'text-green-500' : 'text-red-500'
  const title = type === 'success' ? ' موفق' : ' خطا'

  toast[type](
    <>
      <div className={`font-shabnam flex flex-col ${colorClass}`}>
        <strong className="text-black">{title}</strong>
        <p>{message}</p>
      </div>
    </>,
    {
      autoClose: timer,
      className: type === 'success' ? 'success-toast' : 'error-toast',
    }
  )
}

export default ToastNotification
