"use client"
import LeftSideBar from '../components/LeftSideBar'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import VideoCard from './VideoCard'
import { useRouter } from 'next/navigation'


const Page = () => {
    const router = useRouter()

    const videoPost = [{

    }]

    const handleBack = () => {
        router.push('/')
    }

    return (
        <div className='mt-12 min-h-screen'>
            <LeftSideBar />
            <main className='ml-0 md:ml-64 p-6'>

                <Button variant="ghost" className="mb-4" onClick={handleBack} >
                    <ChevronLeft className='mr-2 h-4 w-4' />
                    Back to feed
                </Button>
                <div className='max-w-3xl mx-auto'>
                    {videoPost.map((post, index) => (
                        <VideoCard
                            key={index}
                            post={post}
                        />
                    ))}
                </div>

            </main>
        </div>
    )
}

export default Page