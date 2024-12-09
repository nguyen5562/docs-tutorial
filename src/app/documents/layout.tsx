interface DocumentsLayoutProps {
    children: React.ReactNode;
}

const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
    return (
        <div>
            <nav>Documents Navbar</nav>
            {children}
        </div>
    )
}

export default DocumentsLayout;