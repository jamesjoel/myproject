import React from 'react'
import { NavLink } from 'react-router-dom'

const Form = () => {
  return (
<>

    <div className="container-scroller">
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <NavLink className="sidebar-brand brand-logo" to="/index.html"><img src="/assets/images/logo.svg" alt="logo" /></NavLink>
          <NavLink className="sidebar-brand brand-logo-mini" to="../../index.html"><img src="/assets/images/logo-mini.svg" alt="logo" /></NavLink>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src="/assets/images/faces/face15.jpg" alt=""/>
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">Henry Klein</h5>
                  <span>Gold Member</span>
                </div>
              </div>
              <NavLink to="#" id="profile-dropdown" data-toggle="dropdown"><i className="mdi mdi-dots-vertical"></i></NavLink>
              <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                <NavLink to="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-settings text-primary"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">Account settings</p>
                  </div>
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink to="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-onepassword  text-info"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                  </div>
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink to="#" className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-dark rounded-circle">
                      <i className="mdi mdi-calendar-today text-success"></i>
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                  </div>
                </NavLink>
              </div>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">Navigation</span>
          </li>
          <li className="nav-item menu-items">
            <NavLink className="nav-link" to="../../index.html">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"></i>
              </span>
              <span className="menu-title">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item menu-items">
            <NavLink className="nav-link" data-toggle="collapse" to="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title">Basic UI Elements</span>
              <i className="menu-arrow"></i>
            </NavLink>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <NavLink className="nav-link" to="../../pages/ui-features/buttons.html">Buttons</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="../../pages/ui-features/dropdowns.html">Dropdowns</NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="../../pages/ui-features/typography.html">Typography</NavLink></li>
              </ul>
            </div>
          </li>
          <li className="nav-item menu-items">
            <NavLink className="nav-link" to="../../pages/forms/basic_elements.html">
              <span className="menu-icon">
                <i className="mdi mdi-playlist-play"></i>
              </span>
              <span className="menu-title">Form Elements</span>
            </NavLink>
          </li>
          <li className="nav-item menu-items">
            <NavLink className="nav-link" to="../../pages/tables/basic-table.html">
              <span className="menu-icon">
                <i className="mdi mdi-table-large"></i>
              </span>
              <span className="menu-title">Tables</span>
            </NavLink>
          </li>
          <li className="nav-item menu-items">
            <NavLink className="nav-link" to="../../pages/charts/chartjs.html">
              <span className="menu-icon">
                <i className="mdi mdi-chart-bar"></i>
              </span>
              <span className="menu-title">Charts</span>
            </NavLink>
          </li>
          <li className="nav-item menu-items">
            <NavLink className="nav-link" to="../../pages/icons/mdi.html">
              <span className="menu-icon">
                <i className="mdi mdi-contacts"></i>
              </span>
              <span className="menu-title">Icons</span>
            </NavLink>
          </li>
          <li className="nav-item menu-items">
            <NavLink className="nav-link" data-toggle="collapse" to="#auth" aria-expanded="false" aria-controls="auth">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </NavLink>
            <div className="collapse" id="auth">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <NavLink className="nav-link" to="../../pages/samples/blank-page.html"> Blank Page </NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="../../pages/samples/error-404.html"> 404 </NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="../../pages/samples/error-500.html"> 500 </NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="../../pages/samples/login.html"> Login </NavLink></li>
                <li className="nav-item"> <NavLink className="nav-link" to="../../pages/samples/register.html"> Register </NavLink></li>
              </ul>
            </div>
          </li>
          <li className="nav-item menu-items">
            <NavLink className="nav-link" to="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html">
              <span className="menu-icon">
                <i className="mdi mdi-file-document-box"></i>
              </span>
              <span className="menu-title">Documentation</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container-fluid page-body-wrapper">
        <nav className="navbar p-0 fixed-top d-flex flex-row">
          <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
            <NavLink className="navbar-brand brand-logo-mini" to="../../index.html"><img src="../../assets/images/logo-mini.svg" alt="logo" /></NavLink>
          </div>
          <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
              <span className="mdi mdi-menu"></span>
            </button>
            <ul className="navbar-nav w-100">
              <li className="nav-item w-100">
                <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                  <input type="text" className="form-control" placeholder="Search products"/>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
              <li className="nav-item dropdown d-none d-lg-block">
                <NavLink className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle="dropdown" aria-expanded="false" to="#">+ Create New Project</NavLink>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="createbuttonDropdown">
                  <h6 className="p-3 mb-0">Projects</h6>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-file-outline text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">Software Development</p>
                    </div>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-web text-info"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">UI Development</p>
                    </div>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-layers text-danger"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">Software Testing</p>
                    </div>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0 text-center">See all projects</p>
                </div>
              </li>
              <li className="nav-item nav-settings d-none d-lg-block">
                <NavLink className="nav-link" to="#">
                  <i className="mdi mdi-view-grid"></i>
                </NavLink>
              </li>
              <li className="nav-item dropdown border-left">
                <NavLink className="nav-link count-indicator dropdown-toggle" id="messageDropdown" to="#" data-toggle="dropdown" aria-expanded="false">
                  <i className="mdi mdi-email"></i>
                  <span className="count bg-success"></span>
                </NavLink>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                  <h6 className="p-3 mb-0">Messages</h6>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="/assets/images/faces/face4.jpg" alt="image" className="rounded-circle profile-pic"/>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">Mark send you a message</p>
                      <p className="text-muted mb-0"> 1 Minutes ago </p>
                    </div>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="/assets/images/faces/face2.jpg" alt="image" className="rounded-circle profile-pic"/>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">Cregh send you a message</p>
                      <p className="text-muted mb-0"> 15 Minutes ago </p>
                    </div>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <img src="/assets/images/faces/face3.jpg" alt="image" className="rounded-circle profile-pic"/>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1">Profile picture updated</p>
                      <p className="text-muted mb-0"> 18 Minutes ago </p>
                    </div>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0 text-center">4 new messages</p>
                </div>
              </li>
              <li className="nav-item dropdown border-left">
                <NavLink className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" to="#" data-toggle="dropdown">
                  <i className="mdi mdi-bell"></i>
                  <span className="count bg-danger"></span>
                </NavLink>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                  <h6 className="p-3 mb-0">Notifications</h6>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-calendar text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Event today</p>
                      <p className="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
                    </div>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-danger"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Settings</p>
                      <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                    </div>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-link-variant text-warning"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Launch Admin</p>
                      <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                    </div>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0 text-center">See all notifications</p>
                </div>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link" id="profileDropdown" to="#" data-toggle="dropdown">
                  <div className="navbar-profile">
                    <img className="img-xs rounded-circle" src="/assets/images/faces/face15.jpg" alt=""/>
                    <p className="mb-0 d-none d-sm-block navbar-profile-name">Henry Klein</p>
                    <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                  </div>
                </NavLink>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
                  <h6 className="p-3 mb-0">Profile</h6>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Settings</p>
                    </div>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-logout text-danger"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject mb-1">Log out</p>
                    </div>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <p className="p-3 mb-0 text-center">Advanced settings</p>
                </div>
              </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="mdi mdi-format-line-spacing"></span>
            </button>
          </div>
        </nav>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title"> Form elements </h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><NavLink to="#">Forms</NavLink></li>
                  <li className="breadcrumb-item active" aria-current="page">Form elements</li>
                </ol>
              </nav>
            </div>
            <div className="row">
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Default form</h4>
                    <p className="card-description"> Basic form layout </p>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label for="exampleInputUsername1">Username</label>
                        <input type="text" className="form-control" id="exampleInputUsername1" placeholder="Username"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputConfirmPassword1">Confirm Password</label>
                        <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password"/>
                      </div>
                      <div className="form-check form-check-flat form-check-primary">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input"/> Remember me </label>
                      </div>
                      <button type="submit" className="btn btn-primary mr-2">Submit</button>
                      <button className="btn btn-dark">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Horizontal Form</h4>
                    <p className="card-description"> Horizontal form layout </p>
                    <form className="forms-sample">
                      <div className="form-group row">
                        <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="exampleInputUsername2" placeholder="Username"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="exampleInputEmail2" className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                          <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="exampleInputMobile" className="col-sm-3 col-form-label">Mobile</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" id="exampleInputMobile" placeholder="Mobile number"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="exampleInputPassword2" className="col-sm-3 col-form-label">Password</label>
                        <div className="col-sm-9">
                          <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="exampleInputConfirmPassword2" className="col-sm-3 col-form-label">Re Password</label>
                        <div className="col-sm-9">
                          <input type="password" className="form-control" id="exampleInputConfirmPassword2" placeholder="Password"/>
                        </div>
                      </div>
                      <div className="form-check form-check-flat form-check-primary">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input"/> Remember me </label>
                      </div>
                      <button type="submit" className="btn btn-primary mr-2">Submit</button>
                      <button className="btn btn-dark">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Basic form elements</h4>
                    <p className="card-description"> Basic form elements </p>
                    <form className="forms-sample">
                      <div className="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Name"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputEmail3">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword4">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleSelectGender">Gender</label>
                        <select className="form-control" id="exampleSelectGender">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>File upload</label>
                        <input type="file" name="img[]" className="file-upload-default"/>
                        <div className="input-group col-xs-12">
                          <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image"/>
                          <span className="input-group-append">
                            <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
                          </span>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputCity1">City</label>
                        <input type="text" className="form-control" id="exampleInputCity1" placeholder="Location"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleTextarea1">Textarea</label>
                        <textarea className="form-control" id="exampleTextarea1" rows="4"></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary mr-2">Submit</button>
                      <button className="btn btn-dark">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Input size</h4>
                    <p className="card-description"> Add classNamees like <code>.form-control-lg</code> and <code>.form-control-sm</code>. </p>
                    <div className="form-group">
                      <label>Large input</label>
                      <input type="text" className="form-control form-control-lg" placeholder="Username" aria-label="Username"/>
                    </div>
                    <div className="form-group">
                      <label>Default input</label>
                      <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
                    </div>
                    <div className="form-group">
                      <label>Small input</label>
                      <input type="text" className="form-control form-control-sm" placeholder="Username" aria-label="Username"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Select size</h4>
                    <p className="card-description"> Add classNamees like <code>.form-control-lg</code> and <code>.form-control-sm</code>. </p>
                    <div className="form-group">
                      <label for="exampleFormControlSelect1">Large select</label>
                      <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect2">Default select</label>
                      <select className="form-control" id="exampleFormControlSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlSelect3">Small select</label>
                      <select className="form-control form-control-sm" id="exampleFormControlSelect3">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Basic input groups</h4>
                    <p className="card-description"> Basic bootstrap input groups </p>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">@</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-primary text-white">$</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <div className="input-group-append">
                          <span className="input-group-text">.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">$</span>
                        </div>
                        <div className="input-group-prepend">
                          <span className="input-group-text">0.00</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                          <button className="btn btn-sm btn-primary" type="button">Search</button>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>
                          <div className="dropdown-menu">
                            <NavLink className="dropdown-item" to="#">Action</NavLink>
                            <NavLink className="dropdown-item" to="#">Another action</NavLink>
                            <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                            <div role="separator" className="dropdown-divider"></div>
                            <NavLink className="dropdown-item" to="#">Separated link</NavLink>
                          </div>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with dropdown button"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Find in facebook" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div className="input-group-append">
                          <button className="btn btn-sm btn-facebook" type="button">
                            <i className="mdi mdi-facebook"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Checkbox Controls</h4>
                    <p className="card-description">Checkbox and radio controls (default appearance is in primary color)</p>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-check-input"/> Default </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" checked/> Checked </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" disabled/> Disabled </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" disabled checked/> Disabled checked </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value=""/> Default </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" checked/> Selected </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadios2" id="optionsRadios3" value="option3" disabled/> Disabled </label>
                            </div>
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="optionsRadio2" id="optionsRadios4" value="option4" disabled checked/> Selected and disabled </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card-body">
                    <p className="card-description">Add className <code>.form-check-
                         {/* {blue}  */}
                        </code> for checkbox and radio controls in theme colors</p>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-check form-check-primary">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" checked/> Primary </label>
                            </div>
                            <div className="form-check form-check-success">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" checked/> Success </label>
                            </div>
                            <div className="form-check form-check-info">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" checked/> Info </label>
                            </div>
                            <div className="form-check form-check-danger">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" checked/> Danger </label>
                            </div>
                            <div className="form-check form-check-warning">
                              <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" checked/> Warning </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <div className="form-check form-check-primary">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="ExampleRadio1" id="ExampleRadio1" checked/> Primary </label>
                            </div>
                            <div className="form-check form-check-success">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="ExampleRadio2" id="ExampleRadio2" checked/> Success </label>
                            </div>
                            <div className="form-check form-check-info">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="ExampleRadio3" id="ExampleRadio3" checked/> Info </label>
                            </div>
                            <div className="form-check form-check-danger">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="ExampleRadio4" id="ExampleRadio4" checked/> Danger </label>
                            </div>
                            <div className="form-check form-check-warning">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="ExampleRadio5" id="ExampleRadio5" checked/> Warning </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Inline forms</h4>
                    <p className="card-description"> Use the <code>.form-inline</code> className to display a series of labels, form controls, and buttons on a single horizontal row </p>
                    <form className="form-inline">
                      <label className="sr-only" for="inlineFormInputName2">Name</label>
                      <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe"/>
                      <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                      <div className="input-group mb-2 mr-sm-2">
                        <div className="input-group-prepend">
                          <div className="input-group-text">@</div>
                        </div>
                        <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"/>
                      </div>
                      <div className="form-check mx-sm-2">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" checked/> Remember me </label>
                      </div>
                      <button type="submit" className="btn btn-primary mb-2">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Horizontal Two column</h4>
                    <form className="form-sample">
                      <p className="card-description"> Personal info </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">First Name</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Last Name</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Gender</label>
                            <div className="col-sm-9">
                              <select className="form-control">
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Date of Birth</label>
                            <div className="col-sm-9">
                              <input className="form-control" placeholder="dd/mm/yyyy" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Category</label>
                            <div className="col-sm-9">
                              <select className="form-control">
                                <option>Category1</option>
                                <option>Category2</option>
                                <option>Category3</option>
                                <option>Category4</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Membership</label>
                            <div className="col-sm-4">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" value="" checked/> Free </label>
                              </div>
                            </div>
                            <div className="col-sm-5">
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2"/> Professional </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="card-description"> Address </p>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Address 1</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">State</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Address 2</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Postcode</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">City</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Country</label>
                            <div className="col-sm-9">
                              <select className="form-control">
                                <option>America</option>
                                <option>Italy</option>
                                <option>Russia</option>
                                <option>Britain</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Select 2</h4>
                    <div className="form-group">
                      <label>Single select box using select 2</label>
                      <select className="js-example-basic-single" style={{width:"100%"}}>
                        <option value="AL">Alabama</option>
                        <option value="WY">Wyoming</option>
                        <option value="AM">America</option>
                        <option value="CA">Canada</option>
                        <option value="RU">Russia</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Multiple select using select 2</label>
                      <select className="js-example-basic-multiple" multiple="multiple" style={{width:"100%"}}>
                        <option value="AL">Alabama</option>
                        <option value="WY">Wyoming</option>
                        <option value="AM">America</option>
                        <option value="CA">Canada</option>
                        <option value="RU">Russia</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Typeahead</h4>
                    <p className="card-description"> A simple suggestion engine </p>
                    <div className="form-group row">
                      <div className="col">
                        <label>Basic</label>
                        <div id="the-basics">
                          <input className="typeahead" type="text" placeholder="States of USA"/>
                        </div>
                      </div>
                      <div className="col">
                        <label>Bloodhound</label>
                        <div id="bloodhound">
                          <input className="typeahead" type="text" placeholder="States of USA"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
              <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
              <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <NavLink to="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin templates</NavLink> from Bootstrapdash.com</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
    
  
</>  )
}

export default Form