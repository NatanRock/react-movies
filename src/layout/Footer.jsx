export const Footer = () => {
    return (
        <footer className="page-footer blue lighten-3">
            <div className="footer-copyright blue lighten-3">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
                </div>
            </div>
        </footer>
    )
}