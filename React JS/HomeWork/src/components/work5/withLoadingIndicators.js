function withLoadingIndicators(Component) {
  return ({isLoading, ...props}) => {
    if(isLoading) {
      return <div>Загрузка</div>
    }
    return <Component {...props}/>
  }
}

export default withLoadingIndicators;