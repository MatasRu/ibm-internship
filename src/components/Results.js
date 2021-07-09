import "./style.sass"

function Results({getData}) {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="d-flex mt-5 justify-content-center flex-wrap w-100 mb-5">
            {!!getData.articles ? getData.articles.map((item, index) =>
                <div onClick={() => openInNewTab(item.url)} className="m-3 d-flex align-items-center flex-column box" key={index}>
                    <span className="published">Published at : {item.publishedAt}</span>
                    <img className="image" src={item.image} alt=""/>
                    <div className="fw-bold h3 mt-2 ms-3">{item.title}</div>
                    <div className="description ms-3 mt-2 mb-5">{item.description}</div>
                </div>) : <div>Hello</div>}
        </div>
    );
}

export default Results;