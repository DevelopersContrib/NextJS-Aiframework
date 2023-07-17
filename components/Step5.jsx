

export default function Step5({data}) {
    return (
        <>
            <div className="container setup-content">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <iframe id="service-form" data-src="" src={data.url} width="100%" height="720"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}