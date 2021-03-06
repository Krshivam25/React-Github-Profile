function RepoDetails({ details, loading }) {
    if (loading) {
        return (
            <h1 className="loader">loading..</h1>
        )
    }
    return (
        <div className="repo-details-container">
            <div className='details-row'>
                <label className="label">Name:</label>
                <span className="value">{details.name}</span>
            </div>
            <div className="details-row">
                <label className="label">Forks Count:</label>
                <span className="value">{details.forks}</span>
            </div>
            <div className="details-row">
                <label className="label">Langauge:</label>
                <span className="value">{details.langauge}</span>
            </div>
            <div className="details-row">
                <label className="label">Stars: </label>
                <span className="value">{details.stargazers_count}</span>

            </div>
        </div>
    )
}
export default RepoDetails;