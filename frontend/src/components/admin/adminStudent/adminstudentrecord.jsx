import React, { Component } from 'react';
import '../AdminCss/studentrecrod.css';
import { Link } from 'react-router-dom';
import 'jquery-ui-bundle';
import $ from 'jquery';
import DataTable from 'react-data-components/lib/DataTable';
import'react-data-components/css/table-twbs.css';
import Navbar from '../../SideNavMenu';


class StudentRecord extends Component {

    

    constructor(props) {
        super(props);

        this.state = {
            students: [],
            
        }
    }

    componentDidMount() {

        //Fetch Students data from API
        const studentURL = "https://jsonplaceholder.typicode.com/posts";

        fetch(studentURL)
            .then((response) => {
                return response.json();
            })
            .then((allStudentsData) => {
                this.setState({
                    students: allStudentsData
                }, () => {
                    console.log(this.state.students);
                })
            });

    }

    editEventHandler = (obj) => {
        console.log('Edit Event', obj)
    }
    deleteEventHandler = (obj) => {
        console.log('Data : ', obj);
        const delete_student_url = 'http://localhost:8000/students/deleteStudent/' + obj.student_id;
        fetch(delete_student_url, {
            method: 'DELETE',
        })
            .then(() => {
                console.log('Delete Success');
                // window.location.reload();
            })
    }
    render() {

        
        const columns=[
            {title:'Name', prop:'title'} ,
            {title:'Student', prop:'userId'},
            {title:'Ggez', prop: 'userId'},
        ]
        
        // const columns=[
        //     {
        //         Header : 'Roll NO',
        //         accessor : 'student_roll_no',
        //     },
        //     {
        //         Header : 'Student Name',
        //         accessor : 'student_name'
        //     },
        //     {
        //         Header : 'Student Year',
        //         accessor : 'student_year'
        //     },
        //     {
        //         Header : 'Edit Student',
        //         Cell : props =><Link to={{
        //             pathname:'/adminstudentprofile',
        //             state : props.original
        //         }}>
        //             <button
        //             onClick={()=>this.editEventHandler(props.original)} 
        //             className='btn btn-info w-75 ml-4'>
        //             Edit
        //         </button>
        //         </Link>
        //     },
        //     {
        //         Header : 'Delete Student',
        //         Cell : props => <button 
        //             onClick={()=>this.deleteEventHandler(props.original)}
        //             className='btn btn-danger w-75 ml-4'>
        //             Delete
        //         </button>
        //     }
        // ]
        return (
            <div>
                <Navbar />

                <div style={{ paddingTop: '40px', paddingLeft: '60px', paddingRight: '20px' }}>
                    <div className='row '>
                        <div className='col-xl-8'>
                            <p className='text' >Student Records</p>
                        </div>
                        <div className='col-xl-4' >
                            <div style={{ textAlign: 'right', paddingRight: '10px', paddingTop: '10px' }}>
                                <Link to='adminaddstudent'>
                                    <button className='btn btn-primary' >Add Student</button></Link>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12 reacttable' >
                 
                    <DataTable
                    
      keys="id"
      columns={columns}
      initialData={this.state.students}
      initialPageLength={5}
      initialSortBy={{ prop: 'userId', order: 'descending' }}
      pageLengthOptions={[ 5, 20, 50 ]}
    >
        </DataTable>
       

                      
                    </div>
                </div>
            </div>
        )
    }
}



export default StudentRecord;