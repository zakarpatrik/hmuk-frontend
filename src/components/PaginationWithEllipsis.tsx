import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {Dispatch, SetStateAction} from "react";
import {cn} from "@/lib/utils.ts";

interface PaginationProps {
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    pageSize: number;
    totalEntries: number;
}

const PaginationWithEllipsis = ({ currentPage, setCurrentPage, pageSize, totalEntries }: PaginationProps) => {
    const lastPage = Math.ceil(totalEntries / pageSize);

    const handlePreviousClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (currentPage === 1) {
            e.preventDefault()
        } else {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (currentPage === lastPage) {
            e.preventDefault()
        } else {
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (parseFloat((e.target as { innerText?: string })?.innerText as string) === currentPage) {
            e.preventDefault()
        } else {
            setCurrentPage(parseFloat((e.target as { innerText?: string })?.innerText as string));
        }
    }

    return (
        <Pagination>
            <PaginationContent className='flex gap-4'>
                <PaginationItem >
                    <PaginationPrevious href="#site-top" onClick={handlePreviousClick} className={cn('rounded-md', currentPage === 1 ? 'cursor-not-allowed opacity-50 hover:bg-transparent' : 'hover:bg-accent hover:text-white')} />
                </PaginationItem>
                <div className='flex gap-2'>
                    {Array.from({ length: lastPage }).map((_, idx) => (
                        <PaginationItem key={idx} className={cn('rounded-md hover:bg-accent hover:opacity-70 hover:text-white', idx + 1 === currentPage && 'bg-accent text-white')}>
                            <PaginationLink href="#site-top" onClick={handlePageClick}>{idx + 1}</PaginationLink>
                        </PaginationItem>
                    ))}
                </div>
                <PaginationItem>
                    <PaginationNext href="#site-top" onClick={handleNextClick} className={cn('rounded-md', currentPage === lastPage ? 'cursor-not-allowed opacity-50 hover:bg-transparent' : 'hover:bg-accent hover:text-white')} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationWithEllipsis;