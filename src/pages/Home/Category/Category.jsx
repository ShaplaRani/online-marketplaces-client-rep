import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [allCategory , setAllCategory] = useState([]);
    const [categoryDate , setCategoryDate] = useState([])
    useEffect(() => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setAllCategory(data))
    },[])
    console.log(allCategory);

    const handleCategory = category => {
        console.log(category);
        const sameCategory = allCategory.filter(data => data.category === category)
        setCategoryDate(sameCategory);
    }
console.log(categoryDate);
    return (
        <div className='container mx-auto my-20'>
              <h2 className='text-center mb-6 text-3xl font-extrabold text-blue-600'>Browse talent by category</h2>
             <Tabs>
    <TabList className="text-center  flex mb-10 justify-center">
      <Tab onClick={() =>handleCategory('web development')}className=" py-6 px-10 focus:bg-white bg-gray-200 border font-bold text-xl capitalize focus:text-emerald-400">web development</Tab>
      <Tab onClick={() =>handleCategory('Digital Marketing')} className=" py-6 px-10 focus:bg-white bg-gray-200 border capitalize text-xl font-bold focus:text-emerald-400">digital marketing</Tab>
      <Tab onClick={() =>handleCategory('graphics design')}className=" py-6 px-10 focus:bg-white bg-gray-200 border  font-bold text-xl capitalize focus:text-emerald-400">graphics design</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
      <h3>graphics design</h3>
       <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 gap-4'>
          {
            categoryDate.length >= 0 && categoryDate.map(category => <CategoryCard key={category.id} category ={category}></CategoryCard>)
          }
       </div>
    </TabPanel>
    <TabPanel >
      <h2>Any content 2</h2>
      <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 gap-4'>
          {
            categoryDate.length >= 0 && categoryDate.map(category => <CategoryCard key={category.id} category ={category}></CategoryCard>)
          }
       </div>
    </TabPanel>
    <TabPanel >
      <h2>Any content 3</h2>
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