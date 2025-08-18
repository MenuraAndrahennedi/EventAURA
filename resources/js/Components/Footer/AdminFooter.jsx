import React from 'react'
import '../../../css/style.scss';
const AdminFooter = () => {
  return (
    <>
    <footer className="admin-footer">
     <div className="container">
        
        {/*  align content horizontally and vertically */}
        <div className="row justify-content-center align-items-center">{/* Row to align content horizontally and vertically */}
          
          <div className="col-auto mx-5">
            <h5>© 2025 EventAURA</h5>
          </div>

          <div className="col-auto mx-5">
            <h5>© 2025 CODECATALYSTS</h5>
          </div>
          
        </div>
      </div>
     </footer>
    </>
  )
}

export default AdminFooter
