import React from 'react'

type PaginationProps = {
  links: { url: string | null; label: string; active: boolean }[] // همیشه یک آرایه خواهد بود
  onPageChange: (pageUrl: string) => void
}


const Pagination: React.FC<PaginationProps> = ({ onPageChange, links }) => {
  // جداسازی لینک‌های "قبلی" و "بعدی"
  const prevLink = links.find((link) => link.label.includes('Previous'))
  const nextLink = links.find((link) => link.label.includes('Next'))
  const pageLinks = links.filter(
    (link) => !link.label.includes('Previous') && !link.label.includes('Next')
  )

  return (
    <div className="flex flex-row-reverse items-center justify-between gap-x-3 mb-6">
      {/* دکمه قبلی */}
      <button
        onClick={() => prevLink?.url && onPageChange(prevLink.url)}
        disabled={!prevLink?.url}
        className={`center  rounded-lg px-3 py-2 text-sm ${
          prevLink?.url
            ? 'border border-blue-500 text-blue-500'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        قبلی
      </button>

      {/* نمایش صفحات */}
      {pageLinks.map((link, index) => (
        <button
          key={index}
          onClick={() => link.url && onPageChange(link.url)}
          disabled={!link.url}
          className={`center cursor-pointer rounded-lg px-3 py-2 text-sm border ${
            link.active
              ? 'border-blue-500 bg-blue-500 text-white'
              : 'border-gray-300 text-black '
          }`}
        >
          صفحه {link.label} {/* فارسی‌سازی نام صفحه */}
        </button>
      ))}

      {/* دکمه بعدی */}
      <button
        onClick={() => nextLink?.url && onPageChange(nextLink.url)}
        disabled={!nextLink?.url}
        className={`center  rounded-lg px-3 py-2 text-sm ${
          nextLink?.url
            ? 'border !cursor-pointer  border-blue-500 text-blue-500'
            : 'bg-gray-300 text-gray-500 !cursor-not-allowed '
        }`}
      >
        بعدی
      </button>
    </div>
  )
}

export default Pagination
