import React,{Component} from 'react';
import '../AdminCss/admintecherrecord.css';
import {Link} from 'react-router-dom';
import {Col} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { MDBDataTable } from 'mdbreact';
import 'styled-components/dist/styled-components';
import SideNavbar from '../../SideNavMenu';





class AdminTeacherRecord extends Component{

    
   
    constructor(props){
        super(props);
        
        this.state={
            teachers:[],
            rows:[]
        }
    }

    
    
    componentDidMount(){
        const teacher_url = "https://jsonplaceholder.typicode.com/posts";
        
        fetch(teacher_url,{
            method:"GET"
        })
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                this.setState({
                    teachers : data
                },()=>{
                    let teachers=this.state.teachers;
                 teachers.map((teachers)=>{
                    this.state.rows.push({
                        teacher_name:this.state.teachers.userId,
                        subject_name:this.state.teachers.id,
                        teacher_ph_no:this.state.teachers.userId
                    })
                 })   
                })
            })
    }
    render() {

        const data = {
            columns: [
              {
                label: 'Name',
                field: 'teacher_name',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Subject',
                field: 'subject_name',
                sort: 'asc',
                width: 270
              },
              {
                label: 'Phone No',
                field: 'teacher_ph_no',
                sort: 'asc',
                width: 200
              },
              {
                label: 'Profile',
                field: 'teacher_profile',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Delete',
                field: 'delete',
                sort: 'asc',
                width: 150
              },
              
            ],
            
            rows: [
                

                {
                    
                    teacher_name:this.state.teachers.userId,
                    subject_name:this.state.teachers.id,
                    teacher_ph_no:this.state.teachers.userId,
                    teacher_profile:<Link to={{
                        pathname: '/adminteacherprofile',
                        state:this.props.original
                    }}>
                        
                    </Link>

                },
            ]
          };


      
        // const columns = [
        //     {
        //         Header: "Name",
        //         accessor: "teacher_name",
        //         Filter: ({ filter, onChange }) => (
        //             <input placeholder="Search User"
        //                 onChange={event => onChange(event.target.value)}
        //                 value={filter ? filter.value : ''}
        //             />
        //         ),
        //     },
        //     {
        //         Header: "Subject",
        //         accessor: "subject_name",
        //         filterable: true,
        //         Filter: ({ filter, onChange }) => (
        //             <input placeholder="Search Name"
        //                 onChange={event => onChange(event.target.value)}
        //                 value={filter ? filter.value : ''}
        //             />
        //         ),

        //     },
        //     {
        //         Header: "Phone NO:",
        //         accessor: "teacher_phone",
        //         Filter: ({ filter, onChange }) => (
        //             <input placeholder="Search Subject"
        //                 onChange={event => onChange(event.target.value)}
        //                 value={filter ? filter.value : ''}
        //             />
        //         ),
        //     },
        //     {
        //         Header: "Profile",
        //         Cell: props => {
        //             return (
        //                 <Link to={{
        //                     pathname : '/adminteacherprofile',
        //                     state: props.original
        //                 }}>
        //                     <button class='btn btn-primary'>See Profile</button>
        //                 </Link>
        //             )
        //         },
        //         style: {
        //             textAlign: 'center'
        //         },
        //         width: 150,
        //         filterable: false
        //     },
        //     {
        //         Header: 'Delete',
        //         Cell: props => {
        //             return (
        //                 <button class='btn btn-danger'>Delete</button>
        //             )
        //         },
        //         style: {
        //             textAlign: 'center'
        //         },
        //         width: 150,
        //         filterable: false
        //     }
        // ]
        return(
          <div>
             <SideNavbar/>
             <div style={{paddingTop:'40px',paddingLeft:'60px',paddingRight:'20px'}}>
             <div class='row '>
                <div class='col-xl-8'>
                    <p class='text' >Teacher Records</p>
                </div>
                <div class='col-xl-4' > 
                <div style={{textAlign:'right',paddingRight:'10px', paddingTop:'10px' }}>
                  <Link to='adminaddteacher'>  
                  <button class='btn btn-primary' >Add Teacher</button></Link>
                </div>
                </div>
                </div>
            
           <div class='col-l-12 reacttable' >  


           <MDBDataTable
      striped
      hover
      data={data}
    />

    
{/*            
               <ReactTable 
               columns={columns}
               data={this.state.teachers}
               filterable
               defaultPageSize={10}
               noDataText={'Please Wait'}
               >
               </ReactTable> */}
               </div>
               </div>
             </div>
        )
    }
}



export default AdminTeacherRecord;