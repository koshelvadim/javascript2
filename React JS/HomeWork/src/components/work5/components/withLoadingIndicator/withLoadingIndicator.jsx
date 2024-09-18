function withLoadingIndicator(Component) {
    return ({ isLoading, ...props }) => {
        if (isLoading) {
            return <h1>Загрузка</h1>
        }
        return <Component {...props} />
    }
}

export default withLoadingIndicator;