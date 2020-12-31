import React from 'react';


const StudentDashboard= () => {
    return (
        <div class="main__container">
                <div class="main__title">
                    <img src="assets/banner.jpg" alt=""/>
                    <div class="main__greeting">
                        <h1>Hello Codersbite</h1>
                        <p>Welcome to your admin</p>
                    </div>
                </div>

                <hr class="main__cards"/>
                
                    

          


            <div class="charts">
                <div class="charts__left">
                    <div class="charts__left__title">
                    <div>
                        <h1>Daily Reports</h1>
                        <p>Cupertino, califonia, USA</p>
                    </div>
                    <i class="fa fa-usd"></i>
                </div>
                <div id="apex1"></div>
                </div>
                <div class="charts__right">
                    <div class="charts__right__title">
                        <div>
                            <h1>Stats Reports</h1>
                            <p>Cupertino, califonia, USA</p>
                        </div>
                        <i class="fa fa-usd"></i>
                    </div>
                    <div class="charts__right__cards">
                        <div class="card1">
                            <h1>Income</h1>
                            <p>$75,300</p>
                        </div>

                        <div class="card2">
                            <h1>Sales</h1>
                            <p>$124,000</p>
                        </div>

                        <div class="card3">
                            <h1>Users</h1>
                            <p>$39000</p>
                        </div>

                        <div class="card4">
                            <h1>Orders</h1>
                            <p>$1881</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default StudentDashboard;