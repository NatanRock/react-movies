export const Footer = () => {
    return (
        <footer className="page-footer blue lighten-3">
            <div className="footer-copyright blue lighten-3">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://natanrock.github.io/react-movies/">Repo</a>
                </div>
            </div>
        </footer>
    )
}