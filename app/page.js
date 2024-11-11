import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex items-center justify-center flex-col gap-9 pt-9'>
      <div>Login Will be done here...</div>
      <Button>
        <Link href={'/dashboard'}>Dashboard</Link>
      </Button>
    </div>
  )
}
