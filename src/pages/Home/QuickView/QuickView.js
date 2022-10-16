import React, { memo } from 'react'
import history from '../../../utils/libs/history'

function QuickView() {
    return (
        <div className='container pb-5'>
            <div className='row'>
                <div className='col-12 col-md-4 mb-3'>
                    <div style={{ backgroundImage: "url(./assets/adidasshoe.webp)", height: "100%", backgroundPosition: "center", backgroundSize: "cover", borderRadius: "15px" }}>
                        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "15px" }} className="d-flex align-items-center justify-content-center">
                            <div className='py-5'>
                                <h5 className='mb-3 text-white text-center'>GIÀY ADIDAS</h5>
                                <button className="btn btn-outline-light" onClick={() => { history.push("/adidas") }}>Xem nhanh</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 mb-3'>
                    <div style={{ backgroundImage: "url(./assets/nikeshoe.jpg)", height: "100%", backgroundPosition: "center", backgroundSize: "cover", borderRadius: "15px" }}>
                        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "15px" }} className="d-flex align-items-center justify-content-center">
                            <div className='py-5'>
                                <h5 className='mb-3 text-white text-center'>Giày NIKE</h5>
                                <button className="btn btn-outline-light" onClick={() => { history.push("/nike") }}>Xem nhanh</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4 mb-3'>
                    <div style={{ backgroundImage: "url(./assets/vanshoe.webp)", height: "100%", backgroundPosition: "center", backgroundSize: "cover", borderRadius: "15px" }}>
                        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "15px" }} className="d-flex align-items-center justify-content-center">
                            <div className='py-5'>
                                <h5 className='mb-3 text-white text-center'>Giày VANS</h5>
                                <button className="btn btn-outline-light" onClick={() => { history.push("/vansconverse") }}>Xem nhanh</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(QuickView)