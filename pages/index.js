import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import ProfileCard from '../components/ProfileCard'
import Link from 'next/link'
import SearchBar from '../components/SearchBar'
import Catalog from '../components/Catalog'
import { useState } from 'react'
import FilterBar from '../components/FilterBar'

const LinkA = ({ children, href }) =>
  <Link href={href}>
    <a className='pl-4 block pr-4 underline hover:text-white'>{children}</a>
  </Link>

function Home () {
  // set required to true to force the page to require login.
  // const { user, loading } = useFetchUser({ required: false })
  let [ searchQuery, setSearchQuery ] = useState("")
  let [facultyValue, setFacultyOption] = useState("");
  let [stageValue, setStageOption] = useState("");
  let [yearValue, setYearOption] = useState("");

  return (
    <Layout>
      <h1>Page heading</h1>
      <p>Interesting content here</p>
      <SearchBar setValue={setSearchQuery}></SearchBar>
      <FilterBar setFacultyValue={setFacultyOption} setStageValue={setStageOption} setYearValue={setYearOption}></FilterBar>
      <p>{searchQuery}</p>
      <Catalog searchValue={searchQuery} facultyValue={facultyValue} stageValue={stageValue} yearValue={yearValue}></Catalog>




      {/* {loading && <p>Loading login info...</p>}
      {!loading && !user && (
        <>
          <p>
            To view the dashboard <a href='/api/login'>Login</a>
          </p>
        </>
      )}
      {user && (
        <>
          <ProfileCard user={user}>
            <button className='btn-blue' onClick={handleClick}>Event</button>
          </ProfileCard>
          <h2>Reports</h2>
          <LinkA href='/report'>Report - useEffect</LinkA>
          <LinkA href='/reportSSR'>Report - SSR</LinkA>
          <LinkA href='/reportSWR'>Report - SWR</LinkA>

        </>)} */}
    </Layout>
  )
}

export default Home
