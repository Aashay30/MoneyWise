// to have page routing i.e ROUTE GROUPS we have created the foder with parenthesis

import HeaderBox from '@/components/HeaderBox'
import React from 'react'

const Home = () => {

    const loggedIn = { firstName: 'Aashay' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox
                type = "greeting"
                title = "Welcome"
                user = {loggedIn?.firstName || 'Guest'}
                subtext = "Access and manage your account and transactions efficiently."
            />
        </header>
      </div>
    </section>
  )
}

export default Home
