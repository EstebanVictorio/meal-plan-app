import Navbar from 'component/navigation/navbar'

const Main = ({children}) => 
<div>
    <Navbar/>
    {children}
</div>

export default Main