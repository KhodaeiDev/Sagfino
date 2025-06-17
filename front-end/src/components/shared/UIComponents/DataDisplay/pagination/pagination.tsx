import React from 'react'

type PaginationProps = {
  current_page: number
  links: { url: string | null; label: string; active: boolean }[] // همیشه یک آرایه خواهد بود
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  links,
  current_page,
}) => {
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
        onClick={() => prevLink?.url && onPageChange(Number(current_page - 1))}
        disabled={!prevLink?.url}
        className={`center  cursor-pointer  rounded-lg px-3 py-2 text-sm ${
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
          onClick={() => link.url && onPageChange(Number(link.label))}
          disabled={!link.url}
          className={`center cursor-pointer rounded-lg px-3 py-2 text-sm border ${
            link.active
              ? 'border-blue-500 bg-blue-500 text-white'
              : 'border-gray-300 text-black '
          }`}
        >
          صفحه {link.label}
        </button>
      ))}

      {/* دکمه بعدی */}
      <button
        onClick={() => nextLink?.url && onPageChange(Number(current_page + 1))}
        disabled={!nextLink?.url}
        className={`center cursor-pointer  rounded-lg px-3 py-2 text-sm ${
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
