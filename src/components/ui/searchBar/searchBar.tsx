import React from 'react'
import { Input } from '../input'
import Button from '../button/ButtonWithLoadingState'
import { SearchIcon } from 'lucide-react'

export default function SearchBar() {
    return (
        <div className='flex-grow rounded-full border border-text-charcoal  flex justify-center items-center'>
            <Input type='text' className='border-none focus-visible:ring-0 placeholder:text-base' placeholder="What's on your mind today?" />
            <Button variant={'link'} className='border-l border-text-charcoal rounded-none' >
                <p className='flex pl-2  gap-5 justify-center items-center'>
                    <span>
                        <SearchIcon />
                    </span>
                    Search
                </p>
            </Button>
        </div>
    )
}
