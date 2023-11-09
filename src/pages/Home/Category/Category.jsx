import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [allCategory , setAllCategory] = useState([]);
    const [categoryDate , setCategoryDate] = useState([])

    // useEffect(() => {
    //     fetch('https://online-marketplaces-server.vercel.app/api/category-product')
    //     .then(res => res.json())
    //     .then(data => setAllCategory(data))
    // },[])
    useEffect(() => {
        fetch('https://online-marketplaces-server.vercel.app/api/category-product')
        .then(res => res.json())
        .then(data => {
          setAllCategory(data);
      const webCategory = data.filter(data => data.category.toLowerCase() === 'Web Development'.toLowerCase())
          setCategoryDate(webCategory);
        })
    },[])


    console.log(allCategory);

    const handleCategory = category => {
        console.log(category);
        const sameCategory = allCategory.filter(data => data.category.toLowerCase() === category.toLowerCase())
        setCategoryDate(sameCategory);
    }
console.log(categoryDate);
    return (
        <div className='container mx-auto my-20 p-5'>
              <h2 className='text-center mb-6 text-2xl md:text-3xl font-extrabold text-blue-600'>Browse talent by category</h2>
             <Tabs>
    <TabList className="text-center  flex mb-20 justify-center">
      <Tab onClick={() =>handleCategory('Web Development')}className=" py-6 rounded-l-xl px-2 md:px-4 lg:px-10 focus:bg-white bg-gray-200 border font-bold text-lg md:text-xl capitalize focus:text-emerald-400">web development</Tab>
      <Tab onClick={() =>handleCategory('Digital Marketing')} className=" py-6 px-2 md:px-4 lg:px-10 focus:bg-white bg-gray-200 border capitalize text-lg md:text-xl font-bold focus:text-emerald-400">digital marketing</Tab>

      <Tab onClick={() =>handleCategory('Graphics Design')}className=" px-2 py-6 md:px-4 lg:px-10 rounded-r-xl focus:bg-white bg-gray-200 border  font-bold text-lg md:text-xl capitalize focus:text-emerald-400">graphics design</Tab>

    </TabList>

    <TabPanel>
      
       <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 gap-4 '>
          {
            categoryDate.length >= 0 && categoryDate.map(category => <CategoryCard key={category.id} category ={category}></CategoryCard>)
          }
       </div>
    </TabPanel>
    <TabPanel >
      
      <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 gap-4'>
          {
            categoryDate.length >= 0 && categoryDate.map(category => <CategoryCard key={category._id} category ={category}></CategoryCard>)
          }
       </div>
    </TabPanel>
    <TabPanel >
     
      <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 gap-4'>
          {
            categoryDate.length >= 0 && categoryDate.map(category => <CategoryCard key={category.id} category ={category}></CategoryCard>)
          }
       </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Category;