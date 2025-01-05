import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex gap-5'>
      <h1>404</h1>
      <Link href="/">Return</Link>
    </div>
  )
}