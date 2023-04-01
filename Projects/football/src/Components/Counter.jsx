import React, {useState} from 'react'
import Select from 'react-select'

function Counter() {
    const [counter1, setCounter1] = useState("0")
    const [counter2, setCounter2] = useState("0")
    const T1= [
        {value:1, label:"L.Messi", goal:'0'},
        {value:2, label:"J.Alvarez", goal:'0'},
        {value:3, label:"A.Di Maria", goal:'0'},
        {value:4, label:"R.De Paul", goal:'0'},
        {value:5, label:"E.Femandez", goal:'0'},
        {value:6, label:"A.Mac Allister", goal:'0'},
        {value:7, label:"N.Molina", goal:'0'},
        {value:8, label:"C.Romero", goal:'0'},
        {value:9, label:"N.Otamendi", goal:'0'},
        {value:10, label:"N.Tagliafico", goal:'0'},
        {value:11, label:"D.Martinez", goal:'0'}
    ];
    const T2= [
        {value:1, label:"O. Giroud", goal:'0'},
        {value:2, label:"K. Mbappe", goal:'0'},
        {value:3, label:"A. Griezmann", goal:'0'},
        {value:4, label:"O. Dembele", goal:'0'},
        {value:5, label:"A. Rabiot", goal:'0'},
        {value:6, label:"A. Tchouameni", goal:'0'},
        {value:7, label:"T. Hemandez", goal:'0'},
        {value:8, label:"D. Upamecano", goal:'0'},
        {value:9, label:"R.Varane", goal:'0'},
        {value:10, label:"J. Kounde", goal:'0'},
        {value:11, label:"H. Lloris", goal:'0'}
    ];
    let temp;
    const [team1, setTeam1] = useState([])
    const [team2, setTeam2] = useState([])
    const [t1g, setT1g]= useState([])
    const [t2g, setT2g]= useState([])
    
    const handleSelect1=(e)=>{
        if (+counter1<3) {
            setCounter1(+counter1 +1)
            temp= e.label;
            setTeam1([...team1,temp])
        }
    }
    const handleSelect2=(e)=>{
        if (+counter2<3) {
            setCounter2(+counter2 +1)
            temp= e.label;
            setTeam2([...team2,temp])
        }
    }
    const dec1=()=>{
        if(counter1>0){
            setCounter1(+counter1 -1)
            let temp1= [...team1]
            temp1.splice(counter1-1,1)
            setTeam1([...temp1])
        }
    }
    const dec2=()=>{
        if(counter2>0){
            setCounter2(+counter2 -1)
            let temp2= [...team2]
            temp2.splice(counter2-1,1)
            setTeam2([...temp2])
        }
    }
    const handleSelect3=(e)=>{
        const value= e.value;
        const text1= e
        for(var j=0;j<team1.length;j++){
            if(text1.label===team1[j]){
                e.goal= +e.goal + 1;
            }
        }
        t1g.goal=e.goal;
        if(value===1){
            setT1g([...t1g,text1])
        }
        else if(value===2){
            setT1g([...t1g,text1])
        }
        else if(value===3){
            setT1g([...t1g,text1])
        }
        else if(value===4){
            setT1g([...t1g,text1])
        }
        else if(value===5){
            setT1g([...t1g,text1])
        }
        else if(value===6){
            setT1g([...t1g,text1])
        }
        else if(value===7){
            setT1g([...t1g,text1])
        }
        else if(value===8){
            setT1g([...t1g,text1])
        }
        else if(value===9){
            setT1g([...t1g,text1])
        }
        else if(value===10){
            setT1g([...t1g,text1])
        }
        else{
            setT1g([...t1g,text1])
        }
    }
    const handleSelect4=(e)=>{
        const value2= e.value;
        const text2= e
        for(var j=0;j<team2.length;j++){
            if(text2.label===team2[j]){
                e.goal= +e.goal + 1;
            }
        }
            t2g.goal=e.goal;
        if(value2===1){
            setT2g([...t2g,text2])
        }
        else if(value2===2){
            setT2g([...t2g,text2])
        }
        else if(value2===3){
            setT2g([...t2g,text2])
        }
        else if(value2===4){
            setT2g([...t2g,text2])
        }
        else if(value2===5){
            setT2g([...t2g,text2])
        }
        else if(value2===6){
            setT2g([...t2g,text2])
        }
        else if(value2===7){
            setT2g([...t2g,text2])
        }
        else if(value2===8){
            setT2g([...t2g,text2])
        }
        else if(value2===9){
            setT2g([...t2g,text2])
        }
        else if(value2===10){
            setT2g([...t2g,text2])
        }
        else{
            setT2g([...t2g,text2])
        }
    }
  return (
      <div>
        <div className='d-flex flex-wrap justify-content-center m-4'>
            <div className='mx-5'><h1>{counter1}</h1></div>
            <div className='mx-5'><h1>-</h1></div>
            <div className='mx-5'><h1>{counter2}</h1></div>
        </div>
        <div className='d-flex flex-wrap justify-content-around m-2'>
            <div className='d-flex flex-wrap justify-content-center'>
                <div><button className='mx-2' onClick={dec1}>-</button></div>
                <Select options={T1} onChange={(e)=>{handleSelect1(e)}}></Select>
            </div>
            <div className='d-flex flex-wrap justify-content-center'>
                <div><button className='mx-2' onClick={dec2}>-</button></div>
                <Select  options={T2} onChange={(e)=>{handleSelect2(e)}}></Select>
            </div>
        </div>
        <div className='d-flex flex-wrap justify-content-around'>
            <div>
            </div>
            <div>
            </div>
        </div>
        <h3>Goals</h3>
        <div className='d-flex justify-content-around'>
            <div className='w-50'>
                <h5>Argentina</h5>
                <hr />
                <div>
                    <ul type='none'>
                        {
                            team1.map((team1,i1)=>{
                                return <li key={team1+i1}>
                                    <div className='d-flex flex-wrap justify-content-around'>
                                        {temp!==" "? team1+" scored a goal":''}
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='w-50 ms-2'>
                <h5>France</h5>
                <hr />
                <div>
                    <ul type='none'>
                        {
                            team2.map((team2,i2)=>{
                                return <li key={team2+i2}>
                                    <div className='d-flex flex-wrap justify-content-around'>
                                        <div>{team2+" scored a goal"}</div>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        <h3>Goals Info</h3>
        <div className='d-flex flex-wrap justify-content-around'>
            <div>
                <Select options={T1} onChange={(e)=>{handleSelect3(e)}}></Select>
            </div>
            <div>
                <Select  options={T2} onChange={(e)=>{handleSelect4(e)}}></Select>
            </div>
        </div>
        <div className='d-flex justify-content-around'>
            <div className='w-50'>
                <h5>Argentina</h5>
                <hr />
                <div>
                    <ul type='none'>
                        {
                            t1g.map((t1g,i1)=>{
                                return <li key={t1g+i1}>
                                    <div className='d-flex flex-wrap justify-content-around'>
                                        {t1g.label+" scored "+t1g.goal+" goals"}
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='w-50 ms-2'>
                <h5>France</h5>
                <hr />
                <div>
                    <ul type='none'>
                        {
                            t2g.map((t2g,i1)=>{
                                return <li key={t2g+i1}>
                                    <div className='d-flex flex-wrap justify-content-around'>
                                        {t2g.label+" scored "+t2g.goal+" goals"}
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter