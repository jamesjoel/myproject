import React from 'react'

const FactStartModalVideo = () => {
  return (
    <>
   {/* This components import after fact start in a theme {Modal Video} --> */}
        <div className="modal fade" id="videoModal" tabIndex="-1"         aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {/* <!-- 16:9 aspect ratio --> */}
                        <div className="ratio ratio-16x9">
                            <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allowscriptaccess="always"
                                allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FactStartModalVideo