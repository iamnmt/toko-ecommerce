function RatingBar({ activeCount } : {
  activeCount: number
}) {
  return (
    <p className="flex items-center">
      {[...Array(5)].map((_, i) => i < activeCount ? 
        <svg key={i} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12"><g fill="none" fillRule="evenodd"><path fill="#fdd835" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#fdd835" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
        : 
        <svg key={i} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 12 12"><g fill="none" fillRule="evenodd"><path fill="#b8b8b8" transform="matrix(-1 0 0 1 11 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path><path fill="#b8b8b8" transform="translate(1 1)" d="M5 0v8.476L1.91 10l.424-3.562L0 3.821l3.353-.678L5 0z"></path></g></svg>
      )}
      <span className="ml-1">& Up</span>
    </p>
  )
}

export default RatingBar
