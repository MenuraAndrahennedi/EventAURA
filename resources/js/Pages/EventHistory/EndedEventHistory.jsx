import React from 'react'
import { Link } from '@inertiajs/react';
import HeadBar from '../../Components/HeadBar/EventHistoryHeadBar';
import '../../../css/TablePages.scss';
import AdminFooter from './../../Components/Footer/ManagerFooter';
import UserHeader from './../../Components/Header/UserHeader';


const EndedEventHistory = () => {
  return (
    <>
            <header>
                <UserHeader />
            </header>

            <main className='main-box'>

                <h1><b>EVENT HISTORY</b></h1>
                <div className='main-table'>
                    <HeadBar />
                    <div className="table-container">
                        <table className="history-table striped-table">
                            <thead>
                                <tr>
                                    <th>Event Name</th>
                                    <th>Event Date</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>hell</td>
                                    <td>hello</td>


                                    <td>
                                        <Link to="#" className="blue-button">
                                            Event Report
                                        </Link>
                                    </td>

                                </tr>
                                <tr>
                                    <td>hello1</td>
                                    <td>hello1</td>

                                    <td>
                                        <Link to="#" className="blue-button">
                                            Event Report
                                        </Link>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>



            </main>



            <footer>
                <AdminFooter />
            </footer>
        </>


  )
}

export default EndedEventHistory