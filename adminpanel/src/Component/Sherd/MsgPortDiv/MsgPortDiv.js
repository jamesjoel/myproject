import React from 'react'

const MsgPortDiv = () => {
  return (
<>
<div className="row">
              <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex flex-row justify-content-between">
                      <h4 className="card-title">Messages</h4>
                      <p className="text-muted mb-1 small">View all</p>
                    </div>
                    <div className="preview-list">
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <img src="assets/images/faces/face6.jpg" alt="image" className="rounded-circle" />
                        </div>
                        <div className="preview-item-content d-flex flex-grow">
                          <div className="flex-grow">
                            <div className="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 className="preview-subject">Leonard</h6>
                              <p className="text-muted text-small">5 minutes ago</p>
                            </div>
                            <p className="text-muted">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <img src="assets/images/faces/face8.jpg" alt="image" className="rounded-circle" />
                        </div>
                        <div className="preview-item-content d-flex flex-grow">
                          <div className="flex-grow">
                            <div className="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 className="preview-subject">Luella Mills</h6>
                              <p className="text-muted text-small">10 Minutes Ago</p>
                            </div>
                            <p className="text-muted">Well, it seems to be working now.</p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <img src="assets/images/faces/face9.jpg" alt="image" className="rounded-circle" />
                        </div>
                        <div className="preview-item-content d-flex flex-grow">
                          <div className="flex-grow">
                            <div className="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 className="preview-subject">Ethel Kelly</h6>
                              <p className="text-muted text-small">2 Hours Ago</p>
                            </div>
                            <p className="text-muted">Please review the tickets</p>
                          </div>
                        </div>
                      </div>
                      <div className="preview-item border-bottom">
                        <div className="preview-thumbnail">
                          <img src="assets/images/faces/face11.jpg" alt="image" className="rounded-circle" />
                        </div>
                        <div className="preview-item-content d-flex flex-grow">
                          <div className="flex-grow">
                            <div className="d-flex d-md-block d-xl-flex justify-content-between">
                              <h6 className="preview-subject">Herman May</h6>
                              <p className="text-muted text-small">4 Hours Ago</p>
                            </div>
                            <p className="text-muted">Thanks a lot. It was easy to fix it .</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Portfolio Slide</h4>
                    <div className="owl-carousel owl-theme full-width owl-carousel-dash portfolio-carousel" id="owl-carousel-basic">
                      <div className="item">
                        <img src="assets/images/dashboard/Rectangle.jpg" alt=""/>
                      </div>
                      <div className="item">
                        <img src="assets/images/dashboard/Img_5.jpg" alt=""/>
                      </div>
                      <div className="item">
                        <img src="assets/images/dashboard/img_6.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="d-flex py-4">
                      <div className="preview-list w-100">
                        <div className="preview-item p-0">
                          <div className="preview-thumbnail">
                            <img src="assets/images/faces/face12.jpg" className="rounded-circle" alt=""/>
                          </div>
                          <div className="preview-item-content d-flex flex-grow">
                            <div className="flex-grow">
                              <div className="d-flex d-md-block d-xl-flex justify-content-between">
                                <h6 className="preview-subject">CeeCee Bass</h6>
                                <p className="text-muted text-small">4 Hours Ago</p>
                              </div>
                              <p className="text-muted">Well, it seems to be working now.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted">Well, it seems to be working now. </p>
                    <div className="progress progress-md portfolio-progress">
                      <div className="progress-bar bg-success" role="progressbar" style={{width:"50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xl-4 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">To do list</h4>
                    <div className="add-items d-flex">
                      <input type="text" className="form-control todo-list-input" placeholder="enter task.."/>
                      <button className="add btn btn-primary todo-list-add-btn">Add</button>
                    </div>
                    <div className="list-wrapper">
                      <ul className="d-flex flex-column-reverse text-white todo-list todo-list-custom">
                        <li>
                          <div className="form-check form-check-primary">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox"/> Create invoice </label>
                          </div>
                          <i className="remove mdi mdi-close-box"></i>
                        </li>
                        <li>
                          <div className="form-check form-check-primary">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox"/> Meeting with Alita </label>
                          </div>
                          <i className="remove mdi mdi-close-box"></i>
                        </li>
                        <li className="completed">
                          <div className="form-check form-check-primary">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox" /> Prepare for presentation </label>
                          </div>
                          <i className="remove mdi mdi-close-box"></i>
                        </li>
                        <li>
                          <div className="form-check form-check-primary">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox"/> Plan weekend outing </label>
                          </div>
                          <i className="remove mdi mdi-close-box"></i>
                        </li>
                        <li>
                          <div className="form-check form-check-primary">
                            <label className="form-check-label">
                              <input className="checkbox" type="checkbox"/> Pick up kids from school </label>
                          </div>
                          <i className="remove mdi mdi-close-box"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
</>  )
}

export default MsgPortDiv