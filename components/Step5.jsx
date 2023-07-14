

export default function Step5({data}) {
    return (
        <>
            <div class="container setup-content">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <iframe id="service-form" data-src="" src={data.url} width="100%" height="720"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}