import React,{useEffect, Fragment} from 'react';
import {isAuthenticated} from '../auth';
import {checkexams, checkfirstca, checksecondca, checkgrade} from '../js';
import logo from '../images/logo.png';

const Checkresult= () => {
    
   
    const flexchild = {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    }
    const flexcontainer ={
        margin: "10%"

    }
    
    //add the session in form
    useEffect(()=>{
       let select= document.querySelector('#session');
       let year = new Date().getFullYear();
       for(let i=year - 3; i <= year ; i++){
           let option = document.createElement('option');
           option.value= option.innerHTML = i + "/" + (i + 1);
           if(i === year){
               option.selected= true;
           }
           select.appendChild(option);

       }

    },[]);
    //first ca
  
    //console.log(firstcas);
    const caresult= (cas, examterm, examsession, examsubject) => {
      for(let i = 0; i < cas.length; i++ )
      {
        if(cas[i].term === examterm && cas[i].session === examsession && cas[i].subject === examsubject)
        {
          return cas[i].score;

        }
        

      }
      
    };
    //assign grade
    const assigngrade= (grade, total) => {
      for(let i = 0; i < grade.length; i++ )
      {
        if(total >= grade[i].minscore   && grade[i].maxscore >= total)
        {
          return grade[i].grade;

        }
        

      }
      
    };
    
    //handle form submission
    const clickSubmit=async (event)=>{
        event.preventDefault();
        let formdiv = document.querySelector('.form');
        let resultdiv = document.querySelector('.result');
        let session= document.querySelector('#session').value;
        let term= document.querySelector('#term').value;
        let regnumber = await isAuthenticated().user.regnumber;
        let {exams,error} = await checkexams({session, regnumber, term});
        let {firstcas} =await checkfirstca({session, regnumber, term});
        let {secondcas} =await checksecondca({session, regnumber, term});
        let {grade} = await checkgrade();
        let insertresult = document.querySelector('.table-bordered');
        exams.forEach((exam) => {
          let firstca = caresult(firstcas,exam.term, exam.session, exam.subject);
          let secondca = caresult(secondcas,exam.term, exam.session, exam.subject);
          let total= firstca + secondca + exam.score;
          let grades = assigngrade(grade, total );
         let html =`<tr>
         <td>${exam.subject}</td>
         <td>${firstca}</td>
         <td>${secondca}</td>
         <td>${exam.score}</td>
         <td>${total}</td>
         <td>${grades}</td>
    </tr>`;
    insertresult.insertAdjacentHTML('beforeend', html);

        });
        
        if(error)
        {
          

        }
        else{
          formdiv.classList.remove("displayblock");
          formdiv.classList.add("displaynone");
          //display the form to hidden
          resultdiv.classList.remove("displaynone");
          resultdiv.classList.add("displayblock");
          //load result
        }

    }
    //form to check result
    const resultform = () =>(
      <form  >
  
    
    <div style={flexchild} className="form-group row">
      <label for="session" className="col-sm-2 col-form-label">Session</label>
      <div className="col-sm-4">
      <select className="form-control" id="session">

      </select>
      </div>
    </div>
    <div style={flexchild} className="form-group row">
      <label for="term" className="col-sm-2 col-form-label">Term</label>
      <div className="col-sm-4">
      <select className="form-control" id="term">
        <option value="1">First Term</option>
        <option value="2">Second Term</option>
        <option value="3">Third Term</option>
      </select>
      </div>
    </div>


    <div style={flexchild} className="form-group row">
      <div className="col-sm-6">
        <button onClick={clickSubmit} name="submit" type="submit" style={{background: "tomato", color: "#fff", border: "0", padding: "15px 50px", borderRadius: "40px", fontFamily: "poppins", fontSize: "16px", textTransform:"uppercase"}}>Submit</button>
      </div>
      
    </div>
   
    
</form>

    );
    //result
    const resultsheet = () =>(
      <Fragment>

      
<div className="row"> 
      <div className="col-xs-4">
      <img style={{width: "100px", borderRadius: "50%"}} src={logo} alt=""/>
      
         
      </div>
      <div className="col-xs-8">
        
     <h1 style={{fontWeight:"bold",fontSize: "20px", textAlign:"center"}}>DANBO INTERNATIONAL PRIMARY SCHOOL, KADUNA</h1>
     <p className="text-center">
     28 Kubani Crescent off Challenge, P.O. Box 4296 Barnawa, Kaduna South, Kaduna<br/>www.danboschools.com</p>
     
   </div>
   </div>
  
   <div className="row" style={{marginTop: "10px", background:"grey", display: "flex", justifyContent: "center"}}>
               
                <div className="col-xs-12" style={{fontWeight: "bold",fontSize: "15px"}}>

                    
                         FIRST TERM

                   
                     
                </div>
</div>

<div className="row">
     <div className="col-sm"><span className="text-uppercase" style={{fontWeight: "bold"}}>Student Name:</span><br/>Malachi Egbugha</div>
     <div className="col-sm"><span className="text-uppercase" style={{fontWeight: "bold"}}>Batch:</span><br/>Year 3</div>
     <div className="col-sm"><span className="text-uppercase " style={{fontWeight: "bold"}}>Admin No:</span><br/>234567</div>
     <div className="col-sm"><span className="text-uppercase " style={{fontWeight: "bold"}}>DOB:</span><br/>8th AUgust, 2020</div>
</div>




     
     <div className="row" style={{marginTop: "20px"}}>
          <table className="table table-bordered">
               <tr className="thead-dark">
                    <th colspan="3">Scholastic Areas</th>
                    <th colspan="3">First Term</th>
                    
                    
               </tr>
               <tr>
                    <td>Subjects</td>
                    <td>1st C.A.<br/>(20)</td>
                    <td>2nd C.A.<br/>(20)</td>
                    <td>EXAM<br/>(60)</td>
                    <td>1ST TERM REPORT<br/>(100)</td>
                    <td>GRADE</td>
               </tr>
               
               
               
          </table>
     </div>

     </Fragment>

    )

    return (
        <div >
          <div className="form" style={flexcontainer}>
          {resultform()}
          </div>
          <div className="result displaynone" style={{margin: "2% 8%"}}>
            
          {resultsheet()}
          </div>
            
        </div>
    )
}

export default Checkresult;