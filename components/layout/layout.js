import MainHeader from './main-header'

const Layout = (props) => {
  console.log('🤖💬 ~ layout ~ props:', props);
  return (
    <>
      <MainHeader />
      <main>
        {props.children}
      </main>
    </>
  )
}

export default Layout