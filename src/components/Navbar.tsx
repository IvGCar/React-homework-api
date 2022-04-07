import React from 'react'

const Navbar = (NavProps: {brand: string}) => {

  const [titleBrand, setBrand] = React.useState('')
  React.useEffect(()=>{
    setBrand(NavProps.brand)
  }, [titleBrand])

  return (
    <nav className='nav-bar navbar-dark nav-bg-custom py-2 px-4'>
      <div className='container'>
        <a href="/" className='navbar-brand btn nav-link-custom text-black'>{titleBrand}</a>
        <a href="/user" className='btn nav-link-custom text-black text-end'>My User Info</a>
      </div>
    </nav>
  )
}

export default Navbar