import React from 'react';
import profilelogo from '../../../assets/Logos/Profile-logo.jpg';
import TBHeader from './../../../Components/Header/TBHeader';
import TBSidebar from './TBSidebar';
import SubFooter from './../../../Components/Footer/SubFooter';
import '../profile.scss';
import { usePage } from '@inertiajs/react';

const TBPurchaseHistory = () => {
     const { user,purchases } = usePage().props; 
    // console.log(purchases);

    return (
        <>
            <header>
                <TBHeader />
            </header>

            <main>
                <div className="container my-5">
                    <div className="border-0 shadow card">
                        <div className="text-center card-body">
                            <h1><b>Hi {user.name }!</b></h1>
                            <h4><b>Welcome to Your Purchase History</b></h4>
                            <img 
                                src={user.avatar ? `/storage/${user.avatar}` : profilelogo} 
                                alt="Avatar" 
                                className="profile-avatar" 
                                style={{ display: 'block', margin: '0 auto' }}
                            />                
                        </div>
                    </div>

                    <div className="mt-4 row">
                        <div className="col-md-3">
                            <TBSidebar />
                        </div>
                        <div className="col-md-9">
                            <div className="border-0 shadow card">
                                <div className="card-body profile-details">
                                    <h5 className="text-center"><b>Purchase History</b></h5>
                                    <p className="text-center">@{user.name}</p>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Event Name</th>
                                                <th>Golden Tickets</th>
                                                <th>Silver Tickets</th>
                                                <th>Bronze Tickets</th>
                                                <th>Payment Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                purchases.length >= 0 ? (
                                                    purchases.map((purchase, index) => (
                                                        <tr key={index}>
                                                            <td>{ purchase.event_name || " "}</td>
                                                            <td>{purchase.golden_tickets || 0}</td>
                                                            <td>{purchase.silver_tickets || 0}</td>
                                                            <td>{purchase.bronze_tickets || 0}</td>
                                                            <td>{purchase.amount} {purchase.currency}</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="5" className="text-center">No purchases found</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <SubFooter />
            </footer>
        </>
    );
}

export default TBPurchaseHistory;
