const NotFound = () => {
    return (
        <div className='h-screen w-full bg-primary flex flex-col gap-8 justify-center items-center'>
            <img src='src/assets/404.svg' alt='404 image' className='h-[50vh] w-auto' />
            <div className='text-3xl font-semibold text-primary-foreground'>A keresett oldal nem található</div>
        </div>
    )
}

export default NotFound;