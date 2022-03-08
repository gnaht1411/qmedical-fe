const Breadcrumb = (props) => {

    let {totalElements, handleSearch, params} = props

    const handleChange = e => {
        params = {
            ...params,
            pageSize: Number(e.target.value)
        }
        handleSearch(params)
    }

    return (
        <div className="breadcrumb-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-8 col-12">
                        <nav aria-label="breadcrumb" className="page-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Search</li>
                            </ol>
                        </nav>
                        <h2 className="breadcrumb-title">{totalElements && totalElements + ' matches found'}  </h2>
                    </div>
                    <form className="col-md-4 col-12 d-md-block d-none">
                        <div className="sort-by form-group">
                            <span className="sort-title">Show limit:</span>
                            <span className="sortby-fliter">
									<select className="select form-control" onChange={handleChange}>
										<option value={5} className="sorting">5</option>
										<option value={10} className="sorting">10</option>
										<option value={20} className="sorting">20</option>
										<option value={50} className="sorting">50</option>
									</select>
								</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumb