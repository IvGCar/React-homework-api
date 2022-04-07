import React from 'react';
import useUser from '../Hooks/useUser'
import Navbar from './Navbar';

export default function UserCard() {
    const { name, subscriptionType } = useUser();
  return (
      <>
      <Navbar brand='Home'></Navbar>
        <div className='container mt-4'>
            <div className='card bg-card'>
                <div className='card-header'><h2>User info</h2></div>
                <div className='card-body'>
                    <section className='row'>
                        <section className='col-11'>
                            <h5 className='card-title text-primary'>
                                {name.first}
                            </h5>
                            <h6 className='card-subtitle text-secondary'>
                                {name.last}
                            </h6>
                            <h5 className='mt-4'>User Type:</h5>
                            <h6>{subscriptionType}</h6>
                        </section>                       
                    </section>
                </div>
            </div>
        </div>
      </>
  )
}