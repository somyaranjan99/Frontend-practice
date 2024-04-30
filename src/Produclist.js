import React,{useState,useEffect} from 'react'
import {items} from './Item';
const Produclist = () => {
  const [allItem,setAllitem]=useState(items);
  const [filttered,setFiltered] = useState([]);
  const [category,setCategory]=useState([]);

  useEffect(()=>{
    let mp=new Set()
    for(let item of allItem){
        mp.add(item.category)
    }
    setCategory([...mp])
  },[]);
  useEffect(()=>{
    if(filttered.length){
        const filterItem= items.filter((item)=>{
            return filttered.includes(item.category)
        })
       setAllitem(filterItem)
    }else{
        setAllitem(items)
    }
  },[filttered])
  const handleFilter=(e)=>{
    const ele= e.target.innerText;
    if(!filttered.includes(ele)){
        setFiltered([...filttered,ele])
    }else{
        const removeFilter=filttered.filter(cat=>cat !== ele);
        setFiltered(removeFilter)
    }
  }

  return (
    <div className='conatiner'>
        <div className='btn__container'>
        {category.map((cat)=>(<button key={cat} className={`btn__item ${filttered.includes(cat) ? 'selected' : ''}`} onClick={handleFilter} >{cat}</button>))}
        </div>
        <div className='product__container'>
         {allItem?.length &&  allItem.map((item,index)=>{
            return (
                < div className='item' key={index}>
               <div className=''>{item.category}/</div>
                <div className=''>{item.name}</div>
                </div>
            )
         }) }
        </div>
    </div>
  )
}

export default Produclist