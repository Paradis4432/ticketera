export default function Header() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-6 col-md-4 d-flex justify-content-start">
                    <div className="p-2">logo</div>
                    <div className="d-none d-md-block p-2">nombreCorto</div> {/* Hidden on xs to sm, visible on md to xl */}
                </div>
                <div className="col-md-4 d-none d-md-flex justify-content-center">
                    <h2>nombre</h2> {/* Visible only from md to xl */}
                </div>
                <div className="col-6 col-md-4 d-flex justify-content-end">
                    <div className="p-2">login</div>
                </div>
            </div>
        </div>
    );
}
