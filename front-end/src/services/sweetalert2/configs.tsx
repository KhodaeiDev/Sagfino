import React, { useEffect } from 'react'
import swal from 'sweetalert2'

export type SwalProps = {
  title: string
  icon: 'success' | 'error' | 'warning' | 'info' | 'question'
  confirmButtonText: string
  url?: string 
  active: boolean
}

const ShowSwal: React.FC<SwalProps> = ({
  title,
  icon,
  confirmButtonText,
  url,
  active,
}) => {
  useEffect(() => {
    if (active) {
      swal
        .fire({
          title: title,
          icon: icon,
          confirmButtonText: confirmButtonText,
          confirmButtonColor: '#CB1B1B',
        })
        .then((result) => {
          if (result.isConfirmed && url) {
            location.href = url
          }
        })
    }
  }, [title, icon, confirmButtonText, url, active])

  return null
}

export default ShowSwal