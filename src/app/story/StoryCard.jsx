import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import React from 'react'

const StoryCard = ({ isAddStory, story }) => {
  const handleStoryClick = () => {

  }

  return (
    <>
      <Card
        className="w-40 h-60 relative overflow-hidden group cursor-pointer rounded-xl"
        onClick={isAddStory ? undefined : handleStoryClick}
      >
        <CardContent className="p-0 h-full">
          {isAddStory ? (
            <div className="w-full h-full flex flex-col">
              <div className="h-3/4 w-full relative border-b">
                <Avatar className="w-full h-full rounded-none">
                  <AvatarImage />
                  <p className="w-full h-full flex justify-center items-center text-4xl">D</p>
                </Avatar>
              </div>
              <div className="h-1/4 w-full bg-white dark:bg-gray-800 flex flex-col items-center justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 h-8 w-8 rounded-full bg-blue-500 hover:bg-blue-600 "
                // onClick={() => fileInputRef.current.click()}
                >
                  <Plus className="h-5 w-5 text-white" />
                </Button>
                <p className="text-xs font-semibold mt-1">Create Story</p>
              </div>
              <input type="file" accept="image/*,video/*" className="hidden"
              // ref={fileInputRef}
              // onChange={handleFileChnage}
              />
            </div>
          ) : (
            <>
              {story?.mediaType === "image" ? (
                <img
                  src={story?.mediaUrl}
                  alt={story?.user?.username}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={story?.mediaUrl}
                  alt={story?.user?.username}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute top-2 left-2 ring-2 ring-blue-500 rounded-full ">
                <Avatar className="w-8 h-8">
                  <AvatarImage />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs font-semibold truncate">shohidul</p>
              </div>
              

            </>
          )}
        </CardContent>

      </Card>
    </>
  )
}

export default StoryCard