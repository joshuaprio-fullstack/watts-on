import Link from 'next/link'
export default function Layout({ children }){
    return (
        <div>
            <div class="nav-bar">
            <Link href="/">
                    Hello World
            </Link>
            <div className="input">
                <input type="text" className="input-something" />
            </div>
            </div>

                {children}
            
            <div> footer</div>
        </div>
    )
}