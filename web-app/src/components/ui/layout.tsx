import type { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="bg-gradient-to-br from-background to-mute">
            <header>
                header
            </header>
            <main className="min-h-screen container mx-auto px-4 py-8">

                {children}
            </main>
            <footer className='border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60'>
                <div className='container mx-auto px-4 text-center text-gray-600'>
                    <p>made by Gagan</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout
