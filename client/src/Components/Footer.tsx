import React from 'react';

const Footer: React.FunctionComponent = () => {
    return (
        <footer>
            <div className="container">
                <p className="text-center">Copyright © {new Date().getFullYear()} Milk App</p>
            </div>
        </footer>
    );
};

export default Footer;
