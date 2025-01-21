'use client'

const ContactSection04 = () => {
  return (
    <div className="w-10/12 lg:w-3/4 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="flex flex-col gap-3">
        <div className="text-xl font-medium bg-[rgb(var(--quaternary-rgb))] rounded-md py-2 pl-4 text-[rgb(var(--secondary-rgb))]">Địa chỉ Cơ sở 1</div>
        <div className="w-1/2 lg:w-full" style={{ width: "100%" }}>
          <iframe className="rounded-md" width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=S%E1%BB%91%20106,%20Nguy%E1%BB%85n%20Minh%20Quang,%20P.%20An%20Kh%C3%A1nh,%20Q.%20Ninh%20Ki%E1%BB%81u+(My%20Business%20Name)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-xl font-medium bg-[rgb(var(--quaternary-rgb))] rounded-md py-2 pl-4 text-[rgb(var(--secondary-rgb))]">Địa chỉ Cơ sở 2</div>
        <div className="w-1/2 lg:w-full" style={{ width: "100%" }}>
          <iframe className="rounded-md" width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=S%E1%BB%91%20172C,%20Nguy%E1%BB%85n%20Tri%20Ph%C6%B0%C6%A1ng,%20P.%20An%20Kh%C3%A1nh,%20Q.%20Ninh%20Ki%E1%BB%81u+(My%20Business%20Name)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactSection04;