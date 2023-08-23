import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Home Page</h1>
      <p>
        <Link to={routes.admin()}>Admin</Link>
      </p>
    </>
  )
}

export default HomePage
