// import dynamic from 'next/dynamic';

// let DynamicHeader: any = () => <p>Loading...</p>;
// if (typeof window !== 'undefined') {
//   DynamicHeader = dynamic(() => import('dashboard/header'), {
//     loading: () => <p>Loading...</p>,
//   })
// }

const Home = () => {
  return <div>
    {/* <DynamicHeader /> */}
    <div>Host Component</div>
  </div>
}

export default Home;

