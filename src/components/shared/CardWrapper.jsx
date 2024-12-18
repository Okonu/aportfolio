const CardWrapper = ({ children, className = '' }) => {
    return (
        <div className={`border border-gray-200 rounded-md p-4 ${className}`}>
            {children}
        </div>
    );
};

export default CardWrapper;